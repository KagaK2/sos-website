import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import CanvasContent from "../components/CanvasContent";
import LandingSchedule from "../components/LandingSchedule";
import LandingPartners from "../components/LandingPartners";
import Button from "../components/Button";
import { Link } from "react-router-dom";

import Footer from "../layout/Footer";
import "../App.scss";
import styles from "../styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const contentScroll = useRef();
  const [showHeader, setShowHeader] = useState(false);

  const checkScroll = () => {
    if (contentScroll.current.scrollTop >= 200) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
    //this function should check for vh offset (Will need a formula to calculate the percentage) and show the header if needed
  };

  return (
    <div className='App'>
      <Helmet>
        <title>School of Startups</title>
        <meta
          name='description'
          content='School of Startups (SoS) is a two-day event in Helsinki for startup doers planning on scaling and for talent eager to improve their employability. Filled with 40 workshops covering business, tech, and design topics given by startup doers, SoS is one of the best in Helsinki startup events scene to bring together startup pros, experts and enthusiasts to one platform.'
        />
      </Helmet>
      {showHeader && (
        <Header
          left={
            <div>
              <p>
                October 5<sup>th</sup> - 6<sup>th</sup>
              </p>
              <p> 2019 | The Shortcut</p>
            </div>
          }
          right={
            <div>
              <p>Lapinlahdenkatu 16,</p> <p>Helsinki | Maria 01</p>
            </div>
          }
        />
      )}
      <CanvasContent ref={contentScroll} onScroll={checkScroll}>
        <div className={styles.landingBackground}>
          <div className={styles.arrow}>
            <a href='#landingSchedule'>
              <FontAwesomeIcon
                icon={faChevronDown}
                size='3x'
                className={styles.bounce}
              />
            </a>
          </div>
        </div>

        <LandingSchedule />
        <div className='resp-container'>
          {/* <iframe
            className="resp-iframe"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/kWkWzewYrvc"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="sos-video"
          /> */}
          <video width='100%' height='100%' controls>
            <source src='./video/sos-video.mp4' type='video/mp4' />
          </video>
        </div>
        <LandingPartners />

        <div className={styles.wrapper}>
          <div className={styles.interactButtons}>
            <Link to='/schedule/' className={styles.anchorButton}>
              <Button
                height='100%'
                width='29vw'
                name='join'
                backgroundImage={`url("/img/Joinbutton.png")`}
                specialClass='footerButton'
              />
            </Link>
            <Link to='/getinvolved/' className={styles.anchorButton}>
              <Button
                height='100%'
                width='29vw'
                name='get involved'
                backgroundImage={`url("/img/Getinvolved.png")`}
                specialClass='footerButton'
              />
            </Link>
          </div>

          <Footer className={styles.footer} />
        </div>
      </CanvasContent>
    </div>
  );
}

export default Home;
