import { useEffect, useState } from "react";
import {
  FileItem,
  Dropzone,
  FullScreenPreview,
} from "@dropzone-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useFileReader } from "../../Hooks";

const DropzoneUI = ({
  isOpen,
  onClose,
  title,
  fileType,
  maxFiles,
  maxFileSize,
  dropzoneFiles,
  Asset
}) => {
  const [files, setFiles] = useState([]);
  const [imageSrc, setImageSrc] = useState(undefined);
  const { DropReader, uploadedFile } = useFileReader();

  useEffect(() => {
    dropzoneFiles(files)
  }, [files]);
  
  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
  };

  const onDelete = (id) => {
    setFiles(files.filter((x) => x.id !== id));
  };
  
  const handleSee = (imageSource) => {
    setImageSrc(imageSource);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton
            w="15px"
            h="15px"
            fontSize="7px"
            color="white"
            bg="#3f3d56"
            borderRadius="50%"
          />
          <ModalBody>
            <Text
              textAlign="center"
              color="#3f3d56"
              lineHeight="50px"
              fontSize={['2rem', '2rem', '2rem', '1.5rem']}
            >
              {title ? title : 'File upload'}
            </Text>
            <Divider borderBottom="3px solid #3f3d56" opacity="1" marginBottom="10px" />
            <Stack position="relative">
              <Dropzone
                onChange={updateFiles}
                value={files}
                maxFiles={maxFiles ? maxFiles : 10}
                maxFileSize={maxFileSize ? maxFileSize : 2998000}
                accept={fileType ? fileType : ''}
                fakeUploading
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
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DropzoneUI;