import createHtmlElements from "./create-html-elements.js";
import createFooter from "./create-footer.js";
import createHeader from "./create-header.js";
import router from "./router.js";

// create and get references to html elements
let { header, main, footer } = createHtmlElements();

// add header content
createHeader(header);

// add the footer content
createFooter(footer);

// use the router when the page loads
// and when the location hash changes
router(main);
window.addEventListener('hashchange', () => router(main));