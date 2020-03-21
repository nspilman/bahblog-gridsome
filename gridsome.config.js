// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  templates: {
    Tag: '/tags/:id'
  },
  siteName: 'The travel blog of Claire and Nate',
  icon:'./src/img/globe.jpg',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './blog/*.md',
        typeName: 'Post',
        remark: {
        },
        refs: {
          tags:{
            typeName: 'Tag',
            route: '/tag/:id',
            create: true
          }
        }
      }
    }
  ]
}
