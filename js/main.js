import createHtmlElements from "./create-html-elements.js";
import createFooterContent from "./create-footer-content.js";
import renderProducts from "./products.js";

// create and get references to html elements
let { main } = createHtmlElements();

// add the footer content
createFooterContent();

// call the render products function
renderProducts(main);