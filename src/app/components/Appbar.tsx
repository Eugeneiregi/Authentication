import { Button, Navbar, NavbarContent, NavbarItem } from "@nextui-org/react";
// import SigninButton from "./SigninButton";
import Link from "next/link";

const Appbar = () => {
    return (
        <Navbar>
            
            <NavbarContent className="sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/">
                        Home
                    </Link>
                </NavbarItem>
                
            </NavbarContent>
            <NavbarContent justify="end">
                {/* <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem> */}
                <NavbarItem>
                    <Button as={Link} color="primary" href="/auth/signup" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
};

export default Appbar;