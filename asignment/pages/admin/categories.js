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
  
    <div class="w-2/12 h-screen absolute rounded-sm bg-neutral-700 text-white">
        ${headerAdmin()}
    </div>
    <div class="w-9/12 ml-[390px] h-screen relative border">
      <h1 class="text-center my-6 text-xl">Categories</h1>
      <a href="/admin/categories/add">Add new category</a>
      <table class=" table-auto border mx-auto  w-[97%] text-center">
        <thead class="border">
        <tr>
          <th class="w-1/12">STT</th>
          <th class="w-3/12">Image</th>
          <th class="w-3/12">Language</th>
          <th class="w-2/12">View</th>
          <th class="w-3/12">Action</th>
        </tr>
        </thead>
        <tbody >
          ${categories
            .map(
              (item, index) => `
          <tr class="border  py-2">
            <td>${index + 1}</td>
            <td class="" ><img class="w-[45px] h-[45px]"src="${
              item.image
            }" alt=""></td>
            <td>${item.name}</td>
            <td><a href="/#/admin/category/${item.id}">View projects</a></td>
            <td><a href="">Update</a><a href="">Delete</a></td>
          </tr>`
            )
            .join("")}
        </tbody>
        </table>
     
    
      </div>
  `;
};
export default categoriesAdmin;
