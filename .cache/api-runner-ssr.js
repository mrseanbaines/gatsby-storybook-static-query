var plugins = [{
      plugin: require('/Users/mrseanbaines-pleo/projects/mrseanbaines/gatsby-storybook-static-query/node_modules/@prismicio/gatsby-source-prismic-graphql/gatsby-ssr'),
      options: {"plugins":[],"repositoryName":"previews","defaultLang":"en-gb","pages":[{"type":"Homepage","match":"/","component":"/Users/mrseanbaines-pleo/projects/mrseanbaines/gatsby-storybook-static-query/src/templates/index.tsx"},{"type":"Page_2","match":"/page-2","component":"/Users/mrseanbaines-pleo/projects/mrseanbaines/gatsby-storybook-static-query/src/templates/page-2.tsx"}]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
