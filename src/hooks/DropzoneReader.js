import { useState } from "react";
import bytes from "bytes";
import _ from "lodash";
import Dropzone from "react-dropzone";
import FileReader from "@tanker/file-reader";
import { BsFillImageFill } from "react-icons/bs";
import {
  Input,
  Box,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";

const DropzoneReader = () => {
  const [uploadedFile, setUploadedFile] = useState([]);
  const [uploadedBytes, setUploadedBytes] = useState([]);

  const DropReader = async (acceptedFiles) => {
    acceptedFiles.forEach(async (file) => {
      const reader = new FileReader(file);
      const readFile = await reader.readAsDataURL();
      const arrayBuffer = await reader.readAsArrayBuffer();
      setUploadedFile(readFile);
      setUploadedBytes(bytes(arrayBuffer.byteLength));
    });
  }

  return (
    <HStack
      border="2px dashed #2C66B8"
      borderRadius="10px"
      borderSizing="border-box"
      fontSize="10px"
      fontFamily="TT Norms"
      fontWeight="500"
      color="rgba(63, 61, 86, 0.5)"
      cursor="pointer"
    >
      {!_.values(uploadedFile).every(_.isEmpty) && (
        <Image src={uploadedFile} w="100px" h="80px" objectFit="cover" borderRadius="8px" marginLeft="10px" />
      )}
      <HStack padding={!_.values(uploadedFile).every(_.isEmpty) ? '20px 60px 20px 20px' : '20px 60px'}>
        {_.values(uploadedFile).every(_.isEmpty) && (
          <Icon as={BsFillImageFill} fontSize="30px" />
        )}
        <Dropzone onDrop={acceptedFiles => DropReader(acceptedFiles)}>
          {({getRootProps, getInputProps}) => (
          <Box>
            <Box {...getRootProps()}>
              <Input {...getInputProps()} />
              <Text>Drag Image Here, or Click Here</Text>
              <Text>Image Size: {!_.values(uploadedFile).every(_.isEmpty) && uploadedBytes}</Text>
              <Text>Max Size: 5MB</Text>
            </Box>
          </Box>
          )}
        </Dropzone>
      </HStack>
    </HStack>
  )
}

export default DropzoneReader;