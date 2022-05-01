const fs = require("fs");


// Leitura de arquivos
// fs.readFile("./texto.txt",{encoding: 'utf-8'},(err, data) =>{

//     if (err) {
//         console.log("Ocorreu um erro >> " + err);
//     } else {
//         console.log(data);
//     }

// });


// Escrevendo dentro de um arquivo
// fs.writeFile("./texto.txt", "Escrevendo um conteúdo dentro de um arquivo de texto", (err) => {
//     console.log(err);
// })

fs.readFile("./usuario.json", {encoding: "utf-8"}, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        var conteudo = JSON.parse(data); // Converte de texto para json

        console.log("O aluno " + conteudo.nome + " esta matriculado no curso de: " + conteudo.curso);
        
        conteudo.nome = "claudio",
        conteudo.curso = "react",
        conteudo.formacao = "categoria"
        
        console.log("O aluno " + conteudo.nome + " esta matriculado no curso de: " + conteudo.curso);
        
        fs.writeFile("./usuario.json", JSON.stringify(conteudo), (err) =>{ // converte json para texto
            console.log(err);
        });
    }
})

