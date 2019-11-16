// @material-ui/icons
import Calendar from "@material-ui/icons/Event";
import Person from "@material-ui/icons/Person";
import Close from "@material-ui/icons/Close";
// core components/views for Admin layout
import Scheduler from "views/Scheduler/Scheduler.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import LoginPage from "views/Login/Login.js";

const dashboardRoutes = [
  {
    path: "/scheduler",
    name: "Agenda",
    icon: Calendar,
    component: Scheduler,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Perfil de usuário",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    name: "Sair",
    icon: Close,
    component: LoginPage,
    layout: "/admin"
  }
];

export default dashboardRoutes;
