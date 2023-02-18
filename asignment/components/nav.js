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
        (item) =>
          `<a class="ml-4 mr-4 hover:text-black"href="${item.path}">${item.name}</a>`
      )
      .join(" ")}`;
};
export default menus;
