import React from 'react'
import Chapter from './Chapter'
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Chapters = ({ chapters }) => {

  return (
    <>
      {
        chapters.map((chapter) => (
          <div key={chapter.id}>
            <Link to={`/chapters/${chapter.id}`}>
              <List>
                <Chapter key={chapter.id} chapter={chapter} />
              </List>
            </Link>
          </div>
        ))
      }

    </>
  )
}

export default Chapters