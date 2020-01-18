
import { UserManager } from 'oidc-client'

console.log("初始化UserManager")
var config = {
    authority: "http://localhost:5000",
    client_id: "Implicit",
    redirect_uri: "http://localhost:9192/callback",
    post_logout_redirect_uri : "http://localhost:9192/index",
    response_type: "id_token token",
    scope:"openid profile",
    automaticilentRenew:true
};

var OidcManager = new UserManager(config);

export default OidcManager