import { createRouter, createWebHistory } from "vue-router";
import Header from "./components/Google/Header.vue";
import Main from "./components/Google/Main.vue";
import Footer from "./components/Google/Footer.vue";
import HelloWorld from "./components/Load/HelloWorld.vue";
import GraphQl from "./components/GraphQl.vue";

const router = createRouter({
  history: createWebHistory(), // Using browser history for navigation
  routes: [
    {
      path: "/",
      components: {
        default: Main,
        header: Header,
        footer: Footer,
        graphql: GraphQl,
      },
    }, // Route for the home page with header, main, and footer
    {
      path: "/hello",
      component: HelloWorld,
      name: "hello",
    }, // Route for the HelloWorld page
  ],
});

export default router;
