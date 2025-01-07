import React from "react";
import ListItem from "./ListItem";

// const Content = () => {
//   function activity() {
//     const activities = ["jog", "eat", "read", "sleep"];
//     const int = Math.floor(Math.random() * 4);
//     return activities[int];
//   }

//   const handleClick = (e) => {
//     // console.log(e);
//     console.log(e.target.innerText);
//   }

//   const handleDoubleClick = (name) => {
//     console.log(`Thanks for Clicking - ${name}`);
//   }

//   return (
//       <main>
//         <p onDoubleClick={() => handleDoubleClick('John')}>Let's {activity()} on a day!</p>
//         <button onClick={(e) => handleClick(e)}>Submit</button>
//       </main>
//   );
// };

// const Content = () => {

//   function identity() {
//     return console.log("Hello John!");
//   }
//   const [count, setCount] = useState(99);

//   // The below code is executed when the above useState code is executed
//   // Because we have called the function identity as such.
//   // const [name, setName] = useState(identity());

//   const [name, setName] = useState(() => identity());

//   function increment() {
//     setCount(preCount => preCount + 1);
//   }

//   function decrement() {
//     setCount(preCount => preCount - 1);
//   }

//   return (
//       <main>
//         <p>Let's play on a day!</p>
//         <button>Submit</button>
//         <button onClick={decrement}>-</button>
//         <span>{count}</span>
//         <button onClick={increment}>+</button>
//       </main>
//   );
// };

// const Content = () => {

//   const [activities, setActivities] = useState("jog");

//   function handleActivity() {
//         const activities = ["jog", "eat", "read", "sleep"];
//         const int = Math.floor(Math.random() * 4);
//         setActivities(activities[int]);
//       }

//   return (
//       <main>
//          <p>Let's {activities} on a day!</p>
//         <button onClick={handleActivity}>Submit</button>
//       </main>
//   );
// };

const Content = ({items, handleCheck, handleDelete}) => {
  
  return (
    <main>
      {(items.length) ? (
        <ListItem 
          items = {items}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
        />
      ): (<p>Your list is Empty!</p>)
    }
    </main>
  );
};

export default Content;
