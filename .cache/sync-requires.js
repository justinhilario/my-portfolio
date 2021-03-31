const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/learnacademy/Desktop/my-portfolio/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/learnacademy/Desktop/my-portfolio/src/pages/blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/learnacademy/Desktop/my-portfolio/src/pages/index.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/learnacademy/Desktop/my-portfolio/src/pages/projects.js"))),
  "component---src-pages-tags-js": hot(preferDefault(require("/Users/learnacademy/Desktop/my-portfolio/src/pages/tags.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/learnacademy/Desktop/my-portfolio/src/templates/blog-post.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/Users/learnacademy/Desktop/my-portfolio/src/templates/tags.js")))
}

