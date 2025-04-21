<h1><a href="https://jch1013.github.io/AQI-Comparison/">Air Quality Comparison</a></h1>


<em>Purpose:</em>

While most people know that poor air quality negatively affects health, it can be difficult to put the impact of poor air into perspective. The purpose of this project is to demonstrate to users the effects of poor air quality by equating AQI and exposure time to an estimated equivalent number of cigarettes smoked. This project was created in response to weeks of poor air quality in Seattle, WA due to local wildfires.


<em>Process:</em>

The general process of equating air pollution to number of cigarettes begins with calculating the concentration of pollutants in the air based off the provided PM2.5 AQI value. The functions used to convert to pollutant concentration are based on calculations carried out on the airnow.gov website. After a concentration value is calculated, the provided exposure time is used along with the concentration value to estimate an equivalent number of cigarettes. 

According to Bloomberg, <a href="https://www.bloomberg.com/news/articles/2018-04-25/the-app-that-translates-air-pollution-into-cigarettes">one cigarette per day is the rough equivalent of a PM2.5 level of 22 μg/m3 </a>. In other words, 24 hours of exposure to air with a quality of 22 μg/m3 is equal to one cigarette. Using this relationship, the estimated number of cigarettes can be scaled according to the AQI and time provided. For example, 24 hours of exposure at 44 μg/m3 would return 2 cigarettes, and exposure at 44 μg/m3 for 12 hours would return one cigarette. 


<em>Tech Used:</em>

The logic is handled by JavaScript. The front end uses HTML and CSS. This simple site is deployed using GitHub Pages
