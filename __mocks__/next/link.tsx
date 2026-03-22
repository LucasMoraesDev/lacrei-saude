const React = require("react");

function Link({ children, href, "aria-label": ariaLabel, ...props }) {
  return React.createElement(
    "a",
    { href, "aria-label": ariaLabel, ...props },
    children
  );
}

Link.displayName = "Link";

module.exports = Link;
module.exports.default = Link;
