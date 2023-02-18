import headerAdmin from "../../components/admin/header";
import { router, useEffect } from "../../lib";

const adminCategoryAdd = () => {
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const categoryName = document.querySelector("#category-name");
    const categoryImage = document.querySelector("#category-image");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const newCategory = {
        name: categoryName.value,
        image: categoryImage.value,
      };

      fetch("http://localhost:3000/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
      }).then(() => router.navigate("/admin/"));
    });
  });
  return `
    <div class="w-2/12 h-screen absolute bg-neutral-700 text-white shadow-2xl shadow-black">
        ${headerAdmin()}
    </div>
    <div class="w-9/12 ml-[390px] h-screen relative border  bg-neutral-700  text-white border-black border-3xl shadow-2xl shadow-black">
    <h1 class="mt-4 text-center text-[45px]">Add categories</h1>
        <form id="form-add" class="flex flex-col w-[600px] mx-auto  border mt-32 p-5" >
            <label for="">Name</label>
            <input type="" id="category-name" value="" class="border mx-2 border-black rounded-lg text-black" required>
            <label for="">Image</label>
            <input type="" id="category-image" value="" class="border mx-2 border-black rounded-lg text-black" required>
            
            <button type="" id="btn" class="mt-3 border w-20 rounded-md">Add</button>
        </form>
    </div>
    
    `;
};
export default adminCategoryAdd;
