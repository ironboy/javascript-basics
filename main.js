// Grab the h1 element 
let h1 = document.querySelector('h1');

// Change the text of the h1 element
h1.textContent = 'Hello from JavaScript!';

// Create an article element 
let article = document.createElement('article');

// Change/add text to the p element
article.innerHTML = `
<p>This is a p element from JS. I can also add lists from JS:</p>
<ul>
  <li>I am a bullet point and I'm okay</li>
  <li>I am another one</li>
</ul>
`;

// Add the p element somewhere in the DOM
document.querySelector('body').append(article);