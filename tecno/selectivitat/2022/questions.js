const questions = [
    {
        type: "questions",
        category: "materials",
        text: "Qüestió 1: Per a realitzar un assaig de Charpy s'utilitza un pèndol d'1 m de longitud que a l'extrem té una massa de 22 kg. S'usa una proveta amb una entalla en forma de U i una secció de 80 mm². A l'instant inicial, el pèndol està en posició horitzontal (la barra del pèndol és paraŀlela al terra), i després de xocar contra la proveta al punt més baix de la seva trajectòria, el seu extrem s'eleva 250 mm. Quanta energia s'ha absorbit en el xoc?",
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
        text: "Qüestió 2: Una resistència elèctrica normalitzada de 390 Ω el valor de la qual pot estar comprès entre 382,2 Ω i 397,8 Ω té una tolerància del:",
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
        text: "Qüestió 3: Un automòbil emet 157,8 g de CO2 per cada kilòmetre recorregut en vies interurbanes. Setmanalment gasta un dipòsit de 60 L de gasoil en aquests recorreguts i té un consum mitjà de 5,6 L/(100 km). Quina és la petjada de carboni que deixarà a l'atmosfera en una setmana?",
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
        text: "Qüestió 4: Amb quines unitats es pot expressar la potència elèctrica consumida en un instant determinat en una llar?",
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
        text: "Qüestió 5: Un tren d'engranatges es connecta entre els eixos d'un motor elèctric i d'una roda. Disposa de 4 rodes dentades de z1 = 14, z2 = 48, z3 = 16 i z4 = 25. Determineu la relació de transmissió ωroda/ωmotor.",
        images: '<img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2q5.png" alt="Imatge relacionada amb la pregunta" style="max-width:100%; height:auto;">',
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
        text: "Exercici 2: Controlador d'ascensor de 4 plantes (0, 1, 2, 3). Entrades a,b (actual) i c,d (destí). La sortida z ha de ser 1 si l'ascensor ha de pujar.<br><strong>a)</strong> Taula de veritat.<br><strong>b)</strong> Funció simplificada.",
        correctAnswer: "",
        steps: "<strong>a) Taula:</strong> z=1 quan el destí (c,d) és major que l'actual (a,b). <br><strong>b) Funció:</strong> \\\\[ z = \\\\bar{a}c + \\\\bar{a}\\\\bar{b}d + \\\\bar{b}cd \\\\]"
    }
];
