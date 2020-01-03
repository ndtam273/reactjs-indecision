console.log('App.js is running!');


var templateObj = {
   title: 'Indecision App',
   subTitle: 'Put your life in a hand of a computer',
   options: ['One', 'Two']
};

// JSX - Javascript XML
var template = (
    <div>
        <h1>{templateObj.title}</h1>
        {templateObj.subTitle && <p>{templateObj.subTitle}</p>}
        <p>{templateObj.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
   name : 'Tam',
   age : 30,
   location : 'Ho Chi Minh'
};
function getLocation(location) {
  if (location) {
      return <p>Location: {location}</p>;
  } 
}
// Create a template JSX expression
var template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        <p>This is my first challenge</p>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
        
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

