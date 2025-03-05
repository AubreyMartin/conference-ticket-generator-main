import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";

const TicketForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");

  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]); // Store the first uploaded file
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fileURL = file ? URL.createObjectURL(file) : null; // Convert to URL

    navigate("/ticket", {
      state: { name, email, github, fileURL },
    });
  };

  return (
    <div className="ticketform">
      <div className="titlebox">
        <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
      </div>
      <div className="subject">
        <p>Secure your spot at next year’s biggest coding conference.</p>
      </div>

      <form className="formbox" onSubmit={handleSubmit}>
        {/* Dropzone for Avatar Upload */}
        <div className="upload-container">
          <label>Upload Avatar</label>
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <img
              src="src/assets/images/icon-upload.svg"
              className="dropzone-icon"
            />
            {isDragActive ? (
              <p>Drop the image here...</p>
            ) : (
              <p>Drag & drop or click to upload</p>
            )}
            {file && <p>Selected file: {file.name}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            id="fullname"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="github">GitHub Username</label>
          <input
            type="text"
            id="github"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
          />
        </div>

        <div className="generatebutton">
          <button type="submit">Generate My Ticket</button>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
