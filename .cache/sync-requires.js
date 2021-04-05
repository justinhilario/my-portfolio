const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/learnacademy/Desktop/my-portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/learnacademy/Desktop/my-portfolio/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/learnacademy/Desktop/my-portfolio/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/learnacademy/Desktop/my-portfolio/src/pages/projects.js"))),
  "component---src-pages-tags-js": hot(preferDefault(require("/Users/learnacademy/Desktop/my-portfolio/src/pages/tags.js")))
}

