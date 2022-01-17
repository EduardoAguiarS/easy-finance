import React from "react";
import Image from "next/image";
import HomeGif from "../../public/assets/home.gif";
import { ButtonDefault } from "../Misc/buttons";
import Container from "../Container";

function HomeHero() {
  return (
    <Container>
      <article
        className={`md:pt-20 pt-28 pb-12 md:flex md:items-center flex-wrap text-center md:text-left`}
      >
        <div className={`flex-1`}>
          <h1 className={`text-yellow text-4xl xl:text-6xl font-bold`}>
            Eduque seus clientes, sabedoria vale muito!
          </h1>
          <p className={`text-white my-8 font-light lg:text-lg`}>
            Transforme seus clientes em verdadeiros investidores, nosso objeto é
            mostrar que todos podem investir de forma inteligente, aumentando a
            rentabilidade de todos atraves do conhecimento.
          </p>
          <ButtonDefault path={`/plans`} title={`Veja os planos`} />
        </div>
        <div className={`flex-1`}>
          <Image src={HomeGif} alt={`Gif Estudos`} />
        </div>
      </article>
    </Container>
  );
}

export default HomeHero;
