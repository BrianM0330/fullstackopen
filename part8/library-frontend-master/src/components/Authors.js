import React, {useState} from 'react'
import {useQuery, useMutation} from '@apollo/client'
import { ALL_AUTHORS, EDIT_AUTHOR_BIRTH } from '../queries'

const Authors = (props) => {
  const [name, setName] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const result = useQuery(ALL_AUTHORS)
  const [editYear] = useMutation(EDIT_AUTHOR_BIRTH, {
    refetchQueries: ALL_AUTHORS
  })

  if (!props.show) {
    return null
  }

  if (result.loading) {
    return <div> Loading ... </div>
  }

  const authors = result.data.allAuthors

  const submit = (event) => {
    event.preventDefault()
    editYear({variables: {name, born: Number(birthYear)}})
    setName('')
    setBirthYear('')
  }

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {authors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          )}
        </tbody>
      </table>

      <div>
        <h3> Set Birthyear of Author</h3>
        <form onSubmit={submit}>
          <div> Name <input value={name} onChange={({target}) => setName(target.value)}/> </div>
          <div> Year <input value={birthYear} onChange={({target}) => setBirthYear(target.value)}/> </div>
          <button type='submit'> Submit </button>
        </form>
      </div>
    </div>
  )
}

export default Authors
