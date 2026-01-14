import renderProducts from "./products.js";

export default async function router(main) {
  let hash = location.hash.slice(1);
  // replace hash with welcome if no hash
  // (show start page)
  if (hash === '') {
    hash = 'welcome';
  }
  // If the hash is products call our product list renderer
  // else get a html-part/snippet from teh html-parts folder
  if (hash === 'products') {
    renderProducts(main);
  }
  else {
    main.innerHTML = await (await fetch(`html-parts/${hash}.html`)).text();
  }
  // scroll to top of page
  window.scrollTo(0, 0);
}