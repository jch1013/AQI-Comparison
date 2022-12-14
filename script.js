

/* This function determines the value of the passed air quality and calls InvLinear with constant parameters and 
the passed aqi value. Parameter values are sourced from airnow.gov */

function findConcentration(aqi) {
	let concentration;
	if (aqi>=0 && aqi<=50) {
		concentration=InvLinear(50,0,12,0,aqi);
	} else if (aqi>50 && aqi<=100) {
		concentration = InvLinear(100,51,35.4,12.1,aqi);
	} else if (aqi>100 && aqi<=150) {
		concentration = InvLinear(150,101,55.4,35.5,aqi);
	} else if (aqi>150 && aqi<=200) {
		concentration=InvLinear(200,151,150.4,55.5,aqi);
	} else if (aqi>200 && aqi<=300) {
		concentration=InvLinear(300,201,250.4,150.5,aqi);
	} else if (aqi>300 && aqi<=400) {
		concentration=InvLinear(400,301,350.4,250.5,aqi);
	} else if (aqi>400 && aqi<=500) {
		concentration=InvLinear(500,401,500.4,350.5,aqi);
	} else {
		concentration = -1;
	}
	return concentration;
}


/* Calculate estimatedd PM2.5 concentration from a series of constant parameters and a provided air quality value. This 
function returns the concentration in units of micrograms per meter squared.  */

function InvLinear(AQIhigh, AQIlow, Conchigh, Conclow, aqi) {
	let conc = ((aqi - AQIlow) / (AQIhigh - AQIlow)) * (Conchigh - Conclow) + Conclow;
	return conc;
}

/* Calculates the equivalent number of cigarettes based on aqi and exposure time */
function concentrationToCigarettes(conc, hours)  {
	cigarettes = (hours / 24) * (conc / 22);
	return Math.round(cigarettes * 10) / 10;
}


/* Calls previously defined functions to update front end */
function showOutput() {
	const aqi = document.getElementById("aqi").value;
	const exposure = document.getElementById("exposure").value;
	let output = document.querySelector(".output-text");
	let caption = document.querySelector(".output-label");
	let concentration = findConcentration(aqi);
	if (concentration == -1) {
		output.textContent = "Error";
		caption.textContent = "Please enter an AQI between 0 and 500";
	} else if (exposure < 0) {
		output.textContent = "Error";
		caption.textContent = "Exposure time must be positive";
	} else {
		let cigarettes = concentrationToCigarettes(concentration, exposure);
		output.textContent = cigarettes;
		caption.textContent = "Cigarettes"
	}



}

/* Calling functions to run script */
const solve = document.querySelector("#solve");
const form = document.querySelector("form");
form.onsubmit = (evt) => evt.preventDefault();
solve.addEventListener('click', showOutput);


