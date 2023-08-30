import React, { useState } from "react";
import { keyframes } from "@emotion/core";
import { Box, Container, Grid, Button, Text } from "theme-ui";
import BlockTitle from "components/block-title";
import PriceCard from "components/cards/price-card";
import priceIcon1 from "assets/price-user-1-1.svg";
import priceIcon2 from "assets/price-user-1-2.svg";

const PRICE_MONTHLY_DATA = [
  {
    recommended: null,
    title: "Personal pack",
    icon: priceIcon1,
    amount: "#200K",
    options: [
      {
        status: true,
        label: "Ultimate access to all installation guide",
      },
      {
        status: true,
        label: "Free access to our support team 24/5",
      },
      {
        status: true,
        label: "Version upgradable at a little cost",
      },
      {
        status: false,
        label: "access to our online trading guide / courses",
      },
      {
        status: false,
        label: "Download and print installation guide PDF",
      },
    ],
  },
  {
    recommended: "Recommended",
    title: "For Peer pack",
    icon: priceIcon2,
    amount: "#500k",
    options: [
      {
        status: true,
        label: "Ultimate access to all course material",
      },
      {
        status: true,
        label: "Free access for to our support team all day.",
      },
      {
        status: true,
        label: "Version upgradable at small cost",
      },
      {
        status: true,
        label: "Unlimited access to our online courses and materials",
      },
      {
        status: true,
        label: "Download and print installation guide PDF",
      },
    ],
  },
];

const PRICE_YEARLY_DATA = [
  {
    recommended: null,
    title: "For Team pack",
    icon: priceIcon1,
    amount: "#900k",
    options: [
      {
        status: true,
        label: "Ultimate access to all installation guide",
      },
      {
        status: true,
        label: "Free access to our support team 24/5",
      },
      {
        status: true,
        label: "Version upgradable at a little cost",
      },
      {
        status: false,
        label: "access to our online trading guide / courses",
      },
      {
        status: false,
        label: "Download and print installation guide PDF",
      },
    ],
  },
  {
    recommended: "Recommended",
    title: "For Organization pack",
    icon: priceIcon2,
    amount: "#1.5m",
    options: [
      {
        status: true,
        label: "Special Trading seminar / monthly consutations",
      },
      {
        status: true,
        label: "Free access for our support team anytime.",
      },
      {
        status: true,
        label: "Version upgradable at no cost",
      },
      {
        status: true,
        label: "Unlimited access to our online courses and materials",
      },
      {
        status: true,
        label: "Free Technical staff training program.",
      },
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState({
    active: "One-off",
    pricingPlan: PRICE_MONTHLY_DATA,
  });

  const handlePlan = (plan) => {
    if (plan === "monthly") {
      setPlan({
        ...plan,
        active: "monthly",
        pricingPlan: PRICE_MONTHLY_DATA,
      });
    }
    if (plan === "yearly") {
      setPlan({
        ...plan,
        active: "yearly",
        pricingPlan: PRICE_YEARLY_DATA,
      });
    }
  };
  return (
    <Box as="section" id="pricing" sx={styles.pricing}>
      <Container>
        <BlockTitle
          title="What deal suits you perfectly?"
          text="Meet our pricing plan"
        />
        <Box sx={styles.btnWrap}>
          <Button
            onClick={() => handlePlan("monthly")}
            className={`${plan.active === "monthly" ? "active" : ""}`}
          >
            Monthly Plan
          </Button>
          <Button
            onClick={() => handlePlan("yearly")}
            className={`${plan.active === "yearly" ? "active" : ""}`}
          >
            Annual Plan
          </Button>
        </Box>
        <Grid sx={styles.grid}>
          {plan.pricingPlan.map((price, index) => (
            <PriceCard data={price} key={`${plan.active}-card--key${index}`} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  pricing: {
    pt: ["200px", null, null, null, "200px", null, "240px"],
    pb: ["80px", null, null, null, "80px", "100px", "140px"],
  },
  btnWrap: {
    width: "302px",
    height: "60px",
    mt: ["-20px", null, null, "0px"],
    mb: ["40px", null, null, "60px"],
    backgroundColor: "#F7F8FB",
    borderRadius: "5px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    p: "7px",
    mx: "auto",
    button: {
      backgroundColor: "rgba(0,0,0,0)",
      borderRadius: "5px",
      color: "#0F2137",
      letterSpacing: "-0.24px",
      fontSize: "16px",
      fontWeight: 500,
      position: "relative",
      outline: "none",
      fontFamily: "DM Sans",
      transition: "all 500ms ease",
      "&.active": {
        boxShadow: "0px 3px 3.8px rgba(38, 78, 118, 0.1)",
        backgroundColor: "#ffffff",
      },
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0)",
      },
    },
  },
  grid: {
    width: "100%",
    maxWidth: "960px",
    mx: ["auto"],
    gridGap: "30px",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    ".priceCard": {
      ".priceHeader": {
        animation: `${fadeIn} 0.8s linear`,
      },
      "ul > li": {
        animation: `${fadeIn2} 0.7s linear`,
      },
      ".priceAmount": {
        animation: `${fadeIn} 0.9s linear`,
      },
      ".priceButton": {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
