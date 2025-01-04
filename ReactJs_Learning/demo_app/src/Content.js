import React from "react";
import { useState } from "react";
import {FaTrashAlt} from "react-icons/fa";

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

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Practice Coding",
    },
    {
      id: 2,
      checked: false,
      item: "Take Rest",
    },
    {
      id: 3,
      checked: true,
      item: "Read about Finance",
    }
  ]);
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" checked={item.checked} />
            <label>{item.item}</label>
            <FaTrashAlt role="button" tabIndex="0"/>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
