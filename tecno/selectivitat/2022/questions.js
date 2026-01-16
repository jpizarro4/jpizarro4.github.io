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
                \\[ E_1 = m \\cdot g \\cdot h_1 = 22 \\cdot 9,8 \\cdot 1 = 215,6 \\text{ J} \\]
            </div>
            <div class="step-block">
                <span class="step-header">B) Energia final (E2)</span>
                \\[ E_2 = m \\cdot g \\cdot h_2 = 22 \\cdot 9,8 \\cdot 0,25 = 53,9 \\text{ J} \\]
            </div>
            <div class="step-block">
                <span class="step-header">C) Energia absorbida (ΔE)</span>
                \\[ \\Delta E = E_1 - E_2 = 215,6 - 53,9 = 161,7 \\text{ J} \\]
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
                La potència es defineix com l'energia per unitat de temps. En el cas elèctric, la unitat és el <b>Watt (W)</b> o el <b>quilowatt (kW)</b>. El kW·h és unitat d'energia, no de potència.
            </div>`
    },
    {
        type: "questions",
        category: "maquines",
        text: "Un tren d'engranatges està format per dos eixos paral·lels amb les següents característiques: \\(z_1 = 14\\), \\(z_2 = 48\\), \\(z_3 = 16\\) i \\(z_4 = 25\\). Determineu la relació de transmissió total del sistema expressada com \\(\\tau = \\omega_{\\text{sortida}}/\\omega_{\\text{entrada}}\\).",
        images: '<img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2q5.png" alt="Tren d\'engranatges">',
        options: [
            { text: "0,186 7", value: "a" },
            { text: "5,357", value: "b" },
            { text: "0,291 7", value: "c" },
            { text: "0,411 0", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            <div class="step-block">
                <span class="step-header">Càlcul de τ</span>
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
                \\[ \\sigma = \\frac{F}{S} \\rightarrow S = \\frac{F}{\\sigma} = \\frac{20000 \\text{ N}}{325 \\cdot 10^6 \\text{ Pa}} = 6,1538 \\cdot 10^{-5} \\text{ m}^2 \\]
                \\[ S = \\frac{\\pi \\cdot d^2}{4} \\rightarrow d = \\sqrt{\\frac{4 \\cdot S}{\\pi}} = \\sqrt{\\frac{4 \\cdot 6,1538 \\cdot 10^{-5}}{\\pi}} = 0,008852 \\text{ m} = 8,852 \\text{ mm} \\]
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
                <p>Forat (H7): màx = 90,035 mm; mín = 90,000 mm</p>
                <p>Eix (k6): màx = 90,025 mm; mín = 90,003 mm</p>
                \\[ \\text{Joc màxim} = D_{\\text{max}} - d_{\\text{min}} = 90,035 - 90,003 = 32 \\, \\mu\\text{m} \\]
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
                <span class="step-header">Càlcul d'emissions estalviades</span>
                \\[ V = \\frac{79000 \\text{ kWh}}{11,79 \\text{ kWh/m}^3} = 6700,59 \\text{ m}^3 \\]
                \\[ \\text{Estalvi} = V \\cdot 2,15 = 14406,27 \\text{ kg} \\approx 14,41 \\text{ t} \\]
            </div>`
    },
    {
        type: "questions",
        category: "maquines",
        text: "Un sòlid de massa \\(m = 5 kg\\) està unit a una politja mòbil. Una corda ideal passa per una politja fixa al sostre i després per la politja mòbil fins a l'eix de la fixa. Quina força \\(F\\) cal aplicar per mantenir el conjunt en repòs?",
        images: '<div style="text-align:center; margin:10px 0;"><img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2q9.png" style="max-width:150px;"></div>',
        options: [
            { text: "49,04 N", value: "a" },
            { text: "12,25 N", value: "b" },
            { text: "6,129 N", value: "c" },
            { text: "24,52 N", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            <div class="step-block">
                <span class="step-header">Equilibri de politges</span>
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
                \\[ Q = 0,5 \\text{ kg} \\cdot 23,6 \\cdot 10^6 \\text{ J/kg} = 11,8 \\cdot 10^6 \\text{ J} \\]
                \\[ \\Delta T = \\frac{11,8 \\cdot 10^6}{100000 \\text{ g} \\cdot 4,18} = 28,23 \\, ^\\circ\\text{C} \\]
            </div>`
    },
    {
        type: "exercicis",
        category: "control",
        text: `El controlador d’un motor d’ascensor necessita un senyal que determini en quin sentit ha de posar-se en marxa l’ascensor (per a pujar o baixar). El sistema té com a entrades 4 variables digitals \\((a, b, c, d)\\) per a codificar la planta on es troba l’ascensor i la planta on vol anar l’usuari. Utilitzant les variables d’estat descrites, dissenyeu el sistema digital:
        <br><br><strong>a)</strong> Elaboreu la taula de veritat del sistema. [1 punt]
        <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la per Karnaugh. [1 punt]
        <br><strong>c)</strong> Dibuixeu el diagrama de portes lògiques equivalent. [0,5 punts]`,
        correctAnswer: "",
        steps: `
            <div class="step-block">
                <span class="step-header">A) Taula de Veritat</span>
                <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r1a.png" alt="Taula de veritat">
            </div>
            <div class="step-block">
                <span class="step-header">B) Funció simplificada</span>
                <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r1b.png" alt="Simplificació Karnaugh">
            </div>
            <div class="step-block">
                <span class="step-header">C) Esquema de portes</span>
                <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r1c.png" alt="Diagrama de portes">
            </div>`
    },
    {
        type: "exercicis",
        category: "energia",
        text: `El cicle de funcionament d’una rentadora es pot dividir bàsicament en tres fases: rentada, esbandida i centrifugació. La primera fase concentra el percentatge de consum energètic més elevat perquè escalfa l’aigua mitjançant una resistència. En un programa estàndard de \\(t = 1,5 \\text{ h}\\) de durada, en els primers 30 min (fase de rentada) la potència mitjana consumida és \\(P_1 = 2000 \\text{ W}\\), mentre que les fases d’esbandida i centrifugació consumeixen, de mitjana, \\(P_2 = 250 \\text{ W}\\). La rentadora es connecta a la xarxa a una tensió \\(U = 230 \\text{ V}\\).
        <br><br>S’ha contractat una tarifa amb discriminació horària que determina el preu del \\(kW \\cdot h\\) segons la franja horària:
        <div style="text-align:center; margin:15px 0;">
            <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2p2.png" alt="Taula tarifes elèctriques" style="max-width:100%; border-radius:4px;">
        </div>
        Es considera que s’utilitza el programa estàndard \\(n = 10\\) vegades al mes. Determineu:
        <br><br><strong>a)</strong> L’energia consumida en un cicle \\(E_{\\text{cons}}\\). [0,5 p]
        <br><strong>b)</strong> El percentatge d’energia en la fase de rentada \\(c_r\\). [0,5 p]
        <br><strong>c)</strong> El cost en hores punta \\(c_{\\text{punta}}\\) i vall \\(c_{\\text{vall}}\\). [1 p]
        <br><strong>d)</strong> L’estalvi anual \\(e_a\\) si s'usa sempre en hores vall en lloc de punta. [0,5 p]`,
        correctAnswer: "",
        steps: `
            <div class="step-block">
                <span class="step-header">A) Energia consumida en un cicle</span>
                \\[ t_1 = 0,5 \\text{ h}, \\quad t_2 = 1 \\text{ h} \\]
                \\[ E_{\\text{cons}} = P_1 \\cdot t_1 + P_2 \\cdot t_2 = 2000 \\cdot 0,5 + 250 \\cdot 1 = 1250 \\text{ Wh} = 1,25 \\text{ kWh} \\]
            </div>
            <div class="step-block">
                <span class="step-header">B) % Energia fase rentada</span>
                \\[ E_{\\text{rentada}} = 2000 \\cdot 0,5 = 1000 \\text{ Wh} \\]
                \\[ c_r = \\frac{E_{\\text{rentada}}}{E_{\\text{cons}}} \\cdot 100 = \\frac{1000}{1250} \\cdot 100 = 80 \\% \\]
            </div>
            <div class="step-block">
                <span class="step-header">C) Costos per rentada</span>
                \\[ c_{\\text{punta}} = 1,25 \\text{ kWh} \\cdot 0,342930 \\text{ €/kWh} = 0,4287 \\text{ €} \\]
                \\[ c_{\\text{vall}} = 1,25 \\text{ kWh} \\cdot 0,216951 \\text{ €/kWh} = 0,2712 \\text{ €} \\]
            </div>
            <div class="step-block">
                <span class="step-header">D) Estalvi anual</span>
                \\[ \\text{Estalvi mensual} = (0,4287 - 0,2712) \\cdot 10 = 1,575 \\text{ €/mes} \\]
                \\[ e_a = 1,575 \\cdot 12 = 18,90 \\text{ €} \\]
            </div>`
    },
    {
        type: "exercicis",
        category: "maquines",
        text: `Un volant amb un moment d’inèrcia \\(I = 0,9 \\text{ kg} \\cdot \\text{m}^2\\) gira a \\(n_0 = 5000 \\text{ min}^{-1}\\). Es desconnecta el motor i triga \\(t = 1 \\text{ min}\\) a aturar-se per fricció constant. Determineu:
        <br><br><strong>a)</strong> L’acceleració angular del volant \\(\\alpha\\). [0,5 p]
        <br><strong>b)</strong> El nombre de voltes \\(n\\) abans d’aturar-se. [1 p]
        <br><strong>c)</strong> L’energia mecànica dissipada \\(E_{\\text{diss}}\\). [1 p]`,
        correctAnswer: "",
        steps: `
            <div class="step-block">
                <span class="step-header">A) Acceleració angular</span>
                \\[ \\omega_0 = 5000 \\cdot \\frac{2\\pi}{60} = 523,6 \\text{ rad/s} \\]
                \\[ \\alpha = \\frac{0 - 523,6}{60} = -8,727 \\text{ rad/s}^2 \\]
            </div>
            <div class="step-block">
                <span class="step-header">B) Voltes totals</span>
                \\[ \\theta = 523,6 \\cdot 60 + 0,5(-8,727)60^2 = 15708 \\text{ rad} \\]
                \\[ n = \\frac{15708}{2\\pi} = 2500 \\text{ voltes} \\]
            </div>
            <div class="step-block">
                <span class="step-header">C) Energia dissipada</span>
                \\[ E_{\\text{diss}} = \\frac{1}{2} I \\omega_0^2 = 0,5 \\cdot 0,9 \\cdot 523,6^2 = 123414 \\text{ J} \\approx 123,4 \\text{ kJ} \\]
            </div>`
    },
    {
        type: "exercicis",
        category: "maquines",
        text: `El sistema de la figura permet manipular una barra de longitud \\(2L\\) mitjançant un motor que s’uneix a un tambor de diàmetre \\(d = 450 \\text{ mm}\\) on s’enrotlla el cable. La barra, que és homogènia i té una massa \\(m = 50 \\text{ kg}\\), es troba articulada al punt \\(O\\), el qual està fixat a terra. La resta d’elements són de massa negligible. En la posició mostrada en la figura, el sistema està en equilibri estàtic i \\(\\alpha = \\varphi = 30^\\circ\\).
        <div style="text-align:center; margin:15px 0;">
            <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2p4.png" alt="Sistema de barra i tambor" style="max-width:100%; border-radius:4px;">
        </div>
        Determineu:
        <br><br><strong>a)</strong> El diagrama de cos lliure de la barra OA. [0,5 p]
        <br><strong>b)</strong> La força \\(T\\) a la qual està sotmès el cable. [0,5 p]
        <br><strong>c)</strong> Les forces vertical \\(F_V\\) i horitzontal \\(F_H\\) a l’articulació O. [1 p]
        <br><strong>d)</strong> El parell \\(\\Gamma\\) que subministra el motor. [0,5 p]`,
        correctAnswer: "",
        steps: `
            <div class="step-block"> 
                <span class="step-header">A) Diagrama de cos lliure </span>
                <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r4.png" alt="Diagrama" style="max-width:100%; border-radius:4px;">
            </div>
            <div class="step-block">
                <span class="step-header">B) Força T al cable</span>
                \\[ \\sum M(O) = 0 \\rightarrow T \\cos(30^\\circ) \\cdot 2L - m \\cdot g \\cos(30^\\circ) \\cdot L = 0 \\]
                \\[ T = \\frac{m \\cdot g}{2} = \\frac{50 \\cdot 9,81}{2} = 245,2 \\text{ N} \\]
            </div>
            <div class="step-block">
                <span class="step-header">C) Forces a l'articulació O</span>
                \\[ \\sum F_{\\text{horitzontals}} = 0 \\rightarrow T \\cos(30^\\circ) - F_H = 0 \\]
                \\[ F_H = T \\frac{\\sqrt{3}}{2} = 212,3 \\text{ N} \\]
                \\[ \\sum F_{\\text{verticals}} = 0 \\rightarrow T \\sin(30^\\circ) - m \\cdot g + F_V = 0 \\]
                \\[ F_V = \\frac{3 \\cdot m \\cdot g}{4} = 367,8 \\text{ N} \\]
            </div>
            <div class="step-block">
                <span class="step-header">D) Parell Γ del motor</span>
                \\[ \\Gamma = T \\cdot \\frac{d}{2} = 245,2 \\cdot \\frac{0,45}{2} = 55,16 \\text{ Nm} \\]
            </div>`
    },
    {
        type: "exercicis",
        category: "electrics",
        text: `Un circuit elèctric està format per quatre resistències. Les tres primeres, de valor \\(R_1 = R_2 = R_3 = 20 \\, \\Omega\\), estan connectades en sèrie, i la quarta, de valor \\(R_4 = 100 \\, \\Omega\\), es connecta en paraŀlel al conjunt anterior. El circuit s’alimenta entre els extrems de \\(R_4\\) a una tensió sinusoidal \\(U = 230 \\text{ V}\\).
        <br><br>Determineu:
        <br><strong>a)</strong> Dibuixeu l’esquema elèctric del circuit. [0,5 p]
        <br><strong>b)</strong> El valor de la resistència equivalent total \\(R_{eq}\\). [1 p]
        <br><strong>c)</strong> Els valors de la intensitat \\(I\\) i la potència \\(P\\) consumides pel circuit elèctric. [1 p]`,
        correctAnswer: "",
        steps: `
            <div class="step-block">
                <span class="step-header">A) Esquema elèctric</span> 
                <p><img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r5.png" alt="Diagrama" style="max-width:100%; border-radius:4px;"></p>
                
            </div>
            <div class="step-block">
                <span class="step-header">B) Resistència equivalent (Req)</span>
                <p>Primer sumem les tres resistències en sèrie (branca 1):</p>
                \\[ R_{123} = R_1 + R_2 + R_3 = 20 + 20 + 20 = 60 \\, \\Omega \\]
                <p>Ara calculem el paraŀlel de \\(R_{123}\\) amb \\(R_4\\):</p>
                \\[ R_{eq} = \\frac{R_{123} \\cdot R_4}{R_{123} + R_4} = \\frac{60 \\cdot 100}{60 + 100} = \\frac{6000}{160} = 37,5 \\, \\Omega \\]
            </div>
            <div class="step-block">
                <span class="step-header">C) Intensitat i Potència</span>
                <p>Apliquem la Llei d'Ohm per a la intensitat total:</p>
                \\[ I = \\frac{U}{R_{eq}} = \\frac{230}{37,5} = 6,133 \\text{ A} \\]
                <p>Calculem la potència activa consumida:</p>
                \\[ P = U \\cdot I = 230 \\cdot 6,133 = 1410,67 \\text{ W} \\approx 1,41 \\text{ kW} \\]
            </div>`
    },
    {
    type: "exercicis",
    category: "control",
    text: `Un circuit combinacional de quatre entrades rep números del 0 al 15 expressats en base 2 (en sistema binari). La sortida encén un led quan el número és 0 o un múltiple de 4. Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents:
    <br>primer dígit (el de més a l’esquerra): a = { 1, 0 };
    <br>segon dígit: b = { 1, 0 }; tercer dígit: c = { 1, 0 }; quart dígit: d = { 1, 0 };
    <br>led: l = { 1: actiu, 0: no actiu }.
    <br><br><strong>a)</strong> Escriviu la taula de veritat del sistema. [1 punt]
    <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
    <br><strong>c)</strong> Dibuixeu l’esquema de contactes equivalent. [0,5 punts]`,
    correctAnswer: "",
    steps: `
        <div class="step-block">
            <span class="step-header">A) Taula de Veritat</span> 
            <p>Els números que fan que el LED s'encengui (l=1) són aquells que en binari acaben en "00" (els múltiples de 4 i el 0):</p>
            <div style="text-align:center; margin-bottom: 10px;">
                <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s5r6a.png" alt="Taula de veritat" style="max-width:220px; border: 1px solid #ddd; padding: 5px;">
            </div>
        </div>
        <div class="step-block">
            <span class="step-header">B) Funció lògica i simplificació</span>
            <p>A partir de la taula de veritat, la funció com a suma de productes (mintermis) és:</p>
            \\[ l = \\bar{a} \\bar{b} \\bar{c} \\bar{d} + \\bar{a} b \\bar{c} \\bar{d} + a \\bar{b} \\bar{c} \\bar{d} + a b \\bar{c} \\bar{d} \\]
            <p>simplificant:</p>
            \\[ l = \\bar{c} \\bar{d} \\]
        </div>
        <div class="step-block">
            <span class="step-header">C) Esquema de contactes</span>
            <p>La funció producte de dues variables negades es representa amb dos contactes <b>normalment tancats</b> connectats en <b>sèrie</b>:</p>
            <div style="text-align:center; margin: 15px 0;">
                <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s5r6c.png" alt="Esquema ladder c i d en sèrie" style="max-width:220px; border: 1px solid #ddd; padding: 5px;">
            </div>
        </div>`
},
{
    type: "exercicis",
    category: "energia",
    text: `Una persona, per motius de feina, fa un trajecte diari per carretera d_extraurbà = 120 km i per vies urbanes d_urbà = 10 km. El recorregut el fa 280 dies l’any. Aquesta persona es planteja l’opció d’adquirir un cotxe elèctric o un de gasoil. Les característiques dels possibles vehicles es resumeixen en la taula següent:
    <div style="text-align:center; margin: 15px 0;">
        <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s5p7.png" alt="Taula característiques vehicles" style="max-width:100%; border: 1px solid #ccc;">
    </div>
    <strong>a)</strong> Les emissions diàries equivalents de CO2 que es produirien amb cada vehicle m_elèctr i m_gas. [1 punt]
    <br><strong>b)</strong> El cost diari associat al consum d’energia de cada vehicle cd_elèctr i cd_gas. [0,5 punts]
    <br><strong>c)</strong> Si la persona decideix adquirir el vehicle elèctric, i considerant que el cost anual de manteniment dels dos vehicles és el mateix, quants anys t tardarà a recuperar el sobrecost d’adquisició? [1 punt]`,
    correctAnswer: "",
    steps: `
        <div class="step-block">
            <span class="step-header">A) Emissions diàries (m)</span>
            <p><b>Vehicle elèctric:</b></p>
            \\[ d_{total} = 120 + 10 = 130 \\text{ km} \\]
            \\[ E_{diària} = 130 \\text{ km} \\cdot \\frac{13,3 \\text{ kWh}}{100 \\text{ km}} = 17,29 \\text{ kWh} \\]
            \\[ m_{elèctr} = 17,29 \\text{ kWh} \\cdot 241 \\text{ g/kWh} = 4166,89 \\text{ g} = 4,167 \\text{ kg CO2} \\]
            <p><b>Vehicle gasoil:</b></p>
            \\[ Consum_{L} = \\left(120 \\cdot \\frac{3,6}{100}\\right) + \\left(10 \\cdot \\frac{4,4}{100}\\right) = 4,32 + 0,44 = 4,76 \\text{ L} \\]
            \\[ m_{gas} = 4,76 \\text{ L} \\cdot 2,87 \\text{ kg/L} = 13,661 \\text{ kg CO2} \\]
        </div>
        <div class="step-block">
            <span class="step-header">B) Cost diari (cd)</span>
            \\[ cd_{elèctr} = 17,29 \\text{ kWh} \\cdot 0,14 \\text{ €/kWh} = 2,421 \\text{ €} \\]
            \\[ cd_{gas} = 4,76 \\text{ L} \\cdot 1,209 \\text{ €/L} = 5,755 \\text{ €} \\]
        </div>
        <div class="step-block">
            <span class="step-header">C) Temps de recuperació (t)</span>
            <p>Sobrecost d'adquisició:</p>
            \\[ \\Delta C = 25700 - 18000 = 7700 \\text{ €} \\]
            <p>Estalvi diari i anual:</p>
            \\[ \\text{Estalvi}_{dia} = 5,755 - 2,421 = 3,334 \\text{ €/dia} \\]
            \\[ \\text{Estalvi}_{any} = 3,334 \\cdot 280 = 933,52 \\text{ €/any} \\]
            \\[ t = \\frac{7700}{933,52} = 8,248 \\text{ anys} \\]
        </div>`
},
{
    type: "exercicis",
    category: "termodinamica",
    text: `Es vol escalfar un volum V = 350 mL d’aigua des d’una temperatura inicial T1 = 20 °C fins a una de final T2 = 95 °C. Es proposen dues alternatives:
    <br>— Utilitzar un escalfador d’aigua per a infusions que consumeix P_escalf = 1200 W i que
    triga t_escalf = 125 s. Aquest sistema utilitza una resistència submergible.
    <br>— Fer servir un fogó de vitroceràmica: E_vitro = 0,11 kWh.
    <br>Dades: U = 230 V; c_e = 4,18 J/(g °C); densitat aigua ρ = 1 kg/L.
    <br><br><strong>a)</strong> L’energia teòrica necessària per a escalfar l’aigua E_aigua. [0,5 punts]
    <br><strong>b)</strong> La resistència R que l’escalfador d’aigua té al seu interior. [0,5 punts]
    <br><strong>c)</strong> L’energia consumida per l’escalfador E_cons. [0,5 punts]
    <br><strong>d)</strong> El rendiment de l’escalfador η_escalf i el de la vitroceràmica η_vitro. Quina alternativa escolliríeu? [1 punt]`,
    correctAnswer: "",
    steps: `
        <div class="step-block">
            <span class="step-header">A) Energia teòrica (E_aigua)</span>
            <p>Massa d'aigua: $m = 350 \\text{ mL} = 350 \\text{ g}$.</p>
            \\[ Q = m \\cdot c_e \\cdot (T_2 - T_1) \\]
            \\[ E_{aigua} = 350 \\text{ g} \\cdot 4,18 \\text{ J/(g°C)} \\cdot (95 - 20) \\text{ °C} = 109725 \\text{ J} \\approx 109,7 \\text{ kJ} \\]
        </div>
        <div class="step-block">
            <span class="step-header">B) Resistència de l'escalfador (R)</span>
            \\[ P = \\frac{U^2}{R} \\rightarrow R = \\frac{U^2}{P} \\]
            \\[ R = \\frac{230^2}{1200} = \\frac{52900}{1200} = 44,08 \\, \\Omega \\]
        </div>
        <div class="step-block">
            <span class="step-header">C) Energia consumida per l'escalfador (E_cons)</span>
            \\[ E_{cons} = P \\cdot t = 1200 \\text{ W} \\cdot 125 \\text{ s} = 150000 \\text{ J} = 150 \\text{ kJ} \\]
        </div>
        <div class="step-block">
            <span class="step-header">D) Rendiments i elecció (η)</span>
            <p><b>Rendiment escalfador:</b></p>
            \\[ \\eta_{escalf} = \\frac{E_{aigua}}{E_{cons}} = \\frac{109725}{150000} = 0,7315 \\rightarrow 73,15 \\% \\]
            <p><b>Rendiment vitroceràmica:</b></p>
            <p>Passem l'energia de la vitro a Joules: $0,11 \\text{ kWh} \\cdot 3,6 \\cdot 10^6 \\text{ J/kWh} = 396000 \\text{ J}$.</p>
            \\[ \\eta_{vitro} = \\frac{109725}{396000} = 0,2771 \\rightarrow 27,71 \\% \\]
            <p><b>Conclusió:</b> Escolliríem l'<b>escalfador d'infusions</b> perquè té un rendiment molt més elevat i consumeix menys energia.</p>
        </div>`
},
{
    type: "exercicis",
    category: "maquines",
    text: `El mecanisme de la figura s’utilitza per a elevar la porta d’un armari. Les dues barres de longitud LAO = LBQ = 2L són de massa negligible i estan articulades a la paret i a la porta. La porta és homogènia i de massa m = 3 kg. Té una longitud de 8L i un gruix de 2s. Les barres varien l’angle respecte de la vertical entre φ = 5° (porta tancada) i φ = 175° (porta oberta). Per elevar la porta, una persona fa una força vertical F al punt P. Es negligeixen les resistències passives.
    <div style="text-align:center; margin: 15px 0;">
        <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s5p9.png" alt="Mecanisme porta armari" style="max-width:100%; border-radius:4px;">
    </div>
    <strong>a)</strong> Dibuixeu el diagrama de cos lliure de la porta per a un angle φ qualsevol dins del rang de funcionament. [0,5 punts]
    <br>Considerant que la porta està en repòs, determineu:
    <br><strong>b)</strong> El valor de la força F aplicada. [1 punt]
    <br><strong>c)</strong> El valor de les forces TAO i TBQ que les barres fan sobre la porta quan φ = 30°. [1 punt]`,
    correctAnswer: "",
    steps: `
        <div class="step-block">
            <span class="step-header">a) Diagrama de cos lliure (DCL)</span>
            <p>Sobre la porta actuen el pes aplicat al centre de gravetat, la força vertical \\(F\\) al punt \\(P\\) i les reaccions de les barres \\(T_{AO}\\) i \\(T_{BQ}\\) seguint la direcció de les pròpies barres.</p>
            <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s5r9a.png" alt="Mecanisme porta armari" style="max-width:100%; border-radius:4px;">
            
        </div>
        <div class="step-block">
            <span class="step-header">b) Valor de la força F aplicada</span>
            <p>Atès que la porta es troba en repòs i el mecanisme de barres paral·leles fa que pugi mantenint-se sempre vertical (translació), el sumatori de forces verticals ha de ser zero:</p>
            \\[ \\sum F_y = 0 \\implies F - m \\cdot g = 0 \\]
            \\[ F = 3 \\; \\text{kg} \\cdot 9,81 \\; \\text{m/s}^2 = 29,43 \\; \\text{N} \\]
        </div>
        <div class="step-block">
            <span class="step-header">c) Forces a les barres per a φ = 30°</span>
            <p>Per l'equilibri de moments respecte al centre de la porta (punt mig entre A i B) i considerant que per equilibri horitzontal les components de les forces a les barres han de ser oposades:</p>
            \\[ \\sum M = 0 \\implies F \\cdot s + 2 \\cdot (T \\cdot \\sin \\phi \\cdot 0,5L) = 0 \\]
            <p>Substituint els valors de les dades del gràfic (\\(s = 30 \\; \\text{mm}\\) i \\(L = 50 \\; \\text{mm}\\)):</p>
            \\[ T_{AO} = 35,32 \\; \\text{N} \\quad (\\text{tracció}) \\]
            \\[ T_{BQ} = 35,32 \\; \\text{N} \\quad (\\text{compressió}) \\]
            
        </div>`
},
    {
    type: "exercicis",
    category: "sistemes combinacionals",
    text: `Un circuit combinacional de quatre entrades rep números del 0 al 15 expressats en base 2 (en sistema binari). La sortida encén un led quan el número és 0 o un múltiple de 4. Responeu a les qüestions que hi ha a continuació utilitzant les variables d'estat següents:
    <div style="background-color: #f5f5f5; padding: 10px; border-radius: 5px; margin: 10px 0;">
        <ul style="list-style-type: none; padding-left: 0; margin-bottom: 0;">
            <li><b>primer dígit (el de més a l’esquerra):</b> \(a = \{ 1, 0 \}\)</li>
            <li><b>segon dígit:</b> \(b = \{ 1, 0 \}\)</li>
            <li><b>tercer dígit:</b> \(c = \{ 1, 0 \}\)</li>
            <li><b>quart dígit:</b> \(d = \{ 1, 0 \}\)</li>
            <li><b>led:</b> \(l = \{ 1: \text{actiu}, 0: \text{no actiu} \}\)</li>
        </ul>
    </div>
    <strong>a)</strong> Elaboreu la taula de veritat del sistema.
    <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la.
    <br><strong>c)</strong> Dibuixeu l'esquema de portes lògiques equivalent.`,
    correctAnswer: "",
    steps: `
        <div class="step-block">
            <span class="step-header">a) Taula de veritat</span>
            <p>El led s'encén (\(l=1\)) per als números 0, 4, 8 i 12. En binari de 4 bits (\(abcd\)), aquests són: 0000, 0100, 1000 i 1100.</p>
            <div style="text-align:center; margin: 10px 0;">
                <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r2a.png" alt="Taula de veritat" style="max-width:250px; border: 1px solid #ddd;">
            </div>
        </div>
        <div class="step-block">
            <span class="step-header">b) Funció lògica i simplificació</span>
            <p>A partir de la taula de veritat, la funció com a suma de productes (mintermis) és:</p>
            \\[ l = \bar{a}\bar{b}\bar{c}\bar{d} + \bar{a}b\bar{c}\bar{d} + a\bar{b}\bar{c}\bar{d} + ab\bar{c}\bar{d} \\]
            <p>Extreient factor comú de \(\bar{c}\bar{d}\):</p>
            \\[ l = \bar{c}\bar{d} \cdot (\bar{a}\bar{b} + \bar{a}b + a\bar{b} + ab) = \bar{c}\bar{d} \cdot 1 \\]
            \\[ \text{simplificant: } l = \bar{c}\bar{d} \\]
        </div>
        <div class="step-block">
            <span class="step-header">c) Esquema de portes lògiques</span>
            <p>La funció simplificada \(l = \bar{c}\bar{d}\) es pot implementar amb una porta <b>NOR</b> o amb dues portes <b>NOT</b> i una <b>AND</b>:</p>
            <div style="text-align:center; margin: 15px 0;">
                <img src="https://jpizarro4.github.io/tecno/selectivitat/2022/images/202206s2r2c.png" alt="Esquema lògic" style="max-width:250px;">
            </div>
        </div>`
}
];
