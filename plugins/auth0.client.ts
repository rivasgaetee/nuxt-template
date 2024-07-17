import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { Auth0Client } from '@auth0/auth0-spa-js'

let auth0Client: Auth0Client

export default defineNuxtPlugin(async nuxtApp => {
  const config = useRuntimeConfig()

  auth0Client = new Auth0Client({
    domain: config.public.auth0Domain,
    clientId: config.public.auth0ClientId,
    authorizationParams: {
      scope: 'openid profile email',
      redirect_uri: config.public.auth0CallbackUrl,
      audience: config.public.auth0Audience,
    },
  })

  await auth0Client.checkSession()

  nuxtApp.provide('auth0', auth0Client)
})

export { auth0Client }
