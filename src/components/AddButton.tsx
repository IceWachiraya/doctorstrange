import { ChangeEvent, useEffect, useRef } from "react";

type AddButtonProps={
  text:string;
  setText:(e: ChangeEvent<HTMLInputElement>)=>void;
  addTask:()=>void;


}
function AddButton({text,setText,addTask}:AddButtonProps) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(()=>{
    ref.current && (ref.current.focus())
  },[])
  return (
    <div>
      <input type="text" placeholder="Add a new todo" ref={ref} value={text} onChange={setText} />
      <button onClick={addTask}>Add</button>
    </div>
  )
}
export default AddButton