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
        path: './travel/*.md',
        typeName: 'Post',
        remark: {
        },
        refs: {
          tags:{
            typeName: 'Tag',
            route: 'travel/tag/:id',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './recipes/*.md',
        typeName: 'Recipe',
        remark: {
        },
        // refs: {
        //   tags:{
        //     typeName: 'RecipeTag',
        //     route: 'recipes/tag/:id',
        //     create: true
        //   }
        // }
      }
    },
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     path: './blog/updates/*.md',
    //     typeName: 'UpdatePosts',
    //     remark: {
    //     },
    //     refs: {
    //       tags:{
    //         typeName: 'UpdateTag',
    //         route: 'updates/tag/:id',
    //         create: true
    //       }
    //     }
    //   }
    // },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`
      }
    }
  ]
}
