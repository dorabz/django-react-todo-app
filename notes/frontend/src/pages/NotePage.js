import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const NotePage = ({ match }) => {

    let noteId = match.params.id
    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [noteId])

    let getNote = async () => {
        let response = await fetch(`/api/notes/${noteId}/`)
        let data = await response.json()
        setNote(data)
    }

    return (
        <div>
            <p>{note?.body}</p>  
        </div>
    
      )
}
export default NotePage