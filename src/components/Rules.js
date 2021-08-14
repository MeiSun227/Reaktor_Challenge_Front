import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ruleBookService from '../services/ruleBookService'

const Rules = () => {
  const id = useParams().id
  const [rules, setRules] = useState([])
  useEffect(() => {
    ruleBookService
      .getRules(id)
      .then(data => {
        setRules(data.rules)
      })
  }, [id])

  return (
    <>
      {
        rules.map((r) =>
          <li key={r.id}>
            {r.id} {r.content}
          </li>)
      }
    </>
  )
}

export default Rules
