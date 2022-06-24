import React from "react";

const DataList = ({ data, setData, setEditData }) => {
  const handleComplete = (dt) => {
    setData(
      data.map((item) => {
        if (item.id === dt.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  const handleEdit = ({ id }) => {
    const cariData = data.find((dt) => dt.id === id);
    setEditData(cariData);
  };

  const handleDelete = ({ id }) => {
    setData(data.filter((dt) => dt.id !== id));
  };

  return (
    <div className="mt-5">
      <h5>Kegiatan Hari Ini</h5>
      {data.map((dt) => (
        <div className="list-group mb-2" key={dt.id}>
          <div className="list-group-item">
            <div className="input-group">
              <input
                type="text"
                value={dt.title}
                className="form-control"
                disabled
                style={dt.completed ? { background: "lightgreen" } : {}}
                onChange={(event) => event.preventDefault()}
              />
              &nbsp;
              <div className="float-end  ">
                <button
                  onClick={() => handleComplete(dt)}
                  className="btn btn-success"
                >
                  <i class="bi bi-check2-square"></i>
                </button>
                &nbsp;
                <button
                  onClick={() => handleEdit(dt)}
                  className="btn btn-warning"
                >
                  <i class="bi bi-pencil-square"></i>
                </button>
                &nbsp;
                <button
                  onClick={() => handleDelete(dt)}
                  className="btn btn-danger"
                >
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default DataList;
