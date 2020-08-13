module.exports = {
  plugins: [
    {
      resolve: '@prismicio/gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'previews',
        defaultLang: 'en-gb',
        pages: [
          {
            type: 'Homepage',
            match: '/',
            component: require.resolve('./src/templates/index.tsx'),
          },
          {
            type: 'Page_2',
            match: '/page-2',
            component: require.resolve('./src/templates/page-2.tsx'),
          },
        ],
      },
    },
  ],
}
