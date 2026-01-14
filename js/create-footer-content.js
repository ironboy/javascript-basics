export default async function createFooterContent() {
  let content = await (await fetch('html-parts/footer-content.html')).text();
  document.querySelector('footer').innerHTML = content;
}