import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F8961E',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#F07C00',  // Cor aplicada nos botões
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checklistContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  checklistItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#F07C00',  // Cor aplicada nos itens de checklist
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  checklistText: {
    fontSize: 18,
    color: '#fff',  // Texto em branco para contraste
  },
  checklistDetailsContainer: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#F07C00',  // Cor aplicada nas bordas dos detalhes do checklist
    borderWidth: 1,
  },
  checklistDetailsText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
});
