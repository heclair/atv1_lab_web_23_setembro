// src/components/ClienteForm.tsx
import React, { useState } from "react";

interface Cliente {
    nome: string;
    email: string;
    status: string;
}

const ClienteForm: React.FC = () => {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [nome, setNome] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const handleCadastrar = () => {
        if (nome && email) {
            const novoCliente = {
                nome,
                email,
                status: "ATIVO",
            };
            setClientes([...clientes, novoCliente]);
            setNome("");
            setEmail("");
        }
    };

    const handleDelete = (index: number) => {
        const novosClientes = clientes.filter((_, i) => i !== index);
        setClientes(novosClientes);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Clientes</h2>

            <div style={styles.form}>
                <label style={styles.label}>Nome:</label>
                <input
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    style={styles.input}
                />

                <label style={styles.label}>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                />

                <button onClick={handleCadastrar} style={styles.button}>
                    Cadastrar
                </button>
            </div>

            {clientes.map((cliente, index) => (
                <div key={index} style={styles.card}>
                    <p>
                        <strong>Nome:</strong> {cliente.nome}
                    </p>
                    <p>
                        <strong>Email:</strong> {cliente.email}
                    </p>
                    <p>
                        <strong>Status:</strong> {cliente.status}
                    </p>
                    <button onClick={() => handleDelete(index)} style={styles.deleteButton}>
                        &#128465;
                    </button>
                </div>
            ))}
        </div>
    );
};

const styles = {

    container: {
        backgroundColor: "#1a1a1a",
        color: "#fff",
        padding: "20px",
        borderRadius: "10px",
        width: "400px",
        margin: "auto",
    },
    title: {
        textAlign: "center" as "left" | "right" | "center" | "justify" | "initial" | "inherit" | undefined, // Especificando tipos possíveis
    },
    form: {
        display: "flex",
        flexDirection: "column" as const,
        marginBottom: "20px",
    },
    label: {
        marginBottom: "5px",
    },
    input: {
        marginBottom: "10px",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "16px",
    },
    button: {
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        cursor: "pointer",
    },
    card: {
        backgroundColor: "#333",
        padding: "15px",
        borderRadius: "10px",
        marginBottom: "10px",
        position: "relative" as const,
    },
    deleteButton: {
        position: "absolute" as const,
        top: "10px",
        right: "10px",
        backgroundColor: "transparent",
        color: "red",
        border: "none",
        fontSize: "18px",
        cursor: "pointer",
    },
};

export default ClienteForm;