<template>
  <Layout>
    <section id="homepage-content">
    <article v-for="post in $page.posts.edges" :key="post.id" class="post">
      <header>
        <div class="title">
          <h2>
            <a :href="post.node.path">{{post.node.title}}</a>
          </h2>
          <p>{{post.node.description}}</p>
        </div>
        <div class="meta">
          <time class="published" :datetime="post.node.date">{{formattedDateString(post.node.date)}}</time>
          <span class="published">author: {{post.node.author}}</span>
        </div>
      </header>
      <a :href="post.node.path" class="image featured">
        <g-image :src="post.node.image" />
      </a>
      <p v-html="post.node.excerpt"></p>
      <footer>
        <ul class="actions">
          <li>
            <a :href="post.node.path" class="button big">Continue Reading</a>
          </li>
        </ul>
      </footer>
    </article>
    </section>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        id
        title
        author
        date
        description
        path
        excerpt
        image
    }
  }
  }
  }
  </page-query>

<script>
import formatDate from "../utils/formattedDateString"
export default {
  metaInfo: {
    title: "Home"
  },
  methods:{
    formattedDateString(string){
        return formatDate(string)
    }
}
}
</script>

<style scoped>
#homepage-content{
  margin-top:4em;
}

.post-image {
  max-width: 60vw;
  max-height: 50vh;
}
</style>