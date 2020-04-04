
<template>
  <Layout>
    <div id="post-main">
      <article class="post">
        <header>
          <div class="title">
            <h2>{{$page.recipe.title}}</h2>
            <p>{{$page.recipe.description}}</p>
          </div>
          <!-- <div class="meta"> -->
            <!-- <time class="published" datetime="2015-11-01">{{formattedDateString($page.recipe.date)}}</time> -->
            <!-- <span class="published">author: {{$page.recipe.author}}</span> -->
          <!-- </div> -->
        </header>
        <span class="image featured">
          <g-image :src="$page.recipe.image" id="recipe-image"/>
        </span>
        <div v-html="$page.recipe.content" />
        <div id = "indegredients-section">
          <h3>Ingredients</h3>
          <ul id="ingredients">
            <li v-for="ingredient in $page.recipe.ingredients" :key="ingredient">
              {{ingredient}}
              </li>
              </ul>
        </div>
        <div id="directions-section">
          <h3>Directions</h3>
            <ol id="directions">
            <li v-for="direction in $page.recipe.directions" :key="direction">
              {{direction}}
              </li>
              </ol>
          </div>
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
query Recipe ($path:String!){
recipe:recipe(path:$path)
       {
        title
        tags
        image
        ingredients
        directions
        content
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
    padding:3em;
}

</style>