import adminDashBoard from "../../components/admin/adminDashBoard";
import headerAdmin from "../../components/admin/header";
const dashBoard = () => {
  return `
  <div class="w-2/12 h-screen absolute bg-neutral-700 text-white">
        ${headerAdmin()}
    </div>
    
    <div class="w-9/12 ml-[390px] h-screen relative border ">
        <h1>Tất cả dự án</h1>
        ${adminDashBoard()}
      
    </div>`;
};

export default dashBoard;
