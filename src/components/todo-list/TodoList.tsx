import Todo from "../todo/Todo";
import styles from "./TodoList.module.css";
import { SORT_TODOS, TODO_LIST } from "../../utils/constants";

const TodoList = () => {
  return (
    <div className={styles["todolist_container"]}>
      <div className={styles["todolist_header"]}>
        <div>List of todo's</div>
        <div>
          <input
            placeholder="search"
            className={styles["search-input"]}
            onChange={() => {}}
          />
        </div>
        <div>
          <select
            className={styles["sort-todos"]}
            onChange={(e) => {
              console.log("target", e.target.value);
            }}
          >
            <option value="">Sort</option>
            {SORT_TODOS.map((todo) => (
              <option key={todo} value={todo}>
                {todo}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.todo}>
        {TODO_LIST.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
