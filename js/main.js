import createHtmlElements from "./create-html-elements.js";
import renderProducts from "./products.js";

// create and get references to html elements
let { main } = createHtmlElements();

// call the render products function
renderProducts(main);