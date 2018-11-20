let currentTriviaQuestions = [];

let fetchData =(callback)=> {
    fetch('http://jservice.io/api/clues', {
        method: 'GET',
      }).then(res => res.json())
      .then(response => currentTriviaQuestions.push(response))
      .catch(error => console.error('Fetch Trivia Error:', error))
  }

  fetchData();
  console.log(currentTriviaQuestions);