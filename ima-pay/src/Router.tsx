import { Routes, Route } from "react-router-dom";
import { Transfers } from "./pages/Transfers";
import { SearchTransfers } from "./pages/SearchTransfers";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Recovery } from "./pages/Recovery";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/recovery' element={<Recovery />} />

            <Route path="/" element={<DefaultLayout />}>
                <Route path="/transfers/:userId" element={<Transfers />} >
                    <Route path="/search" element={<SearchTransfers />} />
                </Route>
            </Route>

        </Routes>
    )
}
