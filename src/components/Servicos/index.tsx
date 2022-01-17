import React, { useEffect } from "react";
import Container from "../Container";
import { SectionTitle } from "../Misc/sectionTitle";
import Cards from "./cards";
import { ButtonDefault } from "../Misc/buttons";
import Aos from "aos";
import "aos/dist/aos.css";

// Images
import Brain from "../../public/icons/brain.svg";
import Plataform from "../../public/icons/plataform.svg";
import Api from "../../public/icons/api.svg";
import Blog from "../../public/icons/blog.svg";

export default function Services() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <article className="bg-blueDark" data-aos="fade-up" data-aos-duration="500">
      <Container>
        <SectionTitle
          color={`text-yellow`}
          text={`Educação multidisciplinar com foco na prática`}
        />
        <section className="flex flex-wrap items-start justify-center mt-20 gap-x-16 gap-y-8">
          <div>
            <Cards
              title="Cursos"
              description="Diversos cursos sobre, investimentos, controle financeiro, criptomoedas, bolsa de valores e muito mais."
              image={Brain}
              alt={`Mente`}
            />
          </div>
          <Cards
            title="Simulação"
            description="Oferecemos uma plataforma de simulação personalizada para os alunos pôr em prática todo conhecimento adquirido."
            image={Plataform}
            alt={`Plataforma`}
          />
          <Cards
            title="Integração"
            description="Integração direta com a plataforma da sua empresa, assim seus clientes pode encontrar tudo no mesmo ambiente."
            image={Api}
            alt={`API Icone`}
          />
          <Cards
            title="Blog"
            description="Blog exclusivo com artigos diários sobre o mercado, previsões, dicas e muito mais."
            image={Blog}
            alt={`Blog`}
          />
        </section>
        <div
          className="mt-20 text-center"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          <ButtonDefault path={"/services"} title={"Conheça nossos serviços"} />
        </div>
      </Container>
    </article>
  );
}
