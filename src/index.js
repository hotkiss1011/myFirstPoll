let ctx = document.getElementById('myChart').getContext('2d');
let labels = ['Yes', 'No'];
let colorfix = ["#0b9314", "#ff0000"];

let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        datasets: [{
            data: [90, 10],
            backgroundColor: colorfix
        }],
        labels: labels
    },
    options: {
        responsive: true
    }
})