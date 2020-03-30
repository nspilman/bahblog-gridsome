<template>
  <section id="sidebar">
    <section id="intro">
      <a href="#" class="logo">
        <img src="../img/theBabes.jpg" alt />
      </a>
      <header>
        <h2>The Bahblog </h2>
        <h3> Nate & Claire </h3>
      </header>
    </section>

    <section class="blurb">
             <nav id="nav">
            <ul class="actions vertical special spinY">
              <li>
                <g-link class="button" to="/travel">Travel</g-link>
              </li>
              <li>
                <g-link class="button" to="/recipes">Recipes</g-link>
              </li>
              <li>
                <g-link class="button" to="/updates">Life Updates</g-link>
              </li>
            </ul>
          </nav>
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