import { useState } from "react";
import api from "../api/axiosInstance";

export default function FileList({ files, onDelete }) {
  const [shareLink, setShareLink] = useState("");
  const [activeFile, setActiveFile] = useState(null);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/file/${id}`);
      onDelete();
    } catch (err) {
      console.error("Error deleting file:", err);
    }
  };

  const handleShare = async (id) => {
    try {
      const res = await api.post(`/file/share/${id}`);
      setShareLink(res.data.link);
      const file = files.find((f) => f._id === id);
      setActiveFile(file);
    } catch (err) {
      console.error("Error generating share link:", err);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareLink);
    alert("Link copied to clipboard!");
  };

  const closeModal = () => {
    setActiveFile(null);
    setShareLink("");
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
              <button onClick={() => handleShare(f._id)}>Share</button>
            </li>
          ))}
        </ul>
      )}

      {activeFile && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="modal"
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              width: "400px",
            }}
          >
            <h4>Share File</h4>
            <p>{activeFile.filename}</p>
            <input
              type="text"
              value={shareLink}
              readOnly
              style={{
                width: "100%",
                padding: "6px",
                margin: "10px 0",
                border: "1px solid #ccc",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={copyToClipboard}>Copy Link</button>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
