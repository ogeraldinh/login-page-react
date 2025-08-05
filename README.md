# 📘 Página de Login com React

Este é um projeto de autenticação simples feito com **React**, **Tailwind CSS** e **localStorage**. O sistema permite que usuários se registrem e façam login localmente. Após o login bem-sucedido, o usuário é redirecionado para uma página de exemplo.

---

## 🚀 Funcionalidades

- Cadastro de novos usuários
- Login com validação de credenciais
- Armazenamento de usuários no `localStorage`
- Exibição e ocultação de senha com ícones (usando `lucide-react`)
- Redirecionamento após login
- Componentes reutilizáveis (`Input`, `Button`)
- Interface estilizada com **Tailwind CSS**

---

## 🛠️ Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)
- [UUID](https://www.npmjs.com/package/uuid) para geração de IDs únicos

---

## 📁 Estrutura de Pastas

```bash
src/
│
├── components/
│   ├── Input.jsx           # Campo de input reutilizável
│   ├── Button.jsx          # Botão reutilizável
│   ├── ButtonBack.jsx      # Botão de voltar reutilizável
│   ├── Login.jsx           # Formulário de login
│   ├── Register.jsx        # Formulário de cadastro
│   ├── RegisterContainer.jsx
│   ├── Title.jsx           # Título da página
│   └── LoginOptions.jsx    # Opções de login
│
├── pages/
│   └── UserPage.jsx        # Página após realização do login
│   └── RegisterPage.jsx    # Página de cadastro de usuário
│
├── App.jsx                 # Estrutura principal da aplicação
├── main.jsx                # Entrada da aplicação
└── index.css               # Tailwind e estilos globais
