Avançando nos Estudos Variáveis Compostas

Uso de funções e eventos

passagem de parâmetros

Exercícios propostos

Proximos Passos

## Módulo F 15# Variáveis compostas

Variáveis simples 

    Variáveis Simples só conseguem armazenar um valor por vez.

    variáveis Compostas
    devem ser capazes de armazena vários valores em uma mesma estrutura.

    a0  var a0
    a1  var a1
    a2  var a2
    a3  var a3 
    a4  var a4
    a5  var a5

    As vagas serão chamadas de a

    vaga a vaga a = [carro,carro,carro]
    espaço a 
                    a0 a1 a2

    a array vetor a 

    indice chave 0 1 2 

    elementosos seria o faicha de estacionamento

    Já o Conteúdo valor seria os carros

       let num = [5,8,4]
       num[3] = 6
    num.puch(7)
    num.length
    num.sort()
       
       num
       [4, 5, 6, 7, 8]
        0 1 2 3 4
       5 elementos

        console.log(num[0])
        console.log(num[1])
        console.log(num[2])
        console.log(num[3])
        console.log(num[4])

        for(let pos=0; pos<num.lenght;pos++){
            console.log(num[num pos ])
        }

        for(let pos in num ){
            console.log(num[post])
        }

        num.indexOf(7) 3
        num.indexOf(3) -1
    
 ## Módulo F 16# '${funcoões em JS}'

chamada, parâmetro, ação, retorno exemplo no vídeo: 16

        FUNÇÕES

    São ações executadas assim que são chamadas ou em decorrência de algum evento.

    Uma função pode receber parâmetros e retornar um resultado.

    onclick 

    function ação(param){
        return res
    }
    ação(5) //chamada

param:parâmetro
return: ação
res:retorno

function parimp(n) {
    if(n%2==0){
        return 'par'
    { else }
        return'ímpar'    
    }
}
let res = parimp(11)

parimp: chamada
n: parâmetro
{}: ação
ímpar: retorno