import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone </LinkTitle>
          <LinkItem href="tel:+491715617301">+491715617301</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:alexander@puschkin.co">
            {" "}
            alexander@puschkin.co{" "}
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Alexander Puschkin | (c) 2022 Berlin</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/alexanderpuschkinberlin">
            <AiFillGithub size="2rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/puschkin/">
            <AiFillLinkedin size="2rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/i_amaberliner/">
            <AiFillInstagram size="2rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
