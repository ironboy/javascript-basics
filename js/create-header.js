export default async function createHeader(header) {
  let menuItems = await (await fetch('json/menu.json')).json();
  header.innerHTML = `
    <div class="logo">Our Company</div>
    <input type="checkbox" id="menu-toggle">
    <label for="menu-toggle">☰</label>
    <nav onclick="document.querySelector('#menu-toggle').checked = false">
      ${menuItems.map(({ label, slug }) => /*html*/`
         <a href="#${slug}">${label}</a>
      `).join('')}
    </nav>
  `;
}