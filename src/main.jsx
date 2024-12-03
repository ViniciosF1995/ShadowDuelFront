// // index.js
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import { RouterProvider } from 'react-router-dom';
// import router from './router/routes.jsx';  // Certifique-se de que o caminho esteja correto
// import { GlobalContextProvider } from './contexts/GlobalContext.jsx';

// createRoot(document.getElementById('root')).render(
//   <GlobalContextProvider>
//     <RouterProvider router={router} />
//   </GlobalContextProvider>
// );






// index.js
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'; // Corrigido
import { GlobalContextProvider } from './contexts/GlobalContext.jsx';
import { AuthProvider } from "./contexts/AuthContext"; // Verifique se o caminho está correto

// Importação das páginas
import Cadastro from './pages/Cadastro'; // Exemplo, ajuste conforme necessário
import Login from './pages/Login'; // Exemplo, ajuste conforme necessário
import Batalhas from './pages/Batalhas'; // Exemplo, ajuste conforme necessário
import Caminho from './pages/Caminho'; // Exemplo, ajuste conforme necessário
import Perfil from './pages/Perfil'; // Exemplo, ajuste conforme necessário
import Decks from './pages/Decks'; // Exemplo, ajuste conforme necessário
import Loja from './pages/Loja'; // Exemplo, ajuste conforme necessário
import TelaBatalha from './pages/TelaBatalha'; // Exemplo, ajuste conforme necessário
import ProtectedRoute from './components/ProtectedRoute'; // Exemplo, ajuste conforme necessário

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<Login />} />
          <Route path="/batalhas" element={<Batalhas />} />
          <Route path="/telaBatalha" element={<TelaBatalha />} />

          <Route element={<ProtectedRoute />}>
            
            <Route path="/caminho" element={<Caminho />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/decks" element={<Decks />} />
            <Route path="/loja" element={<Loja />} />
           
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </GlobalContextProvider>
);


