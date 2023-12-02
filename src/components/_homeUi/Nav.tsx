import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { FiHome } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";

import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Menubar className="flex items-center justify-center gap-16 p-5">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer hover:scale-[110%] transition-transform">
          <Link to={"/"}>
            <FiHome size={"30px"} />
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer hover:scale-[110%] transition-transform">
          <Link to={"/admin"}>
            <RiAdminLine size={"30px"} />
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Nav;
