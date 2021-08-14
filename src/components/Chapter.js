import React from 'react'
import { List } from 'semantic-ui-react'

const Chapter = (props) => {

  return (
    <>
      <List.Item key={props.chapter.id}>
        {props.chapter.id} {props.chapter.chapter}
      </List.Item>
    </>
  )
}

export default Chapter
