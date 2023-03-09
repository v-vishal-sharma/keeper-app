import React, { useState } from "react";

function CreateArea(props) {

  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    if(name === "title") {
      setNoteTitle(value);
    }else if(name === "content") {
      setNoteContent(value)
    }
  }

  return (
    <div>
      <form onSubmit={ e => { e.preventDefault(); }}>
        <input value={noteTitle} onChange={handleChange} name="title" placeholder="Title" autoComplete="off"/>
        <textarea value={noteContent} onChange={handleChange} name="content" placeholder="Take a note..." rows="3" autoComplete="off"/>
        <button type="submit" onClick={ () => {
          props.onAdd(noteTitle, noteContent);
          setNoteTitle("");
          setNoteContent("");
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;