function LoginOptions() {
    return (
        <div className="w-full flex justify-around">
            <label className="flex gap-0.5 text-gray-500">
                <input
                    type="checkbox"
                    name=""
                    id=""
                    className="accent-indigo-500 bg-indigo-500 border-indigo-500 checked:bg-indigo-500 checked:border-indigo-500"
                />
                Lembre de mim
            </label>
            <a href="#" className="text-gray-500 hover:text-indigo-500">
                Esqueceu a senha?
            </a>
        </div>
    );
}
export default LoginOptions;
