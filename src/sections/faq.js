import React from "react";
import { Box, Container, Flex, Text, Heading } from "theme-ui";
import { Link } from "components/link";
import BlockTitle from "components/block-title";
import Accordion from "components/accordion/accordion";

const accordionData = [
  {
    isExpanded: false,
    title: "How does fxbot works?",
    contents: (
      <div>
        fxbot is a scalping forex bot is an automated trading system or
        algorithm designed to execute scalping strategies on behalf of the
        trader.
        <br></br> you can learn more on scalping strategies.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "How much does it cost to start trading?",
    contents: (
      <div>
        The cost to start trading forex can vary widely depending on several
        factors such as the broker you choose, the trading platform, the type of
        account you open, and the amount of capital you're willing to invest.
        Here are some common costs associated with starting forex trading:{" "}
        <br></br>
        <strong>Initial Deposit: </strong> Starting forex trading requires an
        initial deposit to open a trading account, which varies depending on the
        broker and account type. <br></br>
        <strong>Spread and Commissions:</strong> Brokers charge spreads
        (buy-sell price difference) and/or commissions on trades, affecting
        trading costs and profitability. <br></br>
        <strong>Leverage: </strong> Leverage enables trading larger positions
        with less capital, impacting potential gains and losses. Leverage limits
        vary by broker. <br></br>
        <strong>Platform Fees:</strong> Some brokers charge fees for using
        specific trading platforms or software. <br></br>
        <strong>Education:</strong> Learning forex trading might involve
        educational resources and courses, which can be free or come at a cost.{" "}
        <br></br>
        <strong>Services:</strong> Brokers offer additional services like
        premium analysis tools, research, and signals, often at an extra cost.
        <br></br>
        <strong>Risk Management:</strong> Allocating funds for risk management,
        such as setting stop-loss orders, is crucial to protect investments.{" "}
        <br></br>
        <strong>Technology:</strong> A stable internet connection and a device
        are necessary to access your trading platform. <br></br>
        <strong>Trading Tools:</strong> Depending on your strategy, you might
        invest in specialized trading tools or indicators.<br></br>
        <strong>Regulatory Fees:</strong> Some locations have regulatory fees
        associated with forex trading. <br></br>
        <br></br>
        Consider your trading goals, budget, and risk tolerance when choosing a
        broker. Starting with a small capital is possible, but higher
        investments offer more flexibility and opportunities. Always trade
        responsibly within your means.
      </div>
    ),
  },

  {
    isExpanded: true,
    title: "How can I open an account with a forex Broker?",
    contents: (
      <div>
        Opening an account with a forex broker involves several steps. Here's a
        general guide on how to do it: <br></br>
        <strong>Research and Choose a Broker: </strong>
        Start by researching and comparing different forex brokers. Consider
        factors like regulations, trading platforms, spreads, commissions,
        customer support, and available trading instruments.<br></br>
        <strong> Select Account Type:</strong>
        Most brokers offer various account types with different features, such
        as standard, mini, micro, or even demo accounts for practice. Choose the
        one that suits your trading style and initial capital.<br></br>
        <strong>Visit Broker's Website: </strong>
        Go to the official website of the broker you've chosen. Look for a "Open
        Account" or "Sign Up" button.<br></br>
        <strong>Fill Out Application: </strong>
        Click on the "Open Account" button to start the account registration
        process. You'll be asked to provide personal information, contact
        details, and financial information.<br></br>
        <strong>Choose Trading Platform: </strong>
        During the registration process, you'll likely be prompted to choose a
        trading platform. Select the platform you want to use for trading.
        <br></br>
        <strong>Verify Identity and Documents: </strong>
        Brokers usually require verification of identity and address. Upload
        scanned copies of your identification (such as passport or driver's
        license) and proof of address (such as a utility bill).<br></br>
        <strong>Complete Compliance Check: </strong>
        Brokers may perform compliance checks to ensure you meet regulatory
        requirements. This can take a few hours to a few days.<br></br>
        <strong>Fund Your Account: </strong>
        Once your account is verified, you can fund it. Choose the deposit
        method (credit/debit card, bank transfer, e-wallet) and follow the
        instructions provided by the broker.<br></br>
        <strong>Confirm and Start Trading: </strong>
        After funding, you'll receive a confirmation email. You can now log in
        to your trading platform using the credentials provided by the broker
        and start trading.<br></br>
        <strong> Practice on Demo Account:</strong>
        If available, consider using a demo account to practice trading without
        risking real money. This helps you familiarize yourself with the
        platform and trading strategies.
        <br></br>
        Remember that forex trading involves risks, and it's important to choose
        a reputable and regulated broker. Take your time to read terms and
        conditions, and consider seeking advice from experienced traders before
        you start.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: "How long does the application take?",
    contents: (
      <div>
        For our recent trip to S.A. I booked several accommodation thru SA
        Places. I just wanted to tell you that everything worked out perfectly
        with all the bookings and also your booking was very quick and
        professional. I hope I have the opportunity to re-visit South Africa
        soon, I will then make my bookings with your company again. I will also
        recommend
      </div>
    ),
  },

  {
    isExpanded: false,
    title: "How do I get the payment?",
    contents: (
      <div>
        After trading and making a profit in the forex market, you'll need to go
        through a few steps to receive your payment: <br></br>
        <strong>Closing Trades:</strong>
        The first step is to close your profitable trades. When you close a
        trade, your broker will calculate the profit or loss based on the price
        difference between when you opened and closed the trade.<br></br>
        <strong>Realizing Profits:</strong>
        Once your trades are closed, your profits will be reflected in your
        trading account balance. This is the amount you have earned from
        successful trades.<br></br>
        <strong>Withdrawal Request:</strong>
        To actually receive the profits in your bank account or chosen payment
        method, you need to initiate a withdrawal request with your forex
        broker. This can usually be done through the broker's trading platform.
        <br></br>
        <strong>Verification:</strong>
        Some brokers may require you to complete a verification process before
        processing withdrawals. This is a security measure to ensure that the
        account holder is making the withdrawal. Verification might involve
        providing identification documents and proof of address.<br></br>
        <strong>Selecting Payment Method:</strong>
        When making a withdrawal request, you'll usually have the option to
        choose your preferred payment method. Common options include bank wire
        transfers, electronic payment systems like PayPal or Skrill, and
        credit/debit card withdrawals.<br></br>
        <strong>Processing Time:</strong>
        The processing time for withdrawals varies depending on the broker and
        the payment method you've chosen. Bank wire transfers might take a few
        days, while electronic payment systems are often quicker.<br></br>
        <strong>Withdrawal Fees:</strong>
        Be aware of any withdrawal fees that your broker or payment method may
        charge. Some brokers offer free withdrawals up to a certain number per
        month, while others may charge a fee for each withdrawal.<br></br>
        <strong>Currency Conversion:</strong>
        If you're trading in a different currency than your withdrawal account,
        you might encounter currency conversion fees or exchange rate
        differences. Consider these factors when making withdrawals.<br></br>
        <strong>Minimum Withdrawal Amount:</strong>
        Some brokers have a minimum withdrawal amount that you need to meet
        before you can request a withdrawal. Make sure to check the broker's
        terms and conditions.<br></br>
        <strong>Follow Broker Instructions:</strong>
        Follow your broker's instructions for making withdrawal requests. They
        will usually provide a step-by-step guide on their website or trading
        platform.<br></br>
        <br></br>
        Remember that the process of receiving payments from forex trading
        involves interaction with your broker and adherence to their withdrawal
        policies. It's crucial to choose a reputable and reliable broker that
        processes withdrawals efficiently and transparently. Always review your
        broker's withdrawal policies, terms, and fees before you start trading
        to ensure a smooth and hassle-free experience when it comes to receiving
        your profits.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section">
      <Container>
        <BlockTitle
          title="Frequently Ask Question"
          text="Ask your question and meet"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Do you have any quesiton? Please ask here we are ready to support
            </Heading>
            <Text as="p">
              If your question is not list here, please feel free to make a
              manual support.
            </Text>
            <Link sx={styles.askButton} path="https://wa.me/+234701777058">
              Ask your Question
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: "wrap",
    flexDirection: ["column", null, null, null, null, "row-reverse"],
    pb: ["70px", null, null, null, "90px", null, "130px"],
  },
  content: {
    flex: ["0 0 100%", null, null, null, "0 0 33.333%"],
    maxWidth: ["100%", null, null, "450px", "100%"],
    mx: ["auto", null, null, null, "0"],
    mb: ["0px", null, null, null, "0"],
    textAlign: ["center", null, null, null, null, "left"],
    mt: ["40px", null, null, null, null, "0"],
    h3: {
      fontSize: ["23px", null, null, null, "24px"],
      lineHeight: [1.5, null, null, null, 1.67],
      color: "black",
      fontWeight: 700,
      letterSpacing: "-1.5px",
      mt: "-5px",
      pr: ["0", null, null, null, null, "30px"],
    },
    p: {
      fontSize: "16px",
      lineHeight: 1.87,
      color: "#343D48",
      opacity: 0.7,
      mt: "10px",
      pr: ["0", null, null, null, null, "80px"],
    },
  },
  askButton: {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundColor: "#02073E",
    color: "#fff",
    borderRadius: "5px",
    fontSize: "16px",
    fontWeight: 700,
    p: "6.5px 19px",
    letterSpacing: "-0.16px",
    mt: "25px",
    transition: "all 500ms ease",
    "&:hover": {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ["0 0 100%", null, null, null, "0 0 66.666%"],
  },
};
