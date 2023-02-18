import { useEffect, useState } from "../../lib";

const adminProfile = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/profile")
      .then((response) => response.json())
      .then((data) => setProfile(data));
  }, []);

  return /*html*/ `
    <div class="flex">
    <div class="w-[300px] ml-10 mt-20">
        <div class=" pt-[100%] border border-red-500 relative rounded-[48%]">
            <img class ="rounded-[50%] absolute top-0"src="${profile.avatar}" alt="">
        </div>
        
    </div>
        
        <div class="ml-28 w-[60%]">
            <h1 class="text-2xl mt-10">Profile</h1>
            <h3 class="mt-16 text-xl">Full Name: ${profile.name}</h3>
            <h3 class="mt-6 text-xl">Date of birth: ${profile.dateOfBirth}</h3>
            <h3 class="mt-6 mb-6 text-xl">Description: ${profile.description}</h3>
            <a href="/#/admin/profile/edit/${profile.id}" class=" border p-2 rounded-md ">Edit profile</a>
        </div>
    </div>
    `;
};
export default adminProfile;
