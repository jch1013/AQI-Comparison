let output = document.querySelector(".output-text");
const solve = document.querySelector("#solve");
solve.addEventListener('click', () => {
	output.textContent = "hello there";
})

console.log("hello world!");
console.log(ConcPM25(1));




// functions from airnow site

function ConcPM25(a) {
	if (a>=0 && a<=50) {
		ConcCalc=InvLinear(50,0,12,0,a);
	} else if (a>50 && a<=100) {
		ConcCalc=InvLinear(100,51,35.4,12.1,a);
	} else if (a>100 && a<=150) {
		ConcCalc=InvLinear(150,101,55.4,35.5,a);
	} else if (a>150 && a<=200) {
		ConcCalc=InvLinear(200,151,150.4,55.5,a);
	} else if (a>200 && a<=300) {
		ConcCalc=InvLinear(300,201,250.4,150.5,a);
	} else if (a>300 && a<=400) {
		ConcCalc=InvLinear(400,301,350.4,250.5,a);
	} else if (a>400 && a<=500) {
		ConcCalc=InvLinear(500,401,500.4,350.5,a);
	} else {
		ConcCalc = "Error: Provided air quality out of range. Please enter a value between 0 and 500";
	}
	return ConcCalc;
}


function InvLinear(AQIhigh, AQIlow, Conchigh, Conclow, a) {
	let c = ((a - AQIlow) / (AQIhigh - AQIlow)) * (Conchigh - Conclow) + Conclow;
	return c;
}

function AQICalc(form1) {
	var b;
	var c;

	if (document.form1.pollutant.selectedIndex == '1') {

		b = Math.round(document.form1.inputbox.value);

		if (b < 0 || b>500) {		
			b = "Error: Provided air quality out of range. Please enter a value between 0 and 500";
		} else {
			c = Math.floor(10*ConcPM25(b))/10;
		}  		
	}
}

