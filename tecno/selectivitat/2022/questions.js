const questions_2022 = [
    {
        // --- EXERCICI 1: QÜESTIONS (TEST) 2022 SÈRIE 2 ---
{
    type: "questions",
    category: "materials",
    text: "Qüestió 1: Per a realitzar un assaig de Charpy s’utilitza un pèndol d’1 m de longitud que a l’extrem té una massa de 22 kg. S’usa una proveta amb una entalla en forma de U i una secció de 80 mm². A l’instant inicial, el pèndol està en posició horitzontal, i després de xocar contra la proveta, el seu extrem s’eleva 250 mm. Quanta energia s’ha absorbit en el xoc?",
    options: [
        { text: "202,3 J", value: "a" },
        { text: "215,7 J", value: "b" },
        { text: "53,94 J", value: "c" },
        { text: "161,8 J", value: "d" }
    ],
    correctAnswer: "d",
    steps: `
        L'energia absorbida és la variació d'energia potencial:
        \\[ \\Delta E = m \\cdot g \\cdot (h_1 - h_2) \\]
        Com que està horitzontal, \\( h_1 = L = 1 \\, m \\).
        \\[ \\Delta E = 22 \\cdot 9,807 \\cdot (1 - 0,25) = 161,8 \\, J \\]
    `
},

{
    type: "questions",
    category: "electricitat",
    text: "Qüestió 2: Una resistència elèctrica normalitzada de 390 Ω el valor de la qual pot estar comprès entre 382,2 Ω i 397,8 Ω té una tolerància del:",
    options: [
        { text: "±1 %", value: "a" },
        { text: "±2 %", value: "b" },
        { text: "±5 %", value: "c" },
        { text: "±10 %", value: "d" }
    ],
    correctAnswer: "b",
    steps: `
        La variació màxima respecte el valor nominal és:
        \\[ \\Delta R = 397,8 - 390 = 7,8 \\, \\Omega \\]
        \\[ \\text{Tolerància} = \\frac{7,8}{390} \\cdot 100 = 2 \\% \\]
    `
},
{
    type: "questions",
    category: "energia",
    text: "Qüestió 3: Un automòbil emet 157,8 g de CO2 per cada km. Setmanalment gasta un dipòsit de 60 L de gasoil i té un consum mitjà de 5,6 L/(100 km). Quina és la petjada de carboni setmanal?",
    options: [
        { text: "169,1 kg de CO2", value: "a" },
        { text: "169,1 tones de CO2", value: "b" },
        { text: "1,691 kg de CO2", value: "c" },
        { text: "16,91 kg de CO2", value: "d" }
    ],
    correctAnswer: "a",
    steps: `
        Primer calculem la distància recorreguda:
        \\[ d = \\frac{60 \\, L}{5,6 \\, L/100km} = 1071,43 \\, km \\]
        Ara les emissions totals:
        \\[ m = 1071,43 \\, km \\cdot 157,8 \\, g/km = 169071,6 \\, g \\approx 169,1 \\, kg \\]
    `
},
{
    type: "questions",
    category: "electricitat",
    text: "Qüestió 4: Amb quines unitats es pot expressar la potència elèctrica consumida en un instant determinat en una llar?",
    options: [
        { text: "kW/h", value: "a" },
        { text: "kW · h", value: "b" },
        { text: "kW", value: "c" },
        { text: "kJ · s", value: "d" }
    ],
    correctAnswer: "c",
    steps: `
        La potència és l'energia per unitat de temps. La unitat del sistema internacional és el Watt (W). El kW és un múltiple vàlid. 
        Nota: El kW·h és unitat d'energia, no de potència.
    `
},
{
    type: "questions",
    category: "mecanismes",
    text: "Qüestió 5: Un tren d’engranatges connectat entre eixos d'un motor i una roda té z1 = 14, z2 = 48, z3 = 16 i z4 = 25. Determineu la relació de transmissió ωroda/ωmotor.",
    options: [
        { text: "0,186 7", value: "a" },
        { text: "5,357", value: "b" },
        { text: "0,291 7", value: "c" },
        { text: "0,411 0", value: "d" }
    ],
    correctAnswer: "a",
    steps: `
        La relació de transmissió total és el producte de les z motrius dividit pel producte de les z conduïdes:
        \\[ i = \\frac{z_1 \\cdot z_3}{z_2 \\cdot z_4} = \\frac{14 \\cdot 16}{48 \\cdot 25} \\]
        \\[ i = \\frac{224}{1200} = 0,1867 \\]
    `
},
