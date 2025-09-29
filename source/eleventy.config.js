export default function(eleventyConfig) {
    // Copy any .jpg files to '_site', via Glob pattern
    // Kepps the same directory structure.
    eleventyConfig.addPassthroughCopy("**/*.jpg");
    eleventyConfig.addPassthroughCopy("**/*.png");
}