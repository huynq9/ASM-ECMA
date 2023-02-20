import { useEffect, useState } from "../../lib";

const adminDashBoard = () => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects/")
      .then((response) => response.json())
      .then((data) => setProject(data));
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
          const newProject = project.filter((item) => item.id != id);
          setProject(newProject);
        });
      });
    }
  });
  return `
    <table class=" table-auto border mx-auto  w-[97%] text-center ">
        <thead class="border">
        <tr>
            <th>STT</th>
            <th>Image</th>
            <th>Name</th>
            <th>Author</th>
            <th>Link</th>
            
            <th>Action</th>
        </tr>
        </thead>
        <tbody >
          ${project
            .map(
              (item, index) => `
          <tr class="border  py-2">
            <td>${index + 1}</td>
            <td class="" ><img class="w-[45px] h-[45px]"src="https://cloudinary.com/console/c-d0352b1545611be041b95e32558744/media_library/folders/c335a0b99f8928ca1c588becba1fbcb843/${
              item.image[0]
            }" alt=""></td>
            <td>${item.name}</td>
            <td>Nguyễn Quang Huy</td>
            <td></td>
            <td><a class="bg-teal-600 p-2 border rounded-xl mx-3 text-white hover:bg-red-600" href="/#/admin/project/edits/${
              item.id
            }">Edit</a><button data-id=${
                item.id
              } href="" class=" btn-remove bg-teal-600 p-2 border rounded-xl mx-3 text-white hover:bg-red-600">Delete</button></td>
          </tr>`
            )
            .join("")}
        </tbody>
        </table>
    `;
};

export default adminDashBoard;
