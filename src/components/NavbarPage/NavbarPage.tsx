import { DeepPartial } from "@/src/util/types";
import {
  FlowbiteNavbarTheme,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

const customNavbarTheme: DeepPartial<FlowbiteNavbarTheme> = {
  root: {
    base: "p-4 pl-0 pr-0 dark:bg-gray-800 md:flex md:items-center md:justify-between container mx-auto",
  },
};

const NavbarPage = () => (
  <Navbar theme={customNavbarTheme}>
    <NavbarBrand as={Link} href="https://israelramosm.github.io/">
      <span className=" whitespace-nowrap text-xl font-semibold dark:text-white pl-4 md:pl-2 lg:pl-0">
        Israel Ramos
      </span>
    </NavbarBrand>
    <NavbarToggle />
    <NavbarCollapse>
      <NavbarLink as={Link} href="/">
        Home
      </NavbarLink>
      <NavbarLink as={Link} href="/sandbox">
        Sandbox
      </NavbarLink>
      <NavbarLink as={Link} href="/#experience">
        Experience
      </NavbarLink>
      <NavbarLink as={Link} href="/#skills">
        Skills
      </NavbarLink>
      <NavbarLink as={Link} href="/#languages">
        Languages
      </NavbarLink>
      <NavbarLink as={Link} href="/#education">
        Education
      </NavbarLink>
      <NavbarLink as={Link} href="/#certifications">
        Certification
      </NavbarLink>
    </NavbarCollapse>
  </Navbar>
);

export default NavbarPage;
