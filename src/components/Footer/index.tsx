import Image from "next/image";
import React from "react";
import Container from "../Container";
import { ButtonDefault } from "../Misc/buttons";
import { Logo } from "../Misc/logo";
import FooterSection from "./navbar";
import Facebook from "../../public/social/facebook.svg";
import Linkedin from "../../public/social/linkedin.svg";
import Instagram from "../../public/social/instagram.svg";

export default function Footer() {
  function openLinks(url: string) {
    window.open(url);
  }

  return (
    <div>
      <Container>
        <nav className="flex flex-col justify-between gap-3 md:flex-row item-start">
          <div>
            <Logo />
          </div>
          <FooterSection text={"Fale Conosco"}>
            <div className="flex flex-col gap-4 mt-3">
              <a className="text-white" href="tel:080094079839">
                0800 940 7983
              </a>
              <div>
                <ButtonDefault path={"/contact"} title={"Entre em contato"} />
              </div>
            </div>
          </FooterSection>
          <FooterSection text={"Redes Sociais"}>
            <ul className="flex flex-wrap gap-4 mt-3 item-center">
              <li className="block cursor-pointer e">
                <Image
                  src={Instagram}
                  alt="Instagram"
                  width={40}
                  height={40}
                  onClick={() => openLinks("https://www.instagram.com/")}
                />
              </li>
              <li className="block cursor-pointer">
                <Image
                  src={Facebook}
                  alt="Facebook"
                  width={40}
                  height={40}
                  onClick={() => openLinks("https://www.facebook.com/")}
                />
              </li>
              <li className="block cursor-pointer">
                <Image
                  src={Linkedin}
                  alt="Linkedin"
                  width={40}
                  height={40}
                  onClick={() => openLinks("https://www.linkedin.com/")}
                />
              </li>
            </ul>
          </FooterSection>
          <FooterSection text={"Endereço"}>
            <span className="mt-3 text-white">
              Rua São Paulo, 999, Jardim Sumaré, São Paulo - SP
            </span>
          </FooterSection>
        </nav>
      </Container>
      <div className="py-3 text-center text-white bg-yellow">
        <span>
          ©2022 EasyFinance - Quase todos direitos reservados |{" "}
          <strong
            className="cursor-pointer text-orange"
            onClick={() =>
              openLinks("https://www.linkedin.com/in/eduardo-aguiar-s/")
            }
          >
            Eduardo Aguiar
          </strong>
        </span>
      </div>
    </div>
  );
}
