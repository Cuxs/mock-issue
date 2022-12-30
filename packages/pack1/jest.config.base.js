/* *****************************************************************
 *
 * Persefoni AI Inc. | https://persefoni.com
 * Copyright (c) 2022 | All rights reserved. | Proprietary & Confidential
 * Source Code is the exclusive Trade Secret of Persefoni.
 * Unauthorized use outside of Persefoni is strictly prohibited.
 * No third party, personal, or Open Source Software included.
 *
 *
 *
 ***************************************************************** */

const baseJestConfig = {
  rootDir: '.',
  clearMocks: true,
  injectGlobals: true,
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
    '^mocks/(.*)': '<rootDir>/mocks/$1',
    '^types/(.*)': ['<rootDir>/types/$1'],
    '^utils/(.*)': '<rootDir>/utils/$1',
    '^d3$': '<rootDir>/node_modules/d3/dist/d3.min.js',
    '^uuid$': 'uuid',
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.jsx'],
}

module.exports = baseJestConfig
