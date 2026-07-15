import { useEffect } from "react";
import imagemInicial from "../assets/imagem1.jpg";
import { Link } from "react-router-dom";
import animarElementos from "../scripts/animation";
import Card from "../components/Card";

export default function Home() {
  useEffect(() => {
    animarElementos();
  }, []);

  return (
    <>
      <header className="header">
        <div>
          <h1 className="titulos">Bem-Vindo, nós somos a</h1>
          <h2 className="subtitulos">[Nome Empresa]</h2>
        </div>
        <Link className="links" to="/sobre">
          Sobre
        </Link>
      </header>
      <main className="main">
        <section id="section_imagem">
          <img
            className="imagem"
            src={imagemInicial}
            alt="Imagem de Cafeteria"
          />
        </section>
        <section className="box_section1 section_textos">
          <h1 className="titulos">Nossa história</h1>
          <p className="textos">
            A [Nome Empresa] nasceu da paixão por cafés especiais e da vontade
            de criar um lugar onde as pessoas pudessem se encontrar, conversar e
            aproveitar momentos únicos. Trabalhamos com grãos cuidadosamente
            selecionados, preparados por baristas apaixonados pelo que fazem,
            sempre buscando oferecer qualidade em cada detalhe.
          </p>
        </section>
        <section className="box_section2">
          <h1 className="titulos">Sabores que encantam</h1>
        </section>
        <section className="box_section1">
          <div className="box_cards">
            <Card
              titulo="Expresso Clássico"
              texto="Um café intenso, encorpado e com crema aveludada, preparado com grãos selecionados para proporcionar uma experiência autêntica."
            />
            <Card
              titulo="Cappuccino Cremoso"
              texto="A combinação perfeita entre expresso, leite vaporizado e espuma cremosa, finalizada com um delicado toque de chocolate."
            />
            <Card
              titulo="Latte Especial"
              texto="Um café suave e equilibrado, preparado com leite fresco e decorado com latte art para tornar cada xícara única."
            />
            <Card
              titulo="Mocha Premium"
              texto="A união do expresso com chocolate premium e leite vaporizado, criando uma bebida doce, cremosa e irresistível."
            />
          </div>
        </section>
        <section className="box_section2">
          <h1 className="titulos">Referência de Mercado</h1>
        </section>
        <section className="box_section1">
          <h1 className="titulos">
            O que nossos clientes dizem (Depoimentos fictícios)
          </h1>
          <div className="box_cards">
            <Card
              titulo="Ana Martins"
              texto="O melhor cappuccino que já experimentei! O ambiente é aconchegante e o atendimento faz você se sentir em casa."
            />
            <Card
              titulo="Rafael Costa"
              texto="Sempre que posso passo aqui para tomar um café. A qualidade dos grãos e o cuidado no preparo fazem toda a diferença."
            />
            <Card
              titulo="Mariana Souza"
              texto="Um lugar perfeito para conversar, trabalhar ou simplesmente relaxar. Os cafés e os doces são deliciosos!"
            />
          </div>
        </section>
      </main>
    </>
  );
}
