import { useEffect } from "react";
import imagemInicial from "../assets/imagem1.jpg";
import { Link } from "react-router-dom";

export default function Home() {
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
        <div className="box_titulo">
          <h1 className="titulos">Bem Vindo, venha ver mais sobre nós</h1>
          <h2 className="subtitulos">Aurora Café</h2>
        </div>
        <Link className="links" to="/sobre">
          Sobre
        </Link>
      </header>
      <main className="main">
        <section>
          <img
            className="imagem"
            src={imagemInicial}
            alt="Imagem de Cafetera"
          />
        </section>
        <section className="box_section1">
          <h1 className="titulos">Nossa história</h1>
          <p className="textos">
            A Aurora Café nasceu da paixão por cafés especiais e da vontade de
            criar um lugar onde as pessoas pudessem se encontrar, conversar e
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
            <div className="card">
              <h2 className="subtitulos">Expresso Clássico</h2>
              <p className="textos">
                Um café intenso, encorpado e com crema aveludada, preparado com
                grãos selecionados para proporcionar uma experiência autêntica.
              </p>
            </div>
            <div className="card">
              <h2 className="subtitulos">Cappuccino Cremoso</h2>
              <p className="textos">
                A combinação perfeita entre expresso, leite vaporizado e espuma
                cremosa, finalizada com um delicado toque de chocolate.
              </p>
            </div>
            <div className="card">
              <h2 className="subtitulos">Latte Especial</h2>
              <p className="textos">
                Um café suave e equilibrado, preparado com leite fresco e
                decorado com latte art para tornar cada xícara única.
              </p>
            </div>
            <div className="card">
              <h2 className="subtitulos">Mocha Premium</h2>
              <p className="textos">
                A união do expresso com chocolate premium e leite vaporizado,
                criando uma bebida doce, cremosa e irresistível.
              </p>
            </div>
          </div>
        </section>
        <section className="box_section2">
          <h1 className="titulos">Referência de Mercado</h1>
        </section>
        <section className="box_section1">
          <h1 className="titulos">O que nossos clientes dizem</h1>
          <div className="box_cards">
            <div className="card">
              <h2 className="subtitulos">Ana Martins</h2>
              <p className="textos">
                O melhor cappuccino que já experimentei! O ambiente é
                aconchegante e o atendimento faz você se sentir em casa.
              </p>
            </div>
            <div className="card">
              <h2 className="subtitulos">Rafael Costa</h2>
              <p className="textos">
                Sempre que posso passo aqui para tomar um café. A qualidade dos
                grãos e o cuidado no preparo fazem toda a diferença.
              </p>
            </div>
            <div className="card">
              <h2 className="subtitulos">Mariana Souza</h2>
              <p className="textos">
                Um lugar perfeito para conversar, trabalhar ou simplesmente
                relaxar. Os cafés e os doces são deliciosos!
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
