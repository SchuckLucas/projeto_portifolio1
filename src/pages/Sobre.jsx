import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Sobre() {
  useEffect(() => {
    const elements = getElements();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          return;
        }
        entry.target.classList.remove("show");
      });
    });

    elements.forEach((e) => observer.observe(e));

    function getElements() {
      let list = [];
      document.querySelectorAll("section").forEach((section) => {
        Array.from(section.children).forEach((filho) => {
          filho.classList.add("hidden");
          list.push(filho);
        });
      });
      console.log(list);
      return list;
    }
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
            <div className="card">
              <h1 className="titulos">☕ Qualidade</h1>
              <p className="textos">
                Selecionamos cuidadosamente cada ingrediente, desde os grãos de
                café até os acompanhamentos, garantindo sabores únicos e uma
                experiência de excelência em cada detalhe.
              </p>
            </div>
            <div className="card">
              <h1 className="titulos">🤝 Atendimento</h1>
              <p className="textos">
                Acreditamos que cada cliente merece ser recebido com atenção e
                carinho. Nosso objetivo é criar conexões e tornar cada visita um
                momento especial.
              </p>
            </div>
            <div className="card">
              <h1 className="titulos">🌱 Sustentabilidade</h1>
              <p className="textos">
                Buscamos práticas responsáveis em nosso dia a dia, valorizando
                nossos parceiros, reduzindo desperdícios e contribuindo para um
                futuro melhor.
              </p>
            </div>
            <div className="card">
              <h1 className="titulos">✨ Paixão</h1>
              <p className="textos">
                Colocamos dedicação e amor em tudo que fazemos. Cada café
                preparado carrega o cuidado e a paixão da nossa equipe por criar
                experiências memoráveis.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
