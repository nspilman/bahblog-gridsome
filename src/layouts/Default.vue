<template>
  <div class="layout">
    <Header/>
    <Sidebar/>
    <section id="content">
    <slot/>
    </section>
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
  import Header from "../components/Header"
  import Sidebar from "../components/Sidebar"

export default {
  components:{
    Header,
    Sidebar
  }  
}
</script>

<style>
@import url('../styles/bootstrap-theme.css');
@import url('../styles/bootstrap.css');
@import url('../styles/main.css');
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:1em;
  line-height: 1.5;
}

.layout {
  margin: 0 auto;
  padding-left: 10px;
  display: flex;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

#content{
  padding-right:3em;

}
</style>
