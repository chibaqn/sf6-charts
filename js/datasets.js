// キャラクターの画像URL
const characterImageUrls = {
    'LUKE': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_luke.jpg',
    'JAMIE': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_jamie.jpg',
    'MANON': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_manon.jpg',
    'KIMBERLY': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_kimberly.jpg',
    'MARISA': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_marisa.jpg',
    'LILY': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_lily.jpg',
    'JP': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_jp.jpg',
    'JURI': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_juri.jpg',
    'DEE JAY': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_deejay.jpg',
    'CAMMY': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_cammy.jpg',
    'RYU': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_ryu.jpg',
    'E.HONDA': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_honda.jpg',
    'BLANKA': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_blanka.jpg',
    'GUILE': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_guile.jpg',
    'KEN': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_ken.jpg',
    'CHUN-LI': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_chunli.jpg',
    'ZANGIEF': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_zangief.jpg',
    'DHALSIM': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_dhalsim.jpg',
    'RASHID': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_rashid.jpg',
    'A.K.I.': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_aki.jpg',
    'ED': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_ed.jpg',
    'GOUKI': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_gouki.jpg',
    'VEGA': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_vega.jpg',
    'TERRY': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_terry.jpg',
    'MAI': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_mai.jpg',
    'ELENA': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_elena.jpg',
    'SAGAT': 'https://www.streetfighter.com/6/buckler/assets/images/material/character/dia/thumb/card_sagat.jpg'
};

