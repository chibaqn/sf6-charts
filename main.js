let scatterChart = null;
let zoomLevel = 1; // 拡大率（1が標準）

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

    if (scatterChart) {
        scatterChart.data.datasets[0].data = processedData;
        scatterChart.data.datasets[0].pointStyle = characterImages;
        scatterChart.data.datasets[0].pointRadius = pointRadius;
        scatterChart.data.datasets[0].pointHoverRadius = hoverRadius;
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
                plugins: {
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
                },
                scales: {
                    x: { type: 'linear', position: 'bottom', title: { display: true, text: '使用率 (%)' }, min: 0, max: 10, ticks: { stepSize: 1 } },
                    y: { title: { display: true, text: '勝率（Total）' }, suggestedMin: 4.8, suggestedMax: 5.2 }
                }
            }
        });
    }
}

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tabs img').forEach(image => {
        image.addEventListener('click', (e) => {
            document.querySelectorAll('.tabs img').forEach(img => img.classList.remove('active'));
            const clickedImage = e.currentTarget;
            clickedImage.classList.add('active');
            const rank = clickedImage.id.replace('Btn', '');
            updateChart(rank);
        });
    });

    // 拡大縮小ボタンのイベント
    document.getElementById('zoomInBtn').addEventListener('click', () => {
        zoomLevel = Math.min(zoomLevel + 0.2, 2); // 最大2倍
        const activeRank = document.querySelector('.tabs img.active').id.replace('Btn', '');
        updateChart(activeRank);
    });
    document.getElementById('zoomOutBtn').addEventListener('click', () => {
        zoomLevel = Math.max(zoomLevel - 0.2, 0.5); // 最小0.5倍
        const activeRank = document.querySelector('.tabs img.active').id.replace('Btn', '');
        updateChart(activeRank);
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