import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <div className="not-found-page__card">
        <p className="section-label">404</p>
        <h1>Página não encontrada.</h1>
        <p>
          O endereço solicitado não existe nesta versão do website. Volte ao
          início para continuar a navegar.
        </p>
        <Link className="button button--primary" to="/">
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}

export default NotFoundPage;
