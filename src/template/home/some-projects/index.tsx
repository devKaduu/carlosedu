import Image from "next/image";
import stars from "@/assets/stars.png";
import * as motion from "motion/react-client";

export const SomeProjects = () => {
  return (
    <section className="mt-48">
      <div className="flex items-center gap-7 mb-36">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.7 }}
          className="text-sectionTitle"
        >
          Some Featured projects
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <Image src={stars} alt="Gradient Image" width={39} />
        </motion.div>
      </div>
    </section>
  );
};
