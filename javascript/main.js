var capturarMatricula = "";
var capturarNome = "";
var capturarSobrenome = "";
var disciplina1 = "";
var disciplina2 = "";
var disciplina3 = "";
var disciplina4 = "";
var disciplina5 = "";
var disciplina6 = "";
var disciplina7 = "";
var disciplina8 = "";

function adicionarAlunos () {
    capturarMatricula = document.querySelector('#matricula').value;
    capturarNome = document.querySelector('#nome').value;
    capturarSobrenome = document.querySelector('#sobrenome').value;
    disciplina1 = document.querySelector('#disciplina1').value;
    disciplina2 = document.querySelector('#disciplina2').value;
    disciplina3 = document.querySelector('#disciplina3').value;
    disciplina4 = document.querySelector('#disciplina4').value;
    disciplina5 = document.querySelector('#disciplina5').value;
    disciplina6 = document.querySelector('#disciplina6').value;
    disciplina7 = document.querySelector('#disciplina7').value;
    disciplina8 = document.querySelector('#disciplina8').value;

    document.querySelector( '#valorMatricula' ).innerHTML = capturarMatricula;
    document.querySelector( '#valorNome' ).innerHTML = capturarNome;
    document.querySelector( '#valorSobrenome' ).innerHTML = capturarSobrenome;
    document.querySelector( '#valorDisciplina1' ).innerHTML = disciplina1;
    document.querySelector( '#valorDisciplina2' ).innerHTML = disciplina2;
    document.querySelector( '#valorDisciplina3' ).innerHTML = disciplina3;
    document.querySelector( '#valorDisciplina4' ).innerHTML = disciplina4;
    document.querySelector( '#valorDisciplina5' ).innerHTML = disciplina5;
    document.querySelector( '#valorDisciplina6' ).innerHTML = disciplina6;
    document.querySelector( '#valorDisciplina7' ).innerHTML = disciplina7;
    document.querySelector( '#valorDisciplina8' ).innerHTML = disciplina8;
}

function limparCampos(){
    document.getElementById("cadastro").reset();
}

function deleteRow(){
    document.getElementById('table').deleteRow(1)
    alert("Exclusão Efetuada com Sucesso!");
}