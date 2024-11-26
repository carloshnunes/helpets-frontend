export default function Header() {
  return (
      <header
          style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem 2rem",
              borderBottom: "1px solid #ddd",
          }}
      >
          <h1 style={{ fontSize: "1.5rem", color: "#4a90e2" }}>Helpets</h1>
          <nav style={{ display: "flex", gap: "1rem" }}>
              <a href="/" style={{ color: "#333", textDecoration: "none" }}>Início</a>
              <a href="/achados" style={{ color: "#333", textDecoration: "none" }}>Achados e perdidos</a>
              <a href="/contato" style={{ color: "#333", textDecoration: "none" }}>Contato</a>
              <a href="/login" style={{
                  color: "#4a90e2",
                  border: "1px solid #4a90e2",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  textDecoration: "none"
              }}>Entrar</a>
          </nav>
      </header>
  );
}
