import { Navbar } from "../components/Navbar";
import FileList from "../components/FileList";
import FileUploader from "../components/FileUploader";
import { useState, useEffect } from "react";
import api from "../api/axiosInstance";

export const Dashboard = () => {
  const [files, setFiles] = useState([]);

  const handleFileList = async () => {
    try {
      const { data } = await api.get("/file");
      setFiles(data);
    } catch (err) {
      console.error("Error fetching files:", err);
    }
  };


  useEffect(() =>{
    handleFileList()
  },[])



return(
  <>
    <Navbar />
    <div className="dashboard">
      <FileUploader onUpload  ={handleFileList}/>
      <FileList files={files} onDelete={handleFileList} />
    </div>
  </>
  )
};
