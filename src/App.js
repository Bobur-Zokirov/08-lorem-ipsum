import { useState } from "react";
import data from "./constants/data";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const getText = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount < 0) {
      setCount(1);
    }
    if (amount > 8) {
      setCount(8);
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>Tired of boring Lorem Ipsum</h3>
      <form className="lorem-form" onSubmit={getText}>
        <label htmlFor="count">Paragraphs</label>
        <input
          type="number"
          className=""
          placeholder="0"
          value={count}
          min={0}
          max={8}
          name="count"
          id="count"
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item, idx) => {
          return (
            <p key={idx} className="result">
              {item}
            </p>
          );
        })}
      </article>
    </section>
  );
}

export default App;
