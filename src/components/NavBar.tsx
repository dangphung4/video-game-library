import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import dogIcon from "../assets/dog_icon.webp"
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props{
  onSearch : (search: string) => void;
}

const NavBar = ({onSearch} : Props)  => {
  return (
    <HStack padding="10px">
        <Image src={dogIcon} boxSize="60px"></Image>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar