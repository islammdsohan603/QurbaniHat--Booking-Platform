import AnimalsPage from "@/components/homepage/Animals";

import Banner from "@/components/homepage/Banner";
import QurbaniTips from "@/components/homepage/QurbaniTips";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <AnimalsPage />
      <QurbaniTips />
    </div>
  );
}
