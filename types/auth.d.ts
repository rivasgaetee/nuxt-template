import Auth0Client from "~/plugins/auth0.client";

declare module '#app' {
  interface NuxtApp {
    $auth0: Auth0Client
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $auth: Auth
  }
}
