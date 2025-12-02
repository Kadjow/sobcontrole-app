# 📱 SobControle App

O **SobControle App** é um aplicativo mobile desenvolvido em **React Native** com **TypeScript** para gerenciamento de **checklists**.  
Ele permite que o usuário realize **login com autenticação JWT**, consuma uma **API REST** e visualize listas de checklists e os detalhes de cada uma.

> Aplicativo focado em organizar atividades pessoais e profissionais por meio de checklists protegidos por autenticação.

---

## 🎯 Objetivo do projeto

O objetivo do SobControle App é:

- Centralizar checklists em um único aplicativo;
- Proteger o acesso via autenticação (JWT);
- Consumir uma API REST real em ambiente de testes;
- Servir como base de estudo para:
  - React Native com TypeScript;
  - Integração com API externa;
  - Fluxo de login + navegação autenticada.

---

## 🧱 Tecnologias utilizadas

- **React Native** com **TypeScript**
- **Expo CLI**
- **Axios** – consumo da API REST
- **AsyncStorage** – armazenamento do token JWT
- **React Navigation** – navegação entre telas
- **API REST** hospedada em produção

---

## ✅ Funcionalidades

- **Login com autenticação JWT**  
  Envio de e-mail e senha para a API e armazenamento do token para uso nas próximas requisições.

- **Listagem de checklists**  
  Após o login, o usuário visualiza uma lista de checklists disponíveis.

- **Detalhes do checklist**  
  Ao selecionar um checklist, são exibidas suas perguntas, respostas e demais informações.

- **Proteção de rotas**  
  Apenas usuários autenticados conseguem acessar as telas de checklist.

---

## 🔌 API e autenticação

O app consome uma API disponível em:

https://driver-api-production.up.railway.app

- A autenticação é feita na rota `/auth`;
- O token JWT retornado é armazenado no app (via AsyncStorage);
- Esse token é utilizado nas chamadas autenticadas para listar e detalhar checklists.

No código, o login utiliza credenciais padrão configuradas em `Login.tsx`, que podem ser alteradas conforme necessário:

    const [email, setEmail] = useState('tester@tester.com');
    const [password, setPassword] = useState('sob123');

> Em produção, o ideal é remover credenciais padrão e utilizar inputs do usuário + validações.

---

## 🛠 Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- **Node.js** (versão recomendada LTS)
- **Expo CLI**
- **Yarn** ou **npm**
- Emulador Android/iOS **ou** dispositivo físico com o app **Expo Go** instalado

---

## 🚀 Como rodar o projeto

### 1. Clonar o repositório

    git clone https://github.com/Kadjow/sobcontrole-app.git
    cd sobcontrole-app

### 2. Instalar dependências

Com **Yarn**:

    yarn install

Ou com **npm**:

    npm install

### 3. Configurar a API (opcional)

Se necessário, altere a URL base da API ou as credenciais padrão no arquivo `Login.tsx`, apontando para o backend desejado.

### 4. Iniciar o app

    expo start

Isso abrirá o **Metro Bundler** no navegador. A partir daí você pode:

- Escanear o QR Code com o app **Expo Go** no celular; ou
- Rodar o projeto em um emulador Android/iOS.

---

## 📂 Estrutura do projeto

Estrutura principal (simplificada):

    sobcontrole-app/
    ├── android/                 # Configurações nativas Android (geradas pelo Expo/React Native)
    ├── assets/                  # Imagens e outros recursos estáticos
    ├── sobcontrole-app/         # Pasta interna gerada/configurada pelo ambiente
    ├── src/
    │   ├── components/
    │   │   ├── Navegacao.jsx          # Configuração de navegação entre telas
    │   │   ├── Login.tsx              # Tela de login + chamada à API de autenticação
    │   │   ├── Checklist.jsx          # Tela com a listagem de checklists
    │   │   └── ChecklistsDetails.tsx  # Tela com detalhes de um checklist específico
    │   │
    │   ├── Styles/
    │   │   └── CustomStyles.ts        # Estilos compartilhados entre as telas
    │   │
    │   └── img/
    │       └── sobLogo.jpg            # Logo utilizada na tela de login
    │
    ├── App.tsx                 # Arquivo principal do app
    ├── app.json                # Configurações do projeto Expo
    ├── tsconfig.json           # Configuração TypeScript
    ├── package.json            # Dependências e scripts
    └── README.md               # Documentação do projeto

---

## 🎨 Estilos

Os estilos do app são centralizados em:

`src/Styles/CustomStyles.ts`

Nesse arquivo ficam:

- Estilos de inputs;
- Botões;
- Textos;
- Layout das telas de login, listagem e detalhes.

Essa abordagem facilita a manutenção e garante consistência visual entre as telas.

---

## 📦 Build / produção

Para gerar builds ou versões instaláveis, consulte a documentação oficial do **Expo**:

https://docs.expo.dev

A partir dela você pode:

- Gerar APK/AAB para Android;
- Gerar builds para iOS;
- Configurar publicação nas lojas.

---

## 👨‍💻 Autor

**Diogo Arthur Gulhak**  
Desenvolvedor de Software, focado em **Flutter/Dart** e desenvolvimento mobile, com experiência em integração com APIs, autenticação e boas práticas de arquitetura.

- GitHub: [@Kadjow](https://github.com/Kadjow)
- LinkedIn: [Diogo Arthur Gulhak](https://www.linkedin.com/in/diogo-arthur-gulhak-0bbaa0273/)
