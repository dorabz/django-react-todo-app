import React, { useState, useEffect } from 'react'

const NotesListPage = () => {

  let [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {

    let response = await fetch('/api/notes/')
    let data = await response.json()
    setNotes(data)
  }
  
  return (
    <div>
       notes
    </div>
  )
}

export default NotesListPage