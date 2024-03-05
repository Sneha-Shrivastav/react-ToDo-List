import React, { useState } from 'react';
import ToDoList from './toDoList';

const App = () => {

  const [inputList, setInputList] = useState("")
  const [items, setItems] = useState([])

  const itemEvent = (event) =>{
    // const value = event.target.value
    // const name = event.target.name
    setInputList(event.target.value)
  }

  const listOfItems = () =>{
    setItems((oldItems) =>{
      return [...oldItems, inputList];
    })
    setInputList("")
  }

  const deleteItems = (id) =>{
    console.log("deleted")

    setItems((oldItems) =>{
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
}

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>ToDo List</h1>
          <br />
          <input type='text' placeholder='Add Items' value={inputList} onChange={itemEvent}/>
          <button onClick={listOfItems}> + </button>
          
          <ol>
            {/* <li>{inputList}</li> */}
            {
              items.map((itemVal, index) =>{
                return <ToDoList 
                  key = {index}
                  id = {index}
                  text = {itemVal}
                  onSelect = {deleteItems}
                />
              })
            }
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
