function Input({ type="text", placeholder, value, onChange }) {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="bg-slate-100 text-2xl p-2 rounded-md outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
            />
        </div>
    );
}

export default Input;
