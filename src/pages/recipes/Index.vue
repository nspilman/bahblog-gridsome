<template>
  <Layout>
    <div id="main">
      <!-- Post -->
      <article v-for="post in $page.posts.edges.map(edge => edge.node)" :key="post.path" class="post">
        <header>
          <div class="title">
            <h2>
              <g-link :to="post.path">{{post.title}}</g-link>
            </h2>
            <p>{{post.description}}</p>
          </div>
          <div v-if="post.date" class="meta">
            <time class="published" datetime="2015-11-01">{{formattedDateString(post.date)}}</time>
            <span href="#" class="author">
              <span class="name">{{post.author}}</span>
            </span>
          </div>
        </header>
        <g-link :to="post.path" class="image featured">
          <g-image :src="post.image"/>
        </g-link>
        <p>{{post.excerpt}}</p>
        <footer>
          <ul class="actions">
            <li>
              <g-link :to="post.path" class="button large">Continue Reading</g-link>
            </li>
          </ul>
          <ul class="stats">
            <li v-for="tag in post.tags" :key="tag.title">
              <g-link :to="tag.path">#{{tag.title}}</g-link>
            </li>
          </ul>
        </footer>
      </article>
    </div>
  </Layout>
</template>

<page-query>
query RecipePosts {
  posts: allRecipe {
    edges {
      node {
        id
        title
        path
        image
    }
  }
  }
  }
  </page-query>

<script>
import formatDate from "../../utils/formattedDateString"
export default {
  metaInfo: {
    title: "Recipes | The Bahblog"
  },
  methods:{
    formattedDateString(string){
        return formatDate(string)
    }
}
}
</script>

<style scoped>

header{
width:100%;
left:unset;
}

#homepage-content{
  margin-top:2em;
}

.image-featured{
  display:flex;
  justify-content: center;
}

.g-image {
      max-height:660px;
      width: auto;
}

@media only screen and (max-width: 600px) {
  .g-image {
    max-width: 90vw;
    height:auto;
  }
}

.post{
  padding:1em;
}


</style>