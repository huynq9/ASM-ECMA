import adminProfile from "../../components/admin/adminProfile";
import headerAdmin from "../../components/admin/header";

const profileAdmin = () => {
  return `
  <div class="w-2/12 h-screen absolute bg-neutral-700 text-white shadow-2xl shadow-black">
        ${headerAdmin()}
    </div>
    
    <div class="w-9/12 ml-[390px] h-screen relative border  bg-neutral-700  text-white border-black border-3xl shadow-2xl shadow-black">
        ${adminProfile()}
      
    </div>`;
};
export default profileAdmin;
