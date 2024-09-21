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
    ChartOptions,
    LineController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';
import { PriceHistoryType } from '../../../types/PriceHistory';
import moment from 'moment';
import { formatPrice, formatTimestamp, removeEmptyLabels } from '../../../utils/utility';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler, LineController);

const createGradient = (ctx: CanvasRenderingContext2D, data: PriceHistoryType[]) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 450);
    const isIncreasing = Number(data[0].price) < Number(data[data.length - 1].price);

    gradient.addColorStop(0, isIncreasing ? 'rgba(34, 197, 94, 0.5)' : 'rgba(239, 68, 68, 0.5)');
    gradient.addColorStop(1, isIncreasing ? 'rgba(34, 197, 94, 0.05)' : 'rgba(239, 68, 68, 0.05)');
    return gradient;
}


const LineChart = ({ history, timePeriod }: { history: PriceHistoryType[], timePeriod: string }) => {

    const [chartData, setChartData] = useState<ChartData<'line'>>({
        labels: [],
        datasets: [{
            label: "Dataset 1",
            data: [],
            borderColor: '#fff',
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            fill: true,
            tension: 0.1,
        }]
    });
    const [options, setOptions] = useState<ChartOptions<'line'>>();
    const chartRef = useRef<ChartJS<'line', number[]>>(null);

    useEffect(() => {
        const chart = chartRef.current;
        if (!chart) return;

        const updateChart = () => {
            const notNullData = history.filter(e => !isNaN(Number(e.price)));
            const borderColor = Number(notNullData[0].price) < Number(notNullData[notNullData.length - 1].price) ? '#22c55e' : '#ef4444';
            const labels = history.map(item => formatTimestamp(item.timestamp, timePeriod))
            const uniqueLabels = removeEmptyLabels(labels);
            setChartData({
                labels: uniqueLabels,
                datasets: [{
                    label: "Price in USD",
                    data: history.map(h => parseFloat(h.price)),
                    borderColor: borderColor,
                    backgroundColor: createGradient(chart.ctx, notNullData),
                    fill: true
                }]
            })

            setOptions({
                responsive: true,
                elements: {
                    line: {
                        tension: 0.3,
                        borderWidth: 1.5,
                    },
                    point: {
                        radius: 0,
                        hoverRadius: 8,
                        hoverBorderWidth: 2
                    },

                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                            color: "#342a45"
                        },
                        ticks: {
                            maxRotation: 90,
                            font: {
                                size: 16
                            },
                            color: "#4d425f"
                        }
                    },
                    y: {
                        grid: {
                            display: true,
                            color: "#342a45"
                        },
                        beginAtZero: false,
                        ticks: {
                            font: {
                                size: 13
                            },
                            color: "#4d425f",
                        },
                    }
                },
                interaction: {
                    mode: "index",
                    axis: "x",
                    intersect: false
                },
                plugins: {
                    tooltip: {
                        displayColors: false,
                        backgroundColor: '#342e45',
                        padding: {
                            x: 10, y: 6
                        },
                        titleFont: {
                            size: 14,
                            weight: 'normal'
                        },
                        titleColor: "#e0e0e0",
                        bodyColor: "#FAF9F6",
                        bodyFont: {
                            size: 14,
                            weight: 'bolder'
                        },
                        cornerRadius: 4,
                        callbacks: {
                            title: (context) => {
                                const index = context[0].dataIndex;
                                const timestamp = history[index].timestamp;

                                return moment.unix(timestamp).format("DD-MMM HH:mm")
                            },
                            label: (context) => {
                                const price = context.raw;
                                return `Price $${formatPrice(Number(price), 2)}`;
                            },

                        }
                    }
                }
            })
        }
        updateChart();
        chart.update();
    }, [history, timePeriod])


    useEffect(() => {
        const updateChartSize = () => {
            if (chartRef.current) {
                chartRef.current.resize();
            }
        }

        window.addEventListener("resize", updateChartSize);
        return () => window.removeEventListener("resize", updateChartSize)
    })


    return (
        <Chart ref={chartRef} type='line' data={chartData} options={options} />
    )
}

export default LineChart