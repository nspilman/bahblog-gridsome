<template>
  <Layout>
    <article id="main">
      <div class="content">
            <div class="inner">
              <h2>Welcome to the Bahblog</h2>
                        <nav id="nav">
            <ul class="actions special spinY">
              <li>
                <g-link class="button" to="/travel">Travel</g-link>
              </li>
              <li>
                <g-link class="button" to="/recipes">Recipes</g-link>
              </li>
              <li>
                <g-link class="button" to="/life">Life Updates</g-link>
              </li>
            </ul>
          </nav>
        <img :src="mainImage" alt data-position="center center" id="home-image" />
        </div>
      </div>
    </article>
  </Layout>
</template>

<script>
import mainImage from "../assets/img/theBahbes.png";
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
  padding: 0 3em;
}

.home-links a {
  margin-right: 1rem;
}

#home-image{
  max-height: 500px;
  width:auto;
}

@media only screen and (max-width: 700px) {
  #home-image{ 
    height:auto;
    max-width:100vw;
    max-height: none
  }
}

.inner{
  text-align: center;
  background-color: white;
  padding-top:2em;

}
</style>
