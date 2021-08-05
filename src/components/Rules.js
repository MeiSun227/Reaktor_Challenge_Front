import React from 'react'
import { useParams } from 'react-router-dom'

const Rules = ({ chapters }) => {
  const id = useParams().id
  const chapter = chapters.find(c => {
    return c.id === Number(id) + '.'
  })

  return (
    <>
      {
        chapter.rules.map((r) =>
          <li key={r.id}>
            {r.id}{r.content}
          </li>)
      }
    </>
  )
}

export default Rules
