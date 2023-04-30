import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  HStack,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const Search = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose} size="full" isCentered>
    <ModalOverlay />
    <ModalContent borderRadius={0} bg="transparent" boxShadow="none">
      <ModalCloseButton bg="white" borderRadius="50%" />
      <ModalBody display="flex" borderRadius={0} justifyContent="center">
        <VStack
          alignItems="center"
          justifyContent="center"
          width="70%"
        >
          <HStack
            alignSelf="center"
            justifyContent="center"
            width="100%"
            color="white"
          >
            <InputGroup>
              <InputLeftElement pointerEvents="none" />
              <Input
                placeholder="Search website" 
                variant="filled"
                bgColor="transparent"
                name="search"
                color="#FFF"
                height="80px"
                fontSize={[20, 20, 30, 40]}
                _focus={{ bgColor: 'transparent' }}
                _active={{ bgColor: 'transparent' }}
                _hover={{ bgColor: 'transparent' }}
              />
            </InputGroup>
            <Button
              bgColor="transparent"
              color="#FFF"
              fontSize={[20, 20, 30, 40]}
              _focus={{ bgColor: 'transparent' }}
              _active={{ bgColor: 'transparent' }}
              _hover={{ bgColor: 'transparent' }}  
            >
              <Search2Icon />
            </Button>
          </HStack>
          <Divider opacity="1" marginBottom="10px" color="#FFF" />
        </VStack>
      </ModalBody>
    </ModalContent>
  </Modal>
);

export default Search;
