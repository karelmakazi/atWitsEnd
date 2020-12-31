import request from 'superagent'


export function getQuestions (category) {
  
  const quizApi = `https://opentdb.com/api.php?amount=20&category=${category}&difficulty=medium&type=multiple`

  return request.get(quizApi)
    .then(res => {
      let formattedQuestions = cleanQuestions(res.body.results)
    })
    
}

function cleanQuestions(questions){
  // console.log('questions', questions);
  let cleanedQuestions = questions.map((question)=> {
    return { question: decodeHTML(question.question),
      answerArray: combineAnswers(question.incorrect_answers, question.correct_answers)
    }
  })
  console.log(cleanedQuestions);
  return cleanedQuestions
}

//Remove HTML entities from API response text
function decodeHTML(html) {
  var txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

//Mix correct answer into answer array for display
function combineAnswers(incorrect, correct){
  let mixedAnswerArray = []
  
  let answerArray = [
    { answer: decodeHTML(correct),
      status: true },
    { answer: decodeHTML(incorrect[0]),
      status: false },
    { answer: decodeHTML(incorrect[1]),
      status: false },
    { answer: decodeHTML(incorrect[2]),
      status: false }
  ]

  answerArray.map((answer) => {
    let random = Math.random() < 0.5
    random ? mixedAnswerArray.push(answer) 
    : mixedAnswerArray.unshift(answer)
  })
  
  return mixedAnswerArray
}

