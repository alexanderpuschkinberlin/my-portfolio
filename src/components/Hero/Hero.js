import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello <br />
          This is my Portfolio
        </SectionTitle>
        <SectionText>
          My first gaming device was a Win 95 PC and since than I am fascinated
          by technology and the problems it solves. Today dev skills are
          important - so here I am and this is what I have been coding so far
        </SectionText>
        <Button onClick={() => (window.location = "https://puschkin.co")}>
          Learn more about me
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
