import Navigation from './components/Navigation/Navigation';
import Introduction from './components/Introduction/Introduction';
import Content from './components/Contents/Content';
import OtherContent from './components/Contents/OtherContent';
import Footer from './components/Footer/Footer';


import content1 from './resources/01.jpg'
import content2 from "./resources/02.jpg";
import content3 from "./resources/03.jpg";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Navigation />
      <Introduction />
      <Content label="For those about to rock..." image={content1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem.
      </Content>
      <OtherContent label="We salute you!" image={content2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem.
      </OtherContent>
      <Content label="Let there be rock!" image={content3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem.
      </Content>
      <Footer/>
    </>
  );
}

export default App;
