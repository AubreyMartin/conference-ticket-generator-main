import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const TicketForm: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]); // Store the first uploaded file
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="ticketform">
      {/* Title box */}
      <div className="titlebox">
        <div>
          <h1>Your Journey to Coding Conf 2025 Starts Here!</h1>
        </div>
      </div>
      <div className="subject">
        <p>Secure your spot at next year’s biggest coding conference.</p>
      </div>

      {/* Form box */}
      <form className="formbox">
        {/* Dropzone for Avatar Upload */}
        <div className="upload-container">
          <label>Upload Avatar</label>
          <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <img
              src="src/assets/images/icon-upload.svg"
              className="dropzone-icon"
            />{" "}
            {isDragActive ? (
              <p>Drop the image here...</p>
            ) : (
              <p>Drag & drop or click to upload</p>
            )}
            {file && <p>Selected file: {file.name}</p>}
          </div>
          <p className="info">
            <img src="src/assets/images/icon-info.svg" className="into-icon" />{" "}
            Upload your photo (JPG or PNG, max size: 500KB).
          </p>
        </div>

        <div>
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="fullname" className="Fullname" />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            className="EmailAddress"
            placeholder="example@email.com"
          />
        </div>
        <div>
          <label htmlFor="github">GitHub Username</label>
          <input
            type="text"
            id="github"
            className="GitHubUsername"
            placeholder="@yourusername"
          />
        </div>

        <div className="generatebutton">
          <button>Generate My Ticket</button>
        </div>
      </form>

      {/* Generate Button */}
    </div>
  );
};

export default TicketForm;
