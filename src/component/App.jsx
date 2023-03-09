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

        setDataStorage( (prevValue) => {
            return [...prevValue, noteData];
        } )

    }

    return (
    <div>
        <Header />
        <CreateArea onAdd={addItem}/>
        { 
            dataStorage.map( (_element, index) => {
                const [data] = dataStorage;
                const {title: title, content: content} = data;
                console.log(title, content);
                return <Note key={index} title={title} content={content} />
            } ) 
        }
        {/* <Note title={ noteTitle.map( title => {return title}) } content={ noteContent.map( content => {return content}) } /> */}
        <Footer />
    </div>
    );
}

export default App;