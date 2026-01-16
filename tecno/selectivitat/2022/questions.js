const questions = [
    {
        type: "questions",
        category: "materials",
        text: "Per a realitzar un assaig de Charpy s'utilitza un pèndol d'1 m de longitud que a l'extrem té una massa de 22 kg. S'usa una proveta amb una entalla en forma de U i una secció de 80 mm². A l'instant inicial, el pèndol està en posició horitzontal (la barra del pèndol és paraŀlela al terra), i després de xocar contra la proveta al punt més baix de la seva trajectòria, el seu extrem s'eleva 250 mm. Quanta energia s'ha absorbit en el xoc?",
        options: [
            { text: "202,3 J", value: "a" },
            { text: "215,7 J", value: "b" },
            { text: "53,94 J", value: "c" },
            { text: "161,8 J", value: "d" }
        ],
        correctAnswer: "d",
        steps: ""
    },
    
    {
        type: "questions",
        category: "metrologia",
        text: "Una resistència elèctrica normalitzada de 390 Ω el valor de la qual pot estar comprès entre 382,2 Ω i 397,8 Ω té una tolerància del:",
        options: [
            { text: "±1 %", value: "a" },
            { text: "±2 %", value: "b" },
            { text: "±5 %", value: "c" },
            { text: "±10 %", value: "d" }
        ],
        correctAnswer: "b",
        steps: ""
    },
    {
        type: "questions",
        category: "energia",
        text: "Un automòbil emet 157,8 g de CO2 per cada kilòmetre recorregut en vies interurbanes. Setmanalment gasta un dipòsit de 60 L de gasoil en aquests recorreguts i té un consum mitjà de 5,6 L/(100 km). Quina és la petjada de carboni que deixarà a l'atmosfera en una setmana?",
        options: [
            { text: "169,1 kg de CO2", value: "a" },
            { text: "169,1 tones de CO2", value: "b" },
            { text: "1,691 kg de CO2", value: "c" },
            { text: "16,91 kg de CO2", value: "d" }
        ],
        correctAnswer: "a",
        steps: ""
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
        steps: ""
    },
    {
        type: "questions",
        category: "maquines",
        text: "Un tren d'engranatges es connecta entre els eixos d'un motor elèctric i d'una roda. Disposa de 4 rodes dentades de z1 = 14, z2 = 48, z3 = 16 i z4 = 25. Determineu la relació de transmissió ωroda/ωmotor.",
        images: '<div style="text-align:center; margin:15px 0;"><img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2q5.png" alt="Tren d\'engranatges" style="max-width:100%; height:auto; border-radius:8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);"></div>',
        options: [
            { text: "0,186 7", value: "a" },
            { text: "5,357", value: "b" },
            { text: "0,291 7", value: "c" },
            { text: "0,411 0", value: "d" }
        ],
        correctAnswer: "a",
        steps: ""
    },
    
    {
        type: "exercicis",
        category: "control",
        text: "Controlador d'ascensor de 4 plantes (0, 1, 2, 3). Entrades a,b (actual) i c,d (destí). La sortida z ha de ser 1 si l'ascensor ha de pujar.<br><br><strong>a)</strong> Taula de veritat.<br><strong>b)</strong> Funció simplificada.",
        correctAnswer: "",
        steps: "<strong>a) Taula:</strong> La sortida z=1 quan el destí (c,d) és numèricament superior a la posició actual (a,b).<br><br><strong>b) Funció simplificada:</strong> \\\\[ z = \\\\bar{a}c + \\\\bar{a}\\\\bar{b}d + \\\\bar{b}cd \\\\]"
    },
    
    {
        type: "exercicis",
        category: "materials",
        text: "Barra d'acer de diàmetre d = 10 mm i longitud L = 0,5 m. El límit elàstic és σe = 300 MPa i el mòdul de Young E = 210 GPa.<br><br><strong>a)</strong> El valor de la força F que marca el límit elàstic.<br><strong>b)</strong> L'allargament de la barra en aquest punt.",
        correctAnswer: "",
        steps: "<strong>a) Força:</strong> \\\\[ F = \\\\sigma_e \\\\cdot S = 300 \\\\cdot 10^6 \\\\cdot \\\\frac{\\\\pi \\\\cdot 0,01^2}{4} = 23562 \\\\, N \\\\]<br><strong>b) Allargament:</strong> \\\\[ \\\\Delta L = \\\\epsilon \\\\cdot L = \\\\frac{\\\\sigma_e}{E} \\\\cdot L = \\\\frac{300 \\\\cdot 10^6}{210 \\\\cdot 10^9} \\\\cdot 0,5 = 0,714 \\\\, mm \\\\]"
    }
];
