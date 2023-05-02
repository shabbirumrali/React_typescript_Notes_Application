import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Notes } from './model/note_model'
import { Header, CreateNotes, NotesList } from './components'
import './App.css'

function App() {
  const [notes, setNotes] = useState<Notes[]>([])

  return (
    <div className='app'>
      <Header />
      <h2>This is a test run</h2>
      <Container className="mt-5">
        <Row>
          <Col md="6"><CreateNotes notes={notes} setNotes={setNotes} /></Col>
          <Col md="6">
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
