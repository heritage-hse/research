import { Intro } from "./intro/intro";
import { Units } from "./units/units";
import { MapComponent } from "./map/map";
import { Team } from "./team/team";
import { Contact } from "./contact/contact";

export const Main = () => {
  return (
    <>
     <Intro />
              <Units  />
              <MapComponent  />
              <Team  />
              <Contact />
    
    </>
  );
};
