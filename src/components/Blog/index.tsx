import React, { useEffect } from "react";
import Container from "../Container";
import { ButtonDefault } from "../Misc/buttons";
import { SectionTitle } from "../Misc/sectionTitle";
import { Card } from "./cards";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Blog() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <article data-aos="fade-up" data-aos-duration="500">
      <Container>
        <SectionTitle text={"Publicações recentes"} color={"text-yellow"} />
        <div
          className="flex flex-col flex-wrap items-center justify-center gap-8 mt-10 md:flex-row"
          data-aos="fade-down"
          data-aos-duration="700"
        >
          <Card title={"Title"} description={"Description"} slug={"teste"} />
          <Card title={"Title"} description={"Description"} slug={"teste"} />
          <Card title={"Title"} description={"Description"} slug={"teste"} />
          <Card title={"Title"} description={"Description"} slug={"teste"} />
        </div>
        <div
          className="mt-10 text-center"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <ButtonDefault path={"/blog"} title={"Veja mais no Blog"} />
        </div>
      </Container>
    </article>
  );
}
