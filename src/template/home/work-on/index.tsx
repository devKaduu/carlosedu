import star from "@/assets/general-star.png";
import { Title } from "@/components/Title";
import * as motion from "motion/react-client";
import Image from "next/image";

import { Appfiap, FIAP, Postech, Rocknew } from "@/assets/some-projects";

export const WorkOn = () => {
  return (
    <section className="mt-36 max-xl:px-12 max-sm:px-5 relative max-w-[68.188rem] m-auto mb-36" id="projects">
      <div className="flex items-center justify-start gap-7 mb-8 sm:mb-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.7 }}
          className="text-sectionTitle max-sm:text-3xl"
        >
          Projetos que marcaram <br className="sm:hidden" /> minha jornada
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <Image src={star} alt="Gradient Image" width={39} />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-center flex-col mx-auto"
      >
        <div className="flex flex-col items-center justify-start">
          <Title firstText="FI" secondText="AP" image={FIAP.src} src="https://www.fiap.com.br/" />
          <Title
            firstText="FIAP&nbsp;"
            secondText="SCHOOL / App"
            image={Appfiap.src}
            src="https://www.fiap.com.br/colegio/"
          />
          <Title firstText="pos" secondText="tech" image={Postech.src} src="https://postech.fiap.com.br/" />
          <Title
            firstText="rock&nbsp;"
            secondText="new ventures"
            image={Rocknew.src}
            src="https://www.fiap.com.br/rock-new-ventures/"
          />
        </div>
      </motion.div>
    </section>
  );
};
