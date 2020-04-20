import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import styled from "styled-components";
import { colors, device } from "../constants";
import SAP from "../assets/sap.png";
import abi from "../assets/abi.png";
import bynder from "../assets/bynder.png";

export default () => {
  const [index, set] = useState(0);
  const transitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(0%,100%,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: {
      opacity: 0,
      transform: "translate3d(0%,-100%,0)",
      position: "absolute",
      width: "100%",
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      set((state) => (state + 1) % data.length);
    }, 2500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div style={{ height: "70px", position: "relative" }}>
      {transitions.map(({ item, props, key }) => {
        const Page = data[item];
        return <Page key={key} style={props} />;
      })}
    </div>
  );
};

const Red = styled.span`
  font-weight: bold;
  color: ${colors.red};
`;

const Logo = styled.img`
  height: 1.4rem;
  width: auto;
  padding-left: 0.2rem;
  @media ${device.tablet} {
    padding-left: 0.3rem;
    height: 2rem;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const data = [
  ({ style }) => (
    <animated.div style={{ ...style }}>
      I'm a Software Engineer based in <Red>Barcelona</Red>.
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>
        I'm Frontend Engineer at <Logo src={bynder} />
      </ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>
        I developed Full Stack Applications at <Logo src={SAP} />
      </ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>
        I freelanced at <Logo src={abi} />
      </ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>
        I love companies with blue logos, apparently.
      </ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>
        I've also created other stuff that you can see by scrolling
      </ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>
        There's also some information about my career
      </ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>And you can even contact me</ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>
        Seriously, there's really some cool stuff down there
      </ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>But apparently you're staying here 🤨</ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>
        Ok. Then I'll let you know that I like eating pizza 🍕
      </ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>(Big freaking suprise)</ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>And also playing Table Tennis 🏓</ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>I'm like super good at Ping-Pong 🏓</ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>Like, I can beat you anytime</ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>Just scroll down and contact me</ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>Almost got you there!</ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>
        Ok, so now the loop will end and just restart again
      </ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>
        And I did this with my incredible coding skills
      </ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>Aren't computers crazy?🤯</ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>
        Anyway, brace yourself, we're going back to the top
      </ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>Ready?</ItemContainer>
    </animated.div>
  ),

  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>3</ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>2</ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>1</ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>
        (You just stared at my name for over a minute now)
      </ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>
        And you didn't even noticed the naked man in the background image
      </ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>JK, there's no naked man</ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>But you looked right?</ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>So this is what I do for a living</ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>Catch people's attention on screens</ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>
        Well, it's a little more complicated than that
      </ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>But you get what I mean right?</ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>
        Now that I've made my point; you can scroll, really.
      </ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>
        Just drop me a quick email saying "hi" at the end, I'd love that
      </ItemContainer>
    </animated.div>
  ),
  ({ style }) => (
    <animated.div style={{ ...style }}>
      <ItemContainer>
        So back to the top now! Have a great day! 🙂
      </ItemContainer>
    </animated.div>
  ),
];
