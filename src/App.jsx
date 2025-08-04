import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import RegisterContainer from "./components/RegisterContainer";
import Title from "./components/Title";
import Dashboard from "./pages/Dashboard";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <div className="w-screen h-screen bg-indigo-400 flex flex-col items-center justify-center p-6 gap-2">
                        <div className="absolute top-0">
                            <Title text="Página de Login" />
                        </div>
                        <div className="w-100 p-6 bg-slate-300 flex flex-col items-center rounded-2xl ">
                            <Login />
                        </div>
                        <div className="w-100 p-6 bg-slate-300 flex flex-col items-center rounded-2xl ">
                            <RegisterContainer />
                        </div>
                    </div>
                }
            />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default App;
