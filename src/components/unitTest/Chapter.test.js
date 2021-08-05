import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Chapter from '../Chapter'

test('renders chapter', () => {
  const chapter = {
    chapter: 'Component testing is done',
    id: '1011.'
  }

  const component = render(
    <Chapter chapter={chapter} />
  )
  expect(component.container).toHaveTextContent('1011.', 'Component testing is done ')
})
