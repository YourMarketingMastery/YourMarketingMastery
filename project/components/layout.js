import React, { useEffect, useState } from "react";

import Head from "next/head";
import Footer from "@/components/footer/index";

export default function RootLayout({ children }) {
  
  
  return (
    <React.Fragment>


      <div>
        <Head>
          <title>Your Marketing Mastery</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="./images/tick.png" />
        </Head>
        <main > {children}</main>

        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}
