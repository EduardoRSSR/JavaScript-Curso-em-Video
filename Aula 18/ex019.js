let aluno={nome:'Eduardo', sexo:'masculino' , idade: '29' , nota:'0' , addnota(n=0){
    aluno.nota+=n;
}}

aluno.addnota(8);
console.log(`${aluno.nome} tirou ${aluno.nota}`);
