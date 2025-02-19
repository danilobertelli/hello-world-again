import { useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Task name"
            className={styles.input}
          />
          <button onClick={handleAddItem} className={styles.button}>
            Add Task
          </button>
        </div>
        {items.length > 0 ? (
          <ul className={styles.list}>
            {items.map((item, index) => (
              <li key={index} className={styles.listItem}>
                {item}
                <input type="checkbox" className={styles.checkbox} />
              </li>
            ))}
          </ul>
        ) : (
          <>
            <p>Congratulations, or not? You don't have any task.</p>
            <p>Start by adding a new task above</p>
          </>
        )}
      </div>
      <div>
        <img
          src="/logo/todo-list-logo.svg"
          alt="ToDo list logo"
          className={styles.logo}
        />
      </div>
    </div>
  );
};

export { Home };
