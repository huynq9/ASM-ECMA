import header from "../components/header";
import { useEffect, useState } from "../lib";

const projects = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, []);
  return /*html*/ ` 
  <div class="">
    <div class="">
      ${header()} 
    </div>
    
  </div>
  <div class="flex flex-col h-screen bg-repeat bg-[url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701393042.jpg')]">
   <h1 class="pt-10 text-[36px] mx-auto text-white">All Projects</h1>
  <div class="w-[1500px] mt-5 mx-auto  flex text-white ">
    ${project
      .map(
        (item) => `
    <div class="w-[250px] border ml-3 mr-3">
      <div class="w-32 mx-auto border mt-3">
        <div class="relative pt-[100%]">
          <img  class="absolute top-0" src="${item.image}" alt="">
        </div>
      </div>
      <h1 class="text-center mt-3">${item.name}</h1>
      <h2 class="text-center mt-3">Author: ${item.author}</h2>
    </div>
    `
      )
      .join("")}
    
  </div>

  </div>
  </div>`;
};

export default projects;
