import React, { useState } from "react";

function CreateArea(props) {

  // const [noteTitle, setNoteTitle] = useState("");
  // const [noteContent, setNoteContent] = useState("");

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(event) {
    const { name, value } = event.target;

    // if(name === "title") {
    //   setNoteTitle(value);
    // }else if(name === "content") {
    //   setNoteContent(value)
    // }

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  return (
    <div>
      <form onSubmit={ e => { e.preventDefault(); }}>
        <input 
          value={note.title} 
          onChange={handleChange} 
          name="title" 
          placeholder="Title" 
          autoComplete="off"
        />
        <textarea 
          value={note.content} 
          onChange={handleChange} 
          name="content" 
          placeholder="Take a note..." 
          rows="3" 
          autoComplete="off"
        />
        <button type="submit" onClick={ () => {
          props.onAdd(note);
          setNote({
            title: "",
            content: ""
          })
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;