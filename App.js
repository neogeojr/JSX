// Implicit return using curly braces
const App = () => (
  <div>
    <Animal name="s" species="SS" emoji="🐔" />
    <Animal name="patrick" species="SS" emoji="🦊🦊" />
    <RandomNum />
    <RandomNum />
    <RandomNum />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
