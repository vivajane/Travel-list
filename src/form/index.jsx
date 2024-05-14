import { useState } from "react";
const Form = function ({ setNewCategories, newCategories }) {
  const [num, setNum] = useState("");
  const [text, setText] = useState("");

  const onSubmitHandlerHandler = (e) => {
    e.preventDefault();
    if (!text.length) return;
    <p>You can start adding now</p>;
    const newFact = {
      id: Math.round(Math.random() * 10000000),
      item: text,
      quantity: num,
    };
    setNewCategories((prev) => [newFact, ...prev]);
    setText("");
    setNum("");
  };
  return (
    <form onSubmit={onSubmitHandlerHandler}>
      <p>What do you need for your trip?</p>
      <select
        name=""
        id="num"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        name=""
        id=""
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="item"
      />
      <div>
        <button>ADD</button>
      </div>
    </form>
  );
};

export default Form;
