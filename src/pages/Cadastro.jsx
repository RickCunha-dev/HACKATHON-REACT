import { useState } from 'react';
import styles from './Cadastro.module.css';

export default function Cadastro({ onNavigate }) {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'senha') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validações básicas
    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    if (formData.senha.length < 6) {
      alert('A senha deve ter pelo menos 6 caracteres!');
      return;
    }

    // Aqui você implementaria a lógica de cadastro
    console.log('Cadastro data:', formData);
    alert('Cadastro realizado com sucesso!');
    onNavigate('login');
  };

  return (
    <div className={styles.cadastroPage}>
      <header className={styles.logo}>
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>
          <img src="/images/Logo padrão.png" alt="Logo" />
        </a>
      </header>

      <div className={styles.container}>
        <div className={styles.image}></div>

        <div className={styles.formulario}>
          <h1>Cadastre-se</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome Completo</label><br />
            <input
              id="nome"
              name="nome"
              type="text"
              value={formData.nome}
              onChange={handleInputChange}
              required
            /><br /><br />

            <label htmlFor="cpf">CPF</label><br />
            <input
              id="cpf"
              name="cpf"
              type="number"
              value={formData.cpf}
              onChange={handleInputChange}
              required
            /><br /><br />

            <label htmlFor="email">Email</label><br />
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            /><br /><br />

            <label htmlFor="senha">Senha</label><br />
            <div className={styles['input-olho']}>
              <input
                id="senha"
                name="senha"
                type={showPassword ? 'text' : 'password'}
                value={formData.senha}
                onChange={handleInputChange}
                required
              />
              <img
                src={showPassword ? "/icons/olhoaberto.png" : "/icons/olhofechado.png"}
                alt="Mostrar senha"
                className={styles.olhinho}
                onClick={() => togglePasswordVisibility('senha')}
              />
            </div><br /><br />

            <label htmlFor="confirmarSenha">Confirmar Senha</label><br />
            <div className={styles['input-olho']}>
              <input
                id="confirmarSenha"
                name="confirmarSenha"
                type={showConfirmPassword ? 'text' : 'password'}
                value={formData.confirmarSenha}
                onChange={handleInputChange}
                required
              />
              <img
                src={showConfirmPassword ? "/icons/olhoaberto.png" : "/icons/olhofechado.png"}
                alt="Mostrar senha"
                className={styles.olhinho}
                onClick={() => togglePasswordVisibility('confirmarSenha')}
              />
            </div><br /><br />

            <div className={styles.btnForm}>
              <button type="submit" className={styles['btn-cadastro']}>Cadastre-se</button>
            </div>
          </form>

          <div className={styles.separador}>
            <span className={styles.ou}>ou</span>
          </div>

          <div className={styles['botoes-redes-socias']}>
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Cadastro com Google em desenvolvimento'); }}>
              <img src="/icons/search.png" alt="Entrar com Google" />
            </a>
            <a href="#" onClick={(e) => { e.preventDefault(); alert('Cadastro com Apple em desenvolvimento'); }}>
              <img src="/icons/apple-logo.png" alt="Entrar com Apple" />
            </a>
          </div>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <span style={{ color: '#fff', fontSize: '16px' }}>
              Já tem uma conta?{' '}
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onNavigate('login'); }}
                style={{ color: '#E53935', textDecoration: 'none', fontWeight: 'bold' }}
              >
                Faça login
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}