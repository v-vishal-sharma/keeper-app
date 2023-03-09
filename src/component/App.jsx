import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea"

function App(){

    // const [noteTitle, setNoteTitle] = useState([]);
    // const [noteContent, setNoteContent] = useState([]);
    const [noteData, setNoteData] = useState({
        title: "",
        content: ""
    });
    const [dataStorage, setDataStorage] = useState([]);

    function addItem(title, content) {
        // setNoteTitle( (prevItems) => {
        //     return [...prevItems, title];
        // });
        // setNoteContent( (prevItems) => {
        //     return [...prevItems, content];
        // });

        setNoteData( () => {
            return {
                title: title,
                content: content
            };
        });
        console.log(noteData);
        setDataStorage( (prevValue) => {
            return [...prevValue, noteData];
        } )

    }

    return (
    <div>
        <Header />
        <CreateArea onAdd={addItem}/>
        { 
            dataStorage.map( (data, index) => {
                const title = data.title;
                const content = data.content;
                return <Note  key={index} title={title} content={content} />
            } ) 
        }
        {/* <Note title={ noteTitle.map( title => {return title}) } content={ noteContent.map( content => {return content}) } /> */}
        <Footer />
    </div>
    );
}

export default App;