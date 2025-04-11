import { Chart } from "chart.js/auto";
import { LinearScale, CategoryScale, Title, Tooltip, Legend } from "chart.js";
import { getLocalData } from "../API/getLocalData";
Chart.register(LinearScale, CategoryScale, Title, Tooltip, Legend);

var ctx = document.getElementById("airChart").getContext("2d");
var labelDivider = 4;

// Tạo một Line Chart
var airlineChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [],
        datasets: [
            {
                label: "Bụi mịn(µg/m³)",
                data: [],
                fill: false,
                borderColor: "#00afef",
                tension: 0.1,
            },
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
            x: {
                ticks: {
                    callback: function (value, index, ticks) {
                        if (index % labelDivider === 0) {
                            const fullTime = this.getLabelForValue(value);
                            const date = fullTime.substring(5, 10);
                            const time = fullTime.substring(11, 16);
                            return `${date} ${time}`;
                        }
                        return "";
                    },
                    color: "#000",
                    font: {
                        size: 14,
                    },
                },
            },
        },
    },
});


window.changeDateRangeDust = async () => {
    const fromDate = document.getElementById("fromDateDust").value;
    const toDate = document.getElementById("toDateDust").value;
    const sensorId = 10;

    if (!fromDate || !toDate) {
        return;
    }
    if (new Date(fromDate) > new Date(toDate)) {
        alert('Vui lòng chọn ngày phù hợp, "Từ ngày" bé hơn "Đến ngày"');
        return;
    }
    updateChart(fromDate, toDate, sensorId);
}

document.addEventListener("DOMContentLoaded", async function () {
    const fromDate = document.getElementById("fromDateDust");
    const toDate = document.getElementById("toDateDust");

    //this is for formatting local date time
    const pad = (num) => num.toString().padStart(2, '0');
    const formatDate = (date) => {
        return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
    };
    const timeNow = formatDate(new Date());
    const oneDayAgo = formatDate(new Date(Date.now() - 86400000));

    fromDate.value = oneDayAgo;
    toDate.value = timeNow;

    updateChart(oneDayAgo, timeNow, 10);
});

async function updateChart(fromDate, toDate, sensorId) {
    try {
        const localAirData = await getLocalData(fromDate, toDate, sensorId);
        switch (true) {
            case localAirData.length >= 10 && localAirData.length <= 50:
                labelDivider = 2;
                break;
            case localAirData.length > 50 && localAirData.length <= 100:
                labelDivider = 4;
                break;
            case localAirData.length > 100 && localAirData.length <= 200:
                labelDivider = 8;
                break;
            case localAirData.length > 200:
                labelDivider = 16;
                break;
            default:
                labelDivider = 2;
                break;
        }
        const labels = localAirData.map((item) => item.result_time);
        const dustData = localAirData.map((item) => {
            if(item.data === undefined) return 0;
            return parseFloat(item.data.split(" ")[0]);
        }
        );
        airlineChart.data.labels = labels.reverse();
        airlineChart.data.datasets[0].data = dustData.reverse();
        airlineChart.update();
    } catch (error) {
        console.error("Error updating chart:", error);
    }
}
