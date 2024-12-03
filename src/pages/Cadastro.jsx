import "./Cadastro.css"
import { Link, useNavigate } from 'react-router-dom';
import api from "../config/axios";
import { useState } from 'react';

function Cadastro() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [fullName, setFullName] = useState("")
    const navigate = useNavigate();
    
    

    const handleCadastro = async (e) => {
        e.preventDefault();
        const cadastroData = {
          email,
          password,
          fullName
        };
        console.log(cadastroData)
        try {
          const response = await api.post('/auth/signup', cadastroData);  
          console.log(response)    
          navigate("/login");
        } catch (error) {
          console.error('Erro ao buscar dados do usuário:', error);
        }
      
    };
    return (
        <div className='container'>
            {/* <img className='imgFundo' src="./src/assets/images/imgCadastro.png" alt="" /> */}

            <div className='parteCima'>

                <div className='divLogo'>
                    <img className='Logo' src="./src/assets/images/LogoShadowDuel.png" alt="" />
                    <img className='shadowDuel' src="./src/assets/images/shadowDuel.png" alt="" />
                </div>
            </div>

            <form className='parteBaixo' onSubmit={(e) => handleCadastro(e)}>
                <div className='divCadastrar'>

                    <div className='textoInicial'>
                        <h1 className='tituloCadastro'>Crie a sua conta</h1>
                        <p className='subTitulo'>Por favor, preencha seus dados para criar uma conta</p>
                    </div>

                    <div className='divDescricao'>
                        <p className='descricaoInput'>Seu apelido*</p>
                        <input onChange={(e) =>setFullName(e.target.value)} type="text" required />
                    </div>

                    <div className='divDescricao'>
                        <p className='descricaoInput'>Email*</p>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" required />
                    </div>

                    <div className='divDescricao'>
                        <p className='descricaoInput'>Senha*</p>
                        <input onChange={(e) => setPassword(e.target.value)} type="text" required />
                    </div>

                    <Link to="/">
                        <p>Já tem uma conta?</p>
                    </Link>


                    <button className='botaoCadastrar' type="submit"  >Cadastrar</button>

                </div>
            </form>

        </div>
    )
}

export default Cadastro
