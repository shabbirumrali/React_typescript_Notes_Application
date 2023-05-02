import React from 'react'
import { Notes } from '../model/note_model'
import NotesCard from './NotesCard'

interface INoteListProps {
  notes: Notes[],
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>
}

const NotesLists: React.FC<INoteListProps> = ({ notes, setNotes }) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  const renderNotes = () => {
    return notes.map((note) => {
      return <NotesCard handleDelete={handleDelete} key={note.id} note={note} />
    })
  }
  return (
    <>
      <h2 className='mt-3'>Notes</h2>
      <div>{ renderNotes() }</div>
    </>
  )
}

export default NotesLists