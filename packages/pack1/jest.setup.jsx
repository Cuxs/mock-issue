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

/* eslint-disable react/prop-types */
/* eslint-disable jest/prefer-spy-on */
// eslint-disable-next-line import/no-extraneous-dependencies
import '@testing-library/jest-dom/extend-expect'

// eslint-disable-next-line import/no-extraneous-dependencies
import { configure } from '@testing-library/dom'

global.HTMLElement.prototype.scrollIntoView = jest.fn()
global.HTMLElement.prototype.releasePointerCapture = jest.fn()
global.Element.prototype.releasePointerCapture = jest.fn()

// Tooltip.Bounds uses this function to detect mouse over events
// if you need to actually return an element from this, you should mock it locally in your test
document.elementsFromPoint = jest.fn(() => [])


// For some reason, the last version of Next makes jest throw an error when
// using .spyOn() on a module. We need to add "__esModule: true" to the module
// to make it work properly.
const patchedESModules = [
  'next/router',
]

patchedESModules.forEach(modulePath => {
  jest.mock(modulePath, () => {
    const actualModule = jest.requireActual(modulePath)
    return {
      __esModule: true,
      ...actualModule,
    }
  })
})
// See: https://www.benmvp.com/blog/quick-trick-jest-asynchronous-tests/
beforeEach(() => {
  expect.hasAssertions()
})

// Sometimes (especially with pooling of tests), RTL can take a while
// so lets increase those timeouts
// https://github.com/testing-library/dom-testing-library/issues/820
jest.setTimeout(15000)
configure({ asyncUtilTimeout: 15000 })
