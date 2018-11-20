import lazy from './lazyloader.js';

import header from './header.js';

import dbHelper from './JeopardyDBHelper.js';

let mainScreenText;
let questionCounter;
let questions=[];
let answer;
let nextQuestionButton;
let questionAiredOn;
window.addEventListener('DOMContentLoaded', function () {
        //fetch the main content id
        var main = this.document.getElementById('main-content');
        mainScreenText = this.document.createElement("h2");
        mainScreenText.setAttribute("class","mainScreenText");
        answer = this.document.createElement("h2");
        answer.setAttribute("class","answer");
        questionAiredOn = this.document.createElement("h2");
        questionAiredOn.setAttribute("class","questionAiredOn");
        answer.setAttribute("style","display:none;");
        dbHelper.fetchData((data) => {
            if (data) { // Got an error
                for(let i = 0; i<data.length;i++){
                    console.log(data[i]);
                }
                data.map(function(item){
                     mainScreenText.innerHTML = item.question;
                     answer.innerHTML = item.answer;

                })
            } else {
                console.error("fetchData failed!");
          }
        });
        main.append(mainScreenText);
        main.append(answer);
        main.append(questionAiredOn);
        setTimeout(fadeInAnswers,5000);

    });
let fadeInAnswers=()=>{
    answer.setAttribute("style","display:inheret;");
}