const quizData = [
    {
      question: "質問1:100gの水に5.85gの塩化ナトリウムNaClを溶解させたところ、その水溶液の沸点は1.013×10^5Paのもとで101.03℃になった。スクロース（ショ糖）0.100molを0.500kgの水に溶かした水溶液の沸点は何℃になるか。",
      choices: ["100.08", "100.10", "100.52", "101.03"],
      correctAnswer: 1
    },
    {
      question: "質問2:硫酸銅（Ⅱ）は100gの水に、60℃で40g、20℃で20g溶けるものとする。60℃の硫酸銅（Ⅱ）の飽和水溶液140gを20℃まで冷却したときに析出する硫酸銅（Ⅱ）五水和物は何gか。",
      choices: ["40", "38", "35", "32"],
      correctAnswer: 2
    },
    {
      question: "質問2:硫酸銅（Ⅱ）は100gの水に、60℃で40g、20℃で20g溶けるものとする。60℃の硫酸銅（Ⅱ）の飽和水溶液140gを20℃まで冷却したときに析出する硫酸銅（Ⅱ）五水和物は何gか。",
      choices: ["40", "38", "35", "32"],
      correctAnswer: 2
    },
     {
      question: "質問2:硫酸銅（Ⅱ）は100gの水に、60℃で40g、20℃で20g溶けるものとする。60℃の硫酸銅（Ⅱ）の飽和水溶液140gを20℃まで冷却したときに析出する硫酸銅（Ⅱ）五水和物は何gか。",
      choices: ["40", "38", "35", "32"],
      correctAnswer: 2
    },
     {
      question: "質問2:硫酸銅（Ⅱ）は100gの水に、60℃で40g、20℃で20g溶けるものとする。60℃の硫酸銅（Ⅱ）の飽和水溶液140gを20℃まで冷却したときに析出する硫酸銅（Ⅱ）五水和物は何gか。",
      choices: ["40", "38", "35", "32"],
      correctAnswer: 2
    },
  


    // 他の質問を追加する
  ];
  
  const quizContainer = document.getElementById('quiz');
  const submitButton = document.getElementById('submit');
  const resultsContainer = document.getElementById('results');
  
  function buildQuiz() {
    const output = [];
  
    quizData.forEach((questionData, questionIndex) => {
      const choices = [];
  
      questionData.choices.forEach((choice, choiceIndex) => {
        choices.push(
          `<label>
            <input type="radio" name="question${questionIndex}" value="${choiceIndex}">
            ${choice}
          </label>`
        );
      });
  
      output.push(
        `<div class="question">${questionData.question}</div>
        <div class="choices">${choices.join('')}</div>`
      );
    });
  
    quizContainer.innerHTML = output.join('');
  }
  
  function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.choices');
    let score = 0;
  
    quizData.forEach((questionData, questionIndex) => {
      const answerContainer = answerContainers[questionIndex];
      const selected = answerContainer.querySelector(`input[name="question${questionIndex}"]:checked`);
  
      if (selected) {
        const selectedAnswer = parseInt(selected.value);
        if (selectedAnswer === questionData.correctAnswer) {
          score++;
        }
      }
    });
  
    resultsContainer.innerHTML = `正解数: ${score} / ${quizData.length}`;
  }
  
  submitButton.addEventListener('click', showResults);
  
  buildQuiz();
  
