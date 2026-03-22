const React = require("react");
const Image = ({ src, alt, ...props }: any) =>
  React.createElement("img", { src, alt, ...props });
Image.displayName = "Image";
module.exports = Image;
module.exports.default = Image;
