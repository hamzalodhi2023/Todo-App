function TodoForm({ inputValue, setInputValue, task, setTask }) {
   return (
      <section className="flex w-full flex-col items-center justify-start">
         <form
            onSubmit={(e) => {
               e.preventDefault();
               if (!inputValue) return;
               if (task.includes(inputValue)) return setInputValue("");
               setTask((preTask) => [...preTask, inputValue]);
               setInputValue("");
            }}
         >
            <div className="flex h-[5rem] w-[30rem] items-center justify-center overflow-hidden rounded-3xl bg-red-500">
               <input
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                  type="text"
                  className="h-full w-[70%] pl-2 text-xl outline-none"
                  autoComplete="off"
               />
               <button
                  type="submit"
                  className="h-full w-[30%] bg-[#7041ff] text-xl font-[500] text-white outline-none"
               >
                  Add Task
               </button>
            </div>
         </form>
      </section>
   );
}

export default TodoForm;
