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

const monthlyData = {
    '2025-08': {
        'master': {
            title: 'キャラクター使用率 × ダイアグラム勝率 (Masterランク) - 2025年8月',
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
            title: 'キャラクター使用率 × ダイアグラム勝率 (HighMasterランク) - 2025年8月',
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
            title: 'キャラクター使用率 × ダイアグラム勝率 (GrandMasterランク) - 2025年8月',
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
            title: 'キャラクター使用率 × ダイアグラム勝率 (Ultimate Masterランク) - 2025年8月',
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
            title: 'キャラクター使用率 × ダイアグラム勝率 (Masterランク) - 2025年7月',
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
            title: 'キャラクター使用率 × ダイアグラム勝率 (HighMasterランク) - 2025年7月',
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
            title: 'キャラクター使用率 × ダイアグラム勝率 (GrandMasterランク) - 2025年7月',
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
            title: 'キャラクター使用率 × ダイアグラム勝率 (Ultimate Masterランク) - 2025年7月',
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
    '2025-06': {
        'master': {
            title: 'キャラクター使用率 × ダイアグラム勝率 (Masterランク) - 2025年6月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,5.274,5.057
JAMIE,5.689,5.003
MANON,2.905,4.962
KIMBERLY,1.525,5.098
MARISA,3.500,5.056
LILY,0.970,5.031
JP,3.273,5.072
JURI,4.891,4.984
DEE JAY,2.717,5.062
CAMMY,3.990,4.980
RYU,11.585,4.980
E.HONDA,1.163,5.122
BLANKA,1.238,5.043
GUILE,1.771,4.987
KEN,5.855,4.982
CHUN-LI,2.508,5.020
ZANGIEF,5.404,4.876
DHALSIM,0.968,5.106
RASHID,1.524,5.011
A.K.I.,2.594,5.026
ED,3.234,4.956
GOUKI,9.661,4.920
VEGA,4.206,5.013
TERRY,4.005,5.057
MAI,5.080,4.973
ELENA,4.472,5.153`
        },
        'highMaster': {
            title: 'キャラクター使用率 × ダイアグラム勝率 (HighMasterランク) - 2025年6月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,6.013,5.044
JAMIE,5.055,4.952
MANON,2.868,4.956
KIMBERLY,2.433,5.071
MARISA,4.011,5.060
LILY,1.277,5.049
JP,4.647,5.034
JURI,4.723,4.945
DEE JAY,3.630,5.032
CAMMY,3.933,4.986
RYU,8.555,4.958
E.HONDA,1.917,5.111
BLANKA,1.727,5.050
GUILE,1.920,4.996
KEN,5.451,4.977
CHUN-LI,2.863,4.993
ZANGIEF,3.690,4.849
DHALSIM,1.676,5.074
RASHID,2.040,5.034
A.K.I.,3.385,5.011
ED,3.002,5.006
GOUKI,6.677,4.882
VEGA,4.648,5.025
TERRY,4.153,5.044
MAI,4.673,5.014
ELENA,5.035,5.127`
        },
        'grandMaster': {
            title: 'キャラクター使用率 × ダイアグラム勝率 (GrandMasterランク) - 2025年6月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,5.818,5.020
JAMIE,4.831,4.954
MANON,2.811,4.958
KIMBERLY,3.265,5.025
MARISA,4.449,5.022
LILY,1.571,5.015
JP,4.931,5.028
JURI,4.793,4.997
DEE JAY,4.114,5.033
CAMMY,3.971,4.994
RYU,7.206,5.030
E.HONDA,2.437,5.118
BLANKA,2.256,5.075
GUILE,2.107,4.980
KEN,5.093,4.977
CHUN-LI,2.820,5.056
ZANGIEF,3.522,4.852
DHALSIM,2.180,4.998
RASHID,2.300,4.961
A.K.I.,3.609,4.971
ED,2.912,4.958
GOUKI,5.935,4.920
VEGA,4.824,4.984
TERRY,3.826,5.003
MAI,4.297,5.013
ELENA,4.119,5.092`
        },
        'ultimateMaster': {
            title: 'キャラクター使用率 × ダイアグラム勝率 (Ultimate Masterランク) - 2025年6月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,5.258,4.992
JAMIE,4.126,4.945
MANON,2.544,4.971
KIMBERLY,3.960,5.031
MARISA,4.670,4.989
LILY,1.832,5.002
JP,5.878,5.038
JURI,4.651,4.921
DEE JAY,4.958,4.977
CAMMY,4.419,5.042
RYU,5.966,4.997
E.HONDA,3.037,5.001
BLANKA,3.549,5.005
GUILE,2.091,5.011
KEN,4.736,4.967
CHUN-LI,3.239,5.011
ZANGIEF,3.429,4.960
DHALSIM,2.489,5.053
RASHID,2.851,5.070
A.K.I.,3.191,4.946
ED,2.859,5.048
GOUKI,4.993,4.939
VEGA,4.964,5.001
TERRY,2.941,5.038
MAI,4.299,5.091
ELENA,3.068,5.058`
        }
    },
    '2025-05': {
        'master': {
            title: 'キャラクター使用率 × ダイアグラム勝率 (Masterランク) - 2025年5月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,4.487,5.058
JAMIE,5.194,4.994
MANON,3.353,5.002
KIMBERLY,1.821,5.131
MARISA,3.220,5.009
LILY,1.183,5.046
JP,3.654,5.091
JURI,5.983,4.998
DEE JAY,3.003,5.063
CAMMY,4.812,4.997
RYU,9.177,4.962
E.HONDA,1.440,5.147
BLANKA,1.405,5.053
GUILE,1.878,5.014
KEN,7.758,5.003
CHUN-LI,2.011,5.047
ZANGIEF,5.074,4.967
DHALSIM,0.914,5.131
RASHID,1.865,5.064
A.K.I.,2.855,5.055
ED,3.838,4.975
GOUKI,12.236,4.928
VEGA,4.542,5.041
TERRY,3.311,5.035
MAI,4.987,5.015`
        },
        'highMaster': {
            title: 'キャラクター使用率 × ダイアグラム勝率 (HighMasterランク) - 2025年5月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,4.679,5.012
JAMIE,4.548,4.967
MANON,3.357,4.959
KIMBERLY,3.046,5.093
MARISA,3.550,5.000
LILY,1.535,5.023
JP,4.992,5.044
JURI,5.805,4.964
DEE JAY,3.925,5.029
CAMMY,4.840,4.991
RYU,6.368,4.937
E.HONDA,2.356,5.120
BLANKA,2.038,5.119
GUILE,2.232,4.979
KEN,7.015,5.004
CHUN-LI,2.437,4.995
ZANGIEF,4.071,4.980
DHALSIM,1.776,5.106
RASHID,2.728,5.011
A.K.I.,3.910,5.002
ED,3.543,4.987
GOUKI,8.056,4.923
VEGA,5.171,5.000
TERRY,3.171,4.994
MAI,4.850,5.047`
        },
        'grandMaster': {
            title: 'キャラクター使用率 × ダイアグラム勝率 (GrandMasterランク) - 2025年5月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,4.511,5.030
JAMIE,4.297,4.953
MANON,3.082,4.947
KIMBERLY,3.748,5.036
MARISA,4.056,4.987
LILY,1.755,5.072
JP,5.579,5.036
JURI,5.546,4.956
DEE JAY,4.405,4.994
CAMMY,4.797,5.034
RYU,5.186,4.942
E.HONDA,2.847,5.097
BLANKA,2.773,5.032
GUILE,2.216,4.978
KEN,6.484,4.999
CHUN-LI,2.392,5.076
ZANGIEF,4.028,4.995
DHALSIM,2.104,5.026
RASHID,2.891,5.001
A.K.I.,3.965,4.981
ED,3.427,5.000
GOUKI,7.264,4.934
VEGA,5.020,5.037
TERRY,2.934,4.951
MAI,4.695,5.084`
        },
        'ultimateMaster': {
            title: 'キャラクター使用率 × ダイアグラム勝率 (Ultimate Masterランク) - 2025年5月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,4.043,4.925
JAMIE,3.716,4.946
MANON,3.046,4.962
KIMBERLY,3.945,5.024
MARISA,3.771,4.912
LILY,2.161,4.976
JP,5.786,5.064
JURI,5.086,4.967
DEE JAY,4.531,4.955
CAMMY,5.189,5.015
RYU,3.945,4.991
E.HONDA,3.535,4.960
BLANKA,3.746,4.986
GUILE,2.074,5.028
KEN,6.272,4.976
CHUN-LI,2.376,5.018
ZANGIEF,5.026,5.080
DHALSIM,2.433,5.046
RASHID,3.458,5.016
A.K.I.,3.316,4.947
ED,3.118,5.049
GOUKI,6.317,4.992
VEGA,5.918,5.020
TERRY,2.146,4.954
MAI,5.044,5.113`
        }
    },
    '2025-04': {
        'master': {
            title: 'キャラクター使用率 × ダイアグラム勝率 (Masterランク) - 2025年4月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,4.468,5.035
JAMIE,5.041,4.998
MANON,3.001,4.993
KIMBERLY,1.784,5.091
MARISA,3.145,4.999
LILY,1.022,5.013
JP,3.986,5.064
JURI,6.278,4.985
DEE JAY,3.054,5.038
CAMMY,4.680,4.998
RYU,9.525,4.968
E.HONDA,1.262,5.092
BLANKA,1.246,5.039
GUILE,1.921,5.000
KEN,7.565,5.002
CHUN-LI,2.035,5.021
ZANGIEF,4.640,4.982
DHALSIM,0.811,5.100
RASHID,2.040,5.029
A.K.I.,2.524,5.032
ED,3.659,4.971
GOUKI,12.571,4.953
VEGA,4.270,5.026
TERRY,3.222,5.036
MAI,6.247,5.006`
        },
        'highMaster': {
            title: 'キャラクター使用率 × ダイアグラム勝率 (HighMasterランク) - 2025年4月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,4.752,5.030
JAMIE,4.724,4.953
MANON,3.171,4.979
KIMBERLY,2.632,5.052
MARISA,3.237,5.011
LILY,1.304,5.064
JP,5.219,5.046
JURI,6.127,5.000
DEE JAY,3.947,5.019
CAMMY,4.764,4.999
RYU,6.982,4.962
E.HONDA,2.071,5.127
BLANKA,1.681,5.059
GUILE,2.289,4.981
KEN,7.177,4.993
CHUN-LI,2.275,4.993
ZANGIEF,4.016,4.986
DHALSIM,1.343,5.059
RASHID,2.739,5.050
A.K.I.,3.426,5.020
ED,3.279,5.018
GOUKI,8.946,4.913
VEGA,4.763,5.029
TERRY,3.293,4.986
MAI,5.846,4.996`
        },
        'grandMaster': {
            title: 'キャラクター使用率 × ダイアグラム勝率 (GrandMasterランク) - 2025年4月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,4.798,5.061
JAMIE,4.506,4.984
MANON,3.298,5.004
KIMBERLY,3.406,5.055
MARISA,3.554,5.002
LILY,1.662,5.018
JP,5.496,5.000
JURI,6.043,4.980
DEE JAY,4.472,5.010
CAMMY,4.567,4.972
RYU,5.839,4.948
E.HONDA,2.537,5.052
BLANKA,1.989,5.083
GUILE,2.182,4.960
KEN,6.499,4.991
CHUN-LI,2.200,5.001
ZANGIEF,4.203,4.977
DHALSIM,1.770,5.067
RASHID,2.868,4.902
A.K.I.,3.640,5.006
ED,3.321,4.951
GOUKI,7.854,4.988
VEGA,4.765,5.043
TERRY,3.083,5.008
MAI,5.449,5.027`
        },
        'ultimateMaster': {
            title: 'キャラクター使用率 × ダイアグラム勝率 (Ultimate Masterランク) - 2025年4月',
            data: `Character,Usage Rate,Average Win Rate (Total)
LUKE,4.488,5.015
JAMIE,3.742,4.933
MANON,3.057,4.932
KIMBERLY,3.873,4.986
MARISA,3.496,4.941
LILY,1.930,4.966
JP,5.936,5.028
JURI,5.712,4.946
DEE JAY,4.813,4.955
CAMMY,4.665,5.029
RYU,3.961,4.960
E.HONDA,2.992,5.002
BLANKA,3.281,5.036
GUILE,2.211,4.934
KEN,6.147,5.001
CHUN-LI,2.405,5.057
ZANGIEF,4.447,5.033
DHALSIM,2.253,5.037
RASHID,3.245,5.052
A.K.I.,3.736,4.971
ED,3.135,5.024
GOUKI,6.773,4.952
VEGA,5.411,5.040
TERRY,2.321,5.009
MAI,5.972,5.123`
        }
    },
};
