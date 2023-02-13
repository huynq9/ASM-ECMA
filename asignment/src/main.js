import { render, router } from "../lib";
import dashBoard from "../pages/admin/dashboard";

const app = document.querySelector("#app");
//admin page

router.on("/admin/", () => render(dashBoard, app));
router.resolve();
