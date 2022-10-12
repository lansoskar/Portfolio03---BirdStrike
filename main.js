const ctx = document.querySelector('#chart_incidents').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Total Incidents since 1990',
            data: [8928, 8598, 13234, 19166, 26518, 22704, 34950, 37395, 32876, 18141, 10469],
            backgroundColor: ['#8c0029']
        }]
    },
    options: {
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: true
                }
            }
        },
        plugins: {
            legend: {
                display: false,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Total reported bird strike incidents each month since 1990'


            }
        }
    }
});



