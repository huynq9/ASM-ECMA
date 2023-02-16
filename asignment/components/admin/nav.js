import { useEffect, useState } from "../../lib";
const menusAdmin = () => {
  const [menusAdmin, setMenusAdmin] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/menusAdmin")
      .then((response) => response.json())
      .then((data) => setMenusAdmin(data));
  }, []);
  return `

  <div class="flex flex-col align-item">
    ${menusAdmin
      .map((item) => `<a class="" href="${item.path}">${item.name}</a>`)
      .join("")}
      </div>`;
};
export default menusAdmin;
