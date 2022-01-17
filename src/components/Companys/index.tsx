import React, { useEffect } from "react";
import Container from "../Container";
import Slide from "./slider";
import { SectionTitle } from "../Misc/sectionTitle";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Company() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <article className="bg-white" data-aos="fade-up" data-aos-duration="500">
      <Container>
        <SectionTitle
          text={"Junte-se a vários clientes satisfeitos."}
          color={"text-blueLight"}
        />
        <section
          className="px-10 md:mt-14"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <Slide />
        </section>
      </Container>
    </article>
  );
}
