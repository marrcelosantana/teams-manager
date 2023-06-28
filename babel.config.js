module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "inline-dotenv",
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@app": "./src/app",
            "@components": "./src/components",
            "@contexts": "./src/contexts",
            "@models": "./src/models",
            "@hooks": "./src/hooks",
            "@routes": "./src/routes",
            "@services": "./src/services",
            "@screens": "./src/screens",
            "@storage": "./src/storage",
            "@themes": "./src/themes",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
