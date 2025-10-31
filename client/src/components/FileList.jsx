import { useEffect } from "react";
import api from "../api/axiosInstance";

export default function FileList({files, onDelete}) {


  const handleDelete = async (id) => {
    try {
      await api.delete(`/file/${id}`);
      onDelete()
    } catch (err) {
      console.error("Error deleting file:", err);
    }
  };


  return (
    <div className="file-list">
      <h3>Uploaded Files</h3>
      {files.length === 0 ? (
        <p>No files uploaded yet.</p>
      ) : (
        <ul>
          {files.map((f) => (
            <li key={f._id}>
              <span>{f.filename}</span>
              <button onClick={() => handleDelete(f._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
