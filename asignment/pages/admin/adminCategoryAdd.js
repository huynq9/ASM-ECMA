import headerAdmin from "../../components/admin/header";
import { router, useEffect } from "../../lib";
import axios from "axios";
const adminCategoryAdd = () => {
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const categoryName = document.querySelector("#category-name");
    const categoryImage = document.querySelector("#category-image");
    const uploadFiles = async (files) => {
      if (files) {
        const CLOUD_NAME = "dwb9qumu6";
        const PRESET_NAME = "upload";
        const FOLDER_NAME = "asm-ecma";
        const urls = [];
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

        const formData = new FormData(); // key/value

        formData.append("upload_preset", PRESET_NAME);
        formData.append("folder", FOLDER_NAME);
        for (const file of files) {
          formData.append("file", file);
          const response = await axios.post(api, formData, {
            headers: { "Content-type": "multipart/form-data" },
          });
          urls.push(response.data.secure_url);
        }
        console.log(urls);
        return urls;
      }
    };
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const newCategory = {
        name: categoryName.value,
        image: listImg,
      };
      const listImg = await uploadFiles(categoryImage.files);
      fetch("http://localhost:3000/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
      }).then(() => router.navigate("/admin/categories"));
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
            <input type="file" multiple id="category-image" value="" class="border mx-2 border-black rounded-lg text-black" required>
            
            <button type="" id="btn" class="mt-3 border w-20 rounded-md">Add</button>
        </form>
    </div>
    
    `;
};
export default adminCategoryAdd;
