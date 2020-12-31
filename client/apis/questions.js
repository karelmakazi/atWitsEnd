import request from 'superagent'
import cleanQuestions from '../library/formatQuiz'


export function getQuestions (category) {
  
  const quizApi = `https://opentdb.com/api.php?amount=20&category=${category}&difficulty=medium&type=multiple`

  return request.get(quizApi)
    .then(res => {
      let formattedQuestions = cleanQuestions(res.body.results)
      return formattedQuestions
      })
    }