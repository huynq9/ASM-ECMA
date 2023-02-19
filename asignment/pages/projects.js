import header from "../components/header";
import { useEffect, useState } from "../lib";

const projects = () => {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btns");
    for (let btn of btns) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = btn.dataset.id;
        fetch(`http://localhost:3000/categories/${id}?_embed=projects`)
          .then((response) => response.json())
          .then((data) => setProject(data));
      });
    }
    console.log(project.projects);
  });

  return /*html*/ ` 
  <div class="">
    <div class="">
      ${header()} 
    </div>
    
  </div>
  <div class="flex flex-col h-screen bg-repeat bg-[url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701393042.jpg')]">
   <h1 class="pt-10 text-[36px] mx-auto text-white">All Categories</h1>
  <div class="  mt-5 my-auto flex flex-col flex-wrap text-white ml-5  relative h-screen w-[300px]">
    ${categories
      .map(
        (item) => `
       
          <div class="w-[150px]">
    <button class="mx-auto btns focus:outline-none focus:ring focus:ring-violet-300 focus:text-black focus:bg-white" data-id="${item.id}">
    <div class="w-32  border mt-3">
        <div class="relative pt-[100%] mx-auto">
          <img  class="absolute top-0" src="${item.image}" alt="">
        </div>
      </div>
      <h1 class="text-center mt-3">${item.name}</h1>
    </button> 
    </div>
       
    
    `
      )
      .join("")}
    
  </div>
        <div class="flex flex-wrap mx-auto mt-[100px] absolute ml-[200px] ">
        
          ${
            project.projects
              ? project.projects.map(
                  (item) => `
                  <div class="border  text-white ml-3 mr-3">
                  <div class="w-[250px] p-2">
                    <div class="relative pt-[100%]">
                      <img class="absolute top-0" src="${item.image}">
                    </div>
                    
                  </div>
                  <h1 class="text-white ml-2">Name: ${item.name}</h1>
                  <h1 class="text-white ml-2">Author: ${item.author}</h1>
                  <h1 class="text-white ml-2">Link: ${item.link}</h1>
                  <h1 class="text-white ml-2">Language: ${project.name}</h1>
            
          </div>`
                )
              : ``
          }
        </div>
  </div>
  </div>`;
};

export default projects;
