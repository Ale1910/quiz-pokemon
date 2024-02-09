const perguntas = [
  {
    pergunta: "Qual é o Pokémon inicial de fogo na região de Kanto?",
    respostas: [
      "Charmander",
      "Bulbasaur",
      "Squirtle",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é conhecido como 'o Mestre Pokémon' na série animada?",
    respostas: [
      "Ash Ketchum",
      "Misty",
      "Brock",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o tipo do Pokémon Pikachu?",
    respostas: [
      "Elétrico",
      "Fogo",
      "Água",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o Pokémon lendário conhecido por representar o mar?",
    respostas: [
      "Lugia",
      "Kyogre",
      "Rayquaza",
    ],
    correta: 1
  },
  {
    pergunta: "Quem é o vilão principal da Equipe Rocket na série Pokémon?",
    respostas: [
      "Jessie",
      "James",
      "Giovanni",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o Pokémon número 150 na Pokédex?",
    respostas: [
      "Mew",
      "Mewtwo",
      "Articuno",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o tipo do Pokémon Charizard?",
    respostas: [
      "Fogo",
      "Dragão",
      "Fogo e Voador",
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o Pokémon inicial de água na região de Johto?",
    respostas: [
      "Totodile",
      "Cyndaquil",
      "Chikorita",
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o líder de ginásio especializado em pokémons tipo água na cidade de Cerulean?",
    respostas: [
      "Misty",
      "Brock",
      "Lt. Surge",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o Pokémon que evolui para Gengar?",
    respostas: [
      "Haunter",
      "Gastly",
      "Drowzee",
    ],
    correta: 0
  },
];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  // loop ou laço de repetição
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
  
