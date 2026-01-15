const questions = [
    {
        type: "questions", // Tipus de pregunta
        category: "electrics",
        text: `La velocitat de sincronisme n<sub>s</sub>, d’un motor asíncron de corrent altern, que està connectat a la xarxa de tensió U = 230 V i freqüència &#402 = 50 Hz, és n<sub>s</sub> = 600 min<sup>–1</sup>. Quants parells de pols té el motor?`,
        options: [
            { text: "2", value: "a" },
            { text: "4", value: "b" },
            { text: "5", value: "c" },
            { text: "10", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[
            600 \\, \\frac{\\text{rev}}{\\text{min}} \\cdot \\frac{1 \\, \\text{min}}{60 \\, \\text{seg}}  = 10 \\, \\frac{\\text{rev}}{\\text{seg}}
            \\]
            \\[	
            {n_{s}} = \\frac{\\text{&#402}}{\\text{p}} \\; \\text{&#8594} \\; \\text{p} = \\frac{\\text{&#402}}{{n_{s}}}
            \\]
            \\[
            p = \\frac{50 \\, \\text{Hz}}{10\\, \\frac{\\text{rev}}{\\text{seg}}} \\, = 5 \\, p
            \\]
            <br><br>
            `
    },
    {
        type: "questions", // Tipus de pregunta
        category: "metrologia",
        text: `Un dinamòmetre digital mostra el valor de la mesura amb cinc dígits i permet fer mesuraments entre 0 N i 10 000 N. La precisió és el valor més gran entre ± 0,1 % de la mesura i ± 5 N. Si la lectura del dinamòmetre és 3 500 N, el valor real de la mesura està comprès entre`,
        options: [
            { text: "3500 N i 3505 N", value: "a" },
            { text: "3496,5 N i 3503,5 N", value: "b" },
            { text: "3495 N i 3505 N", value: "c" },
            { text: "3497,5 N i 3502,5 N", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[
            0{,}1 \\, \\% = 0{,}001
            \\]
            \\[
            3500 \\, \\text{N} \\cdot 0{,}001 = 3{,}5 \\, \\text{N}
            \\]
            \\[
            3{,}5 \\, \\text{N} \\, \\text{<} \\, 5 \\, \\text{N}
            \\]
            \\[
            \\text{Mesurament mínim} = 3500 \\text{N} - 5 \\, \\text{N} = 3495 \\, \\text{N}
            \\]
            \\[
            \\text{Mesurament màxim} = 3500 \\text{N} + 5 \\, \\text{N} = 3505 \\, \\text{N}
            \\]
            \\[
            \\text{Interval} : [3495 \\, \\text{N} \\, {,} \\, 3505 \\, \\text{N}]
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", 
        category: "materials",
        text: `El <i>zamak</i> és un aliatge amb bones propietats mecàniques que s’utilitza en els sectors de l’automoció i de la construcció. Conté un 4 % d’alumini (Al), un 1 % de coure (Cu), un 0,05 % de magnesi (Mg) i la resta és zinc (Zn). En l’obtenció d’aquest aliatge, quina quantitat d’alumini cal per a aliar-lo amb 400 kg de zinc?`,
        options: [
            { text: "16 kg", value: "a" },
            { text: "4 kg ", value: "b" },
            { text: "421,3 kg ", value: "c" },
            { text: "16,85 kg", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[
            \\text{% de Zinc} = 100 - \\text{Al} -\\, \\text{Cu} -\\, \\text{Mg} = 100 - 4 - 1 - 0{,}05 = 94{,}95 \\%
            \\]
            \\[
            \\text{Massa total} = 400 \\, \\text{kg} \\cdot \\frac{94{,}95}{100} = 421{,}3 \\, \\text{kg}
            \\]
            \\[
            \\text{Al necessari} = 421{,}3 \\cdot \\frac{4}{100} = 16{,}85 \\, \\text{kg}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "metrologia",
        text: `En l’ajust 25 H7/g6, la tolerància H7 del forat és (<sup>+ 21</sup><sub>0</sub>) μm i la g6 de l’eix és (<sup>- 7</sup><sub>- 20</sub>) μm.Quins són els jocs màxim i mínim?`,
        options: [
            { text: "El joc màxim és 41 μm i el mínim és 7 μm", value: "a" },
            { text: "El joc màxim és 21 μm i el mínim és 0 μm", value: "b" },
            { text: "El joc màxim és 41 μm i el mínim és 20 μm", value: "c" },
            { text: "El joc màxim és 20 μm i el mínim és 7 μm", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            
            \\]
            \\[
            \\text{JMax} =  \\text{ds} - \\text{di}^{'} = 21 - (-20) = 41 \\; \\text{µm}
            \\]
            \\[
            \\text{Jmin} =  \\text{di} - \\text{ds}^{'} = 0 - (-7) = 7 \\; \\text{µm}            
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `La fabricació d’una peça metàl·lica es duu a terme en dos processos. En primer lloc, la peça es mecanitza en una fresadora i, posteriorment, se’n millora l’acabat superficial mitjançant una rectificadora. Després de cada procés, es controla la qualitat de les peces i es desestimen les que no són correctes. Si les taxes de rebuig del fresatge i la rectificació són del 4 % i el 3 %, respectivament, quin percentatge de les peces inicials s’acaba produint correctament?`,
        options: [
            { text: "88 %", value: "a" },
            { text: "93,12 %", value: "b" },
            { text: "96 %", value: "c" },
            { text: "93 %", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            \\text{Rebuig al fresatge:} \\, 4 \\, \\% \\; \\text{&#8594} \\; \\text{Peces bones:} \\, 96 \\%
            \\]
            \\[
            \\text{Rebuig a la rectificació:} \\, 3 \\, \\% \\; \\text{&#8594} \\; \\text{Peces bones:} \\, 97 \\%
            \\]
            \\[
            0,96 \\cdot 0,97 = 0,9312 = 93,12 \\, \\%
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Un tren d'alta velocitat ha transportat durant un any 3,2 milions de passatgers. El tren està format per 8 vagons i té una capacitat nominal total de 405 passatgers. Si el tren fa 28 trajectes diaris, quin ha estat el percentatge d’ocupació mitjana del tren?`,
        options: [
            { text: "9,7 %", value: "a" },
            { text: "77,3 %", value: "b" },
            { text: "37 %", value: "c" },
            { text: "39,1 %", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[
            405 \\, \\cdot \\; 28 \\, \\cdot \\; 365 = 4139100 \\, \\text{passatgers}
            \\]
            \\[
            \\frac{3200000}{4139100} = 77{,}3 \\%
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `En un any, 2,931 milions de vehicles van passar la inspecció tècnica de vehicles (ITV) a Catalunya. El 82 % dels vehicles van superar la revisió sense defectes o amb defectes lleus, i els altres tenien defectes greus o molt greus que els van obligar a passar una segona revisió un cop reparats. Aquesta segona revisió va ser superada pel 85 % dels vehicles. Quants vehicles no van superar la ITV?`,
        options: [
            { text: "79137 vehicles", value: "a" },
            { text: "377761 vehicles", value: "b" },
            { text: "2042907 vehicles", value: "c" },
            { text: "483615 vehicles", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[
            0{,}18 \\, \\cdot \\; 2931000 = 527580 \\; \\text{vehicles}
            \\]
            \\[
            0{,}15 \\, \\cdot \\; 527580 = 79137 \\; \\text{vehicles}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "electrics",
        text: `Una resistència de 4,7 Ω està feta de fil de constantà de 0,61 mm de diàmetre i una resistivitat de 0,49 μΩ·m. Quina és la longitud del fil de constantà utilitzat?`,
        options: [
            { text: "9,592 m", value: "a" },
            { text: "1,121 m", value: "b" },
            { text: "2,803 m", value: "c" },
            { text: "3,569 m", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[
            A = \\pi r^2 = \\pi (3{,}05 \\cdot 10^{-4})^2 = 2{,}922 \\cdot 10^{-7}
            \\]
            \\[
            L = \\frac{R\\cdot A}{\\rho} = \\frac{4{,}7 \\cdot 2{,}922\\cdot 10^{−7}}{0{,}49 \\cdot 10^{-6}} = 2{,}803 \\; \\text{m}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", 
        category: "organitzacio",
        text: `Un estudi sobre el transport d’una mercaderia conclou que el cost del transport marítim és de 0,87 €/km, el del transport per carretera és d’1,69 €/km i el del transport ferroviari és d'1,03 €/km. En el cas del transport marítim, la velocitat mitjana és de 33 km/h i la distància que cal recórrer és de 1 760 km; en el del transport per carretera, la velocitat mitjana és de 35 km/h i la distància és de 1 050 km; en el del transport ferroviari, la velocitat mitjana és de 50 km/h i la distància és de 1 160 km. Quin dels tres transports és més ràpid i quin és més econòmic?`,
        options: [
            { text: "El més ràpid és el transport per carretera i el més econòmic és el ferroviari", value: "a" },
            { text: "El més ràpid és el transport per carretera i el més econòmic és el marítim", value: "b" },
            { text: "El transport ferroviari és el més ràpid i també el més econòmic", value: "c" },
            { text: "El més ràpid és el transport ferroviari i el més econòmic és el marítim", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[
            t_{marítim} = \\frac{1760}{33} = 53,3 \\, \\text{h}
            \\]
            \\[
            C_{marítim} = 1760 \\cdot 0,87 = 1531,2 \\, \\text{&#8364}
            \\]
            \\[
            t_{carretera} = \\frac{1050}{35} = 30 \\, \\text{h}
            \\]
            \\[
            C_{carretera} = 1050 \\cdot 1,69 = 1774,5 \\, \\text{&#8364}
            \\]
            \\[
            t_{ferroviari} = \\frac{1160}{50} = 23,2 \\, \\text{h}
            \\]
            \\[
            C_{ferroviari} = 1160 \\cdot 1,03 = 1194,8 \\, \\text{&#8364}
            \\]
            \\[
            \\text{Més ràpid: transport ferroviari}
            \\]
            \\[
            \\text{Més econòmic: transport ferroviari}
            \\]
            <br><br>

            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "electrics",
        text: `La velocitat de sincronisme d’un motor asíncron, que està connectat a una xarxa de tensió U = 230 V i freqüència f = 50 Hz, és de 750 min<sup>–1</sup>. Quina serà la velocitat de sincronisme si es connecta a una xarxa de tensió U = 120 V i freqüència f = 60 Hz?`,
        options: [
            { text: "900 min<sup>–1</sup>", value: "a" },
            { text: "552 min<sup>–1</sup>", value: "b" },
            { text: "750 min<sup>–1</sup>", value: "c" },
            { text: "391 min<sup>–1</sup>", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[	
            {n_{s}} = \\frac{120 \\cdot \\text{&#402}}{\\text{p}} \\; \\text{&#8594} \\; \\text{p} = \\frac{120 cdot \\text{&#402}}{{n_{s}}}
            \\]
            \\[
            p = \\frac{120 \\cdot 50 \\, \\text{Hz}}{750 \\; \\text{min}^{-1}} \\, = 8 \\, pols
            \\]
            \\[
            {n_{s}} = \\frac{120 \\cdot 60 \\, \\text{Hz}}{8} = 900 \\; \\text{min}^{-1}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "materials",
        text: `El límit elàstic d'un aliatge d'alumini és σ<sub>e</sub> = 85 MPa. Si una peça cilíndrica d'aquest material està sotmesa a una força de tracció de 1 400 N, quin és el diàmetre mínim que ha de tenir la secció perquè no es produeixi deformació plàstica?`,
        options: [
            { text: "3,24 mm", value: "a" },
            { text: "16,47 mm", value: "b" },
            { text: "4,58 mm", value: "c" },
            { text: "2,29 mm", value: "d" }
        ],
        correctAnswer: "c",
        steps: `
            \\[	
            {σ_{e}} = \\frac{\\text{F}}{\\text{A}} \\; \\text{&#8594} \\; \\text{A} = \\frac{\\text{F}}{{σ_{e}}}            
            \\]
            \\[
            \\text{A} = \\frac{\\text{F}}{{σ_{e}}} = \\frac{1400}{85} = 16{,}47 \\; \\text{mm}^2
            \\]
            \\[
            A = \\frac{\\pi \\cdot \\text{d}^2}{4} \\; \\text{&#8594} \\; \\text{d} = \\sqrt{\\frac{\\text{A} \\cdot 4}{\\pi}}
            \\]
            \\[
            d = \\sqrt{\\frac{16{,}47 \\cdot 4}{\\pi}} = 4{,}58 \\; \\text{mm}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "organitzacio",
        text: `Dues terminals d'un aeroport estan comunicades per un tren autònom que en un trajecte pot transportar fins a tres-centes persones. El temps del trajecte és de 3 min i 15 s; i el temps d'espera entre dos trajectes és de 45 s de les 5.30 h a les 23.30 h, i d'1 min i 15 s de les 23.30 h a les 5.30 h. Quin és el nombre màxim de viatgers que pot transportar un tren durant tot un dia?`,
        options: [
            { text: "105 000", value: "a" },
            { text: "96 000", value: "b" },
            { text: "108 000", value: "c" },
            { text: "101 647", value: "d" }
        ],
        correctAnswer: "a",
        steps: `
            \\[	
            \\text{Temps per trajecte:}\\; 3 \\; \\text{min} \\; 15 \\; \\text{s} = 195 \\; \\text{s}   
            \\]
            \\[
            \\text{Cicle dia:}\\; 195 \\; \\text{s} + 45 \\; \\text{s}  = 240 \\; \\text{s} = 4 \\; \\text{min}
            \\]
            \\[
            \\text{Cicle nit:}\\; 195 \\; \\text{s} + 75 \\; \\text{s}  = 270 \\; \\text{s} = 4,5 \\; \\text{min}
            \\]
            \\[

            \\]
            \\[
            Viatges \\; dia
            \\]
            \\[
            \\text{Temps funcionant:}\\; 18 \\; \\text{h} = 18 \\; \\cdot \\; 60 = 1080 \\; \\text{s}
            \\]
            \\[
            \\frac{1080}{4} = 270 \\; \\text{viatges}
            \\]
            \\[

            \\]
            \\[
            Viatges \\; nit
            \\]
            \\[
            \\text{Temps funcionant:}\\; 6 \\; \\text{h} = 6 \\; \\cdot \\; 60 = 360 \\; \\text{s}
            \\]
            \\[
            \\frac{360}{4,5} = 80 \\; \\text{viatges}
            \\]
            \\[

            \\]
            \\[
            \\text{Viatges totals:}\\; 270 + 80 = 350 \\; \\text{viatges}
            \\]
            \\[

            \\]
            \\[
            \\textbf{Total viatgers:}\\; 350 \\; \\cdot \\; 300 = 105000 \\; \\text{viatgers}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "metrologia",
        text: `En un circuit elèctric, es connecten en paral·lel dues resistències de 30 Ω cadascuna i toleràncies de ± 2 % i ± 5 %, respectivament. Entre quins valors es troba la resistència equivalent?`,
        options: [
            { text: "57,90 Ω i 62,10 Ω", value: "a" },
            { text: "14,47 Ω i 15,52 Ω", value: "b" },
            { text: "14,25 Ω i 15,75 Ω", value: "c" },
            { text: "57 Ω i 63 Ω", value: "d" }
        ],
        correctAnswer: "b",
        steps: `
            \\[	
            R_{1_{min}} = 30 - 2\\; \\% = 30(100 - 2)\\; \\% = 30 \\; \\cdot \\; 98 \\;\\% = 30 \\; \\cdot \\; 0{,}98 = 29{,}4 \\; \\text{Ω}
            \\]
            \\[
            R_{1_{max}} = 30 + 2\\; \\% = 30(100 + 2)\\; \\% = 30 \\; \\cdot \\; 102 \\;\\% = 30 \\; \\cdot \\; 1{,}02 = 30{,}6 \\; \\text{Ω}
            \\]
            \\[
            R_{2_{min}} = 30 - 5\\; \\% = 30(100 - 5)\\; \\% = 30 \\; \\cdot \\; 95 \\;\\% = 30 \\; \\cdot \\; 0{,}95 = 28{,}5 \\; \\text{Ω}
            \\]
            \\[
            R_{2_{max}} = 30 + 5\\; \\% = 30(100 + 5)\\; \\% = 30 \\; \\cdot \\; 105 \\;\\% = 30 \\; \\cdot \\; 1{,}05 = 31{,}5 \\; \\text{Ω}
            \\]
            \\[

            \\]
            \\[
            R_{min} = \\frac{R_{1_{min}} \\cdot R_{2_{min}}}{R_{1_{min}} + R_{2_{min}}} = \\frac{29,4 \\cdot 28,5}{29,4 + 28,5} = 14,47 \\; \\Omega
            \\]
            \\[
            R_{max} = \\frac{R_{1_{max}} \\cdot R_{2_{max}}}{R_{1_{max}} + R_{2_{max}}} = \\frac{30,6 \\cdot 31,5}{30,6 + 31,5} = 15,52 \\; \\Omega
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "pneumatica",
        text: `Un cotxe té un motor de combustió V6 amb sis cilindres. La cilindrada és de 2 792 cm<sup>3</sup> i la cursa dels cilindres és de 90 mm. Quant fa el diàmetre dels cilindres?`,
        options: [
            { text: "70,32 mm", value: "a" },
            { text: "40,57 mm", value: "b" },
            { text: "198,74 mm", value: "c" },
            { text: "81,14 mm", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[	
            {V_{Cilindre}} = \\frac{C_{total}}{N_{cilindres}} = \\frac{2792}{6} = 465,33 \\; \\text{cm}^{3}
            \\]
            \\[
            V = \\frac{\\pi \\cdot D^{2}}{4} \\cdot C \\; \\text{&#8594} \\; D = \\sqrt{\\frac{V \\cdot 4}{\\pi \\cdot C}}
            \\]
            \\[
            D = \\sqrt{\\frac{V \\cdot 4}{\\pi \\cdot C}} = \\sqrt{\\frac{465,33 \\cdot 4}{\\pi \\cdot 9}} = 8,114 \\; \\text{cm} = 81{,}14 \\; \\text{mm}
            \\]
            <br><br>
            `,
    },
    {
        type: "questions", // Tipus de pregunta
        category: "energia",
        text: `En un gran premi de Fórmula 1, un vehicle ha tingut un consum mitjà de combustible per volta c<sub>m</sub> = 2,9 kg. El combustible utilitzat té una densitat ρ = 0,75 kg/L. Si el circuit té una longitud d = 5,543 km, quin ha estat el consum del vehicle en L/(100 km)?`,
        options: [
            { text: "75 L/(100 km)", value: "a" },
            { text: "52,32 L/(100 km)", value: "b" },
            { text: "254,9 L/(100 km)", value: "c" },
            { text: "69,76 L/(100 km)", value: "d" }
        ],
        correctAnswer: "d",
        steps: `
            \\[	
            V = \\frac{m}{\\rho} = \\frac{2,9}{0,75} = 3,57 \\; \\text{L/Volta}
            \\]
            \\[
            C_{1\\; \\text{km}} = \\frac{V}{d} = \\frac{3,87 \\; \\text{L/Volta}}{5,543 \\; \\text{km}} = 0,698 \\; \\text{L/km}
            \\]
            \\[
            C_{100\\; \\text{km}} = 0,698 \\; \\cdot \\; 100 = 69,8 \\; \\text{L/100 km}
            \\]
            <br><br>
            `,
    },  
{
        type: "exercicis",
        category: "control",
        text: `Per a controlar la velocitat dels vehicles a l'entrada d'una població s'ha instaŀlat un semàfor que generalment és verd, però que canvia a vermell quan es detecta un vehicle que s'hi
        apropa a una velocitat superior o igual a \\(60 \\; \\text{km/h}\\). Perquè els vianants puguin travessar la
        carretera, el semàfor dels cotxes també canvia a vermell si com a mínim fa un minut que és
        verd i, a més, un vianant prem el polsador que incorpora el mateix semàfor. Responeu a les
        qüestions que hi ha a continuació utilitzant les variables d'estat següents:
               <img src="https://ecastro4.github.io/tecno/selectivitat/2017/images/201706s1p2.png" alt="Imatge relacionada amb la pregunta" width="900">
              
               <br><strong>a)</strong> Elaboreu la taula de veritat del sistema. [1 punt]
               <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
               <br><strong>c)</strong> Dibuixeu l’esquema de portes lògiques equivalent. [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <img src="https://ecastro4.github.io/tecno/selectivitat/2017/images/201706s1r2.png" alt="Imatge relacionada amb la resposta" width="900">`,  // Imatge opcional al final de la resposta
    },
    {
        type: "exercicis",
        category: "materials",
        text: `
        <img src="https://ecastro4.github.io/tecno/selectivitat/2017/images/201706s1p3a.png" alt="Imatge relacionada amb la pregunta" width="900">

        Es vol construir una estrella de sis puntes com la de la figura a partir d'un tauler de fusta.
L'estrella es pot construir a partir de triangles equilàters o de rombes com els que es mostren
en la figura. El cost de producció de l'estrella es calcula segons l'expressió 
\\[
c = c_{1} s + c_{2} p
\\]
en què s és la superfície de fusta utilitzada i p és el perímetre de les peces tallades per a construir
l'estrella. El primer coeficient de cost és \\(c_{1} = 15 \\; \\text{€/m}^2\\)
, i el segon és \\(c_{2} = 0,6 \\; \\text{€/m}\\)  si el perfil és
senzill (com, per exemple, un triangle o un rombe) o \\(c_{2} = 1,4 \\; \\text{€/m} \\) si el perfil és complex (com,
per exemple, una estrella). Determineu:
              
               <br><strong>a)</strong> El nombre de triangles equilàters \\(n_{T}\\) que calen per a construir l'estrella i el perímetre
                                        de les peces tallades \\(p_{T}\\) en aquest cas. [0,5 punts]
               <br><strong>b)</strong> El nombre de rombes \\(n_{R}\\) que calen per a construir l'estrella i el perímetre de les peces
                                        tallades \\(p_{R}\\) en aquest cas. [0,5 punts]
               <br><strong>c)</strong> El perímetre tallat \\(p_{E}\\) si l'estrella es construeix tallant-ne directament el perfil exterior. [0,5 punts]
               <br><strong>d)</strong> La superfície \\(s\\) de fusta necessària per a construir l’estrella, i el cost \\(c_{T}\\), \\(c_{R}\\) i \\(c_{E}\\)
 de cadascuna de les tres opcions anteriors. Quina és l'opció més econòmica?
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Nombre de triangles equilàters \\(n_{\text{T}}\\) i el perímetre \\(p_{\text{T}}\\):</strong>
            <br>
            \\[
            n_{\\text{T}} = 6 + 6 = 12 \\, \\text{triangles}
            \\]
            \\[
            p_{\\text{T}} = n_{\\text{T}} \\cdot 3b = 12 \\cdot 3 \\cdot 0{,}3 = 10{,}8 \\, \\text{m}
            \\]
            <br>
            <strong>b) Nombre de rombes \\(n_{\\text{R}}\\) i perímetre de les peces \\(p_{\\text{R}}\\):</strong>
            <br>
            \\[
            n_{\\text{R}} = \\frac{n_{\\text{T}}}{2} = \\frac{12}{2} = 6 \\, \\text{rombes}
            \\]
            \\[
            p_{\\text{R}} = n_{\\text{R}} \\cdot 4b = 6 \\cdot 4 \\cdot 0{,}3 = 7{,}2 \\, \\text{m}
            \\]
            <br>
            <strong>c) Perímetre tallat \\(p_{\\text{E}}\\) de l'estrella (perfil exterior):</strong>
            <br>
            \\[
            p_{\\text{E}} = 12 \\cdot b = 12 \\cdot 0{,}3 = 3{,}6 \\, \\text{m}
            \\]
            <br>
            <strong>d) Superfície \\(s\\), costos \\(c_{\text{T}}, c_{\text{R}}, c_{\text{E}}\\) i opció més econòmica:</strong>
            <br>
            - Superfície d'un triangle equilàter: \\( A_{\\text{T}} = \\frac{\\sqrt{3}}{4} b^2 = \\frac{\\sqrt{3}}{4} (0{,}3)^2 = 0{,}03897 \\, \\text{m}^2 \\).
            \\[
            s = 12 \\cdot A_{\\text{T}} = 12 \\cdot 0{,}03897 = 0{,}4677 \\, \\text{m}^2
            \\]
            \\[
            c_{\\text{T}} = (15 \\cdot 0{,}4677) + (0{,}6 \\cdot 10{,}8) = 7{,}016 + 6{,}48 = 13{,}50 \\, \\text{€}
            \\]
            - Cost amb rombes (\\( c_2 = 0{,}6 \\)): 
            \\[
            c_{\\text{R}} = (15 \\cdot 0{,}4677) + (0{,}6 \\cdot 7{,}2) = 7{,}016 + 4{,}32 = 11{,}34 \\, \\text{€}
            \\]
            - Cost estrella sencera (\\( c_2 = 1{,}4 \\)): 
            \\[
            c_{\\text{E}} = (15 \\cdot 0{,}4677) + (1{,}4 \\cdot 3{,}6) = 7{,}016 + 5{,}04 = 12{,}06 \\, \\text{€}
            \\]
            - <strong>Conclusió:</strong> L'opció més econòmica és la construcció a partir de <strong>6 rombes</strong> amb un cost d'<strong>11,34 €</strong>.
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "motors",
        text: `
        Un elevador puja amb una velocitat constant una càrrega \\(m = 2 500 \\; \\text{kg}\\) fins a una altura
\\(Δh = 5 \\; \\text{m} \\) en un temps \\(t = 60 \\; \\text{s} \\). L'elevador s'acciona amb un motor elèctric de corrent continu en sèrie amb un reductor d'engranatges. Segons el catàleg del fabricant, el rendiment del
reductor d'engranatges és \\(η_{red} = 0,70\\). El motor s'alimenta amb una tensió \\( U = 220 \\; \\text{V} \\), gira a
una velocitat \\(n = 1 500 \\; \\text{min}^{–1}\\) i té un rendiment electromecànic \\(η_{mot} = 0,78\\). Si les resistències
passives a l'elevador es consideren negligibles, determineu:
              
               <br><strong>a)</strong> La potència mecànica \\(P_{càrrega}\\) requerida per a elevar la càrrega. [0,5 punts]
               <br><strong>b)</strong> La potència \\(P_{m}\\) i el parell \\(Γ_{m}\\) a l'eix de sortida del motor. [1 punt]
               <br><strong>c)</strong> La intensitat \\(I\\) que consumeix el motor elèctric. [0,5 punts]
               <br><strong>d)</strong> La potència total dissipada \\(P_{diss}\\) pel conjunt motor-reductor. [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Potència mecànica requerida per elevar la càrrega \\(P_{càrrega}\\):</strong>
            <br>
            \\[
            v = \\frac{\\Delta h}{t} = \\frac{5}{60} = 0,0833 \\; \\text{m/s}
            \\]
            \\[
            F = m \\cdot g = 2500 \\cdot 9{,}81 = 24525 \\; \\text{N}
            \\]
            \\[
            P_{càrrega} = F \\cdot v = 24525 \\cdot 0,0833 = 2044 \\; \\text{W}
            \\]
            <br>
            <strong>b) Potència \\(P_{m}\\) i el parell \\(Γ_{m}\\) a l'eix del motor:</strong>
            <br>
            \\[
            P_{m} = \\frac{P_{càrrega}}{η_{red}} = \\frac{2044}{0,70} = 2919 \\; \\text{W}
            \\]
            \\[
            \\omega = \\frac{2\\pi n}{t} = \\frac{2\\pi 1500}{60} = 157,1 \\; \\text{rad/s}
            \\]
            \\[
            Γ_{m} = \\frac{P_m}{\\omega} = \\frac{2919}{157,1} = 18,6 \\; \\text{N\\(\\cdot\\)m}
            \\]
            <br>
            <strong>c) Intensitat consumida pel motor:</strong>
            <br>
            \\[
            P_{el} = \\frac{P_m}{η_{mot}} = \\frac{2919}{0,78} = 3742,3 \\; \\text{W}
            \\]
            \\[
            I = \\frac{P_{el}}{U} = \\frac{3742,3}{220} = 17,01 \\; \\text{A}
            \\]
            <br>
            <strong>d) Potència total dissipada pel conjunt motor–reductor:</strong>
            <br>
            \\[
            P_{diss} = P_{el} - P_{càrrega} = 3742,3 - 2044 = 1698,3 \\; \\text{W}
            \\]
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "maquines",
        text: `
        <img src="https://ecastro4.github.io/tecno/selectivitat/2017/images/201706s1p3b.png" alt="Imatge relacionada amb la pregunta" width="900">
        La placa d’alumini de la figura, de gruix
\\(e = 5 \\; \\text{mm}\\), està articulada a terra en el punt
O. Per a mantenir-la en repòs s’utilitza un
cable d’acer que es fixa en el punt A i que té la
direcció que es mostra en la figura. El cable té
una secció circular de diàmetre \\(d = 2 \\; \\text{mm}\\). La
densitat de l’alumini és \\(ρ_{alumini} = 2 710 kg/m^{3}\\) i el mòdul elàstic de l'acer és \\(E_{acer} = 207 \\; \\text{GPa}\\).
              
               <br><strong>a)</strong> Dibuixeu el diagrama de cos lliure de la placa. [0,5 punts]
               <br><strong>Determineu:)</strong>
               <br><strong>b)</strong> La massa \\(m\\) de la placa. [0,5 punts]
               <br><strong>c)</strong> La força \\(T\\) que fa el cable, i les forces horitzontal \\(F_{h}\\) i vertical \\(F_{v}\\) en el punt O. [1 punt]
               <br><strong>d)</strong>  La tensió normal \\(σ\\) del cable i el seu allargament unitari \\(ε\\). Si el límit elàstic de l’acer
és \\(σ_{e,acer} = 350 \\; \\text{MPa}\\), el cable s’arriba a deformar de manera permanent? [0,5 punts]
               <br><br>
               `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Diagrama del cos lliure:</strong>
            <img src="https://ecastro4.github.io/tecno/selectivitat/2017/images/201706s1r3b.png" alt="Imatge relacionada amb la resposta" width="900">

            <strong>b) Massa de la placa:</strong>
            <br>
            \\[
            V = (2L) \\cdot L \\cdot e = 2 \\cdot 1 \\cdot 0,005 = 0,01 \\; \\text{m}^3
            \\]
            \\[
            m = ρV = 2710 \\cdot 0,01 = 27,1 \\; \\text{kg}
            \\]
            \\[
            W = mg = 27,1 \\cdot 9,98 = 265,8 \\; \\text{N}
            \\]
            <br>
            <strong>c) Tensió del cable i forces a O:</strong>
            <br>
            \\[
            T \\text{sin}30º \\cdot 2L - W \\cdot L = 0
            \\]
            \\[
            T \\cdot 0,5 \\cdot 2 - 265,8 = 0
            \\]
            \\[
            T = 265,8 \\; \\text{N}
            \\]
            \\[
            - Eix y
            \\]
            \\[
            F_{v} + T \\text{sin}30º - W = 0
            \\]
            \\[
            F_{v} + 132,9 - 265,8 = 0
            \\]
            \\[
            F_{v} = 132,9 \\; \\text{N}
            \\]
            \\[
            - Eix x
            \\]
            \\[
            F_{h} - T \\text{sin}30º = 0
            \\]
            \\[
            F_{h} = 265,8 \\cdot 0,866 = 230,2 \\; \\text{N}
            \\]
            <br>
            <strong>d) Tensió normal i allargament unitari del cable:</strong>
            <br>
            \\[
            A = \\frac{\\pi d^{2}}{4} = \\frac{\\pi (0,002)^{2}}{4} = 3,14 \\cdot 10^{-6} \\; \\text{m}^2
            \\]
            \\[
            σ = \\frac{T}{A} = \\frac{265,8}{3,14 \\cdot 10^{-6}} = 84,6 \\; \\text{MPa}
            \\]
            \\[
            ε = \\frac{σ}{E} = \\frac{84,6 \\cdot 10^{6}}{207 \\cdot 10^{7}} = 4,1 \\cdot 10^{-4}
            \\]
            \\[
            σ = 84,6 \\; \\text{MPa} < 350 \\; \\text{MPa}
            \\]
            <strong>El cable NO es deforma permanentment</strong>
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "electrics",
        text: `
        <img src="https://ecastro4.github.io/tecno/selectivitat/2017/images/201706s1p4b.png" alt="Imatge relacionada amb la pregunta" width="900">
        Un fanal per a exteriors consta de quinze LED connectats tal com mostra el circuit de
la figura. La caiguda de tensió de cada LED és \\(U_{LED} = 3,4 \\; \\text{V}\\). Per a regular la il·luminació, el
fanal es pot alimentar amb \\(n\\) = 3 o 4 bateries connectades en sèrie. Cada bateria proporciona una tensió \\(U_{bat} = 12 \\; \\text{V}\\) i té una capacitat \\(c_{bat} = 10 000 \\; \\text{mAh}\\). Entre les bateries i els LED hi ha
una resistència \\(R\\). Quan hi ha \\(n\\) = 4 bateries connectades, per cada LED hi passa un corrent
\\(I_{LED,4} = 25 \\; \\text{mA}\\). Per a aquesta configuració, determineu:
              
                <br><strong>a)</strong> El valor de la resistència \\(R\\). [0,5 punts]
                <br><strong>b)</strong> L’energia consumida \\(E_{total}\\) en el temps \\(t\\) = 8 h. [0,5 punts]
                <br><strong>c)</strong> El temps \\(t_{bat,4}\\) que duren les bateries. [0,5 punts]
                <br>Per a la configuració amb només \\(n\\) = 3 bateries connectades en sèrie, determineu: 
                <br><strong>d)</strong> La nova intensitat \\(I_{LED,3}\\) que circula per cada LED. [0,5 punts]
                <br><strong>e)</strong> El temps \\(t_{bat,3}\\) que duren les bateries. [0,5 punts]
                <br><br>
                `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Resistència:</strong>
            <br> 
            \\[
            U = 4 \\cdot 12 = 48 \\, \\text{V}
            \\]
            \\[
            U_{LED} = 5 \\cdot 3,4 = 17 \\; \\text{V}
            \\]
            \\[
            U_{R} = 48 - 17 = 31 \\; \\text{V}
            \\]
            \\[
            R = \\frac{V_{R}}{I_{R}} = \\frac{31}{3 \\cdot 0,025 \\; \\text{A}} = 413,33 \\; \\omega
            \\]
            <br>
            <strong>b) Energia consumida en 8 h:</strong>
            <br>
            \\[
            E_{total} = P \\cdot t = U \\cdot I \\cdot t = 48 \\cdot 0,075 \\cdot 8 = 28,8 \\; \\text{Wh}
            \\]
            <br>
            <strong>c) Autonomia 4 bateries:</strong>
            <br>
            \\[
            t_{bat,4} = \\frac{C_{bat}}{I_{R}} = \\frac{10}{0,075} = 133,33 \\; \\text{hores}
            \\]
            <br>
            <strong>d) Nova tensió amb 3 bateries:</strong>
            <br>
            \\[
            U = 3 \\cdot 12 = 13 \\; \\text{V}
            \\]
            \\[
            U_{R} = 35 - 17 = 19 \\; \\text{V}
            \\]
            \\[
            I_{R} = \\frac{17}{413,33} = 0,04598 \\; \\text{A}
            \\]
            \\[
            I_{LED,3} = \\frac{0,04598}{3} = 0,01533 \\; \\text{A} = 15,33 \\; \\text{A}
            \\]
            <br>
            <strong>e) Temps que duren 3 bateries:</strong>
            <br>
            \\[
            t_{bat,3} = \\frac{C_{bat}}{I_{R}} = \\frac{10}{0,0598} = 217,49 \\; \\text{hores}
            \\]
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "control",
        text: `
        Un cotxe amb un motor de quatre cilindres en línia té un sistema automàtic per a desconnectar dos d’aquests cilindres a partir de la lectura d’un sensor en l’accelerador. El sistema
manté els quatre cilindres connectats, i permet desconnectar-ne dos si la demanda d’acceleració és baixa i s’ha mantingut baixa en el darrer kilòmetre. Els dos cilindres només es desconnecten si la velocitat del motor és 1 400 \\(min^{–1}\\) < n < 4 000 \\(min^{–1}\\). Responeu a les qüestions
que hi ha a continuació utilitzant les variables d’estat següents:
        <img src="https://ecastro4.github.io/tecno/selectivitat/2017/images/201706s5p2.png" alt="Imatge relacionada amb la pregunta" width="900">

              
                <br><strong>a)</strong> Elaboreu la taula de veritat del sistema. [1 punt]
                <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
                <br><strong>c)</strong> Dibuixeu l’esquema de contactes equivalent. [0,5 punts]
                `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
                <img src="https://ecastro4.github.io/tecno/selectivitat/2017/images/201706s5r2.png" alt="Imatge relacionada amb la pregunta" width="900">

            `
    },
    {
        type: "exercicis",
        category: "energia",
        text: `
        <img src="https://ecastro4.github.io/tecno/selectivitat/2017/images/201706s5p3a.png" alt="Imatge relacionada amb la pregunta" width="900">
        Un cartell lluminós està format per les lletres P, A i U, tal com mostra la figura, construïdes amb tub lluminós. El tub lluminós consumeix \\(P_{tub} = 60 \\; W/m\\) quan es connecta a la xarxa
de tensió \\(U = 230 \\; V\\). Determineu:
              
                <br><strong>a)</strong> Les longituds de tub lluminós \\(L_{P}\\), \\(L_{A}\\) i \\(L_{U}\\) que calen per a construir cada lletra. [1 punt]
                <br><strong>b)</strong> Les potències \\(P_{P}\\), \\(P_{A}\\) i \\(P_{U}\\) consumides per cada lletra. [0,5 punts]
                <br>Perquè el cartell sigui més vistós, les lletres s’iŀluminen seqüencialment durant dos segons
cadascuna. S’estudien dues opcions: la primera opció seguiria la seqüència P-A-U / P-A-U / …,
i la segona opció seguiria la seqüència P-A-U-A/ P-A-U-A/ … Determineu:
                <br><strong>c)</strong> L’energia, en kWh, consumida pel cartell en cada cas en \\(t = 3 \\; h\\) de funcionament. [1 punt]
                <br><br>
                `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Longituds:</strong>
            <br> 
            \\[
            L_{p} = h + \\pi \\cdot r = 0,68 + \\pi \\cdot 0,20 = 1,308 \\; \\text{m}
            \\]
            \\[
            L_{A} = 2 \\cdot \\frac{h}{cos(\\alpha / 2)} + 2b = 2 \\cdot \\frac{0,68}{cos(17,5º)} + 2 \\cdot 0,12 = 1,426 + 0,24 = 1,666 \\; \\text{m}
            \\]
            \\[
            L_{U} = 2 \\cdot (h - r) + \\pi \\cdot r = 2 \\cdot (0,68 - 0,20) + \\pi \\cdot 0,20 = 1,588 \\; \\text{m}
            \\]
            <br>
            <strong>b) Potències consumides:</strong>
            <br>
            \\[
            P_{P} = 1,308 \\; \\text{m} \\cdot 60 \\; \\text{W7m} = 78,48 \\; \\text{W}
            \\]
            \\[
            P_{A} = 1,666 \\; \\text{m} \\cdot 60 \\; \\text{W7m} = 99,96 \\; \\text{W}
            \\]
            \\[
            P_{U} = 1,588 \\; \\text{m} \\cdot 60 \\; \\text{W7m} = 95,28 \\; \\text{W}
            \\]
            <br>
            <strong>c) Energia consumida en 3 h:</strong>
            <br>
            <strong>Seqüència P - A - U / P - A - U:</strong>
            \\[
            P_{PAU} = \\frac{P_{P} + P_{A} + P_{U}}{3} = \\frac{78,48 + 99,96 + 95,28}{3} = 91,24 \\; \\text{W}
            \\]
            \\[
            E_{PAU} = P_{PAU} \\cdot t = 91,24 \\cdot 3 = 273,72 \\; \\text{W} = 0,2737 \\; \\text{kWh}
            \\]
            <strong>Seqüència P - A - U - A / P - A - U - A:</strong>
            \\[
            P_{PAUA} = \\frac{P_{P} + P_{A} + P_{U} + P_{A}}{4} = \\frac{78,48 + 99,96 + 95,28 + 99,96}{4} = 93,42 \\; \\text{W}
            \\]
            \\[
            E_{PAUA} = P_{PAUA} \\cdot t = 93,42 \\cdot 3 = 280,26 \\; \\text{W} = 0,2803 \\; \\text{kWh}
            \\]
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "maquines",
        text: `
                <img src="https://ecastro4.github.io/tecno/selectivitat/2017/images/201706s5p3b.png" alt="Imatge relacionada amb la pregunta" width="900">
        Per a mesurar una distància s’utilitza un potenciòmetre lineal com el que mostra la figura. El palpador mòbil canvia el punt de mesurament del voltatge de sortida \\(U_{s}\\)
 i això fa que variïn les resistències \\(R_1\\) i \\(R_2\\). La suma de les resistències \\(R = R_{1} + R_{2}\\)
 es manté constant i igual a \\(R = 5 \\; \\text{kΩ}\\). Si el circuit s’alimenta amb una tensió \\(U_{e} = 24 \\; \\text{V}\\):
              
                <br><strong>a)</strong> Determineu la intensitat \\(I\\) que circula pel circuit. [0,5 punts]
                <br><strong>b)</strong> Determineu la tensió mesurada \\(U_{s}\\) quan \\((R1 = 2 \\; \\text{kΩ}\\). [0,5 punts]
                <br><strong>c)</strong> Dibuixeu, de manera aproximada i indicant les escales, la corba de la tensió de sortida \\(U_{s}\\) en funció de la resistència \\(R_1\\)
, per a 0 ≤ \\(R_1\\) ≤ \\(5 \\; \\text{kΩ}\\). [1 punt]
                <br>Si el sistema està calibrat perquè la distància mesurada sigui \\(d = 150 \\; \\text{mm}\\) per a \\(R_{1} = 0\\), i
sigui \\(d = 1 200 \\; \\text{mm}\\) per a \\(R_{1} = 5 \\; \\text{kΩ}\\):
                <br><strong>d)</strong> Determineu el factor de sensibilitat \\(k = |ΔU_{s}
| / |Δd|\\) del sensor. [0,5 punts]
                <br><br>
                `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Intensitat \\(I\\) que circula:</strong>
            <br> 
            \\[
            I = \\frac{U_{e}}{R} = \\frac{24}{5000} = 0,0048 \\; \\text{A} = 4,8 \\; \\text{mA}
            \\]
            <br>
            <strong>b) Tensió \\(U_{s}\\) quan \\((R1 = 2 )\\):</strong>
            <br>
            \\[
            R_{2} = R - R_{1} = 5 \\; \\text{k} \\Omega - 2 \\; \\text{k} \\Omega = 3 \\; \\text{k} \\Omega
            \\]
            \\[
            U_{s} = I \\cdot R_{2} = 0,0048 \\; \\text{A} = 3000 \\; \\Omega = 14,4 \\; \\text{V}
            \\]
            <br>
            <strong>c) Corba de la tensió de sortida \\(U_{s}\\):</strong>
            <br>
            \\[
            U_{s} = I \\cdot (R - R_{1})
            \\]
            \\[
            R_{1} = 0 \\; \\text{k} \\Omega \\; \\text{&#8594} \\; R_{2} = 5 \\; \\text{k} \\Omega \\; \\text{&#8594} \\; U_{s} = 24 \\; \\text{V}
            \\]
            \\[
            R_{1} = 5 \\; \\text{k} \\Omega \\; \\text{&#8594} \\; R_{2} = 0 \\; \\text{k} \\Omega \\; \\text{&#8594} \\; U_{s} = 0 \\; \\text{V}
            \\]
            <img src="https://ecastro4.github.io/tecno/selectivitat/2017/images/201706s5r3b.png" alt="Imatge relacionada amb la pregunta" width="900">
            <br>
            <strong>d) Factor de sensibilitat:</strong>
            <br>
            \\[
            \\Delta U_{s} = U_{s,max} - U_{s,min} = 24 \\; \\text{V} - 0 \\; \\text{V} = 24 \\; \\text{V}
            \\]
            \\[
            \\Delta d = d_{max} - d_{min} = 1200 \\; \\text{mm} - 150 \\; \\text{mm} = 1050 \\; \\text{mm}
            \\]
            \\[
            k = \\frac{| \\Delta U_{s}|}{| \\Delta d|} = \\frac{24 \\; \\text{V}}{1050 \\; \\text{mm}} = 0,02286 \\; \\text{V/mm}
            \\]
            <br>
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "energia",
        text: `
                Una central elèctrica de cicle combinat produeix electricitat mitjançant dos cicles termodinàmics: un primer cicle de combustió de gas natural, de poder calorífic \\(p = 32,1 \\; \\text{MJ/kg}\\),
i un segon cicle en què s’aprofita la calor residual del primer cicle per a moure una turbina
de vapor. El gas natural es distribueix liquat, amb una densitat \\(ρ = 0,423 \\; \\text{kg/L}\\), i a la central
es cremen \\(V = 4 515 \\; \\text{m}^{3}\\) d’aquest gas liquat en 24 h. La potència elèctrica que proporciona la
central és \\(P_{elèctr} = 390 \\; \\text{MW}\\). Determineu:
              
                <br><strong>a)</strong> La potència mitjana consumida \\(P_{cons}\\) per la central. [1 punt]
                <br><strong>b)</strong> El rendiment total \\(η\\) de la central elèctrica. [0,5 punts]
                <br><strong>c)</strong> El rendiment del cicle de gas \\(η_{g}\\) si el rendiment del cicle de vapor és \\(η_{v} = 0,31\\). [1 punt]
                <br><br>
                `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Potència mitjana consumida:</strong>
            <br> 
            \\[
            m_{cons} = V \\cdot ρ = 4 515 \\; \\text{m}^{3} \\cdot \\frac{1000 L}{1 \\text{m}^{3}} \\cdot 0,423 \\; \\text{kg/L} = 1909845 \\; \\text{kg}
            \\]
            \\[
            E = m_{cons} \\cdot p = 1909845 \\; \\text{kg} \\cdot 32,1 \\; \\text{MJ/kg} = 6130624,5 \\; \\text{MJ}
            \\]
            \\[
            P_{cons} = \\frac{E}{t} = \\frac{6130624,5 \\; \\text{MJ}}{24 \\; \\text{h} \\cdot 3600 \\; \\text{s}} = 709,56 \\; \\text{MW}
            \\]
            <br>
            <strong>b) Rendiment total:</strong>
            <br>
            \\[
            η = \\frac{P_{elèctr}}{P_{cons}} = \\frac{390 \\; \\text{MW}}{709,56 \\; \\text{MW}} = 0,5496 \\; \\text{&#8594} \\; 54,96 \\; \\%
            \\]
            <br>
            <strong>c) Rendiment cicle gas:</strong>
            <br>
            \\[
            η_{g} = \\frac{η - η_{v}}{1 - η_{v}} = \\frac{0,5496 - 0,31}{1 - 0,31} = 0,3472 \\; \\text{&#8594} \\; 34,72 \\; \\%
            \\]
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "control",
        text: `
        Per a reduir el consum energètic d’una ciutat s’ha instaŀlat un sistema inteŀligent de control de la iŀluminació. Els fanals d’un carrer determinat es controlen mitjançant un sensor
crepuscular, que detecta si és de nit o de dia, i dos sensors de moviment situats estratègicament, que detecten la presència de persones al carrer. Els fanals s’encenen quan és de nit i, a
més, algun dels dos sensors detecta moviment. Responeu a les qüestions que hi ha a continuació utilitzant les variables d’estat següents:
        <img src="https://ecastro4.github.io/tecno/selectivitat/2017/images/201709s2p2.png" alt="Imatge relacionada amb la pregunta" width="900">

              
                <br><strong>a)</strong> Elaboreu la taula de veritat del sistema. [1 punt]
                <br><strong>b)</strong> Determineu la funció lògica entre aquestes variables i, si escau, simplifiqueu-la. [1 punt]
                <br><strong>c)</strong> Dibuixeu l’esquema de contactes equivalent. [0,5 punts]
                `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
                <img src="https://ecastro4.github.io/tecno/selectivitat/2017/images/201709s2r2.png" alt="Imatge relacionada amb la resposta" width="900">
            `
    },
    {
        type: "exercicis",
        category: "electrics",
        text: `
                <img src="https://ecastro4.github.io/tecno/selectivitat/2017/images/201709s2p3a.png" alt="Imatge relacionada amb la pregunta" width="900">

                En la figura es mostra el circuit d’una tetera elèctrica connectada a la xarxa de tensió
\\(U = 230 \\; \\text{V}\\). El circuit consta d’una resistència d’escalfament \\(R_{e}\\)
 i d’una resistència de manteniment \\(R_{m}\\). En la primera fase l’interruptor \\(A\\) està tancat i, en aquesta configuració, la resistència \\(R_{e}\\)
 escalfa l’aigua dipositada a la tetera fins a la temperatura \\(T_{1} = 95 \\; \\text{°C}\\). Quan l’aigua arriba
a aquesta temperatura, l’interruptor s’obre i les dues resistències mantenen l’aigua calenta.
La temperatura inicial de l’aigua és \\(T_{0} = 20 \\; \\text{°C}\\) i la tetera tarda 4 min i 30 s a escalfar un volum
d’aigua \\(V= 1,4 \\; \\text{L}\\). Sabent que la calor específica de l’aigua és \\(c_{e} = 4,18 \\; \\text{kJ/(kg °C)}\\), determineu:
              
                <br><strong>a)</strong> L’energia \\(E\\) necessària per a escalfar l’aigua en la primera fase. [0,5 punts]
                <br><strong>b)</strong> El valor de la resistència \\(R_{e} \\) i el corrent \\(I\\) que circula pel circuit durant la fase d’escalfament. [1 punt]
                <br><strong>c)</strong> El valor que ha de tenir la resistència \\(R_{m}\\) perquè la potència consumida quan l'aigua es manté calenta sigui \\(P_{m} = 300 \\, \\text{W}\\). [1 punt]
                <br><br>
                `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Energia necessària:</strong>
            <br> 
            \\[
            E = m \\cdot c_{e} \\cdot \\Delta T = 1,4 \\cdot 4180 \\cdot (95 - 20) = 438900 \\; \\text{J}
            \\]
            <br>
            <strong>b) Resistència \\(R_{e}\\) i intensitat \\(I\\):</strong>
            <br>
            \\[
            P = \\frac{E}{t} = \\frac{438900}{270} = 1625,56 \\; \\text{W}
            \\]
            \\[
            I = \\frac{P}{U} = \\frac{1625,56}{230} = 7,07 \\; \\text{A}
            \\]
            \\[
            R_{e} = \\frac{U}{I} = \\frac{230}{7,07} = 32,54 \\; \\Omega
            \\]
            <br>
            <strong>c) Resistència \\(R_{m}\\):</strong>
            <br>
            \\[
            R{total} = \\frac{U^{2}}{P_{m}} = \\frac{230^{2}}{300} = 176,33 \\; \\Omega
            \\]
            \\[
            R{m} = R_{total} - R{e} = 176,33 - 32,54 = 143,79 \\; \\Omega
            \\]
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "electrics",
        text: `
                <img src="https://ecastro4.github.io/tecno/selectivitat/2017/images/201709s2p3a.png" alt="Imatge relacionada amb la pregunta" width="900">

                En la figura es mostra el circuit d’una tetera elèctrica connectada a la xarxa de tensió
\\(U = 230 \\; \\text{V}\\). El circuit consta d’una resistència d’escalfament \\(R_{e}\\)
 i d’una resistència de manteniment \\(R_{m}\\). En la primera fase l’interruptor \\(A\\) està tancat i, en aquesta configuració, la resistència \\(R_{e}\\)
 escalfa l’aigua dipositada a la tetera fins a la temperatura \\(T_{1} = 95 \\; \\text{°C}\\). Quan l’aigua arriba
a aquesta temperatura, l’interruptor s’obre i les dues resistències mantenen l’aigua calenta.
La temperatura inicial de l’aigua és \\(T_{0} = 20 \\; \\text{°C}\\) i la tetera tarda 4 min i 30 s a escalfar un volum
d’aigua \\(V= 1,4 \\; \\text{L}\\). Sabent que la calor específica de l’aigua és \\(c_{e} = 4,18 \\; \\text{kJ/(kg °C)}\\), determineu:
              
                <br><strong>a)</strong> L’energia \\(E\\) necessària per a escalfar l’aigua en la primera fase. [0,5 punts]
                <br><strong>b)</strong> El valor de la resistència \\(R_{e} \\) i el corrent \\(I\\) que circula pel circuit durant la fase d’escalfament. [1 punt]
                <br><strong>c)</strong> El valor que ha de tenir la resistència \\(R_{m}\\) perquè la potència consumida quan l'aigua es manté calenta sigui \\(P_{m} = 300 \\, \\text{W}\\). [1 punt]
                <br><br>
                `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Energia necessària:</strong>
            <br> 
            \\[
            E = m \\cdot c_{e} \\cdot \\Delta T = 1,4 \\cdot 4180 \\cdot (95 - 20) = 438900 \\; \\text{J}
            \\]
            <br>
            <strong>b) Resistència \\(R_{e}\\) i intensitat \\(I\\):</strong>
            <br>
            \\[
            P = \\frac{E}{t} = \\frac{438900}{270} = 1625,56 \\; \\text{W}
            \\]
            \\[
            I = \\frac{P}{U} = \\frac{1625,56}{230} = 7,07 \\; \\text{A}
            \\]
            \\[
            R_{e} = \\frac{U}{I} = \\frac{230}{7,07} = 32,54 \\; \\Omega
            \\]
            <br>
            <strong>c) Resistència \\(R_{m}\\):</strong>
            <br>
            \\[
            R{total} = \\frac{U^{2}}{P_{m}} = \\frac{230^{2}}{300} = 176,33 \\; \\Omega
            \\]
            \\[
            R{m} = R_{total} - R{e} = 176,33 - 32,54 = 143,79 \\; \\Omega
            \\]
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "electrics",
        text: `
                <img src="https://ecastro4.github.io/tecno/selectivitat/2017/images/201709s2p4a.png" alt="Imatge relacionada amb la pregunta" width="900">

                Un aerogenerador està format per un rotor amb tres pales, un multiplicador d’engranatges i un generador elèctric. L’aerogenerador té una relació de transmissió \\(τ = ω2/ω1 = 90\\) i el 
                seu sistema de control permet que la potència elèctrica generada es mantingui constant,
