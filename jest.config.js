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
    'index.html',
    'app.tsx',
    'main.tsx',
    'logged.ts',
    'token.ts',
    'id.ts',
    'user.model.ts',
    'recipies.model.ts',
    'vite-env.d.ts',
  ],
};
