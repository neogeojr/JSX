// Implicit return using curly braces
const App = () => (
  <div>
    <RandomChoice choices={["red", "green", "yellow"]} />
    <Animal name="Stevie Chick" species="chicken" emoji="🐔" isCute={true} />
    <Animal name="Patrick" species="red fox" emoji="🦊🦊" isCute={false} />
    <RandomNum />
    <RandomNum />
    <RandomNum />
    <Bouncer age={19} />
    <Bouncer age={15} />
    <Bouncer age={39} />
    <TodoList todos={["Walk Chickens", "Feed Chickens", "Eat Chickens"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
