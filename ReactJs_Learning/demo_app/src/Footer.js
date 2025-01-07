import React from "react";

const Footer = ({length}) => {
  //const year = new Date();
  return (
  // <footer>Copywright &copy; {year.getFullYear()} </footer>;
  <footer> {length} List {length === 1 ? "item" : "items"}</footer>
  )
};

export default Footer;
