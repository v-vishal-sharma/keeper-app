import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea"

function App(){

    // const [noteTitle, setNoteTitle] = useState([]);
    // const [noteContent, setNoteContent] = useState([]);
    // const [noteData, setNoteData] = useState({
    //     title: "",
    //     content: ""
    // }) 

    const [dataStorage, setDataStorage] = useState([]);

    function addItem(note) {
        // setNoteTitle( (prevItems) => {
        //     return [...prevItems, title];
        // });
        // setNoteContent( (prevItems) => {
        //     return [...prevItems, content];
        // });

        // setNoteData( () => {
        //     console.log(title);
        //     console.log(content);
        //     return {
        //         [title]: content,
        //     };
        // });

        setDataStorage( (prevValue) => {
            return [...prevValue, note];
        })
    }

    function deleteItem(id) {
        setDataStorage(prevValue => {
            return prevValue.filter((item,index) => {
                return index!==id;
            });
        });
    }

    return (
    <div>
        <Header />
        <CreateArea onAdd={addItem}/>
        { 
            dataStorage.map( (data, index) => {
                const title = data.title;
                const content = data.content;
                return <Note id={index} key={index} title={title} content={content} onDelete={deleteItem} />
            } ) 
        }
        <Footer />
    </div>
    );
}

export default App;