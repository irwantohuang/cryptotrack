import { useEffect, useRef, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Filler,
    ChartData,
    LineController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler, LineController);

interface SparklineProps {
    data: number[];
}

const createGradient = (ctx: CanvasRenderingContext2D, data: number[]) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 250);
    const isIncreasing = data[0] < data[data.length - 1];

    gradient.addColorStop(0, isIncreasing ? 'rgba(34, 197, 94, 0.35)' : 'rgba(239, 68, 68, 0.35)');
    gradient.addColorStop(1, 'rgba(34, 197, 94, 0.0)');
    return gradient;
}

const Sparkline = ({ data }: SparklineProps) => {
    const chartRef = useRef<ChartJS<'line', number[]>>(null);
    const [chartData, setChartData] = useState<ChartData<'line'>>({
        labels: Array(data.length).fill(''), // Empty labels for sparkline
        datasets: [
            {
                label: 'Dataset 1',
                data: data,
                borderColor: '',
                backgroundColor: '',
                fill: true,
            },
        ],
    });

    useEffect(() => {
        const chart = chartRef.current;
        if (!chart) return;

        const newData = data.filter(e => !isNaN(e));

        // console.log("new Data -> ", newData)

        const updateChart = () => {
            setChartData({
                // labels: Array(data.filter(e => !isNaN(e)).length).fill(''),
                labels: Array(newData.length).fill(''),

                datasets: [
                    {
                        label: 'Crypto Latest 7 Days',
                        // data: data.filter(e => !isNaN(e)),
                        data: newData,
                        borderColor: (newData[0] < newData[newData.length - 1]) ? '#22c55e' : '#ef4444',
                        backgroundColor: createGradient(chart.ctx, newData),
                        fill: true
                    }
                ]
            })
        }
        
        updateChart();
        chart.update();
    }, [data]);

    const options = {
        responsive: true,
        elements: {
            line: {
                tension: 0.3,
                borderWidth: 1.5,
            },
            point: {
                radius: 0, // Remove points
            },
        },
        scales: {
            x: {
                display: false, // Hide x-axis
            },
            y: {
                display: false, // Hide y-axis
            },
        },
        plugins: {
            legend: {
                display: false, // Hide legend
            },
            tooltip: {
                enabled: false, // Disable tooltips
            },
        },
    };

    return (
        <Chart ref={chartRef} type="line" data={chartData} options={options} />
    );
}

export default Sparkline;
