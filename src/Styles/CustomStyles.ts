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

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    marginBottom: 15,
    width: '100%',
  },

  input: {
    height: 40,
    borderColor: 'transparent',
    padding: 8,
    backgroundColor: '#fff',
    flex: 1,
  },

  button: {
    backgroundColor: '#F8961E',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },

  checklistItem: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#F07C00',
    borderRadius: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },

  checklistText: {
    fontSize: 18,
    color: '#fff',
  },

  checklistDetailsContainer: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#F07C00',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },

  checklistDetailsText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },

  emptyText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
});
