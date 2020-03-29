<template>
  <section id="sidebar">
    <section id="intro">
      <a href="#" class="logo">
        <img src="../img/theBabes.jpg" alt />
      </a>
      <header>
        <h2>NATE AND CLAIRE'S TRAVEL BLOG</h2>
      </header>
    </section>

    <section class="blurb">
      <h2>About</h2>
      <p>This is Nate and Claire's travel blog!</p>
    </section>
      <section class="tags">
      <g-link to="/tags"><h2>Tags</h2></g-link>
    </section>
    <!-- <Mailing /> -->

    <section id="footer">
      <p class="copyright">&copy; Claire & Nate.</p>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style>
#sidebar{
    margin-top:2em;
    margin-right: 0em !important;
    background-color:white; 
    padding-top:1em;
    padding-right: 1em;
}

#intro{
    display:flex;
    flex-direction: column;
    margin-top:1em !important;
}

</style>