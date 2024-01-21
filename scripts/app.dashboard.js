// == TEMPLATE QUIZ ITEM ==



import { getQuestions, createQuestion } from "./api.js";
import { generateQuizItem } from './utils/index.js'

const quizContent = document.getElementById("quiz-content");


document.addEventListener("DOMContentLoaded", () => {
    async function handleAllQuestion(){
        try {
           const questions = await getQuestions();

           //Kalo tidak ada data jangan kirim apapun
           if(!questions) return;

           quizContent.innerHTML = questions.map(
            (question) => {
                return generateQuizItem({
                    id: question.id,
                    question: question.jokes,
                    answer: question.answer,
                    category: question.category,
                  });

            }
           ).join("")

           //Kalo datanya ada maka lanjut
           console.log({questions});
            
        } catch (error) {
        console.error("Ada error nih : ", {
            error,
        });
        }
    }
handleAllQuestion()
})

