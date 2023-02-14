import headerAdmin from "../../components/admin/header";
import { useEffect, useState } from "../../lib";

const categoriesAdmin = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);
  return /*html*/ `
  
    <div class="w-2/12 h-screen absolute bg-neutral-700 text-white">
        ${headerAdmin()}
    </div>
    <div class="w-9/12 ml-[390px] relative bg-">
      <h1>Language</h1>
    <div class="flex">
      ${categories
        .map(
          (item) => `<div>
        <img class="w-[100%] h-40"src="${item.image}" alt="">
        <a href="/admin/category/${item.id}">${item.name}</a>
        </div>
        `
        )
        .join("")}
    </div>
    
      </div>
  `;
};
export default categoriesAdmin;
