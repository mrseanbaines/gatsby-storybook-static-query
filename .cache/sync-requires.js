const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/mrseanbaines-pleo/projects/mrseanbaines/gatsby-storybook-static-query/.cache/dev-404-page.js"))),
  "component---src-templates-index-tsx": hot(preferDefault(require("/Users/mrseanbaines-pleo/projects/mrseanbaines/gatsby-storybook-static-query/src/templates/index.tsx"))),
  "component---src-templates-page-2-tsx": hot(preferDefault(require("/Users/mrseanbaines-pleo/projects/mrseanbaines/gatsby-storybook-static-query/src/templates/page-2.tsx")))
}

