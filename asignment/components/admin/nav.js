import { useEffect, useState } from "../../lib";
const menusAdmin = () => {
  const [menusAdmin, setMenusAdmin] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/menusAdmin")
      .then((response) => response.json())
      .then((data) => setMenusAdmin(data));
  }, []);
  return `
    ${menusAdmin
      .map(
        (item) => `<a class="text-red-400"href="${item.path}">${item.name}</a>`
      )
      .join(" ")}`;
};
export default menusAdmin;
