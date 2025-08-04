function RegisterContainer() {
    return (
        <div className="flex flex-col gap-2">
            <h2 className="text-2xl text-indigo-500 font-semibold">
                Não possui uma conta?
            </h2>
            <button className="bg-indigo-500 p-2 rounded-xl text-slate-50 w-full hover:bg-indigo-400 cursor-pointer transition">
                <a href="/register">Cadastrar-se</a>
            </button>
        </div>
    );
}

export default RegisterContainer;
