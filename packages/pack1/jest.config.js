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

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./jest.config.base')

const createJestConfig = nextJest({
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('ts-jest').InitialOptionsTsJest} */
const baseJestConfig = {
  ...config,
}

module.exports = createJestConfig(baseJestConfig)
