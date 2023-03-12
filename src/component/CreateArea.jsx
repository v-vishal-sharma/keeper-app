import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {

  // const [noteTitle, setNoteTitle] = useState("");
  // const [noteContent, setNoteContent] = useState("");

  const [editState, setEditState] = useState(false);

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

  function handleState() {
    setEditState(true);
  }
  // function reverseState() {
  //   setEditState(false);
  // }

  return (
    <div>
      <form className="create-note" onSubmit={ e => { e.preventDefault(); }}>
        {editState && <input 
          value={note.title} 
          onChange={handleChange} 
          name="title" 
          placeholder="Title" 
          autoComplete="off"
        />}
        <textarea 
          value={note.content} 
          onChange={handleChange}
          onClick={handleState}
          // onBlur={reverseState} 
          name="content" 
          placeholder="Take a note..." 
          rows={editState?"3":"1"} 
          autoComplete="off"
        />
        <Zoom in={editState}>
          <Fab type="submit" onClick={ () => {
            props.onAdd(note);
            setNote({
            title: "",
            content: ""
            })
          }}>
            <AddIcon/>
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;