import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Homepage } from "./pages/Homepage";
import { Services } from "./pages/Services";
import { Contact } from "./pages/Contact";
import { ScheduleCall } from "./pages/ScheduleCall";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Homepage },
      { path: "services", Component: Services },
      { path: "contact", Component: Contact },
      { path: "schedule-call", Component: ScheduleCall },
      { path: "*", Component: NotFound },
    ],
  },
]);
