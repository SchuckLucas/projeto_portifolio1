export default function Card({ titulo, texto }) {
  return (
    <div className="card">
      <h1 className="subtitulos">{titulo}</h1>
      <p className="textos">{texto}</p>
    </div>
  );
}
