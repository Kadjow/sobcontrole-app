import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Estilo principal do contêiner da tela de login
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },

  // Estilo para o logo
  logoImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },

  sobLogo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },

  // Estilo para o título da tela de login
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F8961E',
    marginBottom: 30,
  },

  // Contêiner para o formulário (campo de email e senha)
  formContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },

  // Estilo do contêiner que envolve o input e o ícone
  inputContainer: {
    flexDirection: 'row', // O input e o ícone estão lado a lado
    alignItems: 'center', // Alinhamento central vertical
    borderColor: '#ccc', // Cor da borda
    borderWidth: 1, // Largura da borda
    borderRadius: 5, // Bordas arredondadas
    paddingHorizontal: 8, // Espaçamento interno horizontal
    backgroundColor: '#fff', // Cor de fundo branca
    marginBottom: 15, // Margem inferior entre os inputs
    width: '100%', // Largura total do contêiner
  },

  // Estilo para o campo de input (email ou senha)
  input: {
    width: '100%', // Ocupa toda a largura do contêiner
    height: 40, // Altura fixa
    borderColor: 'transparent', // Remover a borda do input interno
    padding: 8, // Espaçamento interno
    backgroundColor: '#fff', // Fundo branco
    flex: 1, // O input ocupa todo o espaço disponível no contêiner
  },

  // Estilo para o botão de login
  button: {
    backgroundColor: '#F8961E', // Cor do fundo do botão
    paddingVertical: 10, // Espaçamento vertical interno
    paddingHorizontal: 40, // Espaçamento horizontal interno
    borderRadius: 5, // Bordas arredondadas
    marginTop: 20, // Espaçamento superior
    width: '100%', // Largura total do botão
  },

  // Estilo do texto dentro do botão
  buttonText: {
    color: '#fff', // Cor do texto (branco)
    fontWeight: 'bold', // Texto em negrito
    textAlign: 'center', // Texto centralizado
  },

  // Estilo geral do contêiner
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },

  // Estilo de cada item de checklist
  checklistItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#F07C00', // Cor de fundo do item
    borderRadius: 8, // Bordas arredondadas
    borderColor: '#ccc', // Cor da borda
    borderWidth: 1, // Largura da borda
  },

  // Estilo do texto dentro do item de checklist
  checklistText: {
    fontSize: 18,
    color: '#fff', // Cor do texto (branco)
  },

  // Estilo do contêiner de detalhes do checklist
  checklistDetailsContainer: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#F07C00',  
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },

  // Estilo do texto de detalhes do checklist
  checklistDetailsText: {
    fontSize: 16,
    color: '#fff',  
    marginBottom: 5,
  },

  // Estilo do texto quando nenhum item for encontrado
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },

  // Contêiner para o campo de senha e o ícone
  passwordContainer: {
    flexDirection: 'row', // Ícone e campo de senha na mesma linha
    alignItems: 'center', // Alinhar verticalmente ao centro
    borderColor: '#ccc', // Cor da borda
    borderWidth: 1, // Largura da borda
    borderRadius: 5, // Bordas arredondadas
    paddingHorizontal: 8, // Espaçamento interno horizontal
    backgroundColor: '#fff', // Cor de fundo branca
    marginBottom: 15, // Margem inferior
    width: '100%', // Largura total do contêiner
  },
});
