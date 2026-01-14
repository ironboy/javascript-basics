export default function createHtmlElements() {
  // Create an main element and add to the DOM
  let main = document.createElement('main');
  document.querySelector('body').append(main);
  // Return created elements
  return { main };
}