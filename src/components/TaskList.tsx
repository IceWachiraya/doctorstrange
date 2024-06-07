interface ITaskList {
  children: React.ReactNode;
}
function TaskList({ children }: ITaskList) {
  return (
    <div>
      <ul>{children}</ul>
    </div>
  );
}

export default TaskList;
