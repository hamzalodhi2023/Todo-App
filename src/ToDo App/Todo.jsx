import { useEffect, useState } from "react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDate from "./TodoDate";

function Todo() {
   const [inputValue, setInputValue] = useState("");
   const todoKey = "reactTodo";
   const [task, setTask] = useState(() => {
      const rowTodo = localStorage.getItem(todoKey);
      if (!rowTodo) return [];
      return JSON.parse(rowTodo);
   });

   const [dateTime, setDateTime] = useState("");

   // add data in local storage

   localStorage.setItem(todoKey, JSON.stringify(task));

   // TOdo Date - Time

   useEffect(() => {
      const interval = setInterval(() => {
         const date = new Date();
         const formateDate = date.toLocaleDateString();
         const formateTime = date.toLocaleTimeString();
         setDateTime(formateDate + " - " + formateTime);
      }, 1000);
      return () => clearInterval(interval);
   }, []);

   return (
      <>
         <div className="flex min-h-screen w-full flex-col items-center justify-start bg-[#141d31]">
            <header className="flex w-full flex-col items-center justify-center gap-4 py-5">
               <h1 className="text-7xl font-[400] text-white">Todo List</h1>
               <TodoDate dateTime={dateTime} />
            </header>
            <TodoForm
               inputValue={inputValue}
               setInputValue={setInputValue}
               task={task}
               setTask={setTask}
            />
            <section className="flex w-full items-center justify-center py-5">
               <ul className="flex flex-col items-center justify-center gap-5">
                  {task.map((item, index) => {
                     return (
                        <TodoList
                           item={item}
                           index={index}
                           key={index}
                           task={task}
                           setTask={setTask}
                        />
                     );
                  })}
                  <button
                     onClick={() => {
                        setTask([]);
                     }}
                     className="bg-orange-700 px-5 py-3 text-xl text-white hover:bg-red-600"
                  >
                     Clear All
                  </button>
               </ul>
            </section>
         </div>
      </>
   );
}

export default Todo;
