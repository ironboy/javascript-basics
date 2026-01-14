export default function createHtmlElements() {
  // Create a header element and add to the DOM
  let header = document.createElement('header');
  document.querySelector('body').append(header);
  // Create a main element and add to the DOM
  let main = document.createElement('main');
  document.querySelector('body').append(main);
  // Create a footer element and add to the DOM
  let footer = document.createElement('footer');
  document.querySelector('body').append(footer);
  // Return created elements
  return { header, main, footer };
}