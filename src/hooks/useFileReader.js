import { useState, useEffect } from "react";
import FileReader from "@tanker/file-reader";
import bytes from "bytes";

export const useFileReader = (acceptedFiles) => {
  const [uploadedFile, setUploadedFile] = useState([]);
  const [uploadedBytes, setUploadedBytes] = useState([]);

  const DropReader = async (acceptedFiles) => {
    acceptedFiles.forEach(async ({ file }) => {
      const reader = new FileReader(file);
      const readFile = await reader.readAsDataURL();
      const arrayBuffer = await reader.readAsArrayBuffer();
      setUploadedFile((uploadedFile) => [...uploadedFile, readFile]);
      setUploadedBytes((uploadedBytes) => [...uploadedBytes, bytes(arrayBuffer.byteLength)]);
    });
    setUploadedFile(() => []);
    setUploadedBytes(() => []);
  };

  useEffect(async() => {
    await DropReader(acceptedFiles);
  }, [acceptedFiles]);
  
  return { DropReader, uploadedFile, uploadedBytes };
};
