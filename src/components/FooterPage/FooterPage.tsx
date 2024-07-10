import { DeepPartial } from "@/src/util/types";
import {
  FlowbiteFooterTheme,
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

const customFooterTheme: DeepPartial<FlowbiteFooterTheme> = {
  root: {
    base: "p-4 pl-0 pr-0 bg-white dark:bg-gray-800 md:flex md:items-center md:justify-center container mx-auto",
  },
};

const FooterPage = () => (
  <Footer theme={customFooterTheme}>
    <FooterLinkGroup>
      <FooterLink href="https://pages.github.com/">Published with Github Pages</FooterLink>
    </FooterLinkGroup>
  </Footer>
);

export default FooterPage;
