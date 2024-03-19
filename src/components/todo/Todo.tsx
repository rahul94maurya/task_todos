import styles from "./Todo.module.css";
import EditIcon from "../icons/Edit";
import DeleteIcon from "../icons/Delete";

interface TodoProps {
  id: number;
  title: string;
  description: string;
  dueDate: Date;
  status: string;
}

const Todo = ({ title, description, dueDate, status }: Partial<TodoProps>) => {
  const statusStyle = `${styles.status} ${
    styles[
      `${
        status === "In progress"
          ? "status-in-progress"
          : status === "Not Started"
          ? "status-not-started"
          : "status-completed"
      }`
    ]
  }`;

  const handleDeleteTodos = () => {
    console.log("pressed delete");
  };
  const handleEditTodos = () => {
    console.log("pressed edit");
  };

  return (
    <div className={styles.container}>
      <div className={styles["todo-information-container"]}>
        <div className={styles["todo-title"]}>{title}</div>
        <div className={styles["todo-description"]}>{description}</div>
        <div>Due Date : {dueDate?.toString()}</div>
      </div>

      <div className={statusStyle}>{status}</div>
      <EditIcon onPress={handleEditTodos} />
      <DeleteIcon onPress={handleDeleteTodos} />
    </div>
  );
};

export default Todo;
