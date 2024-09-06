
# SobControle App

O SobControle App é uma aplicação React Native que permite o gerenciamento de checklists protegidos por autenticação via API Rest. O aplicativo realiza autenticação JWT e consome uma API para listar checklists e detalhes de cada checklist.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:

- [Node.js](https://nodejs.org/en/) (v12 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install) ou npm

Além disso, o emulador Android ou iOS, ou um dispositivo físico com o aplicativo **Expo Go**.

## Passos para Configuração

### 1. Clonar o repositório

Clone o repositório do projeto para a sua máquina local:

```
git clone <URL do Repositório>
cd <nome-do-repositório>
```

### 2. Instalar as dependências

No diretório do projeto, instale as dependências com Yarn ou npm:

```
yarn install
```

ou

```
npm install
```

### 3. Configuração da API

O aplicativo se comunica com a API em `https://driver-api-production.up.railway.app`. Certifique-se de que essa API está acessível ou modifique a URL da API no código, se necessário.

A autenticação é feita usando um email e senha padrão, que podem ser modificados no arquivo `Login.tsx`:

```typescript
const [email, setEmail] = useState('tester@tester.com');
const [password, setPassword] = useState('sob123');
```

### 4. Executar o aplicativo

Para rodar o aplicativo em modo de desenvolvimento, use o Expo CLI:

```
expo start
```

Isso abrirá o **Metro Bundler**. A partir daí, você pode:

- Escanear o código QR no seu dispositivo móvel usando o aplicativo **Expo Go**.
- Ou rodar o emulador Android/iOS no seu computador.

### 5. Funcionalidades do Aplicativo

- **Autenticação**: Realize login utilizando a rota `/auth` da API.
- **Listagem de Checklists**: Depois de autenticado, o usuário poderá ver uma lista de checklists disponíveis.
- **Detalhes do Checklist**: Cada checklist contém perguntas e respostas, que podem ser visualizadas ao clicar no item da lista de checklists.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

```
src/
├── components/
│   ├── Navegacao.jsx        # Componente de navegação entre telas
│   ├── Login.tsx            # Tela de login com autenticação via API
│   ├── Checklist.jsx        # Tela que exibe a lista de checklists
│   └── ChecklistsDetails.tsx # Tela que exibe os detalhes de um checklist específico
│
├── Styles/
│   └── CustomStyles.ts      # Estilos customizados para as telas
│
└── img/
    └── sobLogo.jpg          # Imagem de logo usada na tela de login
```

## Recursos de Estilo

Os estilos para as telas estão centralizados no arquivo `CustomStyles.ts`, que organiza as definições de estilo para componentes como inputs, botões e listas.

## Tecnologias Utilizadas

- **React Native** com TypeScript
- **Expo CLI**
- **Axios** para requisições HTTP
- **AsyncStorage** para armazenamento seguro de tokens JWT
- **React Navigation** para navegação entre telas

## Executando em Produção

Para gerar um APK ou executar em um dispositivo real, consulte a [documentação do Expo](https://docs.expo.dev/distribution/building-standalone-apps/).
