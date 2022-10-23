import "./App.css";
// import { About } from "./components/about/about";
import { MapComponent } from "./components/map/map";
// import { NavbarComponent } from "./components/navbar/navbar";
import { Header } from "./components/header/header";
import { Team } from "./components/team/team";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";
import { Intro } from "./components/intro/intro";
import { Units } from "./components/units/units";
// import { Section } from "./components/section/section";
// import { Geography } from "./components/geography/geography";

function App() {
  return (
    <div className="App">
      {/* <NavbarComponent /> */}
      <Header />
      {/* <About /> */}
      <Intro />
      {/* <Geography /> */}
      <MapComponent id='geography'/>
      <Units id='units'/>
      <Team id='team'/>
      {/* <Section title='Типология'></Section>
      <Section title='Экономика'></Section>
      <Section title='Социология'></Section>
      <Section title='Документы'></Section> */}
      <Contact id='contact' />
      <Footer />
    </div>
  );
}

export default App;
