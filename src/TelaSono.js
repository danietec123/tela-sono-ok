import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, Button, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

const TelaSono = () => {
  const [selectedItem1, setSelectedItem1] = useState(null);
  const [open1, setOpen1] = useState(false);
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');

  const navigation = useNavigation();  /*permite a navegação entra as telas*/

  const handleAdicionar = () => {
    
  };

  // Função para formatar a entrada de horas e minutos
  const formatarHoraMinuto = (text) => {
    // Remover caracteres não numéricos
    const formattedText = text.replace(/\D/g, '');
    // Adicionar ":" entre os dois primeiros dígitos, se necessário
    if (formattedText.length > 2) {
      return `${formattedText.slice(0, 2)}:${formattedText.slice(2, 4)}`;
    } else {
      return formattedText;
    }
  };

  return (
    <View style={styles.container}>
     {/* Ícone de voltar */}
     <Icon name="arrow-left" size={20} color="#000" onPress={() => navigation.goBack()} style={styles.iconBack} />
      <Text style={styles.titulo}>Sono</Text>  
      <View>
      <Image
    source={require('../assets/img/bebe-dormindo.png')}
    style={{ width:88, height: 55 }} //  largura e altura do imagem do icon
  />
      </View>

      <DropDownPicker
        items={[
          { label: 'Sono', value: 'Sono' }
        ]}
        defaultValue={null}
        placeholder="Selecione"
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        itemStyle={styles.dropdownItem}
        dropDownStyle={styles.dropdownMenu}
        open={open1}
        setOpen={setOpen1}
        value={selectedItem1}
        setValue={setSelectedItem1}
        zIndex={2000}
        zIndexInverse={2000}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Início (hh:mm)"
          value={inicio}
          onChangeText={(text) => setInicio(formatarHoraMinuto(text))}  /*CAMPO PARA INSERIR A VALOR DE INICIO COM HORA E MINU*/
          keyboardType="numeric"
          maxLength={5}
        />
        <TextInput
          style={styles.input}
          placeholder="Fim (hh:mm)"
          value={fim}
          onChangeText={(text) => setFim(formatarHoraMinuto(text))} /*CAMPO PARA INSERIR A VALOR DE FIM COM HORA E MINU*/
          keyboardType="numeric"
          maxLength={5} /*COMPRIMENTO MAXIMO DE CARACTER*/
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Adicionar"
          color='#30cfa9'
          onPress={handleAdicionar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, // Margem inferior do título
    marginTop: -250, // Margem superior do título, ajustada para alinhar com a borda superior
  },
  dropdownContainer: {
    width: '80%',
    marginBottom: 20,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    backgroundColor: '#ADD8E6',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  dropdownItem: {
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  dropdownMenu: {
    marginTop: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  input: {
    width: '48%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  buttonContainer: { /*botao adicionar*/
    width: '80%',
    marginBottom: 20, // Ajuste a margem inferior conforme necessário
    marginTop: 70, // Mover o botão "Adicionar" um pouco para cima
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#30cfa9',
  },
  iconBack: { // ícone de voltar
    position: 'absolute', // Posicionamento absoluto
    top: 16, // Distância do topo
    left: 16, // Distância da esquerda
  },
});

export default TelaSono;
