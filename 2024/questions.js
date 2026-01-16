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
            <div class="step-block">
                <span class="step-header">A) Energia inicial (E1)</span>
                \\[ E_1 = m \\cdot g \\cdot h_1 = 22 \\cdot 9,81 \\cdot 1 = 215,8 \\text{ J} \\]
            </div>
            <div class="step-block">
                <span class="step-header">B) Energia final (E2)</span>
                \\[ E_2 = m \\cdot g \\cdot h_2 = 22 \\cdot 9,81 \\cdot 0,25 = 53,95 \\text{ J} \\]
            </div>
            <div class="step-block">
                <span class="step-header">C) Energia absorbida (ΔE)</span>
                \\[ \\Delta E = E_1 - E_2 = 215,8 - 53,95 = 161,85 \\text{ J} \\]
            </div>`
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
            <div class="step-block">
                <span class="step-header">Càlcul de la Tolerància</span>
                \\[ \\text{Tol} = \\frac{V_{\\text{màx}} - V_{\\text{nom}}}{V_{\\text{nom}}} \\cdot 100 = \\frac{397,8 - 390}{390} \\cdot 100 = 2 \\% \\]
            </div>`
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
            <div class="step-block">
                <span class="step-header">A) Distància recorreguda</span>
                \\[ d = \\frac{60 \\text{ L}}{5,6 \\text{ L}/100 \\text{ km}} = 1071,43 \\text{ km} \\]
            </div>
            <div class="step-block">
                <span class="step-header">B) Emissions totals</span>
                \\[ m = 1071,43 \\text{ km} \\cdot 157,8 \\text{ g/km} = 169071,6 \\text{ g} \\approx 169,1 \\text{ kg} \\]
            </div>`
    },
    {
        type: "questions",
        category: "electrics",
        text: "Amb quines unitats es pot expressar la potència elèctrica consumida en un instant determinat en una llar segons el Sistema Internacional o derivats acceptats?",
        options: [
            { text: "kW/h", value: "a" },
            { text: "kW · h", value: "b" },
            { text: "kW", value: "c" },
            { text: "kJ · s", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            <div class="step-block">
                <span class="step-header">Explicació</span>
                <p>La potència és l'energia per unitat de temps ($P = E/t$). La unitat SI és el <b>Watt (W)</b>. En l'àmbit domèstic s'accepta el <b>quilowatt (kW)</b>.</p>
            </div>`
    },
    {
        type: "questions",
        category: "maquines",
        text: "Un tren d'engranatges està format per dos eixos paral·lels amb les següents característiques: \\(z_1 = 14\\), \\(z_2 = 48\\), \\(z_3 = 16\\) i \\(z_4 = 25\\). Determineu la relació de transmissió total del sistema expressada com \\(\\tau = \\omega_{\\text{sortida}}/\\omega_{\\text{entrada}}\\).",
        images: '<div style="text-align:center;"><img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2q5.png" alt="Tren d\'engranatges" style="max-width:200px;"></div>',
        options: [
            { text: "0,186 7", value: "a" },
            { text: "5,357", value: "b" },
            { text: "0,291 7", value: "c" },
            { text: "0,411 0", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            <div class="step-block">
                <span class="step-header">Càlcul de la relació de transmissió (τ)</span>
                \\[ \\tau = \\frac{z_1 \\cdot z_3}{z_2 \\cdot z_4} = \\frac{14 \\cdot 16}{48 \\cdot 25} = \\frac{224}{1200} = 0,1867 \\]
            </div>`
    },
    {
        type: "questions",
        category: "materials",
        text: "La resistència a la tracció d’un aliatge de titani és de \\(325 \\text{ MPa}\\). Si es vol utilitzar una barra cilíndrica d’aquest material per a aguantar una força de tracció de \\(20 \\text{ kN}\\), quin diàmetre mínim ha de tenir la barra perquè no es trenqui?",
        options: [
            { text: "6,154 mm", value: "a" },
            { text: "14,38 mm", value: "b" },
            { text: "8,852 mm", value: "c" },
            { text: "6,259 mm", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            <div class="step-block">
                <span class="step-header">Càlcul del diàmetre mínim</span>
                \\[ S = \\frac{F}{\\sigma} = \\frac{20000}{325 \\cdot 10^6} = 6,1538 \\cdot 10^{-5} \\text{ m}^2 \\]
                \\[ d = \\sqrt{\\frac{4 \\cdot S}{\\pi}} = \\sqrt{\\frac{4 \\cdot 6,1538 \\cdot 10^{-5}}{\\pi}} = 0,008852 \\text{ m} = 8,852 \\text{ mm} \\]
            </div>`
    },
    {
        type: "questions",
        category: "fabricacio",
        text: "Si es té un ajust \\(90 \\text{ H7/k6}\\), la tolerància \\(H7\\) del forat és de \\(\\binom{+35}{0} \\, \\mu\\text{m}\\) i la tolerància \\(k6\\) de l'eix és de \\(\\binom{+25}{+3} \\, \\mu\\text{m}\\), es pot afirmar que:",
        options: [
            { text: "El joc màxim és de 35 μm", value: "a" },
            { text: "El joc màxim és de 32 μm", value: "b" },
            { text: "El serratge màxim és de 3 μm", value: "c" },
            { text: "El serratge màxim és de 32 μm", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            <div class="step-block">
                <span class="step-header">Anàlisi de l'ajust</span>
                <p>Forat: Dmàx = 90,035; Dmín = 90,000</p>
                <p>Eix: dmàx = 90,025; dmín = 90,003</p>
                \\[ \\text{Joc màxim} = D_{\\text{màx}} - d_{\\text{mín}} = 90,035 - 90,003 = 0,032 \\text{ mm} = 32 \\, \\mu\\text{m} \\]
            </div>`
    },
    {
        type: "questions",
        category: "energia",
        text: "Un complex poliesportiu té un consum tèrmic de \\(382,8 \\text{ MWh}\\) anuals. Es decideix fer una instaŀlació solar tèrmica que produeix \\(79 \\text{ MWh/any}\\). Si el gas natural té un factor d'emissió de \\(2,15 \\text{ kg CO}_2/\\text{m}^3\\) i un PC de \\(11,79 \\text{ kWh/m}^3\\), quin és l'estalvi d'emissions anual?",
        options: [
            { text: "14,41 tones de CO2", value: "a" },
            { text: "69,81 tones de CO2", value: "b" },
            { text: "55,40 tones de CO2", value: "c" },
            { text: "20,03 tones de CO2", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            <div class="step-block">
                <span class="step-header">Càlcul d'estalvi</span>
                \\[ V = \\frac{79000 \\text{ kWh}}{11,79 \\text{ kWh/m}^3} = 6700,59 \\text{ m}^3 \\]
                \\[ \\text{Estalvi} = V \\cdot 2,15 = 14406,27 \\text{ kg} \\approx 14,41 \\text{ t} \\]
            </div>`
    },
    {
        type: "questions",
        category: "maquines",
        text: "Un sòlid de massa \\(m = 5 kg\\) està unit a una politja mòbil. Una corda ideal passa per una politja fixa al sostre i després per la politja mòbil fins a l'eix de la fixa. Quina força \\(F\\) cal aplicar per mantenir el conjunt en repòs?",
        images: '<div style="text-align:center; margin:10px 0;"><img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2p9.png" style="max-width:150px;"></div>',
        options: [
            { text: "49,04 N", value: "a" },
            { text: "12,25 N", value: "b" },
            { text: "6,129 N", value: "c" },
            { text: "24,52 N", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            <div class="step-block">
                <span class="step-header">Equilibri de forces</span>
                \\[ P = m \\cdot g = 5 \\cdot 9,81 = 49,05 \\text{ N} \\]
                \\[ F = \\frac{P}{2} = \\frac{49,05}{2} = 24,52 \\text{ N} \\]
            </div>`
    },
    {
        type: "questions",
        category: "termodinamica",
        text: "S'utilitzen \\(500 \\text{ g}\\) de carbó (\\(PC = 23,6 \\text{ MJ/kg}\\)) per a escalfar \\(100 \\text{ L}\\) d'aigua. Quin increment de temperatura es produirà? (\\(c_e = 4,18 \\text{ J/(g } ^\\circ\\text{C)}\\))",
        options: [
            { text: "28,23 °C", value: "a" },
            { text: "2,823 °C", value: "b" },
            { text: "282,3 °C", value: "c" },
            { text: "49,32 °C", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            <div class="step-block">
                <span class="step-header">Càlcul tèrmic</span>
                \\[ Q = m \\cdot PC = 0,5 \\text{ kg} \\cdot 23,6 \\cdot 10^6 \\text{ J/kg} = 11,8 \\cdot 10^6 \\text{ J} \\]
                \\[ \\Delta T = \\frac{Q}{m_{aigua} \\cdot c_e} = \\frac{11,8 \\cdot 10^6}{100000 \\cdot 4,18} = 28,23 \\, ^\\circ\\text{C} \\]
            </div>`
    },
    {
        type: "exercicis",
        category: "control",
        text: `El controlador d’un motor d’ascensor necessita un senyal que determini en quin sentit ha de posar-se en marxa l’ascensor (per a pujar o baixar). El sistema té com a entrades 4 variables digitals (a, b, c, d) per a codificar la planta on es troba l’ascensor i la planta on vol anar l’usuari. Determineu:
        <br><br><strong>a)</strong> Elaboreu la taula de veritat del sistema. [1 punt]
        <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la per Karnaugh. [1 punt]
        <br><strong>c)</strong> Dibuixeu el diagrama de portes lògiques equivalent. [0,5 punts]`,
        correctAnswer: "",
        steps: `
            <div class="step-block">
                <span class="step-header">A) Taula de Veritat</span>
                <div style="text-align:center;"><img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r1a.png" alt="Taula" style="max-width:250px;"></div>
            </div>
            <div class="step-block">
                <span class="step-header">B) Funció simplificada (Karnaugh)</span>
                <div style="text-align:center;"><img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r1b.png" alt="Karnaugh" style="max-width:250px;"></div>
            </div>
            <div class="step-block">
                <span class="step-header">C) Esquema de portes</span>
                <div style="text-align:center;"><img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r1c.png" alt="Portes" style="max-width:250px;"></div>
            </div>`
    },
    {
        type: "exercicis",
        category: "energia",
        text: `El cicle de funcionament d’una rentadora es divideix en: rentada (30 min, 2000 W), esbandida i centrifugació (60 min, 250 W). La rentadora es connecta a U = 230 V. S’usa el programa 10 vegades al mes amb la tarifa següent:
        <div style="text-align:center; margin:15px 0;">
            <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2p2.png" alt="Tarifes" style="max-width:100%; border-radius:4px;">
        </div>
        Determineu:
        <br><strong>a)</strong> L’energia consumida en un cicle E_cons. [0,5 p]
        <br><strong>b)</strong> El percentatge d’energia en la fase de rentada c_r. [0,5 p]
        <br><strong>c)</strong> El cost en hores punta c_punta i vall c_vall per cicle. [1 p]
        <br><strong>d)</strong> L’estalvi anual e_a si s'usa sempre en hores vall. [0,5 p]`,
        correctAnswer: "",
        steps: `
            <div class="step-block">
                <span class="step-header">A) Energia total cicle</span>
                \\[ E_{\\text{cons}} = (2000 \\cdot 0,5) + (250 \\cdot 1) = 1250 \\text{ Wh} = 1,25 \\text{ kWh} \\]
            </div>
            <div class="step-block">
                <span class="step-header">B) % Energia rentada</span>
                \\[ c_r = \\frac{1000 \\text{ Wh}}{1250 \\text{ Wh}} \\cdot 100 = 80 \\% \\]
            </div>
            <div class="step-block">
                <span class="step-header">C) Costos</span>
                \\[ c_{\\text{punta}} = 1,25 \\cdot 0,342930 = 0,4287 \\text{ €} \\]
                \\[ c_{\\text{vall}} = 1,25 \\cdot 0,216951 = 0,2712 \\text{ €} \\]
            </div>
            <div class="step-block">
                <span class="step-header">D) Estalvi anual</span>
                \\[ \\text{Estalvi mensual} = (0,4287 - 0,2712) \\cdot 10 = 1,575 \\text{ €} \\]
                \\[ e_a = 1,575 \\cdot 12 = 18,90 \\text{ €} \\]
            </div>`
    },
    {
        type: "exercicis",
        category: "maquines",
        text: `Un volant d'inèrcia I = 0,9 kg·m² gira a n0 = 5000 min⁻¹. Es desconnecta el motor i triga t = 1 min a aturar-se. Determineu:
        <br><strong>a)</strong> L’acceleració angular del volant α. [0,5 p]
        <br><strong>b)</strong> El nombre de voltes n abans d’aturar-se. [1 p]
        <br><strong>c)</strong> L’energia mecànica dissipada E_diss. [1 p]`,
        correctAnswer: "",
        steps: `
            <div class="step-block">
                <span class="step-header">A) Acceleració angular</span>
                \\[ \\omega_0 = 5000 \\cdot \\frac{2\\pi}{60} = 523,6 \\text{ rad/s} \\]
                \\[ \\alpha = \\frac{0 - 523,6}{60} = -8,727 \\text{ rad/s}^2 \\]
            </div>
            <div class="step-block">
                <span class="step-header">B) Voltes</span>
                \\[ \\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2 = 523,6 \\cdot 60 + 0,5(-8,727)60^2 = 15708 \\text{ rad} \\]
                \\[ n = \\frac{15708}{2\\pi} = 2500 \\text{ voltes} \\]
            </div>
            <div class="step-block">
                <span class="step-header">C) Energia dissipada</span>
                \\[ E_{\\text{diss}} = \\frac{1}{2} I \\omega_0^2 = 0,5 \\cdot 0,9 \\cdot 523,6^2 = 123,4 \\text{ kJ} \\]
            </div>`
    },
    {
        type: "exercicis",
        category: "maquines",
        text: `El sistema permet manipular una barra de 2L mitjançant un motor i un tambor (d = 450 mm). La barra té m = 50 kg i α = φ = 30°.
        <div style="text-align:center; margin:15px 0;">
            <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2p4.png" alt="Barra" style="max-width:100%;">
        </div>
        Determineu:
        <br><strong>a)</strong> Diagrama de cos lliure. [0,5 p]
        <br><strong>b)</strong> Força T del cable. [0,5 p]
        <br><strong>c)</strong> Forces Fv i Fh a l'articulació O. [1 p]
        <br><strong>d)</strong> Parell Γ del motor. [0,5 p]`,
        correctAnswer: "",
        steps: `
            <div class="step-block">
                <span class="step-header">A) Diagrama</span>
                <div style="text-align:center;"><img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r4.png" style="max-width:200px;"></div>
            </div>
            <div class="step-block">
                <span class="step-header">B) Força T</span>
                \\[ \\sum M(O) = 0 \\rightarrow T \\cos 30 \\cdot 2L = mg \\cos 30 \\cdot L \\rightarrow T = \\frac{50 \\cdot 9,81}{2} = 245,2 \\text{ N} \\]
            </div>
            <div class="step-block">
                <span class="step-header">C) Forces articulació</span>
                \\[ F_H = T \\cos 30 = 212,3 \\text{ N} \\]
                \\[ F_V = mg - T \\sin 30 = (50 \\cdot 9,81) - (245,2 \\cdot 0,5) = 367,8 \\text{ N} \\]
            </div>
            <div class="step-block">
                <span class="step-header">D) Parell motor</span>
                \\[ \\Gamma = T \\cdot r = 245,2 \\cdot 0,225 = 55,16 \\text{ Nm} \\]
            </div>`
    },
    {
        type: "exercicis",
        category: "electrics",
        text: `Circuit amb R1=R2=R3=20Ω en sèrie, i R4=100Ω en paral·lel. U = 230 V. Determineu:
        <br><strong>a)</strong> Esquema elèctric. [0,5 p]
        <br><strong>b)</strong> Resistència equivalent Req. [1 p]
        <br><strong>c)</strong> Intensitat I i Potència P. [1 p]`,
        correctAnswer: "",
        steps: `
            <div class="step-block">
                <span class="step-header">A) Esquema</span>
                <div style="text-align:center;"><img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r5.png" style="max-width:200px;"></div>
            </div>
            <div class="step-block">
                <span class="step-header">B) Resistència equivalent</span>
                \\[ R_{sèrie} = 20+20+20 = 60 \\, \\Omega \\]
                \\[ R_{eq} = \\frac{60 \\cdot 100}{60 + 100} = 37,5 \\, \\Omega \\]
            </div>
            <div class="step-block">
                <span class="step-header">C) I i P</span>
                \\[ I = \\frac{230}{37,5} = 6,133 \\text{ A}, \\quad P = 230 \\cdot 6,133 = 1410,7 \\text{ W} \\]
            </div>`
    },
    {
        type: "exercicis",
        category: "control",
        text: `Un circuit de quatre entrades (a, b, c, d) encén un led si el número (0-15) és 0 o múltiple de 4. 
        <br><strong>a)</strong> Taula de veritat. 
        <br><strong>b)</strong> Funció simplificada. 
        <br><strong>c)</strong> Esquema de contactes.`,
        correctAnswer: "",
        steps: `
            <div class="step-block">
                <span class="step-header">A) Taula</span>
                <div style="text-align:center;"><img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s5r6a.png" style="max-width:200px;"></div>
            </div>
            <div class="step-block">
                <span class="step-header">B) Funció</span>
                \\[ l = \\bar{a}\\bar{b}\\bar{c}\\bar{d} + \\bar{a}b\\bar{c}\\bar{d} + a\\bar{b}\\bar{c}\\bar{d} + ab\\bar{c}\\bar{d} = \\bar{c}\\bar{d} \\]
            </div>
            <div class="step-block">
                <span class="step-header">C) Contactes</span>
                <div style="text-align:center;"><img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s5r6c.png" style="max-width:200px;"></div>
            </div>`
    },
    {
        type: "exercicis",
        category: "energia",
        text: `Trajecte: 120 km extraurbà i 10 km urbà (280 dies/any). Comparativa elèctric vs gasoil.
        <div style="text-align:center; margin:15px 0;"><img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s5p7.png" style="max-width:100%;"></div>
        Determineu: emissions diàries, cost diari i anys per recuperar inversió.`,
        correctAnswer: "",
        steps: `
            <div class="step-block">
                <span class="step-header">A) Emissions</span>
                \\[ m_{elèctr} = 130 \\text{ km} \\cdot 0,133 \\text{ kWh/km} \\cdot 241 \\text{ g/kWh} = 4,167 \\text{ kg} \\]
                \\[ m_{gas} = (4,32+0,44) \\text{ L} \\cdot 2,87 \\text{ kg/L} = 13,66 \\text{ kg} \\]
            </div>
            <div class="step-block">
                <span class="step-header">B) Costos</span>
                \\[ cd_{elèctr} = 17,29 \\cdot 0,14 = 2,42 \\text{ €}, \\quad cd_{gas} = 4,76 \\cdot 1,209 = 5,75 \\text{ €} \\]
            </div>
            <div class="step-block">
                <span class="step-header">C) Amortització</span>
                \\[ \\text{Estalvi any} = (5,75-2,42) \\cdot 280 = 932,4 \\text{ €} \\]
                \\[ t = \\frac{25700-18000}{932,4} = 8,26 \\text{ anys} \\]
            </div>`
    },
    {
        type: "exercicis",
        category: "termodinamica",
        text: `Escalfar 350 mL d'aigua de 20°C a 95°C. Alternatives: escalfador (1200 W, 125 s) o vitro (0,11 kWh).
        Determineu energia, resistència i rendiments.`,
        correctAnswer: "",
        steps: `
            <div class="step-block">
                <span class="step-header">A) Energia teòrica</span>
                \\[ E_a = 0,35 \\cdot 4180 \\cdot (95-20) = 109,7 \\text{ kJ} \\]
            </div>
            <div class="step-block">
                <span class="step-header">B) Resistència i Consum</span>
                \\[ R = \\frac{230^2}{1200} = 44,1 \\, \\Omega, \\quad E_{cons} = 1,2 \\cdot 125 = 150 \\text{ kJ} \\]
            </div>
            <div class="step-block">
                <span class="step-header">C) Rendiments</span>
                \\[ \\eta_{esc} = \\frac{109,7}{150} = 73,1 \\%, \\quad \\eta_{vitro} = \\frac{109,7}{0,11 \\cdot 3600} = 27,7 \\% \\]
            </div>`
    }
];
