import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  // Callback function to handle data from CreateArea
  function handleDataFromCreateArea(data) {
    setNotes((prevValue) => {
      return [...prevValue, data];
    });
  }

  function handleDeleteNote(id) {
    setNotes((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea sendData={handleDataFromCreateArea} />
      {notes.map((note, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={note.title}
            content={note.content}
            deleteNote={handleDeleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
