import React, { useEffect } from "react";
import { v4 as uuidV4 } from "uuid";

const Form = ({ input, setInput, data, setData, editData, setEditData }) => {
  const updateData = (title, id, completed) => {
    const newData = data.map((dt) =>
      dt.id === id ? { title, id, completed } : dt
    );
    setData(newData);
    setEditData("");
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editData) {
      setData([...data, { id: uuidV4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateData(input, editData.id, editData.completed);
    }
  };

  useEffect(() => {
    if (editData) {
      setInput(editData.title);
    } else {
      setInput("");
    }
  }, [setInput, setData, editData]);

  return (
    <form onSubmit={onFormSubmit}>
      <div className="input-group mb-4">
        <input
          type="text"
          placeholder="Masukan Kegiatan.."
          className="form-control"
          value={input}
          onChange={onInputChange}
          required
        />
        <input
          type="submit"
          className={
            editData ? "btn btn-warning float-end" : "btn btn-primary float-end"
          }
          value={editData ? "Ubah" : "Simpan"}
        />
      </div>
    </form>
  );
};
export default Form;
