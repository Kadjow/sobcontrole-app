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
  },
  button: {
    backgroundColor: '#F8961E',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Estilos para Checklist
  checklistContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f4',
  },
  checklistItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#F07C00',  // Atualizando para a cor solicitada
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  checklistText: {
    fontSize: 18,
    color: '#fff',  // Texto branco para contraste com o fundo laranja
  },
  // Estilos para ChecklistDetails
  checklistDetailsContainer: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#F07C00',  // Atualizando para a cor solicitada
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  checklistDetailsText: {
    fontSize: 16,
    color: '#fff',  // Texto branco para contraste com o fundo laranja
    marginBottom: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  // Estilo para quando não há checklists
  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});
