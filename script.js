//your code here

const inpu=document.getElementById('evaluatedText')
const coun=document.getElementById('letterCount')

inpu.addEventListener('input',()=>{
	console.log(inpu.value)
	const letter=inpu.value
	const count=letter.length;

	coun.innerText=`${count}`
	
})
