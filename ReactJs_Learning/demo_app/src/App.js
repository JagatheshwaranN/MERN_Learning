import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

// Default Code came with React App for Reference
// function App() {
//   const name = "Demo App";
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// Simple Code Created for Random content display
// function App() {

//   function activity() {
//     const activities = ['jog', 'eat', 'read', 'sleep'];
//     const int = Math.floor(Math.random()*4);
//     return activities[int];
//   }

//   return (
//     <div>
//     <h1>Welcome to ReactJs Learning Program</h1>
//     <p>Let's {activity()} on a day!</p>
//     </div>
//   );
// }

function App() {
  const [items, setItems] = useState(
      // [
      // {
      //   id: 1,
      //   checked: true,
      //   item: "Practice Coding",
      // },
      // {
      //   id: 2,
      //   checked: false,
      //   item: "Take Rest",
      // },
      // {
      //   id: 3,
      //   checked: true,
      //   item: "Read about Finance",
      // }]
      JSON.parse(localStorage.getItem('todo_list'))
    );
    
    const [newItem, setNewItem] = useState('');
    const [search, setSearch] = useState('');

    const addItem = (item) => {
      const id = items.length ? items[items.length - 1].id+1 : 1;
      const addNewItem = {id, checked: false, item}
      const listItems = [...items, addNewItem]
      setItems(listItems)
      localStorage.setItem("todo_list", JSON.stringify(listItems));
    }

    const handleCheck = (id) => {
      const listItems = items.map((item) =>
        //...item - It is used to preserve the previous state of the items.
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      setItems(listItems);
      localStorage.setItem("todo_list", JSON.stringify(listItems));
    };
  
    const handleDelete = (id) => {
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems);
      localStorage.setItem("todo_list", JSON.stringify(listItems));
    };

    const handleSubmit = (e) => {
      // To prevent the default loading of Form
      e.preventDefault();
      if(!newItem) return;
      console.log(newItem);
      addItem(newItem);
      // To change the state
      setNewItem('')
    }

  return (
    <div className="App">
      <Header title="Check List"/>
      <AddItem 
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
      />
      <SearchItem 
        search = {search}
        setSearch = {setSearch}
      />
      <Content 
      items = {items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} 
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />
      <Footer 
      length = {items.length}/>
    </div>
  );
}

export default App;
