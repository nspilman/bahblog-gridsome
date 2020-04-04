<template>
  <div>
    <div id="wrapper">
      <Header />
      <slot />
      <Sidebar />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default {
  components: {
    Header,
    Sidebar
  }
};
</script>

<style>
/* @import url('../styles/bootstrap-theme.css'); */
/* @import url('../styles/bootstrap.css'); */
@import url("../styles/main.css");
</style>
