// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  templates: {
    Tag: '/tags/:id'
  },
  siteName: 'The blog of Claire and Nate',
  icon:'./src/img/globe.jpg',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './blog/travel/*.md',
        typeName: 'TravelPost',
        remark: {
        },
        refs: {
          tags:{
            typeName: 'TravelTag',
            route: 'travel/tag/:id',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './blog/recipes/*.md',
        typeName: 'RecipePosts',
        remark: {
        },
        refs: {
          tags:{
            typeName: 'RecipeTag',
            route: 'recipes/tag/:id',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './blog/updates/*.md',
        typeName: 'UpdatePosts',
        remark: {
        },
        refs: {
          tags:{
            typeName: 'UpdateTag',
            route: 'updates/tag/:id',
            create: true
          }
        }
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    }
  ]
}
