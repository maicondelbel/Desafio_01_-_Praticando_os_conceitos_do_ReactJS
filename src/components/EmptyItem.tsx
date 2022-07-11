import { ClipboardText } from "phosphor-react";

import styles from "./EmptyItem.module.css";

export function EmptyItem () {
  return (
    <div className={styles.toDoList}>
      <ClipboardText size={56} />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  )
}