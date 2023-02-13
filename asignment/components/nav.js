import { useEffect, useState } from "../lib";
const menus = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/menus")
      .then((response) => response.json())
      .then((data) => setMenus(data));
  }, []);
  return `
    ${menus
      .map(
        (item) => `<a class="text-red-400"href="${item.path}">${item.name}</a>`
      )
      .join(" ")}`;
};
export default menus;