\\(P_{elèctr} = 1,5 \\; \\text{MW}\\), per a una velocitat de gir del rotor \\(15 \\; \\text{min}^{–1} ≤ n_{1} ≤ 25 \\text{min}^{–1\\). El rendiment del
generador és \\(η_{gen} = 0,85\\) i el parell màxim a l’eix d’entrada del multiplicador és \\(Γ_{1} = 1 600 \\; \\text{kN m}\\).
Si la potència generada es manté constant, determineu:
              
                <br><strong>a)</strong> La potència \\(P_{2}\\) i el parell màxim \\(Γ_{2}\\) a l’eix de sortida del multiplicador. [1 punt]
                <br><strong>b)</strong> El rendiment del multiplicador \\(η_{mult}\\) quan el parell al seu eix d’entrada és màxim. [1 punt]
                <br><strong>c)</strong> La potència dissipada en el multiplicador \\(P_{mult}\\) i en el generador \\(P_{gen}\\) quan el parell a l’eix d’entrada del multiplicador és màxim. [0,5 punts]
                <br><br>
                `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Potència i parell màxim:</strong>
            <br> 
            \\[
            P_{2} = \\frac{P_{elèctric}}{η_{gen}} = \\frac{1500 \\; \\text{kW}}{0,85} = 1764,71 \\; \\text{kW}
            \\]
            \\[
            τ = \\frac{\\omega _{2}}{\\omega _{2}} = \\frac{Γ_{1}}{Γ_{2}}  \\; \\text{&#8594} \\; Γ_{2} = \\frac{Γ_{1}}{τ}
            \\]
            \\[
            Γ_{2} = \\frac{Γ_{1}}{τ} = \\frac{1600 \\; \\text{kNm}}{90} = 17,78 \\; \\text{kNm}
            \\]
            <br>
            <strong>b) Rendiment de multiplicador:</strong>
            <br>
            \\[
            \\omega _{1} = n_{1} \\cdot \\frac{2 \\pi}{60} = 15 \\cdot \\frac{2 \\pi}{60} = 1,57 \\; \\text{rad/s}
            \\]
            \\[
            P_{1} = Γ_{1} \\cdot \\omega _{1} = 1600 \\cdot 1,571 = 2513,27 \\; \\text{kW}
            \\]
            \\[
            η_{mult} = \\frac{P_2}{P_1} = \\frac{1764,71}{2513,27} = 0,702 = 70,2 \\; \\%
            \\]
            <br>
            <strong>c) Potències disipades:</strong>
            <br>
            \\[
            P_{mult} = P_{1} - P_{2} = 2513,27 - 1764,71 = 748,56 \\; \\text{kW}
            \\]
            \\[
            P_{mult} = P_{2} - P_{elèctr} = 1764,71 - 1500 = 264,71 \\; \\text{kW}
            \\]
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "materials",
        text: `
                <img src="https://ecastro4.github.io/tecno/selectivitat/2017/images/201709s2p3b.png" alt="Imatge relacionada amb la pregunta" width="900">

                S’està preparant una maqueta d’un nou equipament esportiu per a una població. La
