import * as format from './formatQuiz'
import testQuestions from './testData'

//HTML entity sample test
const questionText = 'The Mexican Beer &quot;Corona&quot; is what type of beer?'

//Answer array setup 
const incorrectAnswers = ['Lavender', 'Vanilla', 'Honey']
const correctAnswer = 'Bergamot oil'
const testAnswerArray = [
  { answer: 'Bergamot oil', status: true },
  { answer: 'Lavender', status: false },
  { answer: 'Vanilla', status: false },
  { answer: 'Honey', status: false },
]

describe('Test all question format helper functions', ()=> {
  test('cleanQuestions returns suitable object', ()=> {
    let cleanedQuestions = format.cleanQuestions(testQuestions.questions)
    expect.assertions(4)
    expect(cleanedQuestions.length).toBe(20)
    expect(cleanedQuestions[0].questionNumber).toBe(0)
    expect(cleanedQuestions[1].question).toEqual(expect.not.stringContaining('&'))
    expect(cleanedQuestions[2].answerArray.length).toBe(4)
  })

  test('decodeHTML removes HTML entities', () => {
    expect.assertions(3)
    let decodedHTML = format.decodeHTML(questionText)
    expect(decodedHTML).not.toMatch(questionText)
    expect(decodedHTML).toEqual(expect.not.stringContaining('&'))
    expect(decodedHTML).toEqual(expect.not.stringContaining('quot'))
  }),

    test('combineAnswers randomises answer array', () => {
      expect.assertions(2)
      let combinedAnswers = format.combineAnswers(incorrectAnswers, correctAnswer)
      expect(combinedAnswers).not.toBe(testAnswerArray)
      expect(combinedAnswers.length).toBe(4)
    })
})
