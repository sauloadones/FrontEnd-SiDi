import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login/index'
import Home from '../pages/Home/index'
import Register from "../pages/Register"
import ForgotPassaword from '../pages/Esqueceu'
import Pontos from '../pages/Pontos'
import Pagamento from '../pages/Pagamento'
import Localizacao from '../pages/Localizacao'
import Justificar from '../pages/Justificar'
import ProtectedRoute from '@components/ProtectedRoute'; // Import the ProtectedRoute component

export default function RouterComp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/esqueceu" element={<ForgotPassaword />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/home/pontos" element={<Pontos />} />
                    <Route path="/home/pagamento" element={<Pagamento />} />
                    <Route path="/home/localizacao" element={<Localizacao />} />
                    <Route path="/home/justificar" element={<Justificar />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
