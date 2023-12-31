import { createContext, ReactNode, useEffect, useState } from "react";

import * as AuthSession from "expo-auth-session";
import * as AppleAuthentication from "expo-apple-authentication";

import { UserDTO } from "src/models/UserDTO";

import {
  storageUserCreate,
  storageUserGet,
  storageUserRemove,
} from "@storage/storageUser";

export type AuthContextProps = {
  user: UserDTO;
  signInWithGoogle: () => Promise<void>;
  signInWithApple: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

interface AuthorizationResponse {
  params: {
    access_token: string;
  };
  type: string;
}

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  async function signInWithGoogle() {
    try {
      const { CLIENT_ID } = process.env;
      const { REDIRECT_URI } = process.env;

      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI("profile email");

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { params, type } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );
        const userInfo = await response.json();

        setUser({
          id: userInfo.id,
          name: userInfo.name,
          given_name: userInfo.given_name,
          email: userInfo.email,
          picture: userInfo.picture,
        });

        await storageUserCreate(userInfo);
      }
    } catch (error) {
      throw error;
    }
  }

  async function signInWithApple() {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });

      if (credential) {
        const name = credential.fullName!.givenName!;
        const picture = `https://ui-avatars.com/api/?name=${name}&lenght=1`;

        const userInfo = {
          id: String(credential.user),
          email: credential.email!,
          name,
          picture,
        };

        setUser(userInfo);
        await storageUserCreate(userInfo);
      }
    } catch (error) {
      throw error;
    }
  }

  async function signOut() {
    try {
      await storageUserRemove();
      setUser({} as UserDTO);
    } catch (error) {
      throw error;
    }
  }

  async function loadUser() {
    try {
      const response = await storageUserGet();
      setUser(response);
    } catch (error) {
      throw error;
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signInWithGoogle, signInWithApple, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
