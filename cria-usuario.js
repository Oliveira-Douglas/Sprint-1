import crypto from "crypto";
export function criaUsuario(nome, email, senha, dataCriacao) {
    
    const usuario = {
        id: crypto.randomUUID(),
        nome: nome,
        email: email,
        senha: senha,
        criado_em: Date(new Date(), 'YYYY-MM-DD')
    } 
    console.log(usuario);
    return usuario;
}