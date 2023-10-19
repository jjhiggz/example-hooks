import { useState } from "react";
import "./App.css";
import { useOnMount } from "./hooks/useOnMount";
import { useArrayState } from "./hooks/useArrayState";

type Todo = {
  title: string;
  id: number;
};

const fetchTodos = () =>
  Promise.resolve([
    { title: "todo 1", id: 1 },
    { title: "todo 2", id: 2 },
  ]);

function App() {
  const [count, setCount] = useState(0);
  const [titleInput, setTitleInput] = useState("");
  const {
    arr: todos,
    deleteBy: deleteTodoBy,
    push: pushTodo,
    setArr: setTodos,
  } = useArrayState<Todo>([]);

  useOnMount(() => {
    alert("mounted");
    fetchTodos().then(setTodos);
  });

  return (
    <>
      <div className="card">
        <ol>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title}
              {"   "}{" "}
              <button onClick={() => deleteTodoBy((t) => t.id === todo.id)}>
                X
              </button>
            </li>
          ))}
        </ol>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log({
              id: Date.now(),
              title: titleInput,
            });
            pushTodo({
              id: Date.now(),
              title: titleInput,
            });
            setTitleInput("");
          }}
        >
          <input
            type="text"
            placeholder="new title"
            onChange={(e) => {
              setTitleInput(e.target.value);
            }}
            value={titleInput}
          />
          <input type="submit" value={"add todo"} />
        </form>
      </div>
    </>
  );
}

export default App;
