export default async function createFooter() {
  // read footer content from file (a small html snippet)
  let content = await (await fetch('html-parts/footer-content.html')).text();
  // read menu items
  let menuItems = await (await fetch('json/menu.json')).json();
  // create menu links
  let menuLinks = menuItems.map(({ label, slug }) => /*html*/`
    <a href="#${slug}">${label}</a><br>
  `).join('');
  // replace {menu-items} with real links
  content = content.replace('{menu-items}', menuLinks);

  // replace the html inside footer with the content we've read from file
  document.querySelector('footer').innerHTML = content;
}