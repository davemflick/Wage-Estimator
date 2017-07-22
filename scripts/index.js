var wageInput = document.querySelector('.wageInput');
var quarterInput = document.querySelector('.quarterInput');
var percentInput = document.querySelector('.percentInput');
var submit = document.querySelector('.btn-primary');
var wage = wageInput.value;
var quarters = quarterInput.value;
var percent = percentInput.value;

var displayWage = document.querySelector('.wageSpan')
var displayQuarters = document.querySelector('.quartersSpan')
var newWageList = document.querySelector('.newWageList');

displayWage.textContent = wage;
displayQuarters.textContent = quarters;

//CHANGE INPUT VALUES
wageInput.addEventListener('change', (e)=>{
	wage = e.target.value;
	displayWage.textContent = wage;
})
quarterInput.addEventListener('change', (e)=>{
	quarters = e.target.value;
	displayQuarters.textContent = quarters;
})
percentInput.addEventListener('change', (e)=>{
	percent = e.target.value;
})

function calculateNewWage(wage, quarters, percent){
	let per = 1 + +((percent/100).toFixed(2));
	let count = 1;
	while(quarters > 0){
		wage *= per;
		var li = document.createElement('li')
		li.setAttribute('class', 'newWage');
		li.appendChild(document.createTextNode('Quarter ' + count + ' - $' + wage.toFixed(2)))
		newWageList.appendChild(li);
		quarters--;
		count++;
	}
}

submit.addEventListener('click', (e)=>{
	while(newWageList.firstChild){
		newWageList.removeChild(newWageList.firstChild)
	}
	calculateNewWage(wage, quarters, percent);
})



