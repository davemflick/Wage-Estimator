var wageInput = document.querySelector('.wageInput');
var quarterInput = document.querySelector('.quarterInput');
var percentInput = document.querySelector('.percentInput');
var submit = document.querySelector('.btn-primary');
var wage = wageInput.value;
var quarters = quarterInput.value;
var percent = percentInput.value;

var displayWage = document.querySelector('.wageSpan')
var displayQuarters = document.querySelector('.quartersSpan')
var displayNewWage = document.querySelector('.newWageSpan')

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
	while(quarters > 0){
		wage *= per;
		quarters--;
	}
	return wage.toFixed(2);
}

submit.addEventListener('click', (e)=>{
	let newWage = calculateNewWage(wage, quarters, percent);
	displayNewWage.textContent = '$' + newWage;
})
