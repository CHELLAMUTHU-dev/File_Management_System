import { useState } from "react";
import { useDropzone } from "react-dropzone";
import api from "../api/axiosInstance";

const FileUploader = ({onUpload}) => {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await api.post("/file/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (e) =>
          setProgress(Math.round((e.loaded * 100) / e.total)),
      });
      setMessage(`Uploaded:${res.data.file.filename}`);
      setProgress(0);
      onUpload()
    } catch (error) {
      setMessage(error.message);
      setProgress(0);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div
      {...getRootProps()}
      className={`dropzone ${isDragActive ? "active" : ""}`}
    >
      <input {...getInputProps()} />
      <p>Drag & drop files here, or click to select</p>

      {progress > 0 && (
        <div className="progress">
          <div className="progress-bar" style={{ width: `${progress}%` }}>
            {progress}%
          </div>
        </div>
      )}
      {message && <p>{message}</p>}
    </div>
  );
};

export default FileUploader;
