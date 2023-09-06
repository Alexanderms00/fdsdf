const submit = document.getElementById('submit')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
let action = '+'

plus.onclick = function () {
	action = '+'
}

minus.onclick = function () {
	action = '-'
}

submit.onclick = function () {
	const resultElement = document.getElementById('result')
	const input1 = document.getElementById('input1')
	const input2 = document.getElementById('input2')

	if (action == '-') {
		const sum = Number(input1.value) - Number(input2.value)
		if (sum < 0){
			resultElement.style.color = 'red'
		} else {
			resultElement.style.color = 'black'
		}
		resultElement.textContent = sum
	} else {
		resultElement.style.color = 'black'
		const sum = Number(input1.value) + Number(input2.value)
		resultElement.textContent = sum
	}
}
