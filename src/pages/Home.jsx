import imagemInicial from "../assets/imagem1.jpg";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="box_titulo">
          <h1 className="titulos">Bem Vindo, nós somos a [Nome Empresa]</h1>
          <h2 className="subtitulo">Aurora Café</h2>
        </div>
      </header>
      <main className="main">
        <section className="hidden">
          <img
            className="imagem"
            src={imagemInicial}
            alt="Imagem de Cafetera"
          />
        </section>
        <section className="hidden box_section1">
          <h1 className="titulo">Nossa história</h1>
          <p className="textos">
            A Aurora Café nasceu da paixão por cafés especiais e da vontade de
            criar um lugar onde as pessoas pudessem se encontrar, conversar e
            aproveitar momentos únicos. Trabalhamos com grãos cuidadosamente
            selecionados, preparados por baristas apaixonados pelo que fazem,
            sempre buscando oferecer qualidade em cada detalhe.
          </p>
        </section>
        <section className="hidden box_section2">
          <h1 className="titulos">Sabores que encantam</h1>

          <div className="card">
            <h2 className="subtitulo">Expresso Clássico</h2>
            <p className="textos">
              Um café intenso, encorpado e com crema aveludada, preparado com
              grãos selecionados para proporcionar uma experiência autêntica.
            </p>
          </div>

          <div className="card">
            <h2 className="subtitulo">Cappuccino Cremoso</h2>
            <p className="textos">
              A combinação perfeita entre expresso, leite vaporizado e espuma
              cremosa, finalizada com um delicado toque de chocolate.
            </p>
          </div>

          <div className="card">
            <h2 className="subtitulo">Latte Especial</h2>
            <p className="textos">
              Um café suave e equilibrado, preparado com leite fresco e decorado
              com latte art para tornar cada xícara única.
            </p>
          </div>

          <div className="card">
            <h2 className="subtitulo">Mocha Premium</h2>
            <p className="textos">
              A união do expresso com chocolate premium e leite vaporizado,
              criando uma bebida doce, cremosa e irresistível.
            </p>
          </div>
        </section>
        <section className="hidden box_section1">
          <h1 className="titulos">O que nossos clientes dizem</h1>

          <div className="box_depoimentos">
            <div className="depoimento">
              <h2 className="subtitulo">Ana Martins</h2>
              <p className="textos">
                O melhor cappuccino que já experimentei! O ambiente é
                aconchegante e o atendimento faz você se sentir em casa.
              </p>
            </div>

            <div className="depoimento">
              <h2 className="subtitulo">Rafael Costa</h2>
              <p className="textos">
                Sempre que posso passo aqui para tomar um café. A qualidade dos
                grãos e o cuidado no preparo fazem toda a diferença.
              </p>
            </div>

            <div className="depoimento">
              <h2 className="subtitulo">Mariana Souza</h2>
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
