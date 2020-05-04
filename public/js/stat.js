
var ctx = document.getElementById('myChart').getContext('2d');
var ctx1 = document.getElementById('myChart1').getContext('2d');

// document.getElementById('myChart').width = '100px';
// document.getElementById('myChart1').height = 100;

console.log(labels, presArr);

let myChart = new Chart(ctx, {
			scaleOverride: true,
			scaleStartValue: 0,
			scaleSteps: 2,
			type: 'bar',
		    data: {
		        labels: labels,
		        datasets: [{
		            label: 'Посещяемость',
		            data: presArr,
		            borderWidth: 1,
                    backgroundColor: '#6E73FF',
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero: true,
                    		suggestedMax: 20,
		                }
		            }]
		        }
		    }
		});



let myChart1 = new Chart(ctx1, {
			scaleOverride: true,
			scaleStartValue: 0,
			scaleSteps: 2,
		    type: 'bar',
		    data: {
		        labels: labels,
		        datasets: [{
		            label: 'Упеваемость',
		            data: passArr,
		            borderWidth: 1,
                    backgroundColor: '#6E73FF',
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
							beginAtZero: true,
						   suggestedMax: 20,
		                }
		            }]
		        }
		    }
		});