maqueta està formada per diferents peces que s’elaboren amb una impressora 3D, una de
les quals és una rampa per a patinadors com la que es mostra en la figura. La impressora
fabrica la figura massissa de plàstic a còpia d’anar dipositant capes horitzontals de gruix
\\(e = 0,2 \\; \\text{mm}\\). S’alimenta amb un filament de PLA (àcid polilàctic) de diàmetre \\(d = 3 \\; \\text{mm}\\) i densitat \\(ρ = 1 250 \\; \\text{kg}/m^{3}\\)
 que passa per un extrusor on s’escalfa i es prem per a poder-lo dipositar
adequadament. Determineu:
              
                <br><strong>a)</strong> El volum \\(V\\) i la massa m del sòlid construït. [1 punt]
                <br><strong>b)</strong> La longitud \\(L\\) de filament de PLA utilitzat. [1 punt]
                <br><strong>c)</strong> El nombre mínim \\(n\\) de capes que ha de dipositar la impressora. [0,5 punts]
                <br><br>
                `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Potència i parell màxim:</strong>
            <br> 
            \\[
            A_{p} = (L_{1} \\cdot L_{2}) + \\frac{L_{1} + L_{3}}{2} \\cdot (L_{4} - 2L_{2}) + (L_{3} \\cdot L_{2})
            \\]
            \\[
            A_{p} = (15 \\cdot 30) + \\frac{15 + 40}{2} \\cdot (120 - 60) + (40 \\cdot 30) = 3300 \\; \\text{mm}^{2}
            \\]
            \\[
            V = A_{p} \\cdot L_{3} = 3300 \\cdot 40 = 132000 \\; \\text{mm}^{3}
            \\]
            \\[
            m = ρ \\cdot V = 0,00125 \\; \\text{g/mm}^{3} \\cdot 132000 \\; \\text{mm}^{3} = 165 \\; \\text{g}
            \\]
            <br>
            <strong>b) Longitud filament:</strong>
            <br>
            \\[
            L = \\frac{V}{\\pi \\cdot 1,5^{2}} = \\frac{132000}{\\pi \\cdot 1,5^{2}} = 18674 \\; \\text{mm}
            \\]
            \\[
            n = \\frac{L_{3}}{e} = \\frac{40}{0,2} = 200 \\; \\text{capes}
            \\]
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "pneumatica",
        text: `
                Un ascensor hidràulic d’acció directa funciona mitjançant un cilindre hidràulic connectat directament a la part inferior de la cabina de l’ascensor en direcció vertical. El cilindre té
