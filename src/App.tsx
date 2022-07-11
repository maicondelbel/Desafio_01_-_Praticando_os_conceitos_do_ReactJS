import {v4 as uuidV4} from "uuid";

import { Header } from './components/Header'
import { ToDoItem } from './components/ToDoItem'
import { EmptyItem } from './components/EmptyItem'

import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";

import styles from "./App.module.css"

interface IToDo {
  id: string;
  description: string;
  finished: boolean;
}

const ToDoList: IToDo[] = [];

export function App() {
  
  const [newToDoText, setNewToDoText] = useState('');
  const [toDos, setToDos] = useState(ToDoList);

  const numberOfToDos = toDos.length;
  const numberOfToDosFinished = toDos.filter(items => items.finished === true).length;
  const isInputEmpty = newToDoText.length === 0;

  function handleNewToDoChange(event: ChangeEvent<HTMLInputElement>) {
    setNewToDoText(event.target.value);
  }
  
  function handleCreateNewToDo(event: FormEvent) {
    event.preventDefault();

    const newToDo = {
      id: uuidV4(),
      description: newToDoText,
      finished: false
    }

    setToDos([...toDos, newToDo]);
    setNewToDoText('');
  }

  function deleteToDo(toDoId: string) {
    const toDoListAfterDeleteOne = toDos.filter(item => {
      return item.id !== toDoId;
    })

    setToDos(toDoListAfterDeleteOne);
  }

  function finishToDo(toDoId: string) {
    const toDoListAfterFinishOne = toDos.map(item => {
      if(item.id === toDoId) {
        (item.finished) ? item.finished = false : item.finished = true;
      }
      return item;
    })

    setToDos(toDoListAfterFinishOne);
  }

  return (
    <>
      <Header />
      <div className={styles.contentPage}>
        <main>
        <div className={styles.formContent}>
          <form onSubmit={handleCreateNewToDo} >
            <div className={styles.inputBox}>
              <input 
              placeholder='Adicione uma nova tarefa...' 
              type="text" 
              value={newToDoText}
              onChange={handleNewToDoChange}
              required
              />
              <button 
                type='submit'
                disabled={isInputEmpty}
                >Criar <PlusCircle size={18} />
              </button>
            </div>
          </form>
        </div>
          <div className={styles.toDoContent}>
            <header>
              <div className={styles.toDoCreatedBox}>
                <strong>Tarefas criadas</strong>
                <span>{numberOfToDos}</span>
              </div>
              <div className={styles.toDoCompletedBox}>
                <strong>Concluídas</strong>
                <span>{`${numberOfToDosFinished} de ${numberOfToDos}`}</span>
              </div>
            </header>
            {
              (numberOfToDos > 0) ? 
                toDos.map((item) => {
                  return (
                    <ToDoItem 
                      key={item.id}
                      id={item.id}
                      content={item.description} 
                      isChecked={item.finished}
                      onDeleteToDo={deleteToDo}
                      onFinishToDo={finishToDo}
                    />
                  )
                }) : 
              <EmptyItem /> 
            }
          </div> 
        </main>
      </div>
    </>
  )
}
