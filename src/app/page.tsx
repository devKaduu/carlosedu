import Image from "next/image";

import eu from "../../public/images/eu.jpg";

export default function Home() {
  return (
    <div className="w-full h-dvh justify-center items-center flex ">
      <Image src={eu} alt="carlos" width={100} height={100} className="absolute left-0 w-full h-dvh z-[-1]" />
      <h1 className="font-bold text-6xl text-white">CARLOS</h1>
    </div>
  );
}
