import { useRef, useState } from 'react'
import { Notes } from '../model/note_model'
import { Form, Button, Alert } from 'react-bootstrap'

interface ICreateNotesProps {
  notes: Notes[],
  setNotes: React.Dispatch<React.SetStateAction<Notes[]>>
}

const CreateNotes: React.FC<ICreateNotesProps> = ({ notes, setNotes }) => {
  const [error, setError] = useState<string>('')

  const titleRef = useRef<HTMLInputElement | null>(null)
  const textRef = useRef<HTMLTextAreaElement | null>(null)
  const colorRef = useRef<HTMLInputElement | null>(null)
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    if(titleRef.current?.value === '' && textRef.current?.value === '') {
      return setError('fields should not be empty')
    }
    setError('')
    setNotes([ ...notes, { 
        id: (new Date()).toString(), 
        title: (titleRef.current as HTMLInputElement).value,
        text: (textRef.current as HTMLTextAreaElement).value,
        color: (colorRef.current as HTMLInputElement).value,
        date: (new Date()).toString()
      }
    ]);
    (titleRef.current as HTMLInputElement).value = '';
    (textRef.current as HTMLTextAreaElement).value = '';
    (colorRef.current as HTMLInputElement).value = '#efefef';
    
  }
  return (
    <>
      <h2>Create Notes</h2>
      {error && <Alert variant="danger"> {error} </Alert>}
      <Form className="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className='mb-3'>
          <Form.Label>Title</Form.Label>
          <Form.Control type='text' ref={titleRef} placeholder='Enter Title for the Note' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Text</Form.Label>
          <Form.Control as="textarea" ref={textRef} rows={3} placeholder='Enter Text for the notes' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label htmlFor='colorInput'>Notes Color</Form.Label>
          <Form.Control type='color' ref={colorRef} id="colorInput" defaultValue="#dfdfdf" title="Choose your color" />
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    </>
  )
}

export default CreateNotes