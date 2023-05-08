import { useState } from "react";
import { MdCloudUpload, MdDelete, MdBackup } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import "../uploader.css";
import ProgressBar from "./ProgressBar";

function Uploader() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  const [desc, setDesc] = useState("");
  const [upload, setUpload] = useState(false);
  const [file, setFile] = useState(null);

  return (
    <main className="uploader">
      <form
        action=""
        onClick={() => document.querySelector(".input-field").click()}
      >
        <input
          type="file"
          accept="image/*"
          name=""
          id=""
          className="input-field"
          hidden
          onChange={(e) => {
            let selected = e.target.files[0];
            selected && setFileName(selected.name);
            if (selected) {
              setImage(URL.createObjectURL(selected));
              setFile(selected);
            }
          }}
        />
        {image ? (
          <img src={image} width={500} height={300} alt={fileName} />
        ) : (
          <div>
            <MdCloudUpload color="#1475cf" size={60} />
            <p>Browse Files to Upload</p>
          </div>
        )}
      </form>
      <section className="uploaded-row">
        <MdBackup
          color="1475cf"
          size={30}
          onClick={() => {
            setUpload(true);
          }}
        />
        <span>
          {fileName}
          <MdDelete
            onClick={() => {
              setImage(null);
              setFileName("No selected file");
              setDesc("");
            }}
          />
        </span>
      </section>
      {upload && <ProgressBar file={file} setFile={setFile} />}
    </main>
  );
}

export default Uploader;
