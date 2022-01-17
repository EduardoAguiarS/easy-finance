import React from "react";
import Container from "../Container";
import { ButtonDefault } from "../Misc/buttons";
import { Logo } from "../Misc/logo";
import FooterSection from "./navbar";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin
} from "react-icons/ai";

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
              <li className="block cursor-pointer">
                <AiOutlineFacebook
                  size={40}
                  onClick={() => openLinks("http://www.facebook.com")}
                  className="text-white"
                  title="facebook"
                />
              </li>
              <li className="block cursor-pointer">
                <AiOutlineInstagram
                  size={40}
                  onClick={() => openLinks("http://www.instagram.com")}
                  className="text-white"
                  title="instagram"
                />
              </li>
              <li className="block cursor-pointer">
                <AiOutlineLinkedin
                  size={40}
                  onClick={() => openLinks("http://www.linkedin.com")}
                  className="text-white"
                  title="linkedin"
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
            className="cursor-pointer"
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
