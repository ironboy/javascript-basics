let products = [
  { name: 'Ball', price: 35, description: 'A nice rubber ball.' },
  { name: 'Rubber duck', price: 105, description: 'For extensive rubber ducking.' },
  { name: 'Coffee', price: 35, description: 'To prevent premature sleep and make you happy.' }
];

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
      <p><b>Price:</b> ${product.price}</p>
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