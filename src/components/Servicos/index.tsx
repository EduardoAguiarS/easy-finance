import React from "react";
import Container from "../Container";
import { SectionTitle } from "../Misc/sectionTitle";

export default function Services() {
  return (
    <article className="py-12 bg-blueDark">
      <Container>
        <SectionTitle
          color={`text-orange`}
          text={`Educação multidisciplinar com foco na prática`}
        />
      </Container>
    </article>
  );
}
