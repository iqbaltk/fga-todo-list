import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import DataList from "./components/DataList";
import { useEffect, useState } from "react";

const App = () => {
  const initialState = JSON.parse(localStorage.getItem("data")) || [];
  const [input, setInput] = useState("");
  const [data, setData] = useState(initialState);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  return (
    <div className="container">
      <div class="row justify-content-center">
        <div class="col-5 border card mt-5 shadow-lg">
          <div className="p-3">
            <Header />
            <Form
              input={input}
              setInput={setInput}
              data={data}
              setData={setData}
              editData={editData}
              setEditData={setEditData}
            />
            <DataList data={data} setData={setData} setEditData={setEditData} />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
