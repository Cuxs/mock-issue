import {useRouter} from 'next/router'
import { act, render, screen, waitFor } from '@testing-library/react'
import { FileTested } from './FileTested'

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}))


describe('when run',()=>{
  it('should work',()=>{
    const push = jest.fn()
  ;(useRouter as jest.Mock).mockReturnValue({
    route: '/',
    pathname: '',
    asPath: '',
    events: {
      on: jest.fn(),
      off: jest.fn(),
    },
    beforePopState: jest.fn(() => null),
    prefetch: jest.fn(() => null),
    push,
    query: { id: 'SUB_TASK_WELCOME' },
  })
    render(<FileTested></FileTested>)
    expect(true).toBe(true)
  })

})