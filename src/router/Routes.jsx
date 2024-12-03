import { createBrowserRouter } from "react-router-dom";
import Cadastro from "../pages/Cadastro";
import Login from "../pages/Login";

import Batalhas from "../pages/Batalhas";
import Perfil from "../pages/Perfil";
import Decks from "../pages/Decks";
import Loja from "../pages/Loja";
import Caminho from "../pages/Caminho";
import TelaBatalha from "../pages/TelaBatalha";

// const router = createBrowserRouter([
//     {path: "/cadastro", element: <Cadastro />},
//     {path: "/", element: <Login />},

//     {path: "/batalhas", element: <Batalhas />},
//     {path: "/caminho", element: <Caminho />},
//     {path: "/perfil", element: <Perfil />},
//     {path: "/decks", element: <Decks />},
//     {path: "/loja", element: <Loja />},
//     {path: "/telaBatalha", element: <TelaBatalha />},
    
// ])


// export default router;

import { AuthProvider } from "../contexts/AuthContext";

<AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<Login />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/batalhas" element={<Batalhas />} />
            <Route path="/caminho" element={<Caminho />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/decks" element={<Decks />} />
            <Route path="/loja" element={<Loja />} />
            <Route path="/telaBatalha" element={<TelaBatalha />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>