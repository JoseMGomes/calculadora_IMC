import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "./ResultImc/";

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2)); // toFixed = tamanho da casa decimal
  }

  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null)
      setWeight(null)
      setMessageImc("Seu imc é igual: " ); // Atualize a mensagem com o IMC calculado
      setTextButton("Calcular Novamente");
    } else {
      setMessageImc("Preencha o peso e altura"); // Ajuste a mensagem para exibir quando os valores estão vazios
      setTextButton("Calcular");
      setImc(null);
    }
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="EX: 1.75"
          keyboardType="numeric"
        />
        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="EX: 65.300"
          keyboardType="numeric"
        />
        <Button onPress={validationImc} title={textButton} />
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
