
var ctx = document.getElementById('myChart').getContext('2d');
var ctx1 = document.getElementById('myChart1').getContext('2d');

ctx.canvas.width = 100;
ctx.canvas.height = 100;

ctx1.canvas.width = 100;
ctx1.canvas.height = 100;
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
    label: "",
    data: presArr,
    backgroundColor: "rgba(3, 118, 195, 0.5)",
    borderColor: "rgba(0, 158, 219, 1)",
    borderWidth: "1",
  }]
},
options: {
  legend:{
      display: false
  },
  scales: {
    xAxes: [{
        gridLines: {
            show: true,
            color: "F3F3F3",
        }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },

}
  });
  var myChart2 = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: labels,
  datasets: [{
    label: "",
    data: passArr,
    backgroundColor: "rgba(3, 118, 195, 0.5)",
    borderColor: "rgba(0, 158, 219, 1)",
    borderWidth: "1",
  }]
},
options: {
  legend:{
      display: false
  },
  scales: {
    xAxes: [{
        gridLines: {
            show: true,
            color: "F3F3F3",
        }
    }],
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },

}
  });
