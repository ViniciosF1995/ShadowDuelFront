import api from "../config/axios";
const { login } = useAuth();

 const handleLogin = async (email, password) => {
      const loginData = {
        email,
        password
      };
      try {
        const response = await api.post('/auth/login', loginData);      
        login(response.data.token);
        navigate("/home");
      } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
      }
    
  };