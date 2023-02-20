import headerAdmin from "../../components/admin/header";
import { router, useEffect, useState } from "../../lib";
import axios from "axios";
const projectAdd = () => {
  const [categories, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => setCategory(data));
  }, []);
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const projectName = document.querySelector("#project-name");
    const projectImage = document.querySelector("#project-image");
    const projectAuthor = document.querySelector("#project-author");
    const projectLink = document.querySelector("#project-link");
    const projectLanguage = document.querySelector("#project-language");

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
      const listImg = await uploadFiles(projectImage.files);
      const newProject = {
        name: projectName.value,
        image: listImg,
        author: projectAuthor.value,
        link: projectLink.value,
        categoryId: parseInt(projectLanguage.value),
      };

      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      }).then(() =>
        router.navigate(
          `admin/category/${newProject.categoryId}?_embed=projects`
        )
      );
      console.log(newProject);
    });
  });

  return `
    <div class="w-2/12 h-screen absolute bg-neutral-700 text-white shadow-2xl shadow-black">
        ${headerAdmin()}
    </div>
    <div class="w-9/12 ml-[390px] h-screen relative border  bg-neutral-700  text-white border-black border-3xl shadow-2xl shadow-black">
    <h1 class="mt-4 text-center text-[45px]">Add project</h1>
        <form id="form-add" class="flex flex-col w-[600px] mx-auto  border mt-32 p-5" >
            <label for="">Name</label>
            <input type="" id="project-name" value="" class="border mx-2 text-black border-black rounded-lg" required>
            <label for="">Image</label>
            <input type="file" multiple id="project-image" value="" class="border mx-2 text-black border-black rounded-lg" required>
            <label for="">Author</label>
            <input type="" id="project-author" value="" class="border mx-2 text-black border-black rounded-lg" required>
            <label for="">Link</label>
            <input type=""  id="project-link" value="" class="border mx-2 text-black border-black rounded-lg"name="" value="" required>
            <label for="">Language</label>
            <select class="border mx-2 border-black text-black rounded-lg" id="project-language">
                <option value="0">Select</option>
                ${categories.map(
                  (item) => `<option value="${item.id}">${item.name}</option>`
                )}
            </select>
            <button type="" id="btn" class="mt-3 border w-20 rounded-md">Add</button>
        </form>
    </div>
    `;
};
export default projectAdd;
