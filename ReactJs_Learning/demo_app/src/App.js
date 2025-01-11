import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

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
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // JSON.parse(localStorage.getItem('todo_list'));
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data Not Received");
        console.log(response);
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    // Without async keyword we can call the function.
    // But for safeside, its written as below.
    // To kickstart / call this fetchItems(), () function is
    // used. Usually its used to kickstart the functions.
    // (async () => await fetchItems())()

    // To simulate delay in loading data
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);
  }, []);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item };
    const listItems = [...items, addNewItem];
    setItems(listItems);
    // After the use of Json-Server, the localStorage is not needed.
    //localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      //...item - It is used to preserve the previous state of the items.
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    // After the use of Json-Server, the localStorage is not needed.
    // localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    // After the use of Json-Server, the localStorage is not needed.
    // localStorage.setItem("todo_list", JSON.stringify(listItems));
  };

  const handleSubmit = (e) => {
    // To prevent the default loading of Form
    e.preventDefault();
    if (!newItem) return;
    console.log(newItem);
    addItem(newItem);
    // To change the state
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Check List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {/* '&&' - The double and symbol is used to show the <p> tag values incase of fetchError */}
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        {isLoading && <p>{`Loading data..`}</p>}
        {!isLoading && !fetchError && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
