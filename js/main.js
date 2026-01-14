import createHtmlElements from "./create-html-elements.js";
import createFooter from "./create-footer.js";
import createHeader from "./create-header.js";
import renderProducts from "./products.js";

// create and get references to html elements
let { main } = createHtmlElements();

// add header content
createHeader();

// add the footer content
createFooter();

// call the render products function
renderProducts(main);