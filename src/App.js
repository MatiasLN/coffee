import React, { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Logo from "./comps/Logo";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";

function App() {
  const [data, setData] = useState(null);

  return (
    <div className="App">
      <Logo />
      <Title />
      <UploadForm />
      <ImageGrid data={data} setData={setData} />
      {data && <Modal data={data} setData={setData} />}
    </div>
  );
}

export default App;
