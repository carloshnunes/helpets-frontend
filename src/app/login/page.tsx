import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
    return (
        <>
            <Header />
            <main style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "2rem 4rem",
                height: "calc(100vh - 200px)"
            }}>
                {/* Texto de Login */}
                <div style={{ maxWidth: "500px" }}>
                    <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Boas-vindas à Helpets</h1>
                    <p style={{ fontSize: "1rem", marginBottom: "1.5rem" }}>
                        Entre para tornar o reencontro possível.
                    </p>
                    <button
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            padding: "10px 20px",
                            backgroundColor: "#333",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="Google"
                            style={{ width: "20px", height: "20px" }}
                        />
                        Entrar com Google
                    </button>
                    <p style={{ marginTop: "1rem", fontSize: "0.8rem" }}>
                        Ao continuar, você concorda com os{" "}
                        <a href="/termos" style={{ color: "#4a90e2", textDecoration: "none" }}>termos de uso</a>{" "}
                        e nossa{" "}
                        <a href="/privacidade" style={{ color: "#4a90e2", textDecoration: "none" }}>
                            política de privacidade
                        </a>.
                    </p>
                </div>

                {/* Imagem Decorativa */}
                <img
                    src="/images/dogPhotoLogin.svg"
                    alt="Cachorro"
                    style={{
                        maxWidth: "40%",
                        borderRadius: "15px",
                        objectFit: "cover",
                    }}
                />
            </main>
            <Footer />
        </>
    );
}
