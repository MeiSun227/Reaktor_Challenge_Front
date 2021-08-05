import React from 'react'

const Chapter = (props) => {
  return (
    <>
      <ul>
        <li key={props.chapter.id}>
          {props.chapter.id} {props.chapter.chapter}
        </li>
      </ul>
    </>
  )
}

export default Chapter
