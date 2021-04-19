import React from 'react';

import { TextInput } from 'react-native';
import estilosPadrao from './estilos';

export default function CampoInteiro({valor, estilos, acao}){
    const atualiza = (novoValor, acaoRetorno) => {
        const verificaInteiro = novoValor.match(/^[0-9]*$/); //regex para verificar numero de 0 até 9
        if(!verificaInteiro) return;

        const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2'); // regex para remover o numero 0 após entrar com algum valor
        acaoRetorno(removeZeroEsquerda);
    }
    const numeroEmTexto = String(valor);
    return <TextInput 
        style={[estilosPadrao.campo, estilos]}
        keyboardType='number-pad'
        selectTextOnFocus
        onChangeText={(novoValor) => {atualiza(novoValor, acao)}}
        value={numeroEmTexto}
    />
}