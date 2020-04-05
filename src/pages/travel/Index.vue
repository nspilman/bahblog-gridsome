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
          <div class="meta">
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
query TravelPosts {
  posts: allTravel {
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
        tags {
          title
          path
        }
    }
  }
  }
  }
  </page-query>

<script>
import formatDate from "../../utils/formattedDateString";
export default {
  metaInfo: {
    title: "Travel!"
  },
  methods: {
    formattedDateString(string) {
      return formatDate(string);
    },
  }
};
</script>

<style scoped>
</style>