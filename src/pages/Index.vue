<template>
  <Layout>
    <article id="home" class="panel special">
      <div class="image">
        <img :src="mainImage" alt data-position="center center" id="main-image" />
      </div>
      <div class="content">
        <div class="inner">
          <nav id="nav">
            <ul class="actions vertical special spinY">
              <li>
                <g-link class="button" to="/travel">Travel</g-link>
              </li>
              <li>
                <g-link class="button" to="/travel">Recipes</g-link>
              </li>
              <li>
                <g-link class="button" to="/travel">Life Updates</g-link>
              </li>
            </ul>
          </nav>
          <ul class="icons">
            <li>
              <a href="https://github.com/nspilman" target="_blank" class="icon fa-github">
                <span class="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/natespilman/"
                target="_blank"
                class="icon fa-instagram"
              >
                <span class="label">Instagram</span>
              </a>
            </li>
            <br />
            <li>
              <span class="label">nate.spilman@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  </Layout>
</template>

<script>
import mainImage from "../img/theBabes.jpg";
export default {
  metaInfo: {
    title: "The Bahblog | Claire and Nate's family blog"
  },
  data() {
    return {
      mainImage
    };
  }
};
</script>

<style scoped>
img {
  padding: 3em;
  background-color: white;
}

.home-links a {
  margin-right: 1rem;
}
</style>
