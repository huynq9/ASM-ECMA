import { useEffect, useState } from "../../lib";
const menusAdmin = () => {
  const [menusAdmin, setMenusAdmin] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/menusAdmin")
      .then((response) => response.json())
      .then((data) => setMenusAdmin(data));
  }, []);
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);
  return `

  <div class="flex flex-col align-item">
      <div class="w-[150px] mx-auto mt-20">
        <div class=" pt-[100%] border border-red-500 relative rounded-[48%]">
            <img class ="rounded-[50%] absolute top-0"src="${
              profile.avatar
            }" alt="">
        </div>
    </div>
    <h1 class="mx-auto mt-10">Hi ${profile.name}</h1>
    ${menusAdmin
      .map(
        (item) =>
          `<a class="mx-auto border mt-10 rounded-xl w-[200px] text-center hover:bg-white hover:text-black" href="${item.path}">${item.name}</a>`
      )
      .join("")}
      </div>`;
};
export default menusAdmin;
