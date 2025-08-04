import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Input from "./Input";
import Button from "./Button";
function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem("users")) || []
    );

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!username || !password || !confirmPassword) {
            alert("Preencha todos os campos.");
            return;
        }

        if (password !== confirmPassword) {
            alert("As senhas não coincidem.");
            return;
        }

        const newUser = {
            id: v4(),
            username,
            password,
        };

        setUsers([...users, newUser]);

        alert("Usuário registrado com sucesso!");

        // Limpa campos
        setUsername("");
        setPassword("");
        setConfirmPassword("");
    };
    return (
        <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-2"
        >
            <div>
                <Input
                    type="text"
                    placeholder="Nome de usuário"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
            </div>
            <div className="relative w-full">
                <Input
                    type="text"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    className="pr-10" // espaço para o ícone
                />
            </div>
            <div className="relative w-full">
                <Input
                    type="text"
                    placeholder="Confirme a Senha"
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                    }}
                    className="pr-10" // espaço para o ícone
                />
            </div>
            <Button text="Enviar" />
        </form>
    );
}

export default Register;
