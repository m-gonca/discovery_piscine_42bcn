const 	$generate = document.getElementById('generate'),
		$reset = document.getElementById('reset'),
		$showColor = document.querySelector('.color_hex');

let hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

document.addEventListener('click', e =>
{
	if (e.target === $generate)
	{
		let color = '#';
		for (let i = 0; i < 6; i++)
		{
			color = color +  hex[randomNumber()];
		}
		$showColor.innerHTML = color;
		document.body.style.background = color;
	}
	if (e.target === $reset) 
	{
		$showColor.innerHTML = "#303134";
		document.body.style.background = "#303134";
	}
})

function randomNumber()
{
	return Math.floor(Math.random() * hex.length)
}