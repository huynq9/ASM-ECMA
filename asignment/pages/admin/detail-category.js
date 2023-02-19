import headerAdmin from "../../components/admin/header";
import { useEffect, useState } from "../../lib";

const detailCategoryAdmin = ({ id }) => {
  const [detailCategory, setDetailCategory] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/categories/${id}?_embed=projects`)
      .then((response) => response.json())
      .then((data) => setDetailCategory(data));
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const id = btn.dataset.id;
        fetch(`http://localhost:3000/projects/${id}`, {
          method: "DELETE",
        }).then(() => {
          const newProjects = detailCategory.projects.filter(
            (item) => item.id != id
          );
          setDetailCategory(newProjects);
        });
      });
    }
  });
  console.log(detailCategory.projects);
  return /*html*/ `
  
    <div class="w-2/12 h-screen absolute bg-neutral-700 text-white shadow-2xl shadow-black">
        ${headerAdmin()}
    </div>
    <div class="w-9/12 ml-[390px] h-screen relative border  bg-neutral-700  text-white border-black border-3xl shadow-2xl shadow-black">
      <h1 class="mt-20 text-center text-2xl">${detailCategory.name}</h1>
      <a href="/#/admin/project/add" class="border  ml-6 p-2 rounded-xl ">Add new Projects</a>
    <div class="flex">
      
    <table class=" table-auto border mx-auto  w-[97%] text-center mt-10">
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
            <td><a class="bg-teal-600 p-2 border rounded-xl mx-3 text-white hover:bg-red-600" href="admin/project/edits/${
              item.id
            }">Edit</a><button data-id=${
                      item.id
                    } class=" btn-remove bg-teal-600 p-2 border rounded-xl mx-3 text-white hover:bg-red-600">Delete</button></td>
          </tr>`
                  )
                  .join("")
              : "<h1>Không có project nào</h1>"
          }
        </tbody>
        </table>
      
    
      </div>
  `;
};
export default detailCategoryAdmin;
