import React from 'react';
import { SafeAreaView, StatusBar, FlatList, KeyboardAvoidingView, Platform } from 'react-native';
import Item from './Item'
import estilosGlobal from '../../estilos';

const servicos = [
    {
        id: 1,
        nome: "Banho",
        preco: 79.9,
        descricao: "Não de banho no seu gato! Mas se precisar nós daremos."
    },
    {
        id: 2,
        nome: "Vacina V4",
        preco: 89.9,
        descricao: "Uma dose da vacina V4. Seu gato precisa de duas."
    },
    {
        id: 3,
        nome: "Vacina antirrábica",
        preco: 99.9,
        descricao: "Uma dose da vacina Antirrábica, seu gato precisa de uma por ano."
    },

]

export default function Servicos() {
    return <SafeAreaView style={estilosGlobal.preencher}>
        <StatusBar />
        <KeyboardAvoidingView style={estilosGlobal.preencher} behavior={Platform.OS === "ios" ? "padding" : "height" }
        >
            <FlatList 
                data={servicos}
                renderItem={({item}) => <Item {... item} /> }
                keyExtractor={({id}) => String(id)}
            />
        </KeyboardAvoidingView>
    </SafeAreaView>
}