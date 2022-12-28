const TaskInput = (props) => {
  const { inputValue, setInputValue, handleOnClick } = props;
  return (
    <div className="row justify-content-center">
      <div className="col-6 d-flex">
        <input
          type="text"
          className="form-control"
          placeholder="Task name..."
          value={inputValue.text}
          onChange={(e) => {
            setInputValue({ ...inputValue, text: e.target.value });
          }}
        />
        <button className="btn btn-success ms-4" onClick={handleOnClick}>
          {inputValue.type}
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
