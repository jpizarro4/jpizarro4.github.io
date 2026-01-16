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
        <strong>Resolució:</strong>
        <div style="margin-top: 20px;">
            <strong>a) Taula de veritat:</strong>
            <div style="text-align:center; margin: 15px 0; background: white; padding: 20px; border-radius: 12px; border: 1px solid #e0e0e0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r1a.png" alt="Taula de veritat" style="max-width:100%; height:auto;">
            </div>
            
            <strong>b) Simplificació:</strong>
            <div style="text-align:center; margin: 15px 0; background: white; padding: 20px; border-radius: 12px; border: 1px solid #e0e0e0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r1b.png" alt="Simplificació de la funció" style="max-width:100%; height:auto;">
            </div>
            
            <strong>c) Diagrama de portes:</strong>
            <div style="text-align:center; margin: 15px 0; background: white; padding: 20px; border-radius: 12px; border: 1px solid #e0e0e0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r1c.png" alt="Esquema lògic" style="max-width:100%; height:auto;">
            </div>
        </div>`
    },
    {
        type: "exercicis",
        category: "energia",
        text: `El cicle de funcionament d’una rentadora es pot dividir bàsicament en tres fases: rentada, esbandida i centrifugació. La primera fase concentra el percentatge de consum energètic més elevat perquè escalfa l’aigua mitjançant una resistència. En un programa estàndard de t = 1,5 h de durada, en els primers 30 min (fase de rentada) la potència mitjana consumida és P₁ = 2 000 W, mentre que les fases d’esbandida i centrifugació consumeixen, de mitjana, P₂ = 250 W. La rentadora es connecta a la xarxa a una tensió U = 230 V.
        <br>S’ha contractat una tarifa amb discriminació horària que determina el preu del kW · h segons la franja horària en què es consumeix l’electricitat, tal com es mostra en la taula:
        
        <div style="text-align:center; margin: 15px 0; background: white; padding: 10px; border-radius: 8px; border: 1px solid #ddd;">
            <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2p2.png" alt="Taula de tarifes" style="max-width:100%; height:auto;">
        </div>

        Es considera que s’utilitza el programa estàndard n = 10 vegades al mes. Determineu:
        <br><br><strong>a)</strong> L’energia consumida en un cicle de funcionament Econs. [0,5 punts]
        <br><strong>b)</strong> El percentatge d’energia consumida en la fase de rentada cr. [0,5 punts]
        <br><strong>c)</strong> El cost de posar una rentadora en hores punta cpunta i en hores vall cvall. [1 punt]
        <br><strong>d)</strong> L’estalvi anual ea que s’obtindrà si la rentadora sempre es posa en hores vall respecte al cost de posar-la sempre en hores punta. [0,5 punts]`,
        correctAnswer: "",
        steps: `
        <strong>Resolució pas a pas:</strong>
        <br><br>
        <strong>a) Energia consumida en un cicle $E_{\\text{cons}}$:</strong>
        \\[
        E_{\\text{cons}} = P_1 \\cdot t_1 + P_2 \\cdot (t - t_1) = 2000 \\cdot 0,5 + 250 \\cdot (1,5 - 0,5) = 1250 \\, \\text{Wh} = 4500 \\, \\text{kJ}
        \\]
        
        <strong>b) Percentatge d'energia en la rentada $c_r$:</strong>
        \\[
        c_r = \\frac{P_1 \\cdot t_1}{E_{\\text{cons}}} \\cdot 100 = \\frac{2000 \\cdot 0,5}{1250} \\cdot 100 = 80 \\%
        \\]
        
        <strong>c) Cost en hores punta $c_{\\text{punta}}$ i hores vall $c_{\\text{vall}}$:</strong>
        \\[
        c_{\\text{punta}} = E_{\\text{cons}} \\cdot p_{\\text{punta}} = 1,250 \\, \\text{kWh} \\cdot 0,342930 \\, \\text{€/kWh} = 0,4287 \\, \\text{€}
        \\]
        \\[
        c_{\\text{vall}} = E_{\\text{cons}} \\cdot p_{\\text{vall}} = 1,250 \\, \\text{kWh} \\cdot 0,216951 \\, \\text{€/kWh} = 0,2712 \\, \\text{€}
        \\]
        
        <strong>d) Estalvi anual $e_a$:</strong>
        \\[
        e_a = (c_{\\text{punta}} - c_{\\text{vall}}) \\cdot n \\cdot 12 = (0,4287 - 0,2712) \\cdot 10 \\cdot 12 = 18,90 \\, \\text{€}
        \\]`
    },
];
