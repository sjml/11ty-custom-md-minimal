const alt_md = require("./config/marked");

module.exports = (eleventyConfig) => {
  alt_md(eleventyConfig);

  return {
    dir: {
      input: "content",
      output: "public",
    }
  };
};
