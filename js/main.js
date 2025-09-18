let scatterChart = null;

// 画像キャッシュ用のグローバルオブジェクト
const characterImageCache = {}; 

// 各ランクごとのデフォルトスケールを定義
const defaultScales = { x: { min: 0, max: 11 }, y: { min: 4.8, max: 5.20 } }; 

const processData = (month, rank) => {
    if (monthlyData[month] === undefined) {
        alert('選択された月のデータが存在しません。');
        return;
    }
    var csvData = monthlyData[month][rank].data;
    const lines = csvData.trim().split('\n');
    lines.shift();
    return lines.map(line => {
        const parts = line.split(',');
        return {
            label: parts[0],
            x: parseFloat(parts[1]),
            y: parseFloat(parts[2]),
            imageUrl: characterImageUrls[parts[0]] || ''
        };
    });
}

const updateChart = (rank) => {
    const selectedMonth = document.getElementById('month-selector').value;
    const processedData = processData(selectedMonth, rank);

    // 画像オブジェクトを作成
    const characterImages = processedData.map(dataPoint => {
        const charName = dataPoint.label;
        if (!characterImageCache[charName]) {
            // アスペクト比を計算
            const aspectRatio = 23 / 50;
            let imageWidth;
            if (window.innerWidth >= 700) {
                imageWidth = 45;
            } else if (window.innerWidth >= 600) { // 600以上700未満
                imageWidth = 30;
            } else { // 600未満
                imageWidth = 22;
            }
            const imageHeight = imageWidth * aspectRatio;
            const img = new Image();
            img.src = dataPoint.imageUrl;
            img.width = imageWidth;
            img.height = imageHeight;
            characterImageCache[charName] = img;
        }
        return characterImageCache[charName];
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

    const pointRadius = 12
    const hoverRadius = 15

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
                            enabled: false,
                            mode: 'xy',
                        },
                        zoom: {
                            pinch: {
                                enabled: false
                            },
                            wheel: {
                                enabled: false
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

const initializeMonthSelector = () => {
    const monthSelector = document.getElementById('month-selector');
    const months = Object.keys(monthlyData).sort().reverse(); // 新しい順

    months.forEach(month => {
        const option = document.createElement('option');
        option.value = month;
        const [year, monthNum] = month.split('-');
        option.textContent = month;
        monthSelector.appendChild(option);
    });

    monthSelector.addEventListener('change', () => {
        const activeRank = document.querySelector('.tabs img.active').id.replace('Btn', '');
        // グラフを破棄せずにデータを更新する
        updateChart(activeRank);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    initializeMonthSelector(); // 月セレクターを初期化
     
    // タブのイベントリスナー
    document.querySelectorAll('.tabs img').forEach(image => {
        image.addEventListener('click', (e) => {
            document.querySelectorAll('.tabs img').forEach(img => img.classList.remove('active'));
            const clickedImage = e.currentTarget;
            clickedImage.classList.add('active');
            const rank = clickedImage.id.replace('Btn', '');
            updateChart(rank);
        });
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