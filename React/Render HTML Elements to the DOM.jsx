const JSX = (
  <div id>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// Add your code below this line

ReactDOM.render(JSX, document.getElementById("challenge-node"));


// The Question - ✅🧑‍💻
// JSX is a syntax extension that allows us to write readable HTML directly within JavaScript.
// React uses JSX elements to build and render the User Interface (UI).

// ReactDOM provides a rendering API that allows us to render React elements to the HTML DOM.
// The main method used is ReactDOM.render(), which accepts two arguments:
// - The first argument is the React element or component to render.
// - The second argument is the target DOM node where the element should be rendered.

// Example: The `JSX` constant below defines a simple JSX element.
const JSX = <h1>Hello, world!</h1>; // A JSX element with an <h1> tag and some text.

// To render this JSX element to the DOM:
// - Call ReactDOM.render() after the JSX element declaration.
// - Pass `JSX` as the first argument.
// - Use `document.getElementById()` to select the target node with id='challenge-node'.

ReactDOM.render(JSX, document.getElementById('challenge-node')); 

// Notes:
// - ReactDOM.render() ensures that the JSX is injected into the DOM.
// - The target node with id='challenge-node' must exist in the HTML structure.
// - The ReactDOM.render() method is critical to display React elements on the web page.

// For example:
// <div id="challenge-node"></div>
// The above div acts as the container where the React JSX is rendered.
