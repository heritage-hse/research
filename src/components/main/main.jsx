import { Intro } from "../intro/intro";
import { Geography } from "../geography/geography";
import { Units } from "../units/units";
import { Contact } from "../contact/contact";
import { Team } from "../team/team";

export const Main = () => {
  return (
    <>
      <Intro />
      <Geography />
      <Units />
      <Team />
      <Contact />
    </>
  );
};
