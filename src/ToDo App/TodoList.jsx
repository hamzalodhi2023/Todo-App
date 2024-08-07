import { useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
function TodoList({ item, index, task, setTask }) {
   const [checkTask, setCheckTask] = useState();
   // handleDeleteTodo function
   const handleDeleteTodo = (item) => {
      const newTask = task.filter((task) => task !== item);
      setTask(newTask);
   };
   return (
      <li
         className="flex w-[30rem] items-center justify-between rounded-3xl bg-[#222d3f] px-5 py-5 text-xl text-white"
         key={index}
      >
         <span
            className={
               checkTask === false
                  ? "text-red-600 line-through"
                  : "no-underline"
            }
         >
            {item}
         </span>
         <span className="flex items-center justify-between gap-5">
            <IoCheckmarkDoneCircle
               onClick={() => {
                  if (checkTask === false) {
                     setCheckTask(true);
                  } else {
                     setCheckTask(false);
                  }
               }}
               className="cursor-pointer text-3xl text-green-600"
            />
            <MdDelete
               className="cursor-pointer text-3xl text-red-600"
               onClick={() => handleDeleteTodo(item)}
            />
         </span>
      </li>
   );
}

export default TodoList;
