"use client";
import { useState } from "react";

export default function UploadMedia() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const handleUpload = async () => {
    if (!file) return setMessage("Select a file first");

    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    if (res.ok) {
      setMessage("Upload successful!");
      setFileUrl(data.url); // public URL
    } else {
      setMessage(`Error: ${data.error}`);
    }
  };

  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload}>Upload</button>
      <p>{message}</p>
      {fileUrl && (
        <div>
          <p>File URL:</p>
          <img src={fileUrl} alt="Uploaded File" width={100} height={100} />
        </div>
     
      )}
    </div>
  );
}
