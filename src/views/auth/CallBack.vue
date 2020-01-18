<template>
  <div id="callback">
    <span>正在跳转......</span>
  </div>
</template>

<script>
import OidcManager from '@/plugins/ids4.js'
  OidcManager.signinRedirectCallback().then(function (res) {
    console.log(res)
    console.log("ready to  oidc_client.");
     window.location = "/test";
  }).catch(function (e) {
    console.error(e);
  });
  export default {}

</script>