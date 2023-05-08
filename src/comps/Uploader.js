import { useState, useEffect } from "react";
import { MdCloudUpload, MdDelete, MdBackup } from "react-icons/md";
import "../uploader.css";
import ProgressBar from "./ProgressBar";

function Uploader() {
  const [fileName, setFileName] = useState("No selected file");
  const [desc, setDesc] = useState("");
  const [upload, setUpload] = useState(false);
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (upload) {
      if (!file) {
        setUpload(false);
      }
    }
  }, [upload, file]);

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
              setFile(selected);
            }
          }}
        />
        {file ? (
          <img
            src={URL.createObjectURL(file)}
            width={500}
            height={300}
            alt={fileName}
          />
        ) : (
          <div>
            <MdCloudUpload color="#1475cf" size={60} />
            <p>Browse Files to Upload</p>
          </div>
        )}
      </form>
      <input
        type="text"
        className="desc-input"
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <section className="uploaded-row">
        <MdBackup
          color="1475cf"
          size={30}
          onClick={() => {
            setUpload(true);
          }}
        />
        <span>
          {file && file.name}
          <MdDelete
            onClick={() => {
              setFileName("No selected file");
              setDesc("");
              setFile(null);
            }}
          />
        </span>
      </section>
      {upload && file && (
        <ProgressBar
          file={file}
          setFile={setFile}
          description={desc}
          setDescription={setDesc}
        />
      )}
    </main>
  );
}

export default Uploader;
