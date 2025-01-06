import React from "react";

// const Header = () => {
//   return (
//     <header style={{
//       backgroundColor: 'aquamarine',
//       color: 'purple'
//     }}>
//         <h1 style={{
//           fontFamily: 'Georgia'
//         }}>To do List</h1>
//     </header>
//   )
// }

const Header = ({title}) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "To do List"
}

export default Header;
