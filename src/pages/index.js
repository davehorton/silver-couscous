import Head from "next/head";
import LandingPageLayout from "../layouts/landingPageLayout";
import HomePageSection from "../sections/homePageSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LandingPageLayout>
        <HomePageSection />
      </LandingPageLayout>
    </div>
  );
}
