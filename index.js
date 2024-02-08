const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de marcação",
        "Um estilo de design web",
        "Uma linguagem de programação",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do comando 'console.log()' em JavaScript?",
      respostas: [
        "Exibir uma mensagem de erro no console",
        "Imprimir informações no console",
        "Executar uma função assíncrona",
      ],
      correta: 1
    },
    {
      pergunta: "Como se declara uma variável em JavaScript?",
      respostas: [
        "let myVar = 10;",
        "variable myVar = 10;",
        "const = myVar 10;",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Um operador lógico",
        "Um bloco de código reutilizável",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
      respostas: [
        "Não há diferença, ambos são intercambiáveis",
        "'let' é usado para valores constantes, 'const' para valores variáveis",
        "'const' é usado para valores constantes, 'let' para valores variáveis",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM em JavaScript?",
      respostas: [
        "Uma biblioteca JavaScript popular",
        "O Document Object Model - representa a estrutura de uma página web",
        "Uma função específica para manipulação de datas",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um evento em JavaScript?",
      respostas: [
        "Um tipo de dado",
        "Uma função de impressão",
        "Uma ação desencadeada pelo usuário ou pelo navegador",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do operador '===' em JavaScript?",
      respostas: [
        "Comparação estrita de valor e tipo",
        "Atribuição de valor",
        "Comparação de valor, sem levar em conta o tipo",
      ],
      correta: 0
    },
    {
      pergunta: "Como se faz um loop 'for' em JavaScript?",
      respostas: [
        "for (let i = 0; i < 10; i++)",
        "loop for (i = 0; i < 10; i++)",
        "while (i < 10; i++)",
      ],
      correta: 0
    },
    {
      pergunta: "O que é AJAX em JavaScript?",
      respostas: [
        "Uma linguagem de programação",
        "Uma técnica que permite atualizações assíncronas em uma página web",
        "Um tipo de biblioteca JavaScript",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
  dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
  dt.querySelector('input').value = item.respostas.indexOf(resposta)
  dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
    
    corretas.delete(item)
    if(estaCorreta) {
      corretas.add(item)
    }
  
    mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  }
  
  quizItem.querySelector('dl').appendChild(dt)
  }
  
  
  quizItem.querySelector('dl dt').remove()
  
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }