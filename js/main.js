let scatterChart = null;
let zoomLevel = 1; // 拡大率（1が標準）

// 各ランクごとのデフォルトスケールを定義
const defaultScales = { x: { min: 0, max: 10 }, y: { min: 4.8, max: 5.20 } };

function getCharacterImageUrl(characterName) {
    const cleanedName = characterName.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (cleanedName === 'ehonda') return 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_honda.jpg';
    if (cleanedName === 'aki') return 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_aki.jpg';
    return `https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_${cleanedName}.jpg`;
}

function processData(csvData) {
    const lines = csvData.trim().split('\n');
    lines.shift();
    return lines.map(line => {
        const parts = line.split(',');
        return {
            label: parts[0],
            x: parseFloat(parts[1]),
            y: parseFloat(parts[2]),
            imageUrl: getCharacterImageUrl(parts[0])
        };
    });
}

function updateChart(rank) {
    const data = datasets[rank];
    const processedData = processData(data.data);

    const isMobile = window.innerWidth < 600;
    // 拡大率を反映
    const imageWidth = (isMobile ? 22 : 45) * zoomLevel;
    const imageHeight = (isMobile ? 11 : 21) * zoomLevel;
    const pointRadius = (isMobile ? 12 : 15) * zoomLevel;
    const hoverRadius = (isMobile ? 15 : 18) * zoomLevel;

    const characterImages = processedData.map(dataPoint => {
        const img = new Image();
        img.src = dataPoint.imageUrl;
        img.width = imageWidth;
        img.height = imageHeight;
        return img;
    });

    // スケールオプションを決定
    const dynamicScaleEnabled = document.getElementById('dynamicScaleBtn').classList.contains('active');
    let xScaleOptions, yScaleOptions;

    if (dynamicScaleEnabled) {
        // 動的スケール: データから最小値/最大値を計算
        const xValues = processedData.map(d => d.x);
        const yValues = processedData.map(d => d.y);
        const minX = Math.min(...xValues);
        const maxX = Math.max(...xValues);
        const minY = Math.min(...yValues);
        const maxY = Math.max(...yValues);
        const xPadding = (maxX - minX) * 0.1;
        const yPadding = (maxY - minY) * 0.1;

        xScaleOptions = { type: 'linear', position: 'bottom', title: { display: true, text: 'キャラクター使用率 (%)' }, min: Math.max(0, minX - xPadding), max: maxX + xPadding, ticks: { stepSize: 0.5 } };
        yScaleOptions = { title: { display: true, text: '対戦ダイアグラム（トータル勝率）' }, min: minY - yPadding, max: maxY + yPadding, ticks: { stepSize: 0.05 } };
    } else {
        // 固定スケール: 事前定義された値を使用
        xScaleOptions = { type: 'linear', position: 'bottom', title: { display: true, text: 'キャラクター使用率 (%)' }, min: defaultScales.x.min, max: defaultScales.x.max, ticks: { stepSize: 0.5 } };
        yScaleOptions = { title: { display: true, text: '対戦ダイアグラム（トータル勝率）' }, min: defaultScales.y.min, max: defaultScales.y.max, ticks: { stepSize: 0.05 } };
    }

    if (scatterChart) {
        scatterChart.data.datasets[0].data = processedData;
        scatterChart.data.datasets[0].pointStyle = characterImages;
        scatterChart.data.datasets[0].pointRadius = pointRadius;
        scatterChart.data.datasets[0].pointHoverRadius = hoverRadius;
        scatterChart.options.scales.x = xScaleOptions;
        scatterChart.options.scales.y = yScaleOptions;
        scatterChart.update();
    } else {
        const ctx = document.getElementById('scatterChart').getContext('2d');
        scatterChart = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    data: processedData,
                    pointStyle: characterImages,
                    pointRadius: pointRadius,
                    pointHoverRadius: hoverRadius,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                animation: {
                    duration: 800,
                    easing: 'easeInOutQuad'
                },
                scales: {
                    x: xScaleOptions,
                    y: yScaleOptions
                },
                plugins: {
                    zoom: {
                        pan: {
                            enabled: true,
                            mode: 'xy',
                        },
                        zoom: {
                            pinch: {
                                enabled: true
                            },
                            wheel: {
                                enabled: true
                            },
                            mode: 'xy',
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                const dataPoint = context.raw;
                                return `${dataPoint.label || ''}: (使用率: ${dataPoint.x.toFixed(3)}%, 勝率: ${dataPoint.y.toFixed(3)}%)`;
                            }
                        }
                    },
                    legend: {
                        display: false
                    },
                }
            }
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('scatterChart').getContext('2d');

    document.querySelectorAll('.tabs img').forEach(image => {
        image.addEventListener('click', (e) => {
            document.querySelectorAll('.tabs img').forEach(img => img.classList.remove('active'));
            const clickedImage = e.currentTarget;
            clickedImage.classList.add('active');
            const rank = clickedImage.id.replace('Btn', '');
            updateChart(rank);
        });
    });

    // Zoom buttons
    document.getElementById('zoomInBtn').addEventListener('click', () => {
        scatterChart.zoom(1.1);
    });

    document.getElementById('zoomOutBtn').addEventListener('click', () => {
        scatterChart.zoom(0.9);
    });

    document.getElementById('resetZoomBtn').addEventListener('click', () => {
        scatterChart.resetZoom();
    });

    // スケール切り替えボタンのイベント
    const fixedScaleBtn = document.getElementById('fixedScaleBtn');
    const dynamicScaleBtn = document.getElementById('dynamicScaleBtn');

    const handleScaleToggle = (isDynamic) => {
        fixedScaleBtn.classList.toggle('active', !isDynamic);
        dynamicScaleBtn.classList.toggle('active', isDynamic);

        const activeRank = document.querySelector('.tabs img.active').id.replace('Btn', '');
        if (scatterChart) {
            scatterChart.destroy();
            scatterChart = null;
        }
        updateChart(activeRank);
    };

    fixedScaleBtn.addEventListener('click', () => {
        if (!fixedScaleBtn.classList.contains('active')) {
            handleScaleToggle(false);
        }
    });

    dynamicScaleBtn.addEventListener('click', () => {
        if (!dynamicScaleBtn.classList.contains('active')) {
            handleScaleToggle(true);
        }
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (scatterChart) {
                scatterChart.destroy();
                scatterChart = null;
                const activeRank = document.querySelector('.tabs img.active').id.replace('Btn', '');
                updateChart(activeRank);
            }
        }, 250);
    });

    // 初回はMasterのデータを表示
    document.getElementById('masterBtn').classList.add('active');
    updateChart('master');
});