import Image from "next/image";
import Header from "./component/header";
import Hero from "./component/hero";

export default function Home() {
  return (
    <>
  <Header/>
  <div className="mt-32">
  <Hero/>
  </div>
  </>
  );
}
