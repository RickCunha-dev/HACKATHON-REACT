# 🚀 HACKATHON REACT - Frontend

Este é o frontend do projeto HACKATHON desenvolvido em React + Vite. Uma plataforma criativa para portfólios profissionais e networking.

## 📋 Sobre o Projeto

Plataforma web responsiva que permite aos usuários:
- ✅ Publicar e visualizar portfólios profissionais
- ✅ Sistema completo de autenticação (Login/Cadastro)
- ✅ Recuperação de senha via email
- ✅ Explorar projetos de outros usuários
- ✅ Blog com conteúdo sobre criação de portfólios
- ✅ Interface responsiva para mobile/tablet/desktop

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para UI
- **Vite** - Build tool e servidor de desenvolvimento
- **CSS Modules** - Estilos componetizados e scoped
- **Font Awesome** - Ícones
- **JavaScript ES6+** - Linguagem principal

## 📁 Estrutura do Projeto

```
src/
├── pages/               # Páginas principais da aplicação
│   ├── Home.jsx            # Página inicial
│   ├── Explore.jsx         # Explorar portfólios
│   ├── Blog.jsx            # Blog e artigos
│   ├── Login.jsx           # Autenticação
│   ├── Cadastro.jsx        # Registro de usuários
│   ├── Profile.jsx         # Perfil do usuário
│   ├── Portfolio.jsx       # Portfólio individual
│   ├── EsqueciSenha.jsx    # Recuperação de senha
│   ├── EmailEnviado.jsx    # Confirmação de email
│   └── RedefinirSenha.jsx  # Redefinição de senha
├── images/              # Imagens e assets
├── icons/               # Ícones da aplicação
└── App.jsx             # Componente raiz e roteamento
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/RickCunha-dev/HACKATHON-REACT.git

# Entre no diretório
cd HACKATHON-REACT

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 🔗 Integração com FastAPI - IMPORTANTE

### Endpoints Necessários

A equipe do **FastAPI** deve implementar os seguintes endpoints para integração completa:

#### 🔐 **Autenticação**
```http
POST /api/auth/login
Content-Type: application/json

{
  "cpf": "123.456.789-00",
  "senha": "minhasenha123"
}

Response: {
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@email.com"
  }
}
```

```http
POST /api/auth/register
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao@email.com",
  "cpf": "123.456.789-00",
  "senha": "minhasenha123",
  "confirmarSenha": "minhasenha123"
}
```

#### 📧 **Recuperação de Senha**
```http
POST /api/auth/forgot-password
Content-Type: application/json

{
  "email": "joao@email.com"
}
```

```http
POST /api/auth/reset-password
Content-Type: application/json

{
  "token": "reset_token",
  "novaSenha": "novasenha123",
  "confirmarSenha": "novasenha123"
}
```

#### 👤 **Perfil do Usuário**
```http
GET /api/users/profile
Authorization: Bearer {token}

Response: {
  "id": 1,
  "nome": "João Silva",
  "email": "joao@email.com",
  "bio": "Desenvolvedor Full Stack",
  "avatar": "url_da_imagem"
}
```

```http
PUT /api/users/profile
Authorization: Bearer {token}
Content-Type: application/json

{
  "nome": "João Silva",
  "bio": "Nova biografia",
  "avatar": "nova_url_imagem"
}
```

#### 💼 **Portfólios**
```http
GET /api/portfolios
Response: [
  {
    "id": 1,
    "titulo": "Meu Projeto",
    "descricao": "Descrição do projeto",
    "imagem": "url_da_imagem",
    "user": {
      "nome": "João Silva",
      "avatar": "url_avatar"
    }
  }
]
```

```http
POST /api/portfolios
Authorization: Bearer {token}
Content-Type: application/json

{
  "titulo": "Novo Projeto",
  "descricao": "Descrição detalhada",
  "imagem": "url_da_imagem",
  "tecnologias": ["React", "Node.js"],
  "link": "https://projeto.com"
}
```

#### 📰 **Blog (Opcional)**
```http
GET /api/blog/articles
Response: [
  {
    "id": 1,
    "titulo": "Como criar um portfólio",
    "resumo": "Dicas essenciais...",
    "imagem": "url_da_imagem",
    "link": "url_completo"
  }
]
```

### 🔧 **Configurações CORS**

Configure o FastAPI para aceitar requisições do frontend:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # URL do React
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### 📝 **Headers Necessários**

Todas as requisições autenticadas devem incluir:
```
Authorization: Bearer {jwt_token}
Content-Type: application/json
```

### 🔄 **Integração no Frontend**

Para conectar o React com a API, atualize as URLs base em cada página:

```javascript
// Exemplo de integração
const API_BASE_URL = 'http://localhost:8000/api';

const login = async (cpf, senha) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ cpf, senha })
  });
  return response.json();
};
```

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px  
- **Mobile**: < 768px

## 🎨 Estilização

- CSS Modules para estilos scoped
- Variáveis CSS para cores e temas
- Animações e transições suaves
- Design system consistente

## 📝 Status das Funcionalidades

### ✅ Concluído
- [x] Todas as páginas React funcionais
- [x] Sistema de roteamento
- [x] Formulários com validação
- [x] Design responsivo
- [x] Integração de ícones
- [x] Hamburger menu mobile
- [x] Modal de privacidade

### 🔄 Pendente (Integração Backend)
- [ ] Autenticação real via API
- [ ] Persistência de dados
- [ ] Upload de imagens
- [ ] Envio de emails
- [ ] Sistema de busca

## 👥 Equipe de Desenvolvimento

**Frontend**: Rick Cunha
**Backend**: Equipe FastAPI

## 📞 Contato

Para dúvidas sobre integração:
- GitHub: [@RickCunha-dev](https://github.com/RickCunha-dev)
- Repositório: [HACKATHON-REACT](https://github.com/RickCunha-dev/HACKATHON-REACT)

---

**Nota importante**: Após implementar os endpoints da API, atualize as URLs base nos componentes React e teste todas as funcionalidades em ambiente de desenvolvimento antes do deploy.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
