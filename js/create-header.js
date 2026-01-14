export default async function createHeader(header) {
  let menuItems = await (await fetch('json/menu.json')).json();
  header.innerHTML = `
    <div class="logo">Our Company</div>
    <input type="checkbox" id="menu-toggle">
    <label for="menu-toggle">☰</label>
    <nav>
      ${menuItems.map(({ label, slug }) => /*html*/`
         <a href="#${slug}">${label}</a>
      `).join('')}
    </nav>
  `;

  // add a on click handler that closes the hamburger menu
  header.querySelector('nav').addEventListener('click',
    () => document.querySelector('#menu-toggle').checked = false);
}