// 月ごとのキャラクター使用率 × 平均勝率のデータセット
const monthlyData = {
    '2025-08': {
        'master': {
            title: 'キャラクター使用率 × 平均勝率 (Masterランク) - 2025年8月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,4.568,5.049
JAMIE,4.537,4.966
MANON,3.355,4.968
KIMBERLY,1.772,5.109
MARISA,3.091,5.009
LILY,0.869,5.029
JP,3.469,5.092
JURI,4.864,4.982
DEE JAY,2.762,5.064
CAMMY,4.798,4.976
RYU,8.174,4.946
E.HONDA,1.133,5.167
BLANKA,1.279,5.069
GUILE,1.667,5.003
KEN,5.662,4.976
CHUN-LI,2.684,5.012
ZANGIEF,4.006,4.916
DHALSIM,0.902,5.134
RASHID,1.427,5.064
A.K.I.,2.880,5.023
ED,3.483,4.939
GOUKI,9.129,4.895
VEGA,3.802,5.038
TERRY,4.003,5.037
MAI,4.516,4.976
ELENA,2.361,5.043
SAGAT,8.807,5.164`
        },
        'highMaster': {
            title: 'キャラクター使用率 × 平均勝率 (HighMasterランク) - 2025年8月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,5.121,5.024
JAMIE,3.836,4.940
MANON,2.868,4.956
KIMBERLY,2.920,5.092
MARISA,3.547,5.044
LILY,1.179,5.038
JP,4.587,5.046
JURI,4.547,4.962
DEE JAY,3.655,5.011
CAMMY,4.519,4.996
RYU,5.419,4.953
E.HONDA,2.003,5.141
BLANKA,2.078,5.102
GUILE,1.996,4.986
KEN,5.104,4.977
CHUN-LI,2.891,4.991
ZANGIEF,2.802,4.928
DHALSIM,1.758,5.116
RASHID,2.178,5.024
A.K.I.,3.668,4.982
ED,3.176,5.005
GOUKI,6.041,4.927
VEGA,4.304,5.026
TERRY,3.704,4.990
MAI,4.169,5.040
ELENA,2.606,5.005
SAGAT,9.325,4.964`
        },
        'grandMaster': {
            title: 'キャラクター使用率 × 平均勝率 (GrandMasterランク) - 2025年8月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,4.488,4.985
JAMIE,3.453,5.021
MANON,2.803,4.951
KIMBERLY,4.080,5.051
MARISA,3.946,4.996
LILY,1.451,4.997
JP,4.862,5.035
JURI,4.243,4.991
DEE JAY,4.072,5.048
CAMMY,4.824,4.993
RYU,4.722,4.964
E.HONDA,2.490,5.061
BLANKA,2.817,5.043
GUILE,1.964,4.942
KEN,4.641,5.010
CHUN-LI,2.959,5.063
ZANGIEF,2.482,4.899
DHALSIM,2.169,4.970
RASHID,2.301,5.006
A.K.I.,3.714,4.933
ED,3.051,5.024
GOUKI,5.025,4.922
VEGA,4.583,5.068
TERRY,3.541,5.039
MAI,4.158,5.065
ELENA,2.797,4.999
SAGAT,8.366,4.944`
        },
        'ultimateMaster': {
            title: 'キャラクター使用率 × 平均勝率 (Ultimate Masterランク) - 2025年8月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,4.486,5.008
JAMIE,3.003,4.950
MANON,2.631,4.950
KIMBERLY,4.443,4.983
MARISA,4.205,5.013
LILY,1.875,5.063
JP,4.951,4.995
JURI,4.205,4.967
DEE JAY,4.671,4.893
CAMMY,5.276,5.033
RYU,4.118,4.984
E.HONDA,2.843,5.037
BLANKA,3.408,4.983
GUILE,1.934,5.122
KEN,4.316,4.998
CHUN-LI,3.092,5.028
ZANGIEF,2.312,4.973
DHALSIM,2.541,5.015
RASHID,2.946,5.097
A.K.I.,2.703,4.849
ED,3.451,5.078
GOUKI,4.268,4.963
VEGA,4.733,5.046
TERRY,2.983,4.994
MAI,5.438,5.153
ELENA,2.744,5.021
SAGAT,6.424,4.882`
        }
    },
    '2025-07': {
        'master': {
            title: 'キャラクター使用率 × 平均勝率 (Masterランク) - 2025年7月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,4.720,5.043
JAMIE,5.260,4.997
MANON,3.387,4.973
KIMBERLY,1.549,5.095
MARISA,3.690,5.024
LILY,0.907,5.039
JP,3.589,5.073
JURI,5.532,4.996
DEE JAY,2.947,5.062
CAMMY,4.230,5.002
RYU,10.464,4.975
E.HONDA,1.207,5.108
BLANKA,1.182,5.026
GUILE,1.895,5.008
KEN,5.930,4.992
CHUN-LI,2.433,5.031
ZANGIEF,4.724,4.935
DHALSIM,1.025,5.061
RASHID,1.540,5.047
A.K.I.,2.746,5.024
ED,3.473,4.950
GOUKI,10.728,4.939
VEGA,4.309,5.025
TERRY,4.381,5.043
MAI,4.713,5.000
ELENA,3.438,5.035`
        },
        'highMaster': {
            title: 'キャラクター使用率 × 平均勝率 (HighMasterランク) - 2025年7月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,5.403,5.030
JAMIE,5.074,4.951
MANON,3.244,5.012
KIMBERLY,2.371,5.048
MARISA,4.140,5.035
LILY,1.201,5.060
JP,4.893,5.033
JURI,5.302,5.003
DEE JAY,3.712,4.997
CAMMY,4.230,5.000
RYU,7.764,4.943
E.HONDA,1.920,5.095
BLANKA,1.622,5.071
GUILE,1.951,5.035
KEN,5.940,4.980
CHUN-LI,2.814,4.983
ZANGIEF,3.201,4.943
DHALSIM,1.518,5.094
RASHID,1.984,5.047
A.K.I.,3.414,4.990
ED,2.998,5.023
GOUKI,7.731,4.926
VEGA,4.774,5.034
TERRY,4.541,4.989
MAI,4.646,5.036
ELENA,3.612,4.998`
        },
        'grandMaster': {
            title: 'キャラクター使用率 × 平均勝率 (GrandMasterランク) - 2025年7月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,5.344,5.000
JAMIE,4.682,4.939
MANON,3.161,4.942
KIMBERLY,3.063,5.118
MARISA,4.528,5.000
LILY,1.317,5.043
JP,5.351,5.046
JURI,5.329,4.971
DEE JAY,3.876,5.010
CAMMY,4.186,5.020
RYU,6.435,4.975
E.HONDA,2.240,5.054
BLANKA,2.098,5.087
GUILE,2.075,4.963
KEN,5.434,4.975
CHUN-LI,2.671,4.967
ZANGIEF,3.153,4.964
DHALSIM,2.076,5.089
RASHID,2.503,5.022
A.K.I.,3.622,4.983
ED,2.998,5.009
GOUKI,6.453,4.947
VEGA,4.912,5.011
TERRY,4.340,5.018
MAI,4.577,5.049
ELENA,3.576,5.005`
        },
        'ultimateMaster': {
            title: 'キャラクター使用率 × 平均勝率 (Ultimate Masterランク) - 2025年7月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,5.012,5.001
JAMIE,4.133,4.966
MANON,2.764,4.958
KIMBERLY,3.757,5.004
MARISA,4.504,4.974
LILY,1.619,4.966
JP,6.088,5.056
JURI,5.048,4.932
DEE JAY,4.843,4.988
CAMMY,4.347,5.036
RYU,4.815,4.982
E.HONDA,2.806,5.018
BLANKA,3.312,5.020
GUILE,2.039,5.005
KEN,4.922,4.986
CHUN-LI,2.918,5.036
ZANGIEF,2.803,4.981
DHALSIM,2.424,4.999
RASHID,2.794,5.044
A.K.I.,3.484,4.963
ED,3.013,5.035
GOUKI,5.822,4.950
VEGA,5.075,5.027
TERRY,3.602,4.997
MAI,4.881,5.105
ELENA,3.174,4.971`
        }
    },
};
