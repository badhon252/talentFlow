module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  testPathIgnorePatterns: ["/node_modules/", "/.history/"],
};
