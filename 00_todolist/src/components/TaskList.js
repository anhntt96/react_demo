const TaskList = (props) => {
  const { tasks, deleteTask, updateTask } = props;

  return (
    <div className="row justify-content-center mt-4">
      <div className="col-6">
        <ul className="list-group">
          {tasks.map((task) => {
            return (
              <li className="list-group-item" key={task.id}>
                <div className="d-flex flex-row justify-content-between">
                  {task.text}
                  <div>
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => {
                        updateTask(task.id);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm ms-2"
                      onClick={() => {
                        deleteTask(task.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
