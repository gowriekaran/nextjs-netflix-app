import Head from "next/head";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../pages/api/Requests";

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix</title>
      </Head>
      <Main />
      <Row rowID="1" title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row
        rowID="5"
        title="Now Playing"
        fetchURL={requests.requestNowPlaying}
      />
    </>
  );
}
