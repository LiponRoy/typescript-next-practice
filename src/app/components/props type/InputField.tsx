import React from "react";

interface useStateProps{
    todo: string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
}

const InputField = ({todo,setTodo}:useStateProps) => {

  return (
    <div>
      <form>
<br></br>
        <input type="input" value={todo} onChange={(e)=>setTodo(e.target.value)} className=" bg-slate-400" />
      
      </form>
    </div>
  );
};

export default InputField;
