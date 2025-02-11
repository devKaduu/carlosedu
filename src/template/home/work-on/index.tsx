import Image from "next/image";
import star from "@/assets/general-star.png";
import * as motion from "motion/react-client";
import { Title } from "@/components/Title";

import { Postech, Rocknew, FIAP, Appfiap } from "@/assets/some-projects";

export const WorkOn = () => {
  return (
    <section className="mt-48 max-xl:px-12 max-sm:px-5 relative max-w-[68.188rem] m-auto mb-52" id="projects">
      <div className="flex items-center gap-7 mb-44">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.7 }}
          className="text-sectionTitle max-sm:text-3xl"
        >
          Some Featured projects <br className="sm:hidden" /> I have worked on
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
        className="flex items-center justify-center flex-col"
      >
        <Title firstText="FI" secondText="AP" image={FIAP.src} src="https://www.fiap.com.br/" />
        <Title
          firstText="FIAP&nbsp;"
          secondText="SCHOOL / WEB and App"
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
      </motion.div>
    </section>
  );
};
