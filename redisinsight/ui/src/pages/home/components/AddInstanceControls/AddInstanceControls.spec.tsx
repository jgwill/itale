import React from 'react'
import { instance, mock } from 'ts-mockito'
import { render } from 'uiSrc/utils/test-utils'
import AddInstanceControls, { Props } from './AddInstanceControls'

const mockedProps = mock<Props>()

jest.mock('uiSrc/slices/content/content-create-database', () => {
  const defaultState = jest.requireActual('uiSrc/slices/content/content-create-database').initialState
  return {
    contentSelector: () => jest.fn().mockReturnValue({
      ...defaultState,
      loading: false,
      data: { cloud: { title: 'Limited offer', description: 'Try Redis Cloud' } }
    }),
  }
})

describe('AddInstanceControls', () => {
  it('should render', () => {
    expect(render(<AddInstanceControls {...instance(mockedProps)} />)).toBeTruthy()
  })
})
