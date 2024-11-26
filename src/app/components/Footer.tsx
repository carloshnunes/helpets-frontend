export default function Footer() {
  return (
      <footer
          style={{
              backgroundColor: "#333",
              color: "#fff",
              padding: "2rem",
              display: "flex",
              justifyContent: "space-around",
          }}
      >
          <div>
              <h3 style={{ marginBottom: "1rem" }}>Helpets</h3>
              <p>Criado por Plathanos</p>
              <div style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
                  <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Instagram</a>
                  <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Facebook</a>
                  <a href="/" style={{ color: "#fff", textDecoration: "none" }}>Email</a>
              </div>
          </div>
          <div>
              <h3 style={{ marginBottom: "1rem" }}>Helpets</h3>
              <p><a href="/" style={{ color: "#fff", textDecoration: "none" }}>Achados e perdidos</a></p>
              <p><a href="/" style={{ color: "#fff", textDecoration: "none" }}>Termos de uso</a></p>
              <p><a href="/" style={{ color: "#fff", textDecoration: "none" }}>Política de privacidade</a></p>
          </div>
          <div>
              <h3 style={{ marginBottom: "1rem" }}>Aplicativo</h3>
              <p><a href="/" style={{ color: "#fff", textDecoration: "none" }}>Baixar para Android</a></p>
              <p><a href="/" style={{ color: "#fff", textDecoration: "none" }}>Baixar para iOS</a></p>
          </div>
      </footer>
  );
}
