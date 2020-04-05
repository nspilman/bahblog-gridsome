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
      <a :href="post.node.path" class="image-featured">
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
query UpdatePosts {
  posts: allPost {
    edges {
      node {
        id
    }
  }
  }
  }
  </page-query>

<script>
import formatDate from "../../utils/formattedDateString"
export default {
  metaInfo: {
    title: "Life | The Bahblog"
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