import headerAdmin from "../../components/admin/header";
import { useEffect, useState } from "../../lib";

const adminProfileEdit = ({ id }) => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/profile/${id}`)
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);
  return /*html*/ `
  <div class="w-2/12 h-screen absolute bg-neutral-700 text-white shadow-2xl shadow-black">
        ${headerAdmin()}
    </div>
    <div class="w-9/12 ml-[390px] h-screen relative border  bg-neutral-700  text-white border-black border-3xl shadow-2xl shadow-black">
    <div class="flex">
    <div class="w-[300px] ml-10 mt-20">
        <div class=" pt-[100%] border border-red-500 relative rounded-[48%]">
            <img class ="rounded-[50%] absolute top-0"src="${
              profile.avatar
            }" alt="">
        </div>
        <input type="" name="avatar" value="${profile.avatar}">
    </div>
        
        <form class="ml-28 w-[60%] form-edit">
            <h1 class="text-2xl mt-10">Profile</h1>
            <label for="">Full name</label>
            <input type="" name="name" value="${profile.name}">
            <label for="">Date of Birth</label>
            <input type="" name="dateofbirth" value="${profile.dateOfBirth}">
            <label for="">Description</label>
            <area shape="" coords="" href="" alt="" value="${
              profile.description
            }">
            <button type="">Update</button>
        </form>
    </div>
    </div>
    
    `;
};
export default adminProfileEdit;
