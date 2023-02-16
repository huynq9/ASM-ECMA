import headerAdmin from "../../components/admin/header";
import { useEffect, useState } from "../../lib";

const detailCategoryAdmin = ({ id }) => {
  const [detailCategory, setDetailCategory] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/categories/${id}?_embed=projects`)
      .then((response) => response.json())
      .then((data) => setDetailCategory(data));
  }, []);
  console.log(detailCategory.projects);
  return /*html*/ `
  
    <div class="w-2/12 h-screen absolute bg-neutral-700 text-white">
        ${headerAdmin()}
    </div>
    <div class="w-9/12 ml-[390px] h-screen relative border">
      <h1>Projects</h1>
      <h2><a href="/#/admin/project/add">Add new Projects</a></h2>
    <div class="flex">
    <table class=" table-auto border mx-auto  w-[97%] text-center">
        <thead class="border">
        <tr>
            <th>STT</th>
            <th>Image</th>
            <th>Name</th>
            <th>Author</th>
            <th>Link</th>
            <th>Language</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody >
          ${
            detailCategory.projects
              ? detailCategory.projects
                  .map(
                    (item, index) => `
          <tr class="border  py-2">
            <td>${index + 1}</td>
            <td class="" ><img class="w-[45px] h-[45px]"src="${
              item.image
            }" alt=""></td>
            <td>${item.name}</td>
            <td>Nguyễn Quang Huy</td>
            <td></td>
            <td>${detailCategory.name}</td>
            <td><a href="">edit</a><button data-id=${
              item.id
            } class=" btn-remove bg-teal-600 p-2 border rounded-xl mx-3 text-white hover:bg-red-600">Delete</button></td>
          </tr>`
                  )
                  .join("")
              : ""
          }
        </tbody>
        </table>
      
    
      </div>
  `;
};
export default detailCategoryAdmin;
