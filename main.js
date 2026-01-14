// await fetch('products.json') -> responseObject
// await responseObject.json() -> convert from json to a JS data structure
// await -> wait for things that take time - reading data from an url, text from a file
// note: products is an array of objects
let products = await(await fetch('products.json')).json();

// Create an main element and add to the DOM
let main = document.createElement('main');
document.querySelector('body').append(main);

// Render products ot the main element
// (why a /*html*/ comment? to trigger the VSC extension leet for higligthing)
main.innerHTML = `
  <h1>Our products</h1>
  <p>Our amazing products</p>
  ${products.map(product => /*html*/`
    <article>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p><b>Price:</b> ${product.price} SEK</p>
    </article>
  `).join('')}
`;