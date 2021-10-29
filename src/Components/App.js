import { useState } from "react";
import { Categories } from "./Categories";
import data from "./data";
import { MenuList } from "./MenuList";
const allCategories = ["all", ...new Set(data.map((item) => item.category))];
const App = () => {
  const [menu, setmenu] = useState(data);
  const [categories, setcategory] = useState(allCategories);
  const filterdCategories = (category) => {
    if (category === "all") {
      setmenu(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setmenu(newItems);
  };
  return (
    <div className="container">
      <h1 className="text-center">Our Menu</h1>
      <div className="line"></div>
      <Categories
        filterdCategories={filterdCategories}
        categories={categories}
      />
      <MenuList menu={menu} />
    </div>
  );
};

export default App;
