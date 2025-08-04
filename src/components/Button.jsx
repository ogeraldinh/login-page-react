function Button({ text }) {
    return (
        <div className="w-full">
            <button className="bg-indigo-500 p-2 rounded-xl text-slate-50 w-full hover:bg-indigo-400 cursor-pointer transition">
                {text}
            </button>
        </div>
    );
}
export default Button;
