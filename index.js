const perguntas = [
    {
      pergunta: "Qual é o nome do protagonista de One Piece?",
      respostas: [
        "Monkey D. Luffy",
        "Roronoa Zoro",
        "Nami",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o capitão dos Piratas do Chapéu de Palha?",
      respostas: [
        "Roronoa Zoro",
        "Nami",
        "Monkey D. Luffy",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a fruta do diabo que Monkey D. Luffy comeu?",
      respostas: [
        "Gomu Gomu no Mi",
        "Hito Hito no Mi",
        "Mera Mera no Mi",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o espadachim da tripulação dos Piratas do Chapéu de Palha?",
      respostas: [
        "Nami",
        "Sanji",
        "Roronoa Zoro",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do arqueólogo da tripulação dos Piratas do Chapéu de Palha?",
      respostas: [
        "Nico Robin",
        "Franky",
        "Tony Tony Chopper",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o sonho de Monkey D. Luffy em One Piece?",
      respostas: [
        "Ser o melhor espadachim do mundo",
        "Se tornar o Rei dos Piratas",
        "Encontrar o One Piece",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do navio dos Piratas do Chapéu de Palha?",
      respostas: [
        "Going Merry",
        "Thousand Sunny",
        "Red Force",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é conhecido como o 'Rei dos Piratas' em One Piece?",
      respostas: [
        "Monkey D. Luffy",
        "Gold Roger",
        "Whitebeard",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do cozinheiro dos Piratas do Chapéu de Palha?",
      respostas: [
        "Roronoa Zoro",
        "Sanji",
        "Nami",
      ],
      correta: 1
    },
    {
      pergunta: "Quem é o médico da tripulação dos Piratas do Chapéu de Palha?",
      respostas: [
        "Usopp",
        "Tony Tony Chopper",
        "Brook",
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