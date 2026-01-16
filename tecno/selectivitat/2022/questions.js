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
        <strong>Resolució:</strong>
        \\[ E_1 = m \\cdot g \\cdot h_1 = 22 \\cdot 9,8 \\cdot 1 = 215,6 \\text{ J} \\]
        \\[ E_2 = m \\cdot g \\cdot h_2 = 22 \\cdot 9,8 \\cdot 0,25 = 53,9 \\text{ J} \\]
        \\[ \\Delta E = E_1 - E_2 = 215,6 - 53,9 = 161,7 \\text{ J} \\]`
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
        steps: `
        <strong>Resolució:</strong>
        \\[ \\text{Tolerància} = \\frac{397,8 - 390}{390} \\cdot 100 = 2 \\% \\]`
    },
    {
        type: "questions",
        category: "energia",
        text: "Un automòbil emet \\(157,8 \\text{ g}\\) de \\(\\text{CO}_2\\) per cada kilòmetre recorregut en vies interurbanes. Setmanalment gasta un dipòsit de \\(60 \\text{ L}\\) de gasoil en aquests recorreguts i té un consum mitjà de \\(5,6 \\text{ L}/(100 \\text{ km})\\). Quina és la petjada de carboni que deixarà a l'atmosfera en una setmana?",
        options: [
            { text: "169,1 kg de CO2", value: "a" },
            { text: "169,1 tones de CO2", value: "b" },
            { text: "1,691 kg de CO2", value: "c" },
            { text: "16,91 kg de CO2", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
        <strong>Resolució:</strong>
        \\[ \\text{Distància} = \\frac{60 \\text{ L}}{5,6 \\text{ L}/100\\text{km}} = 1071,43 \\text{ km} \\]
        \\[ \\text{Emissions} = 1071,43 \\text{ km} \\cdot 157,8 \\text{ g/km} = 169071 \\text{ g} \\approx 169,1 \\text{ kg} \\]`
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
        steps: "La potència es mesura en Watts (W) o quilowatts (kW). El kW·h és una unitat d'energia."
    },
    {
        type: "questions",
        category: "maquines",
        text: "Un tren d'engranatges es connecta entre els eixos d'un motor elèctric i d'una roda. Disposa de 4 rodes dentades de \\(z_1 = 14\\), \\(z_2 = 48\\), \\(z_3 = 16\\) i \\(z_4 = 25\\). Determineu la relació de transmissió \\(\\omega_{\\text{roda}}/\\omega_{\\text{motor}}\\).",
        images: '<div style="text-align:center; margin:15px 0;"><img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2q5.png" alt="Tren d\'engranatges" style="max-width:100%; height:auto; border-radius:8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);"></div>',
        options: [
            { text: "0,186 7", value: "a" },
            { text: "5,357", value: "b" },
            { text: "0,291 7", value: "c" },
            { text: "0,411 0", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
        <strong>Resolució:</strong>
        \\[ \\tau = \\frac{z_1 \\cdot z_3}{z_2 \\cdot z_4} = \\frac{14 \\cdot 16}{48 \\cdot 25} = \\frac{224}{1200} = 0,1867 \\]`
    },
    {
        type: "exercicis",
        category: "control",
        text: `El controlador d’un motor d’ascensor necessita un senyal que determini en quin sentit ha de posar-se en marxa l’ascensor (per a pujar o baixar). El sistema té com a entrades 4 variables digitals \\((a, b, c, d)\\) per a codificar la planta on es troba l’ascensor \\((a, b)\\) i la planta on vol anar l’usuari \\((c, d)\\). La sortida \\(z\\) pren valor 1 si l’ascensor ha de pujar i 0 en cas contrari. Per fer-ho:
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
                <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r1b.png" alt="Simplificació" style="max-width:100%; height:auto;">
            </div>
            <strong>c) Diagrama de portes:</strong>
            <div style="text-align:center; margin: 15px 0; background: white; padding: 20px; border-radius: 12px; border: 1px solid #e0e0e0; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r1c.png" alt="Esquema lògic" style="max-width:100%; height:auto;">
            </div>
        </div>`
    },
    {
        type: "exercicis",
        category: "maquines",
        text: `Un volant amb un moment d’inèrcia al voltant del seu eix \\(I = 0,9 \\text{ kg} \\cdot \\text{m}^2\\) gira a \\(n_0 = 5000 \\text{ min}^{-1}\\) gràcies a l’acció d’un motor. Es desconnecta el motor i s’observa que el volant triga \\(t = 1 \\text{ min}\\) a quedar-se en repòs a causa d’un parell de fricció que se suposa constant.
        <br><br>Determineu:
        <br><strong>a)</strong> L’acceleració angular del volant \\(\\alpha\\). [0,5 punts]
        <br><strong>b)</strong> El nombre de voltes \\(n\\) que farà el volant abans d’aturar-se. [1 punt]
        <br><strong>c)</strong> L’energia mecànica dissipada en aquest procés \\(E_{\\text{diss}}\\). [1 punt]`,
        correctAnswer: "",
        steps: `
        <strong>Resolució pas a pas:</strong>
        <br><br>
        <strong>a) Acceleració angular \\(\\alpha\\):</strong>
        \\[ \\omega_0 = 5000 \\cdot \\frac{2\\pi}{60} = 523,60 \\text{ rad/s} \\]
        \\[ \\alpha = \\frac{0 - 523,60}{60} = -8,727 \\text{ rad/s}^2 \\]
        <strong>b) Nombre de voltes \\(n\\):</strong>
        \\[ \\theta = \\omega_0 \\cdot t + \\frac{1}{2} \\alpha \\cdot t^2 = 15708 \\text{ rad} \\]
        \\[ n = \\frac{15708}{2\\pi} = 2500 \\text{ voltes} \\]
        <strong>c) Energia dissipada \\(E_{\\text{diss}}\\):</strong>
        \\[ E_{\\text{diss}} = \\frac{1}{2} I \\omega_0^2 = \\frac{1}{2} \\cdot 0,9 \\cdot 523,6^2 = 123414 \\text{ J} \\]`
    }
];
