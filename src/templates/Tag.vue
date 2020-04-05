<template>
  <Layout>
    <section id="posts-by-tag">
    <article v-for="post in $page.tag.belongsTo.edges" :key="post.node.id" class="post">
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
query Tag ($id: ID!) {
  tag (id: $id) {
    title
    belongsTo {
      edges {
        node {
          ...on Travel {
            title
            path
            date (format: "D. MMMM YYYY")
            content
            image
          }
        }
      }
    }
  }
  allTag {
    edges {
      node {
        id
        path
      }
    }
  }
}
</page-query>

<script>
import formatDate from "../utils/formattedDateString"
export default {
  methods:{
    title(){
      return this.$page.tag.title
    }
  },
  metaInfo(){
    return {
      title: this.title
    }
  },
  computed:{
    
  },
  methods:{
    formattedDateString(string){
      return formatDate(string)
    }
  }
}
</script>

<style scoped>

</style>