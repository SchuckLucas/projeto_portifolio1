import { useEffect } from "react";
import { Link } from "react-router-dom";
import animarElementos from "../scripts/animation";
import Card from "../components/Card";

export default function Sobre() {
  useEffect(() => {
    animarElementos();
  }, []);

  return (
    <>
      <header className="header">
        <h1 className="titulos">Sobre nós</h1>
        <Link className="links" to="/">
          Início
        </Link>
      </header>
      <main className="main">
        <section className="box_section1 section_textos">
          <h1 className="titulos">Mais que café, criamos momentos</h1>
          <p className="textos">
            A [Nome Empresa] nasceu do sonho de transformar uma simples pausa
            para o café em uma experiência especial. Desde o início, buscamos
            criar um ambiente acolhedor onde pessoas possam se encontrar,
            conversar e aproveitar bons momentos. Trabalhamos com cafés
            selecionados, ingredientes de qualidade e muito cuidado em cada
            preparo, trazendo sabores únicos para nossos clientes.
          </p>
        </section>
        <section className="box_section2 section_textos">
          <h1 className="titulos">Nossa Missão</h1>
          <p className="textos">
            Proporcionar experiências memoráveis através de cafés especiais,
            atendimento acolhedor e um ambiente onde todos se sintam em casa.
          </p>
        </section>
        <section className="box_section1 section_textos">
          <h1 className="titulos">Nossa Visão</h1>
          <p className="textos">
            Ser reconhecida como uma cafeteria referência em qualidade, inovação
            e conexão com nossos clientes, valorizando cada detalhe da
            experiência.
          </p>
        </section>
        <section className="box_section2">
          <h1 className="titulos">Valores</h1>
        </section>
        <section className="box_section1">
          <div className="box_cards">
            <Card
              titulo="Qualidade"
              texto="Selecionamos cuidadosamente cada ingrediente, desde os grãos de café até os acompanhamentos, garantindo sabores únicos e uma experiência de excelência em cada detalhe."
            />
            <Card
              titulo="Atendimento"
              texto="Acreditamos que cada cliente merece ser recebido com atenção e carinho. Nosso objetivo é criar conexões e tornar cada visita um momento especial."
            />
            <Card
              titulo="Sustentabilidade"
              texto="Buscamos práticas responsáveis em nosso dia a dia, valorizando nossos parceiros, reduzindo desperdícios e contribuindo para um futuro melhor."
            />
            <Card
              titulo="Paixão"
              texto="Colocamos dedicação e amor em tudo que fazemos. Cada café preparado carrega o cuidado e a paixão da nossa equipe por criar experiências memoráveis."
            />
          </div>
        </section>
      </main>
    </>
  );
}
