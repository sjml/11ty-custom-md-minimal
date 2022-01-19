const { marked } = require("marked");

module.exports = function(eleventyConfig) {
  eleventyConfig.addExtension("md", {
    compile: async function (inputContent, inputPath) {
      let html = marked.parse(inputContent);

      return async (data) => {
        // Example: use `marked` only if useMarked is set in the Data Cascade
        if(data.useMarked) {
          return html;
        }

        // You can also access the default `markdown-it` renderer here:
        return this.defaultRenderer(data);
      };
    }
  });
};
