import headerAdmin from "../../components/admin/header";
import { useEffect, useState } from "../../lib";

const detailCategoryAdmin = ({ id }) => {
  const [detailCategory, setDetailCategory] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/categories/${id}?_embed=projects`)
      .then((response) => response.json())
      .then((data) => setDetailCategory(data));
  }, []);
  return /*html*/ `
  
    <div class="w-2/12 h-screen absolute bg-neutral-700 text-white">
        ${headerAdmin()}
    </div>
    <div class="w-9/12 ml-[350px] relative bg-">
      <h1>Projects</h1>
    <div class="flex">
    <table>
        <thead>
        
        </thead>
    </table>
      ${
        detailCategory.projects
          ? detailCategory.projects
              .map(
                (item) => `<div>
        <img class="w-[100%] h-40"src="${item.image}" alt="">
        <a href="/admin/projects/${item.id}">${item.name}</a>
        </div>
        `
              )
              .join("")
          : "<p>Không có Project nào sử dụng ngôn ngữ này!</p>"
      }
    </div>
    
      </div>
  `;
};
export default detailCategoryAdmin;
