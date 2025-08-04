import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { Eye, EyeOff } from "lucide-react";
import LoginOptions from "./LoginOptions";
import { useNavigate } from "react-router-dom";
function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userFound = users.find(
            (user) => user.username === username && user.password === password
        );

        if (userFound) {
            alert("Login bem-sucedido!");
            navigate("/userpage"); // redireciona para a página de usuário
        } else {
            alert("Usuário ou senha incorretos.");
        }
    };

    let toggleType;
    if (showPassword === false) {
        toggleType = "password";
    } else {
        toggleType = "text";
    }

    return (
        <div className="">
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
                        type={toggleType}
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        className="pr-10" // espaço para o ícone
                    />
                    {showPassword ? (
                        <EyeOff
                            onClick={() => setShowPassword(false)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                        />
                    ) : (
                        <Eye
                            onClick={() => setShowPassword(true)}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                        />
                    )}
                </div>
                <Button text="Entrar" />
                <LoginOptions />
            </form>
        </div>
    );
}

export default Login;
