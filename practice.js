const startquiz= document.querySelector('.start_quiz');
       settings=document.querySelector('.settings')
      answerWrong= document.querySelector('.answer_wrong');
       answerCorrect= document.querySelector('.answer_correct') ;     
      next= document.querySelector('.next');
      submit= document.querySelector('.submit');

startquiz.addEventListener('click',  ()=> {
  settings.foreach(setting=>{
     if(setting.value != "") {
      document.classlist.add('.Box_one')
     }          
   })
})

