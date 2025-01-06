import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

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
  return (
    <div className="App">
      <Header title="Check List"/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
