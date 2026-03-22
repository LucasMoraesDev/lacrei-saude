const React = require("react");
function Link({ children, href, ...props }: any) {
  return React.createElement("a", { href, ...props }, children);
}
Link.displayName = "Link";
module.exports = Link;
module.exports.default = Link;
