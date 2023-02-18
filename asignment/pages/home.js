import header from "../components/header";
import { useEffect, useState } from "../lib";

const home = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((responses) => responses.json())
      .then((datas) => setCategory(datas));
  }, []);
  return /*html*/ ` 
  <div class="">
    <div class="">
      ${header()} 
    </div>
    
  </div>
  <div class="flex h-screen bg-repeat bg-[url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701393042.jpg')]">
  <div class="pt-[100px] ml-[300px]">
    <div class="w-[300px]  border border-white rounded-[28%]">
      <div class="relative pt-[100%]">
        <img class="absolute top-0 rounded-[30%]" src="${
          profile.avatar
        }" alt="">
      </div>
    </div>
  </div>
  <div class="ml-32 w-[1000px]   h-[400px] text-white">
    
  <h1 class="text-[38px] mt-24">Name: ${profile.name} </h1>
  <h2 class="text-[26px] mt-4">Dete of birth: ${profile.dateOfBirth}</h2>
  <h3 class="text-[20px] mt-4">Description: ${profile.description}</h3>
  <h3 class="text-[18px] mt-4"> Technologies used: </h4>
  <div class="flex">
    ${category
      .map(
        (item) => /*html*/ `<div class=" ml-3 mr-3 mt-6 ">
      <div class="w-[150px]">
        <div class="relative pt-[100%]">
          <img class="absolute top-0"src="${item.image}" alt="">
        </div>
      </div>
  </div>`
      )
      .join("")}
      
  <div>
  
  </div class="">
        <div class = "flex-1 mt-5">
                            <div class = "flex justify-between">
                                <div class="mb-1 text-base   font-semibold">HTML</div>
                                <div class="mb-1 text-base  font-semibold">80%</div>
                            </div>
                                <div class="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                                <div class="bg-yellow-400 h-2  rounded-full" style="width: 80%"></div>
                            </div>

                        <div class = "flex justify-between">
                            <div class="mb-1 text-base   font-semibold">PHP</div>
                            <div class="mb-1 text-base  font-semibold">50%</div>
                        </div>
                            <div class="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                            <div class="bg-purple-600 h-2  rounded-full" style="width: 50%"></div>
                        </div>

                        <div class = "flex justify-between">
                            <div class="mb-1 text-base   font-semibold">JavaScript</div>
                            <div class="mb-1 text-base  font-semibold">60%</div>
                        </div>
                            <div class="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                            <div class="bg-blue-600 h-2  rounded-full" style="width: 60%"></div>
                        </div>

                        
                    </div>
      
  </div>
  `;
};
export default home;
