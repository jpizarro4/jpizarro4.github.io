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
                <span class="step-header">A) Esquema elèctric</span> 202206s2r5.png
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
    }
];
