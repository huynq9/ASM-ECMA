import { render, router } from "../lib";
import about from "../pages/about";
import dashBoard from "../pages/admin/dashboard";
import profileAdmin from "../pages/admin/profile";
import settingsAdmin from "../pages/admin/settings";
import home from "../pages/home";
import projects from "../pages/projects";
import categoriesAdmin from "../pages/admin/categories";
import detailCategoryAdmin from "../pages/admin/detail-category";
import projectAdd from "../pages/admin/adminProjectAdd";
import adminCategoryAdd from "../pages/admin/adminCategoryAdd";
import adminCategoryEdit from "../pages/admin/adminCategoryEdit";
import adminProjectEdit from "../pages/admin/adminProjectEdit";

const app = document.querySelector("#app");

router.on("/", () => render(home, app));
router.on("/projects", () => render(projects, app));
router.on("/about", () => render(about, app));

//admin page

router.on("/admin/", (data) => render(() => dashBoard(data), app));
router.on("/admin/categories", () => render(categoriesAdmin, app));
router.on("/admin/profile", () => render(profileAdmin, app));
router.on("/admin/settings", () => render(settingsAdmin, app));
router.on("/admin/category/:id", ({ data }) =>
  render(() => detailCategoryAdmin(data), app)
);
router.on("admin/project/add", () => render(projectAdd, app));
router.on("admin/categories/add", () => render(adminCategoryAdd, app));
router.on("admin/categories/edit/:id", ({ data }) =>
  render(() => adminCategoryEdit(data), app)
);

router.on("admin/project/edits/:id", ({ data }) =>
  render(() => adminProjectEdit(data), app)
);

router.resolve();
