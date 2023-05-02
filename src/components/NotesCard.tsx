import { Notes } from '../model/note_model';
import { Card, Button } from 'react-bootstrap'

interface INotesCardProps {
  note: Notes,
  handleDelete: (id: string) => void
}

const NotesCard: React.FC<INotesCardProps> = ({ note, handleDelete }) => {
  console.log("notes card", note)
  return (
    <div className="mb-3">
      <Card style={{ backgroundColor: note.color }} className='p-3'>
        <Card.Title>{note.title}</Card.Title>
        <Card.Text>{note.text}</Card.Text>
        <Card.Subtitle className='text-muted'>{note.date}</Card.Subtitle>
        <Button onClick={() => handleDelete(note.id)} className='mt-3 btn btn-danger'>Delete</Button>
      </Card>
    </div>
  )
};

export default NotesCard;
