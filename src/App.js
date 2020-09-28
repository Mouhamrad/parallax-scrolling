import React, { useEffect, useState, useRef } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { AppWrapper, GlobalStyle, Section, HeaderWrapper } from "./styles";

export default function App() {
  const [scroll, setScroll] = useState(0);
  const [sectionY, setSectionY] = useState(0);
  let translateRef = useRef([]);
  let bigTitleRef = useRef(null);
  let shadowRef = useRef(null);
  let contentRef = useRef(null);
  let sectionRef = useRef(null);
  let image_containerRef = useRef(null);
  let opacityRef = useRef([]);
  let borderRef = useRef(null);

  useEffect(() => {
    let header_height = scroll;
    let section_height = scroll;
    window.onscroll = () => {
      setScroll(window.pageYOffset);
      setSectionY(sectionRef.current.getBoundingClientRect());

      translateRef.current.map((el) => {
        let speed = el.dataset.speed;
        el.style.transform = `translateY(${scroll * speed}px)`;
      });

      opacityRef.current.map((el) => {
        el.style.opacity = scroll / (sectionY.top + section_height);
      });

      bigTitleRef.current.style.opacity = -scroll / (header_height / 2) + 1;
      shadowRef.current.style.height = `${scroll * 0.5 + 300}px`;
      contentRef.current.style.transform = `translateY(${
        (scroll / (section_height + sectionY.top)) * 50 - 50
      }px)`;
      image_containerRef.current.style.transform = `translateY(${
        (scroll / (section_height + sectionY.top)) * -50 + 50
      }px)`;
      borderRef.current.style.width = `${
        (scroll / (sectionY.top + section_height)) * 30
      }%`;
    };
  }, [scroll, sectionY]);
  return (
    <HelmetProvider>
      <AppWrapper>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyle />
        <HeaderWrapper>
          <nav>
            <div className="container">
              <h3 className="logo">
                Brand<span>Name any change</span>
              </h3>
              <div className="hamburger-menu">
                <div className="bar" />
              </div>
            </div>
          </nav>
          <h1
            className="big-title"
            data-speed="0.1"
            ref={(el) => {
              bigTitleRef.current = el;
              translateRef.current[0] = el;
            }}
          >
            Discover.
          </h1>
          <img
            src="img/person.png"
            className="person"
            ref={(el) => (translateRef.current[1] = el)}
            data-speed="-0.25"
            alt=""
          />
          <img
            src="img/mountain1.png"
            className="mountain1"
            ref={(el) => (translateRef.current[2] = el)}
            data-speed="-0.2"
            alt=""
          />
          <img
            src="img/mountain2.png"
            className="mountain2"
            ref={(el) => (translateRef.current[3] = el)}
            data-speed="0.4"
            alt=""
          />
          <img
            src="img/mountain3.png"
            className="mountain3"
            ref={(el) => (translateRef.current[4] = el)}
            data-speed="0.3"
            alt=""
          />
          <img
            src="img/sky.png"
            className="sky"
            ref={(el) => (translateRef.current[5] = el)}
            data-speed="0.5"
            alt=""
          />
        </HeaderWrapper>
        <Section ref={sectionRef}>
          <div className="shadow" ref={shadowRef} />
          <div className="container">
            <div
              className="content opacity"
              ref={(el) => {
                contentRef.current = el;
                opacityRef.current[0] = el;
              }}
            >
              <h3 className="title">
                About
                <div className="border" ref={borderRef} />
              </h3>
              <p className="text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
                officiis quos expedita ipsa, a quidem inventore voluptates
                debitis accusamus tenetur qui et voluptas dicta, culpa earum,
                doloribus odio consectetur consequuntur soluta quasi nobis!
                Deserunt voluptatum reiciendis iure expedita sequi quisquam
                laboriosam temporibus exercitationem.
              </p>
            </div>
            <div
              className="imgContainer opacity"
              ref={(el) => {
                image_containerRef.current = el;
                opacityRef.current[1] = el;
              }}
            >
              <img src="img/image.jpg" alt="" />
            </div>
          </div>
        </Section>
      </AppWrapper>
    </HelmetProvider>
  );
}
