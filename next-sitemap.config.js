const fs = require('fs/promises')

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://rotten.cc",
  generateRobotsTxt: true,
  exclude: [
    "/api/*",
    "/shhh__/*"
  ],
  async additionalPaths() {
    let paths = []
    
    // discog
    const discography = await require('./src/data/discography-vimae.json');
    discography.releases.forEach((r) => {
      paths.push({loc: "/music/release/" + r.slug})
    })

    

    return paths;
  }
}