/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path")
// You can delete this file if you're not using it
// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  // // Query for markdown nodes to use in creating pages.
  // const result = await graphql(
  //   `
  //     {
  //       allMarkdownRemark(limit: 1000) {
  //         edges {
  //           node {
  //             frontmatter {
  //               path
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // )
  // // Handle errors
  // if (result.errors) {
  //   reporter.panicOnBuild(`Error while running GraphQL query.`)
  //   return
  // }
  // Create pages for each markdown file.
  const { windowsShortcuts } = path.resolve(
    `src/shortcuts/windowsShortcuts.jsx`
  )
  const { browserShortcuts } = path.resolve(
    `src/shortcuts/browserShortcuts.jsx`
  )
  const pages = [
    { path: "windows", sectionTitle: "Windows", shortcuts: windowsShortcuts },
    { path: "/browser", sectionTitle: "Browser", shortcuts: browserShortcuts },
  ]
  const shortcutsPageTemplate = path.resolve(`src/templates/shortcuts-page.jsx`)
  // pages.forEach(({ path, sectionTitle }) => {
  //   createPage({
  //     path,
  //     component: shortcutsPageTemplate,
  //     // In your blog post template's graphql query, you can use path
  //     // as a GraphQL variable to query for data from the markdown file.
  //     context: {
  //       sectionTitle,
  //       shortcuts,
  //     },
  //   })
  // })
}
