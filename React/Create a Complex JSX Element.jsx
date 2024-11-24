const JSX = <div>
<h1>Hello React</h1>
<p>I Will Learn you and be the best React Developer in the world</p>
<ul>
<li>React</li>
<li>Java</li>
<li>Swift</li>
</ul>
</div>



// The Question - ✅🧑‍💻

// JSX allows us to represent complex HTML structures within JavaScript.
// However, in JSX, all elements must be wrapped in a single parent element.
// The example below demonstrates how to create multiple nested elements inside a `div`.

// Step 1: Define a constant named `JSX`.
// Step 2: Inside `JSX`, return a `div` element that contains:
// - An `h1` element with some text.
// - A `p` element with some text.
// - An unordered list (`ul`) containing three list items (`li`).

const JSX = ( // Define the JSX constant
  <div> // Parent div element starts here
    <h1>Welcome to JSX!</h1> {/* This is a heading element */}
    <p>This is a paragraph.</p> {/* This is a paragraph element */}
    <ul> {/* Unordered list of items */}
      <li>Item 1</li> {/* List item 1 */}
      <li>Item 2</li> {/* List item 2 */}
      <li>Item 3</li> {/* List item 3 */}
    </ul>
  </div> // Parent div element ends here
); 

// Notes:
// - JSX must return a single parent element, in this case, the `div` element.
// - Each child element (h1, p, ul) is nested within the `div`.
// - The parent element helps JSX transpile correctly without errors.

// Example usage:
// ReactDOM.render(JSX, document.getElementById('root'));
