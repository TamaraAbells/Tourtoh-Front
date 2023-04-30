import { Dropzone, FileItem, FullScreenPreview } from "dropzone-ui";
import { useState } from "react";
export default function DropzoneUI() {
  const [files, setFiles] = useState([]);
  const [imageSrc, setImageSrc] = useState(undefined);
  const updateFiles = (incommingFiles) => {
    console.log("incomming files", incommingFiles);
    setFiles(incommingFiles);
  };
  const onDelete = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };
  return (
    <Dropzone
      onChange={updateFiles}
      value={files}
      maxFiles={10}
      maxFileSize={2998000}
    >
      {files.map((file) => (
        <FileItem
          {...file}
          onDelete={onDelete}
          onSee={handleSee}
          preview
          info
          hd
        />
      ))}
      <FullScreenPreview
        imgSource={imageSrc}
        openImage={imageSrc}
        onClose={(e) => handleSee(undefined)}
      />
    </Dropzone>
  );
}