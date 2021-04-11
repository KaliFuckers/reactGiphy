import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
const GifExpertApp = () => {
  const [categories, setcategories] = useState([""]);

  return (
    <>
      <h2>GifExpertAppp</h2>
      <AddCategory setCategories={setcategories} />
      <hr />
      {categories.map((cat) => (
        <GifGrid key={cat} category={cat} />
      ))}
    </>
  );
};

export default GifExpertApp;
