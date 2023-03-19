const form = document.querySelector('form');
const taskInput = document.querySelector('#taskinput');
const maleRadioButton = document.getElementById('male');
const femaleRadioButton = document.getElementById('female');
const answer = document.querySelector('.card-text');


form.addEventListener('submit', runEvent);

function runEvent(e) {
    if (taskInput.value >= 10 && taskInput.value <= 20 && male.value && maleRadioButton.checked){
      console.log('Boy');
      answer.textContent = 'Still Young, Go Into Tech! '
    } else if (taskInput.value >= 10 && taskInput.value <= 20 && femaleRadioButton.checked){
      console.log('Girl');
      answer.textContent = 'You Should Be An Influencer!'
    } else if(taskInput.value >= 20 && taskInput.value <= 30 && maleRadioButton.checked){
      ocnsole.log('Man');
      answer.textContent = "You're An Adult, Go For Good Paying Jobs!"
    } else if(taskInput.value >= 20 && taskInput.value <= 30 && femaleRadioButton.checked){
      console.log('Woman');
      answer.textContent = 'Build More On Your Carrier And Get Read to marry!'
    }else if(taskInput.value >= 30 && taskInput.value <= 70 && maleRadioButton.checked){
      console.log('OldMan');
      answer.textContent = 'Ohh! You\'re Getting Old Should Be Ripping Your Harvet By Now!'
    } else if(taskInput.value >= 30 && taskInput.value <= 70 && femaleRadioButton.checked){
      console.log('OldWoman');
      answer.textContent = 'Oh Ma! should be At Your Enjoying Stage Now!'
    }else if(taskInput.value === ''){
      console.log('Please Enter your age');
      answer.innerHTML ='<pre class="text-danger">Please Enter your age!</pre>';
    }else{
      console.log('wrong');
      answer.innerHTML = '<span class="badge badge-warning font-bold">Your Details are not accepted!</span>'
    }


//clear input
    setTimeout(() => {
      taskInput.value = '';
    }, 3000);
    //clearbtn
    
    e.preventDefault();
}


