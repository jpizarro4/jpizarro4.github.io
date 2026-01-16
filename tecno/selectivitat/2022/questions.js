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
        text: `El controlador d’un motor d’ascensor necessita un senyal que determini en quin sentit ha de posar-se en marxa l’ascensor (per a pujar o baixar). Per a aconseguir això, es dissenya un sistema digital on la sortida z pren valor 1 si l’ascensor ha de pujar i 0 en cas contrari. El sistema té com a entrades 4 variables digitals (a, b, c, d) per a codificar la planta on es troba l’ascensor i la planta on vol anar l’usuari de les quatre possibles: planta 0, planta 1, planta 2 i planta 3. Les dues primeres entrades codifiquen, en numeració binària, la planta en què es troba l’ascensor (per exemple, si es troba a la planta 3 els valors seran a = 1 i b = 1); les altres dues entrades (c, d) codifiquen, de la mateixa manera, el número de la planta que l’usuari selecciona. Utilitzant les variables d’estat descrites, dissenyeu el sistema digital que permeti determinar quan l’ascensor ha de moure’s en sentit ascendent. Per fer-ho:
        <br><br><strong>a)</strong> Elaboreu la taula de veritat del sistema. [1 punt]
        <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
        <br><strong>c)</strong> Dibuixeu el diagrama de portes lògiques equivalent. [0,5 punts]`,
        correctAnswer: "",
        steps: `
        <strong>Resolució:</strong><br>
        La sortida z val 1 sempre que el binari (c,d) > (a,b).
        <br><br>
        <strong>a) Taula de veritat:</strong> Hi ha 16 combinacions. z=1 en 6 casos (ex: 00-01, 00-10, 00-11, 01-10, 01-11, 10-11).
        <br><strong>b) Simplificació:</strong> \\[ z = \\bar{a}c + \\bar{a}\\bar{b}d + \\bar{b}cd \\]
        <br><strong>c) Diagrama:</strong> Es dibuixa el circuit amb 3 portes AND, 1 OR i inversors.
        <br><br>
        <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r2.png" alt="Resolució Exercici 2" width="900">
        `
    },
    {
        type: "exercicis",
        category: "materials",
        text: `Barra d'acer de diàmetre d = 10 mm i longitud L = 0,5 m. El límit elàstic és σe = 300 MPa i el mòdul de Young E = 210 GPa.
        <br><br><strong>a)</strong> El valor de la força F que marca el límit elàstic. [1,25 punts]
        <br><strong>b)</strong> L'allargament de la barra en aquest punt. [1,25 punts]`,
        correctAnswer: "",
        steps: `
        <strong>a) Força:</strong><br>
        \\[ F = \\sigma_e \\cdot S = 300 \\cdot 10^6 \\cdot \\frac{\\pi \\cdot 0,01^2}{4} = 23562 \\; N \\]
        <br><strong>b) Allargament:</strong><br>
        \\[ \\Delta L = \\frac{\\sigma_e}{E} \\cdot L = \\frac{300 \\cdot 10^6}{210 \\cdot 10^9} \\cdot 0,5 = 0,714 \\; mm \\]
        `
    }
];
