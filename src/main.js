import "./style.css";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import router from "./router"; // Import the router instance

import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  cache,
  uri: "https://countries.trevorblades.com",
});

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },

  render: () => h(App),
});

app.use(router); // Register the router with the app
app.mount("#app");
