import React from "react";
import { BlogItem } from "../../components/BlogItem";
import Container from "../../components/Container";
import Header from "../../components/Header";

export default function BlogPage() {
  return (
    <div className="h-full bg-blue">
      <Header />
      <main className="pt-16">
        <Container>
          <section className="w-full">
            <div className="mb-10 ">
              <BlogItem title={"Titulo"} description={"Descrição"} path={"/"} />
            </div>
            <div className="mb-10 ">
              <BlogItem title={"Titulo"} description={"Descrição"} path={"/"} />
            </div>
            <div className="mb-10 ">
              <BlogItem title={"Titulo"} description={"Descrição"} path={"/"} />
            </div>
          </section>
        </Container>
      </main>
    </div>
  );
}
