import React from 'react'
import Chapter from './Chapter'
import { Link } from 'react-router-dom'

const Chapters = (props) => {
  const chapters = props.chapters

  return (
    <>
      {
        chapters.map((chapter) => (
          <div key={chapter.id}>
            <Link to={`/chapters/${chapter.id}`}>
              <Chapter key={chapter.id} chapter={chapter} />
            </Link>
          </div>
        ))
      }

    </>
  )
}

export default Chapters
