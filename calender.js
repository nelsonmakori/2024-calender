const today = new Date().getDate();
const days = document.getElementsByClassName('days')[0];
const month = document.querySelector('.month')
console.log(days.children);
const months = ['january','february','march','april','may','june','july','august','september','november','december'];

const dayMonthYear = document.querySelector('.day-month-year');
dayMonthYear.innerHTML = new Date().toDateString()


 
month.innerHTML = months[new Date().getMonth()];


for(let index = 0; index <= days.children.length; index++){
  
  console.log(index)
  if(days.children[index].innerText == today){
    days.children[index].style.backgroundColor = 'green';
    days.children[index].style.color = 'white'
    days.children[index].style.width = '17px'
    days.children[index].style.paddingLeft = '4px'

  }
}
