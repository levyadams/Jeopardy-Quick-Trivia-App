import { resolveNaptr } from "dns";

var currentTriviaQuestions = [];
export default class dbHelper{

    static fetchData(callback){
        fetch('http://jservice.io/api/random', {
            method: 'GET',
          }).then(res => res.json())
          .then(response =>callback(response))
          .catch(error => console.error('Fetch Trivia Error ==>', error))
      }
}