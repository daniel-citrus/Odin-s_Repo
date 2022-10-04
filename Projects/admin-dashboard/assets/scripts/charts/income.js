let colors = [
    '#2bd56d',
    '#fa3e3e',
]

let labels = [
    'Income',
    'Expense',
];

let data = [
    5100,
    3587,

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
            },
            responsive: true,
            maintainAspectRatio: false,
        },

    },
    plugins: [{
        id: 'text',
        beforeDraw: function (chart, a, b) {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;

            ctx.restore();
            var fontSize = (height / 112) - 1.6;
            ctx.font = fontSize + "em Trebuchet MS";
            ctx.textBaseline = "middle";

            let cashflow = data[0] - data[1];
            let isNeg = false;
            if (cashflow < 0) {
                isNeg = true;
            }

            cashflow = Math.abs(cashflow).toString();

            if (isNeg) {
                cashflow = "-$" + cashflow;
            }
            else {
                cashflow = "$" + cashflow;
            }

            var text = cashflow + '/month',
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = (height / 2) - 16;

            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]
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