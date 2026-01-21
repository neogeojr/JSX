const Bouncer = ({ age }) => {
  const reply =
    age < 18
      ? "Sorry kid, you can't come in."
      : age < 21
        ? "You can come in, but no drinking."
        : "Come in, you can have a drink.";

  return (
    <div>
      <p>
        <b>Bouncer:</b> How old are you?
      </p>
      <p>
        <b>You:</b> I am {age} years old.
      </p>
      <p>
        <b>Bouncer:</b> {reply}
      </p>
    </div>
  );
};
