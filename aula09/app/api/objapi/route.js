import {NextResponse} from "next/server"
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Configurações do Firebase (substitua pelos seus valores)
const firebaseConfig = {
    apiKey: "AIzaSyBfV87_h8KXyeqRn0lefoJNE4YOEkzeUIc",
  authDomain: "meuprimeirofirebase-30336.firebaseapp.com",
  projectId: "meuprimeirofirebase-30336",
  storageBucket: "meuprimeirofirebase-30336.appspot.com",
  messagingSenderId: "935394570408",
  appId: "1:935394570408:web:8c6f1522a96204c440d29d",
  measurementId: "G-PT7T2ZK4K1"
};

firebase.initializeApp(firebaseConfig);

    

export function GET(res) {

    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');

    const sendData = async () => {
        const nomesCollection = firebase
            .firestore()
            .collection('Nomes');
        try {
            await nomesCollection.getNome({Nome: nome, Sobrenome: sobrenome});
            Alert.alert('Sucesso', 'Dados cadastrados com sucesso!');
            getNome('');
            getSobrenome('');
        } catch (error) {
            console.error(error);
            Alert.alert('Erro', 'Ocorreu um erro ao cadastrar os dados.');
        }
    };

        res = 
            [ { sendData: "nome" }, 
              { sendData:  "sobrenome" }
            ]

        return NextResponse.json(
            { res },
        )
}