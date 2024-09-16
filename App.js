const headd = React.createElement('div', {id:'parent'},[ React.createElement('div', {id:'child'}, [React.createElement('h1', {}, 'Am coming h1 Tag'),React.createElement('h2', {}, 'Am coming h2 Tag')]), React.createElement('div', {id:'child2'}, [React.createElement('h1', {}, 'Am coming h1 Tag'),React.createElement('h2', {}, 'Am coming h2 Tag')])]);

const rot = ReactDOM.createRoot(document.getElementById("root"));

rot.render(headd);

//---------------------------------------------------------------
const heading = React.createElement("h1", {id:'heading'}, "Hello");

// heading is a object

console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading); // render will insert the heading object in the root. and render will converts the object to html element