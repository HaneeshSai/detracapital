import React from "react";
import Hero from "../sections/Hero";
import MobileApp from "../sections/MobileApp";
import Segments from "../sections/Segments";
import MobileAppFeatures from "../sections/MobileAppFeatures";
import InvestorFeatures from "../sections/InvestorFeatures";
import Prices from "../sections/Prices";
import MutualFunds from "../sections/MutualFunds";
import SuperTraders from "../sections/SuperTraders";

export default function Homepage() {
  return (
    <>
      <Hero />
      <MobileApp />
      <SuperTraders />
      <Segments />
      <MobileAppFeatures />
      <InvestorFeatures />
      <Prices />
      <MutualFunds />
    </>
  );
}
