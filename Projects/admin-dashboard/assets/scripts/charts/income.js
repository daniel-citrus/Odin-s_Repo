let colors = [
    '#2bd56d',
    '#fa3e3e',
    ]
    
    let labels = [
    'Income',
    'Expense',
    ];
    
    let data = [
    11889,
    1558,
    
    ];
    
    let myChart = document.getElementById('myChart').getContext('2d');
    
    let chart = new Chart(myChart, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: data,
                backgroundColor: colors
            }],
            labels: labels
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
    
                    onHover: handleHover,
                    onLeave: handleLeave
                }
            },
        }
    });
    
    // Append '4d' to the colors (alpha channel), except for the hovered index
    function handleHover(evt, item, legend) {
        legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
            colors[index] = index === item.index || color.length === 9 ? color : color + '4D';
        });
        legend.chart.update();
    }
    
    // Removes the alpha channel from background colors
    function handleLeave(evt, item, legend) {
        legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
            colors[index] = color.length === 9 ? color.slice(0, -2) : color;
        });
        legend.chart.update();
    }