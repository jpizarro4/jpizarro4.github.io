const questions = [
    {
        type: "questions",
        category: "materials",
        text: "Per a realitzar un assaig de Charpy s'utilitza un pèndol d'\\(1 \\text{ m}\\) de longitud que a l'extrem té una massa de \\(22 \\text{ kg}\\). S'usa una proveta amb una entalla en forma de U i una secció de \\(80 \\text{ mm}^2\\). A l'instant inicial, el pèndol està en posició horitzontal (la barra del pèndol és paraŀlela al terra), i després de xocar contra la proveta al punt més baix de la seva trajectòria, el seu extrem s'eleva \\(250 \\text{ mm}\\). Quanta energia s'ha absorbit en el xoc?",
        options: [
            { text: "202,3 J", value: "a" },
            { text: "215,7 J", value: "b" },
            { text: "53,94 J", value: "c" },
            { text: "161,8 J", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            <div class="step-block"><span class="step-letter">a)</span> \\[ E_1 = 22 \\cdot 9,8 \\cdot 1 = 215,6 \\text{ J} \\]</div>
            <div class="step-block"><span class="step-letter">b)</span> \\[ E_2 = 22 \\cdot 9,8 \\cdot 0,25 = 53,9 \\text{ J} \\]</div>
            <div class="step-block"><span class="step-letter">c)</span> \\[ \\Delta E = 215,6 - 53,9 = 161,7 \\text{ J} \\]</div>`
    },
    {
        type: "questions",
        category: "metrologia",
        text: "Una resistència elèctrica normalitzada de \\(390 \\, \\Omega\\) el valor de la qual pot estar comprès entre \\(382,2 \\, \\Omega\\) i \\(397,8 \\, \\Omega\\) té una tolerància del:",
        options: [
            { text: "±1 %", value: "a" },
            { text: "±2 %", value: "b" },
            { text: "±5 %", value: "c" },
            { text: "±10 %", value: "d" }
        ],
        correctAnswer: "b",
        steps: `<div class="step-block"><span class="step-letter">Tol:</span> \\[ \\frac{397,8 - 390}{390} \\cdot 100 = 2 \\% \\]</div>`
    },
    {
        type: "questions",
        category: "energia",
        text: "Un automòbil emet \\(157,8 \\text{ g}\\) de \\(\\text{CO}_2\\) per cada kilòmetre recorregut. Setmanalment gasta un dipòsit de \\(60 \\text{ L}\\) de gasoil i té un consum mitjà de \\(5,6 \\text{ L}/(100 \\text{ km})\\). Quina és la petjada de carboni setmanal?",
        options: [
            { text: "169,1 kg de CO2", value: "a" },
            { text: "169,1 tones de CO2", value: "b" },
            { text: "1,691 kg de CO2", value: "c" },
            { text: "16,91 kg de CO2", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            <div class="step-block"><span class="step-letter">a)</span> \\[ d = \\frac{60}{5,6/100} = 1071,43 \\text{ km} \\]</div>
            <div class="step-block"><span class="step-letter">b)</span> \\[ m = 1071,43 \\cdot 157,8 = 169071,6 \\text{ g} \\approx 169,1 \\text{ kg} \\]</div>`
    },
    {
        type: "questions",
        category: "electrics",
        text: "Amb quines unitats es pot expressar la potència elèctrica consumida en un instant determinat en una llar?",
        options: [
            { text: "kW/h", value: "a" },
            { text: "kW · h", value: "b" },
            { text: "kW", value: "c" },
            { text: "kJ · s", value: "d" }
        ],
        correctAnswer: "c",
        steps: `<div class="step-block">La potència es mesura en <b>Watts (W)</b> o <b>quilowatts (kW)</b>.</div>`
    },
    {
        type: "questions",
        category: "maquines",
        text: "Un tren d'engranatges amb \\(z_1 = 14\\), \\(z_2 = 48\\), \\(z_3 = 16\\) i \\(z_4 = 25\\). Determineu la relació de transmissió \\(\\omega_{\\text{roda}}/\\omega_{\\text{motor}}\\).",
        images: '<div style="text-align:center; margin:15px 0;"><img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2q5.png" alt="Tren d\'engranatges" style="max-width:100%; height:auto; border-radius:8px;"></div>',
        options: [
            { text: "0,186 7", value: "a" },
            { text: "5,357", value: "b" },
            { text: "0,291 7", value: "c" },
            { text: "0,411 0", value: "d" }
        ],
        correctAnswer: "a",
        steps: `<div class="step-block"><span class="step-letter">τ:</span> \\[ \\tau = \\frac{14 \\cdot 16}{48 \\cdot 25} = 0,1867 \\]</div>`
    },
    {
        type: "exercicis",
        category: "control",
        text: `El controlador d’un motor d’ascensor. Entrades \\((a, b, c, d)\\). Sortida \\(z=1\\) si puja:
        <br><br><strong>a)</strong> Taula de veritat.
        <br><strong>b)</strong> Funció lògica.
        <br><strong>c)</strong> Diagrama de portes.`,
        correctAnswer: "",
        steps: `
        <div class="step-block"><span class="step-letter">a)</span> <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r1a.png" style="max-width:100%; filter: invert(0.8);"></div>
        <div class="step-block"><span class="step-letter">b)</span> <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r1b.png" style="max-width:100%; margin-top:10px; filter: invert(0.8);"></div>
        <div class="step-block"><span class="step-letter">c)</span> <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r1c.png" style="max-width:100%; margin-top:10px; filter: invert(0.8);"></div>`
    },
    {
        type: "exercicis",
        category: "energia",
        text: `Rentadora: \\(t = 1,5 \\text{ h}\\). Rentada (30 min): \\(P_1 = 2000 \\text{ W}\\). Altres: \\(P_2 = 250 \\text{ W}\\).`,
        correctAnswer: "",
        steps: `
        <div class="step-block"><span class="step-letter">a)</span> \\[ E_{\\text{cons}} = 2000 \\cdot 0,5 + 250 \\cdot 1 = 1,25 \\text{ kWh} \\]</div>
        <div class="step-block"><span class="step-letter">b)</span> \\[ c_r = \\frac{1000}{1250} \\cdot 100 = 80 \\% \\]</div>
        <div class="step-block"><span class="step-letter">c)</span> \\[ c_{\\text{punta}} = 0,4287 \\text{ €} \\text{ , } c_{\\text{vall}} = 0,2712 \\text{ €} \\]</div>
        <div class="step-block"><span class="step-letter">d)</span> \\[ e_a = (0,4287 - 0,2712) \\cdot 10 \\cdot 12 = 18,90 \\text{ €} \\]</div>`
    },
    {
        type: "exercicis",
        category: "maquines",
        text: `Volant: \\(I = 0,9 \\text{ kg} \\cdot \\text{m}^2\\), \\(n_0 = 5000 \\text{ min}^{-1}\\), \\(t = 1 \\text{ min}\\).`,
        correctAnswer: "",
        steps: `
        <div class="step-block"><span class="step-letter">a)</span> \\[ \\alpha = \\frac{0 - 523,6}{60} = -8,727 \\text{ rad/s}^2 \\]</div>
        <div class="step-block"><span class="step-letter">b)</span> \\[ n = \\frac{15708}{2\\pi} = 2500 \\text{ voltes} \\]</div>
        <div class="step-block"><span class="step-letter">c)</span> \\[ E_{\\text{diss}} = 0,5 \\cdot 0,9 \\cdot 523,6^2 = 123,41 \\text{ kJ} \\]</div>`
    }
];
