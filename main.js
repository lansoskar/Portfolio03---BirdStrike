const ctx = document.querySelector('#chart_incidents').getContext('2d');
const chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Total Incidents since 1990',
            data: [8928, 8598, 13234, 19166, 26518, 22704, 34950, 37395, 34890, 32876, 18141, 10469],
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
                text: 'Total reported bird strike incidents divided by month since 1990'


            }
        }
    }
});

const ctx2 = document.querySelector('#chart_money').getContext('2d');
const chartMoney = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['29/11/05', '10/12/95', '03/06/95', '08/03/21', '22/11/07', '24/06/05', '14/01/01', '25/10/17', '03/02/09', '15/01/09', ],
        datasets: [{
            label: 'Repair cost in USD (adjusted for inflation)',
            data: [8487392, 10662000, 10662000, 11041786, 11647280, 13096560, 14516000, 16575000, 17668000, 45432000,],
            backgroundColor: ['#3a7327']
        }]
    },
    options: {
        indexAxis: 'y',
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
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                color: 'black',
                text: '10 most expensive bird strike incident repairs',
                font: {weight: 'bold'}


            }
        }
    }
});

