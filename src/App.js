import React, { useState } from "react";
import Title from "./comps/Title";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Uploader from "./comps/Uploader";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedDesc, setSelectedDesc] = useState("");

  return (
    <div className="App">
      <Title />
      <Uploader />
      <ImageGrid
        setSelectedImg={setSelectedImg}
        setSelectedDesc={setSelectedDesc}
      />
      {selectedImg && (
        <div>
          <Modal
            selectedImg={selectedImg}
            setSelectedImg={setSelectedImg}
            desc={selectedDesc}
            setSelectedDesc={setSelectedDesc}
          />
        </div>
      )}
    </div>
  );
}

export default App;
