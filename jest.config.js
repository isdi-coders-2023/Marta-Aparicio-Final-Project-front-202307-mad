/** @type {import('ts-jest').JestConfigWithTsJest} */

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['dist'],
  resolver: 'jest-ts-webcompat-resolver',
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: ['src/**/*.tsx', 'src/**/*.ts'],
  coveragePathIgnorePatterns: [
    'src/recipies/redux/recipes.thunk.ts',
    'src/recipies/redux/recipes.slice.ts',
    'index.html',
    'src/app/App.tsx',
    'main.tsx',
    'logged.ts',
    'token.ts',
    'id.ts',
    'user.model.ts',
    'recipies.model.ts',
    'vite-env.d.ts',
  ],
};
