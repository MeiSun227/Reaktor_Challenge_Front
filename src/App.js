import React, { useState, useEffect } from 'react'
import Chapters from './components/Chapters'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Rules from './components/Rules'
import { Container, Header, Input, Menu, Segment, Divider } from 'semantic-ui-react'
import ruleBookService from './services/ruleBookService'

const App = () => {
  const [chapters, setChapters] = useState([])
  const [rules, setRules] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (search !== '') {
      ruleBookService
        .search(search)
        .then(data => {
          setRules(data)
        })
    } else {
      ruleBookService
        .getChapters()
        .then(data => {
          setChapters(data)
        })
    }
  }, [search])

  const handleSearch = (event) => {
    event.preventDefault()
    setSearch(event.target.value)
  }

  const handleResetSearch = () => {
    setSearch('')
  }

  const displayResult = rules.map((r) => <Segment key={r.id}><ul><li key={r.id}>{r.id} {r.content}</li></ul> </Segment>)

  return (
    <>
      <Header as='h2' textAlign='center'> Game Rules</Header>
      <Router>
        <Container>
          <Menu>
            <Menu.Item as={Link} to='/' onClick={handleResetSearch}>Chapters
            </Menu.Item>
            <Menu.Item position='right'>
              <Input icon='search' placeholder='Search...' onChange={handleSearch} onRest={handleResetSearch} />
            </Menu.Item>
          </Menu>
        </Container>
        <Divider />
        {search && displayResult}
        <Container>
          <Switch>
            <Route path='/chapters/:id'>
              <Rules />
            </Route>
            <Route path='/'>
              <Chapters chapters={chapters} />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  )
}

export default App
