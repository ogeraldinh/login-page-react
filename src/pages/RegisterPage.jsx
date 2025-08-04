import ButtonBack from "../components/ButtonBack";
import Register from "../components/Register";
import Title from "../components/Title";

function RegisterPage() {
    return (
        <div className="w-screen h-screen bg-indigo-400 flex flex-col items-center justify-center p-6 gap-2">
            <div className="absolute top-0 flex flex-row items-center justify-center">
                <ButtonBack />
                <Title text="Página de Cadastro" />
            </div>
            <div className="w-100 p-6 bg-slate-300 flex flex-col gap-2 items-center rounded-2xl">
                <h2 className="text-2xl text-indigo-500 font-semibold">
                    Informe seus dados:
                </h2>
                <Register />
            </div>
        </div>
    );
}

export default RegisterPage;
