import React, { useState, useEffect } from 'react'
import Chapters from './components/Chapters'
import chapterService from './services/chapterService'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Rules from './components/Rules'
import { Container, Header, Input, Menu, Segment, Divider } from 'semantic-ui-react'

const App = () => {
  const [chapters, setChapters] = useState([])
  const [search, setNewSearch] = useState('')

  useEffect(() => {
    chapterService
      .getAll()
      .then(ruleData => {
        setChapters(ruleData)
      })
  }, [])

  const handleSearch = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    setNewSearch(event.target.value)
  }
  const handleResetSearch = () => {
    setNewSearch('')
  }

  const rulesArr = []
  chapters.forEach(c => {
    c.rules.forEach(r => {
      rulesArr.push(r)
    })
  })

  const rulesFilter = rulesArr.filter((r) => r.content.toUpperCase().includes(search.toUpperCase()))
  const rulesList = search ? rulesFilter : []
  const displayResult = rulesList.map((r) => <Segment key={r.id}><ul><li key={r.id}>{r.id}{r.content}</li></ul> </Segment>)

  return (
    <>
      <Header as='h2' textAlign='center'> Game Rules</Header>
      <Router>
        <Container>
          <Menu>
            <Menu.Item as={Link} to='/chapters' onClick={handleResetSearch}>Chapters
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
              <Rules chapters={chapters} />
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