un diàmetre interior \\(d_{int} = 100 \\; \\text{mm}\\) i el diàmetre de la tija és \\(d_{tija} = 65 \\, \\text{mm}\\). La massa conjunta
de la cabina i la càrrega és \\(m = 1 250 \\; \\text{kg}\\), i les altres masses es consideren negligibles. Quan el
cilindre manté la cabina i la càrrega en repòs, determineu:
              
                <br><strong>a)</strong> La força \\(F_{ch}\\) que fa el cilindre hidràulic i la pressió relativa \\(p_{int}\\) a l’interior del cilindre. [1 punt]
                <br><strong>b)</strong> La tensió normal a compressió \\(σ\\) de la tija. [0,5 punts]
                <br>Quan l’ascensor eleva la mateixa càrrega a una velocitat constant \\(v\\), una bomba subministra un cabal d’oli \\(q = 2,5 \\; \\text{L/s}\\) al cilindre a una pressió \\(p = 1,94 \\; \\text{MPa}\\). Per a aquesta situació, determineu:
                <br><strong>c)</strong> La velocitat \\(v\\) d’ascens de la càrrega en m/s. [0,5 punts]
                <br><strong>d)</strong> La potència \\(P_h\\) que proporciona la bomba i el rendiment \\(η\\) del cilindre hidràulic. [0,5 punts]
                <br><br>
                `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Força del cilindre:</strong>
            <br> 
            \\[
            F_{ch} = m \\cdot g = 1250 \\cdot 9,81 = 12250 \\, \\text{N}
            \\]
            \\[
            p_{int} = \\frac{F_{ch}}{A_int} = \\frac{F_{ch}}{\\frac{\\pi \\cdot d^{2}_{int}}{4}} = \\frac{12250}{\\frac{\\pi \\cdot 0,2^{2}}{4}} = 1,56 \\cdot 10^{6} \\; \\text{Pa} = 1,56 \\cdot 10 \\; \\text{MPa}
            \\]
            <br>
            <strong>b) Tensió normal:</strong>
            <br>
            \\[
            σ = \\frac{F_{ch}}{A_tija} = \\frac{F_{ch}}{\\frac{\\pi \\cdot d^{2}_{tija}}{4}} = \\frac{12250}{\\frac{\\pi \\cdot 0,065^{2}}{4}} = 3,69 \\cdot 10^{6} \\; \\text{Pa} = 3,69 \\cdot 10 \\; \\text{MPa}
            \\]
            <br>
            <strong>c) Velocitat d'ascens:</strong>
            <br>
            \\[
            V = \\frac{q}{\\frac{\\pi \\cdot d^{2}_{int}}{4}} = \\frac{12250}{\\frac{\\pi \\cdot 0,2^{2}}{4}} = 0,318 \\; \\text{m/s}
            \\]
            <br>
            <strong>d) potència bomba:</strong>
            <br>
            \\[
            P_{h} = p \\cdot q = 1,94 \\cdot 10^{6} \\cdot 0,0025 = 4850 \\; \\text{W}
            \\]
            \\[
            η = \\frac{F_{ch} \\cdot v}{P_{h}} = \\frac{12250 \\cdot 0,318}{4850} = 0,803 = 80,3 \\; \\%
            \\]
            <br><br>
            `
    },
    {
        type: "exercicis",
        category: "pneumatica",
        text: `
               En una pràctica de tecnologia, un alumne llança horitzontalment una bola de plataner de \\(10 \\; \\text{g}\\) a una 
               velocitat de \\(4 \\; \\text{m/s}\\). Per fer-ho, aplica una força amb el braç durant un recorregut de \\(0,5 \\; \\text{m}\\) en un 
               temps de \\(0,2 \\; \\text{s}\\). Finalment, la bola xoca contra una paperera amb una força de \\(2 \\; \\text{N}\\) sobre una superfície 
               d'impacte de \\(100 \\; \\text{mm}^{2}\\).
              
                <br><strong>a)</strong>  L'energia cinètica \\(E_c\\) de la bola en sortir de la mà.
                <br><strong>b)</strong> El treball \\(W\\) realitzat pel braç i la potència \\(P\\) mitjana del llançament.
                <br><strong>c)</strong> L'esforç de compressió \\(\\sigma\\) en l'impacte, expressat en MPa.
                <br><br>
                `, 
        correctAnswer: "",  // No és necessari aquí perquè es tracta d'un exercici obert
        steps: `
            <strong>a) Energia cinètica:</strong>
            <br> 
            \\[
            E_{c} = 0,5 \\cdot m \\cdot v^{2} = 0,5 \\cdot 0,01 \\cdot 4 = 0,08 \\; \\text{J}
            \\]
            <br>
            <strong>b) Treball i potència:</strong>
            <br>
            \\[
            W = \\Delta E_{c} = 0,08 \\; \\text{J}
            \\]
            \\[
            P = \\frac{W}{t} = \\frac{0,08}{0,2} = 0,4 \\; \\text{W}
            \\]
            <br>
            <strong>c) Esforç:</strong>
            <br>
            \\[
            \\sigma = \\frac{F}{A} = \\frac{2}{100} = 0,02 \\; \\text{N/mm}^{2} = \\; 0,02\\text{MPa}
            \\]
            <br><br>
            `
    },
];
