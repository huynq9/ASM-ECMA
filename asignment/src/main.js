import { render, router } from "../lib";
import about from "../pages/about";
import dashBoard from "../pages/admin/dashboard";
import profileAdmin from "../pages/admin/profile";
import projectsAdmin from "../pages/admin/projects";
import settingsAdmin from "../pages/admin/settings";
import home from "../pages/home";
import projects from "../pages/projects";

const app = document.querySelector("#app");

router.on("/", () => render(home, app));
router.on("/projects", () => render(projects, app));
router.on("/about", () => render(about, app));

//admin page

router.on("/admin/", () => render(dashBoard, app));
router.on("/admin/projects", () => render(projectsAdmin, app));
router.on("/admin/profile", () => render(profileAdmin, app));
router.on("/admin/settings", () => render(settingsAdmin, app));
router.resolve();
