
<template>
  <Layout>
    <div id="post-main">
      <article class="post">
        <header>
          <div class="title">
            <h2>{{$page.post.title}}</h2>
            <p>{{$page.post.description}}</p>
          </div>
          <div class="meta">
            <time class="published" datetime="2015-11-01">{{formattedDateString($page.post.date)}}</time>
            <span class="published">author: {{$page.post.author}}</span>
          </div>
        </header>
        <span class="image featured">
          <g-image :src="$page.post.image" class="p5" />
        </span>
        <div v-html="$page.post.content" />
      </article>
      <!-- <BlogCommmentWrapper postId = {post.id} draft = {post.frontmatter.draft}/> -->
      <ul class="actions">
        <li>
          <a href="/" class="button">Home Page</a>
        </li>
      </ul>
    </div>
    <ul
      :style="{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }"
    >
      <li>
        <!-- {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
        )}-->
      </li>
      <li>
        <!-- {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
        </Link>-->
        <!-- )} -->
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query TravelPost ($path:String!){
post:travel(path:$path)
       {
        title
        author
        description
        path
        content
        image
        date
      }
  }
</page-query>
  <script>
  import formatDate from "../utils/formattedDateString"
export default {
  metaInfo() {
    return {
      title: this.$page.title
    };
  },
  methods:{
    formattedDateString(string){
      return formatDate(string)
    }
  }
};
</script>
<style>

img{
    width:100%;
    height:auto;
}
</style>