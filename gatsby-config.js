module.exports = {
  siteMetadata: {
    title: `Shortcut School`,
    description: `Shortcuts for desktop and mobile. Don't push harder; lower the resistance.`,
    author: `@danielacorner`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `shortcut-school`,
        short_name: `shortcutschool`,
        start_url: `/`,
        background_color: `hsl(255,50%,45%)`,
        theme_color: `hsl(255,50%,45%)`,
        display: `minimal-ui`,
        icon: `src/images/shortcutschool-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
