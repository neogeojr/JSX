const Bouncer = ({ age }) => {
  let reply;
  let img;

  if (age < 18) {
    reply = "Sorry kid, you can't come in.";
    img = "🛑";
  } else if (age < 21) {
    reply = "You can come in, but no drinking.";
    img = "⚠️";
  } else {
    reply = "Come in, you can have a drink.";
    img = "🍺";
  }

  return (
    <div>
      <p>
        <b>Bouncer:</b> How old are you?
      </p>
      <p>
        <b>You:</b> I am {age} years old.
      </p>
      <p>
        <b>
          Bouncer: {reply} {img}
        </b>
      </p>
    </div>
  );
};
