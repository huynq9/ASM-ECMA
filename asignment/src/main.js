import { render, router } from "../lib";
import about from "../pages/about";
import dashBoard from "../pages/admin/dashboard";
import profileAdmin from "../pages/admin/profile";
import projectsAdmin from "../pages/admin/categories";
import settingsAdmin from "../pages/admin/settings";
import home from "../pages/home";
import projects from "../pages/projects";
import categoriesAdmin from "../pages/admin/categories";
import detailCategoryAdmin from "../pages/admin/detail-category";

const app = document.querySelector("#app");

router.on("/", () => render(home, app));
router.on("/projects", () => render(projects, app));
router.on("/about", () => render(about, app));

//admin page

router.on("/admin/", () => render(dashBoard, app));
router.on("/admin/categories", () => render(categoriesAdmin, app));
router.on("/admin/profile", () => render(profileAdmin, app));
router.on("/admin/settings", () => render(settingsAdmin, app));
router.on("/admin/category/:id", ({ data }) =>
  render(() => detailCategoryAdmin(data), app)
);
router.resolve();
