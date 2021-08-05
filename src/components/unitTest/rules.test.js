
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Rules from '../Rules'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { jest } from '@jest/globals'

test('renders rules', () => {
  const id = jest.fn()
  const chapter = {
    chapter: 'Component testing is done',
    id: id,
    rules: [{
      id: '101.1a',
      content: 'hello'
    }]
  }
  const component = render(
    <Router>
      <Switch>
        <Route path='/chapters/:id'>
          <Rules chapter={chapter} />
        </Route>
      </Switch>
    </Router>
  )
  expect(component).toBeDefined()
})
