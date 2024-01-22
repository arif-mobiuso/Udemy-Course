import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prev) => {
      return [...prev, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes, index) => {
      console.log(prevNotes);
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <Note key={1} title="Note title" content="Note content" />
      {notes.map((nt, index) => (
        <Note
          title={nt.title}
          content={nt.content}
          key={index}
          id={index}
          onDelete={deleteNote}
        ></Note>
      ))}
      <Footer />
    </div>
  );
}

export default App;
