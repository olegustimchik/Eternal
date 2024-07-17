import "@/assets/styles/pages/home.css";
import HomePageBackground from "@public/HomePageBackground-crop-ddd05278.png";
import Albert             from "@public/albert-f3553b03.png";
import conversation       from "@public/conversation-crop-c49be2c0.png";
import Ellipse01          from "@public/ellipse01-00f9e7e9.svg";
import Ellipse02          from "@public/ellipse02-05a8392f.svg";
import Elon               from "@public/elon-de8cf9c9.png";
import King               from "@public/king-d8f4da2d.png";
import Steven             from "@public/steve-bcb8516d.png";
import Tereza             from "@public/tereza-6dde73d3.png";

import { Page }           from "./page";

export function HomePage() {
  return (
    <>
      <Page>
        {/* <div style={ {
        height: "100px", width: "100px", position: "absolute", top: "200px", left: "200px",
      }}>
        <EternalLogo></EternalLogo> */}
        <div className="home-container">
          <div className="text-container">
            <h1 className="ask-text">ask important people important questions</h1>
            <p className="text-after-ask">Choose a question to quickly get a realistic response</p>
          </div>
          <div className="home-message-container">
            <button className="home-message-button"><span className="home-message-text-container"><p className="home-message-text">What did you want to be when you grew up?</p></span></button>
            <button className="home-message-button"><span className="home-message-text-container"><p className="home-message-text">What is the meaning of life?</p></span></button>
            <button className="home-message-button"><span className="home-message-text-container"><p className="home-message-text">What is your greatest accomplishment?</p></span></button>
          </div>
          <div className="background-container">
            <div className="conversation">
              <img src={conversation} alt="conversation"></img>
            </div>
            <img className="home-page-back-image" src={HomePageBackground} alt="backGround"></img>
            <img className="king-img" src={King} alt="Luter King"></img>
            <img className="albert-img" src={Albert} alt="Albert Enshtein"></img>
            <img className="steven-img" src={Steven} alt="Steven"></img>
            <img className="tereza-img" src={Tereza} alt="Tereza"></img>
            <img className="elon-img" src={Elon} alt="Elon Mask"></img>
            <div className="ellipse-01" >
              <Ellipse01></Ellipse01>
            </div>
            <div className="ellipse-02" >
              <Ellipse02></Ellipse02>
            </div>
            <div className="under-images"> </div>
          </div>
        </div>
      </Page>
    </>
  );
}
