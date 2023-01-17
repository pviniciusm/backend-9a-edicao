import axios from "axios";

async function obterUsuario() {
    try {
        const result = await axios.put("https://reqres.in/api/users/2");
        console.log(result.data);
    } catch (error: any) {
        console.log("Erro: " + error);
    }
}

obterUsuario();
