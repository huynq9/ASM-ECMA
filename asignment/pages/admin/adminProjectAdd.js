import headerAdmin from "../../components/admin/header";
import { router, useEffect, useState } from "../../lib";

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

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const newProject = {
        name: projectName.value,
        image: projectImage.value,
        author: projectAuthor.value,
        link: projectLink.value,
        categoryId: projectLanguage.value,
      };

      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      }).then(() => router.navigate("/admin/categories/"));
      console.log(newProject);
    });
  });

  return `
    <div class="w-2/12 h-screen absolute bg-neutral-700 text-white">
        ${headerAdmin()}
    </div>
    <div class="w-9/12 ml-[390px] h-screen relative border ">
    <h1 class="mt-4 text-center text-[45px]">Add project</h1>
        <form id="form-add" class="flex flex-col w-[600px] mx-auto  border mt-32 p-5" >
            <label for="">Name</label>
            <input type="" id="project-name" value="" class="border mx-2 border-black rounded-lg">
            <label for="">Image</label>
            <input type="" id="project-image" value="" class="border mx-2 border-black rounded-lg">
            <label for="">Author</label>
            <input type="" id="project-author" value="" class="border mx-2 border-black rounded-lg">
            <label for="">Link</label>
            <input type=""  id="project-link" value="" class="border mx-2 border-black rounded-lg"name="" value="">
            <label for="">Language</label>
            <select class="border mx-2 border-black rounded-lg" id="#project-language">
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
