import headerAdmin from "../../components/admin/header";
import { router, useEffect, useState } from "../../lib";

const adminCategoryEdit = ({ id }) => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/categories/${id}`)
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const categoryName = document.querySelector("#category-name");
    const categoryImage = document.querySelector("#category-image");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formEdit = {
        name: categoryName.value,
        image: categoryImage.value,
      };
      fetch(`http://localhost:3000/categories/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formEdit),
      }).then(() => router.navigate("/admin/categories"));
    });
  });
  return `
    <div class="w-2/12 h-screen absolute bg-neutral-700 text-white">
        ${headerAdmin()}
    </div>
    <div class="w-9/12 ml-[390px] h-screen relative border ">
    <h1 class="mt-4 text-center text-[45px]">Edit categories</h1>
        <form id="form-add" class="flex flex-col w-[600px] mx-auto  border mt-32 p-5" >
            <label for="">Name</label>
            <input type="" id="category-name" value="${
              category.name
            }" class="border mx-2 border-black rounded-lg">
            <label for="">Image</label>
            <input type="" id="category-image" value="${
              category.image
            }" class="border mx-2 border-black rounded-lg">
            
            <button type="" id="btn" class="mt-3 border w-20 rounded-md">Update</button>
        </form>
    </div>
    
    `;
};

export default adminCategoryEdit;
