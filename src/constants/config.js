const clientId = "0oa1047vvhR9PytaF357";
const oktaDomain = "https://dev-499390.okta.com";
export default {
    baseUrl: oktaDomain,
    issuer: `${oktaDomain}/oauth2/default`,
    redirect_uri: window.location.origin + '/implicit/callback',
    client_id: clientId
};