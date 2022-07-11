import { CheckCircle, Circle, Trash } from "phosphor-react";

import styles from "./ToDoItem.module.css";

interface IToDoItemProps {
  id: string;
  content: string;
  isChecked?: boolean;
  onDeleteToDo: ((id: string) => void);
  onFinishToDo: ((id: string) => void);
}


export function ToDoItem(props: IToDoItemProps) {
  const { id, content, isChecked, onDeleteToDo, onFinishToDo } = props;
  
  function handleDeleteToDo() {
    onDeleteToDo(id);
  }

  function handleFinishToDo() {
    onFinishToDo(id);
  }

  return (
    <div 
        id={id}
        className={isChecked ? `${styles.toDoItem} ${styles.toDoItemChecked}`: styles.toDoItem }
     >
      <button 
        className={styles.checkButton}
        onClick={handleFinishToDo}
        >
        {isChecked ? <CheckCircle color="var(--purple)"/> : <Circle />}
      </button>
      <span>{content}</span>
      <button className={styles.deleteButton}>
        <Trash 
          onClick={handleDeleteToDo}
        />
      </button>
    </div>
  )
}