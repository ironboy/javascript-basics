// await fetch('products.json') -> responseObject
// await responseObject.json() -> convert from json to a JS data structure
// await -> wait for things that take time - reading data from an url, text from a file
// note: products is an array of objects
let products = await(await fetch('products.json')).json();

// Grab the h1 element 
let h1 = document.querySelector('h1');

// Change the text of the h1 element
h1.textContent = 'Our shop';

// Create an main element 
let main = document.createElement('main');

// Loop through products and build some html
let html = '';
for (let product of products) {
  html += `
    <article>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><b>Price:</b> ${product.price} SEK</p>
    </article>
  `;
}

// Change/add html to the main element
// `` = template literal multiline string
//      in which you also interpolate expressions/variables
// To get some syntax highlightning of HTML in a template literal
// you can install the VSC extension leet-html 
main.innerHTML = `
<p>Our amazing products:</p>
${html}
`;

// Add the p element somewhere in the DOM
document.querySelector('body').append(main);