const origin = window.location.origin;

export const AUTH_CONFIG = {
  domain: "dev-mkd.auth0.com",
  roleUrl: "https://rbac-tutorial-app/role",
  clientId: "tKZejQGRDg6LVpi65jHYg7K9yZh67Adv",
  callbackUrl: origin + "/callback"
};