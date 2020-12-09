import React,{useState} from 'react';
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import './App.css';
import CreateArea from './createArea'

function App() {
  var  count=0;
  const [arr,setArr]=useState([]);

  function saveNote(titled,noted){
    setArr((prev)=>{
    	return([...prev,{
    	key:arr.length,
  		title:titled,
  		content:noted
    }])})
  }

  function deleteNote(index){
  	setArr(
  		 arr.filter(function(item) {
   		 return item.key !== index
			})
  		);
  }
  return (
    <div>
       <Header/>
       <CreateArea forSubmit={saveNote}/>
      	{arr.map(eachNote => (
      		<Note
      		    id={eachNote.key}
	       		title={eachNote.title}
	       		content={eachNote.content}
	       		toDelete={deleteNote}
       		/>
      	))}
       <Footer/>
    </div>
  );
}
export default App;
