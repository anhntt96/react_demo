import { useContext } from "react";
import StoreContext from "../store/Context";
import { addContact, updateData, deleteContact } from "../store/action";
// import
const Homepage = () => {
  const [state, dispatch] = useContext(StoreContext);

  const { list, name, phone, searchText } = state;

  const handleUpdate = (event) => {
    const key = event.target.name;
    const value = event.target.value;
    dispatch(updateData({ [key]: value }));
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-8 d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            name="name"
            onChange={handleUpdate}
          />
          <input
            type="text"
            className="form-control ms-3"
            placeholder="Phone number"
            name="phone"
            value={phone}
            onChange={handleUpdate}
          />
          <button
            className="btn btn-success ms-3"
            onClick={() => {
              dispatch(addContact());
            }}
          >
            Add
          </button>
        </div>
      </div>
      <div className="row mt-3 justify-content-center">
        <div className="col-8 d-flex justify-content-between">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            name="searchText"
            value={searchText}
            onChange={handleUpdate}
          />
        </div>
      </div>
      <div className="row mt-5 justify-content-center">
        <div className="col-8">
          <ul className="list-group">
            {list
              .filter((item) => item.name.toUpperCase().includes(searchText.toUpperCase()))
              .map((item) => {
                return (
                  <li className="list-group-item d-flex flex-row justify-content-between" key={item.id}>
                    <span>{item.name}</span> <span>{item.phone} <button className="btn btn-danger btn-sm ms-5" onClick={ () =>{
                        dispatch(deleteContact(item.id))
                    }}>Delete</button></span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
