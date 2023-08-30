import React from "react";
import { Box, Container, Grid } from "theme-ui";
import BlockTitle from "components/block-title";
import ServiceCard from "components/cards/service-card";
import serviceImage1 from "assets/service-1.png";
import serviceImage2 from "assets/service-2.png";
import serviceImage3 from "assets/service-3.png";
import serviceImage4 from "assets/service-4.png";
import serviceImage5 from "assets/service-5.png";
import serviceImage6 from "assets/service-6.png";

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text: "Take a closer look at everything you’ll need to know about forex, including what it is, how you trade it and how leverage in forex works.",
    heading: "How it works",
    path: "#",
  },
  {
    image: serviceImage2,
    text: "Our tools and platforms have clear and simple instructions and are intuitively easy to navigate.",
    heading: "Trading Robot tools",
    path: "#",
  },
  {
    image: serviceImage3,
    text: "fxbot makes it easy for anyone to start trading, understand risk, and make better trading decisions.",
    heading: "Customer-first trading experience",
    path: "#",
  },
  {
    image: serviceImage4,
    text: "Online trading is exciting but involves risks and can lead to an addiction.",
    heading: "Market measures",
    path: "#",
  },
  {
    image: serviceImage5,
    text: "we enforce best-in-class security measures such as to protect your account and personal data.",
    heading: "Security measures",
    path: "#",
  },
  {
    image: serviceImage6,
    text: "The fxbot360 support team is available via live chat 24/7 – even on weekends.",
    heading: "Online support",
    path: "#",
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="What's the features of our product"
          text="Features are highlighted here"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ["80px", null, null, null, "80px", null, "100px"],
  },
  grid: {
    gridGap: "30px",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr", null, "1fr 1fr 1fr"],
  },
};
