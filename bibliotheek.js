/*
  BIBLIOTHEEK VAN MAATREGELEN EN STANDAARDINSTELLINGEN
  ----------------------------------------------------
  Dit is het enige bestand dat je hoeft aan te passen om maatregelen of
  standaardwaarden te wijzigen. Bewerk het in GitHub met het potlood-icoon.

  Domeinen (codes):
    pt = Openbaar vervoer     am = Actieve mobiliteit    rw = Thuiswerken
    cp = Carpoolen            ev = Elektrisch rijden

  Elke maatregel is een regel met deze velden, in deze volgorde:
    1. code
    2. groep (zie "ambiti" hieronder)
    3. domeinen: bv. "pt" of "pt,am.5"  (.5 = telt daar voor de helft)
    4. soort: "s" = specifiek (sterren), "t" = overkoepelend (%), "p" = randvoorwaarde (geen effect)
    5. naam Italiaans   6. naam Nederlands   7. naam Engels   8. naam Duits
    9. alleen bij soort "t": standaardpercentage (1 t/m 5)

  Let op: elke regel eindigt met een komma, tekst staat tussen dubbele aanhalingstekens.
*/
window.BIBLIOTHEEK = {

  standaard: {
    // Maximale realisatie per domein, in procenten
    max: { pt: 40, am: 35, rw: 50, cp: 25, ev: 30 },
    // Punten voor 1, 2, 3, 4 en 5 sterren
    punten: [1, 3, 8, 15, 30],
    // Aantal punten waarmee een domein 100% van zijn maximum bereikt
    volledig: 50,
    // Maximum van alle overkoepelende maatregelen samen, in procentpunten
    maxOverkoepelend: 10
  },

  ambiti: {
    tc: { it: "Trasporto collettivo", nl: "Collectief vervoer", en: "Collective transport", de: "Kollektiver Verkehr" },
    ap: { it: "Auto e parcheggi", nl: "Auto en parkeren", en: "Car and parking", de: "Auto und Parken" },
    tp: { it: "Trasporto pubblico", nl: "Openbaar vervoer", en: "Public transport", de: "Öffentlicher Verkehr" },
    bi: { it: "Bici e mobilità attiva", nl: "Fiets en actieve mobiliteit", en: "Cycling and active mobility", de: "Rad und aktive Mobilität" },
    rl: { it: "Lavoro da remoto e flessibilità", nl: "Thuiswerken en flexibiliteit", en: "Remote work and flexibility", de: "Homeoffice und Flexibilität" },
    fi: { it: "Incentivi finanziari", nl: "Financiële prikkels", en: "Financial incentives", de: "Finanzielle Anreize" },
    cc: { it: "Comportamento e comunicazione", nl: "Gedrag en communicatie", en: "Behaviour and communication", de: "Verhalten und Kommunikation" },
    is: { it: "Infrastrutture e strutture", nl: "Infrastructuur en voorzieningen", en: "Infrastructure and facilities", de: "Infrastruktur und Einrichtungen" },
    pp: { it: "Politiche e processi", nl: "Beleid en processen", en: "Policies and processes", de: "Richtlinien und Prozesse" }
  },

  maatregelen: [
    ["M01","tc","pt","s","Bus aziendale / navetta","Bedrijfsbus / pendelbus","Company bus / shuttle","Werksbus / Shuttle"],
    ["M02","tc","cp","s","Piattaforma carpooling","Carpoolplatform","Carpooling platform","Mitfahrplattform"],
    ["M03","tc","cp","s","Auto condivisa (pool aziendale)","Deelauto (bedrijfspool)","Shared car (company pool)","Poolfahrzeug (Firmenpool)"],
    ["M04","tc","pt,am.5","s","Integrazione MaaS","MaaS-integratie","MaaS integration","MaaS-Integration"],
    ["M05","tc","cp,pt.5","s","Taxi pool per servizi irregolari","Taxipool bij onregelmatige diensten","Taxi pool for irregular shifts","Taxipool für unregelmäßige Schichten"],
    ["M06","ap","pt.5,am.5,cp.5","s","Parcheggio regolamentato / a pagamento","Gereguleerd / betaald parkeren","Regulated / paid parking","Reguliertes / kostenpflichtiges Parken"],
    ["M07","ap","pt.5,am.5,cp.5","s","Riduzione posti auto","Minder parkeerplaatsen","Fewer parking spaces","Weniger Parkplätze"],
    ["M08","ap","ev","s","Infrastruttura ricarica EV","Laadinfrastructuur elektrische auto's","EV charging infrastructure","Ladeinfrastruktur für E-Autos"],
    ["M09","ap","cp","s","Parcheggi preferenziali carpooling","Voorrangsparkeren carpoolers","Preferential carpool parking","Vorzugsparkplätze für Fahrgemeinschaften"],
    ["M10","ap","pt.5,am.5,cp.5","s","Differenziazione rimborso km","Gedifferentieerde kilometervergoeding","Differentiated mileage allowance","Differenzierte Kilometerpauschale"],
    ["M11","ap","","t","Campagna senz'auto","Autovrije campagne","Car-free campaign","Autofrei-Kampagne",1],
    ["M12","ap","ev","s","Limitazioni leasing sostenibili","Duurzame leaseregeling","Sustainable leasing policy","Nachhaltige Leasing-Richtlinie"],
    ["M13","ap","pt,am.5","s","Supporto dipendenti senza auto","Ondersteuning medewerkers zonder auto","Support for employees without a car","Unterstützung für Mitarbeitende ohne Auto"],
    ["M14","tp","pt","s","Rimborso abbonamenti TP","Vergoeding OV-abonnement","Public transport pass reimbursement","Erstattung ÖV-Abonnement"],
    ["M15","tp","pt","s","Gestione centr. abbonamenti TP","Centraal beheer OV-abonnementen","Central management of PT passes","Zentrale Verwaltung ÖV-Abos"],
    ["M16","tp","pt","s","Bonus TP per utilizzo dimostrabile","Bonus bij aantoonbaar OV-gebruik","Bonus for proven PT use","Bonus für nachweisliche ÖV-Nutzung"],
    ["M17","tp","pt","s","Lobbying connessioni TP","Lobby voor OV-verbindingen","Lobbying for PT connections","Einsatz für bessere ÖV-Anbindung"],
    ["M18","tp","pt,am.5","s","Facilitare primo/ultimo miglio","Eerste/laatste kilometer faciliteren","First/last mile solutions","Erste/letzte Meile erleichtern"],
    ["M19","tp","pt","s","Info TP in tempo reale in loco","Actuele OV-informatie op locatie","Real-time PT info on site","Echtzeit-ÖV-Info vor Ort"],
    ["M20","tp","pt","s","Navetta treno / abbonamento gruppo","Shuttle naar station / groepsabonnement","Station shuttle / group pass","Bahnhofsshuttle / Gruppenabo"],
    ["M21","bi","am","s","Postazione sorvegliata","Bewaakte fietsenstalling","Secure bike parking","Bewachte Fahrradabstellanlage"],
    ["M22","bi","am","s","Spogliatoi e docce","Kleedkamers en douches","Changing rooms and showers","Umkleiden und Duschen"],
    ["M23","bi","am","s","Rimborso km ciclisti","Fietskilometervergoeding","Cycling mileage allowance","Fahrrad-Kilometerpauschale"],
    ["M24","bi","am","s","Contributo acquisto bici / e-bike","Bijdrage aanschaf fiets / e-bike","Bike / e-bike purchase subsidy","Zuschuss Fahrrad- / E-Bike-Kauf"],
    ["M25","bi","am","s","Bike sharing aziendale","Bedrijfsdeelfietsen","Company bike sharing","Firmen-Bikesharing"],
    ["M26","bi","am","s","Campagna bici al lavoro","Campagne fietsen naar het werk","Bike-to-work campaign","Kampagne Mit dem Rad zur Arbeit"],
    ["M27","bi","am","s","Ciclofficina in sede","Fietsenmaker op locatie","On-site bike repair service","Fahrradwerkstatt vor Ort"],
    ["M28","bi","am","s","Incentivo camminata","Beloning lopen","Walking incentive","Anreiz fürs Zufußgehen"],
    ["M29","bi","am","s","Pianificatore percorsi ciclabili","Fietsrouteplanner","Cycle route planner","Radroutenplaner"],
    ["M30","bi","am","s","Regime leasing e-bike","Leaseregeling e-bike","E-bike leasing scheme","E-Bike-Leasing"],
    ["M31","rl","rw","s","Telelavoro strutturale","Structureel thuiswerken","Structural remote working","Strukturelles Homeoffice"],
    ["M32","rl","rw","s","Indennità telelavoro","Thuiswerkvergoeding","Remote working allowance","Homeoffice-Pauschale"],
    ["M33","rl","pt.5,am.5","s","Orari di lavoro flessibili","Flexibele werktijden","Flexible working hours","Flexible Arbeitszeiten"],
    ["M34","rl","rw,pt.5,am.5","s","Uffici satellite","Satellietkantoren","Satellite offices","Satellitenbüros"],
    ["M35","rl","rw","s","Postazioni fless. / clean desk","Flexplekken / clean desk","Flexible desks / clean desk","Flexible Arbeitsplätze / Clean Desk"],
    ["M36","rl","rw","s","Settimana compressa (4 giorni)","Gecomprimeerde werkweek (4 dagen)","Compressed week (4 days)","Komprimierte Woche (4 Tage)"],
    ["M37","rl","","p","Videoconferenza al posto del viaggio","Videovergaderen in plaats van reizen","Video calls instead of travel","Videokonferenz statt Reise"],
    ["M38","fi","pt.5,am.5,cp.5","s","Budget mobilità","Mobiliteitsbudget","Mobility budget","Mobilitätsbudget"],
    ["M39","fi","pt.5,am.5,cp.5","s","Modello cafeteria","Cafetariamodel","Cafeteria plan","Cafeteria-Modell"],
    ["M40","fi","pt.5,am.5,cp.5","s","Bonus senza auto","Bonus zonder auto","Car-free bonus","Bonus ohne Auto"],
    ["M41","fi","pt.5,am.5,cp.5","s","Rimborso comportamenti sostenibili","Vergoeding duurzaam reisgedrag","Reimbursement of sustainable travel","Erstattung nachhaltiger Mobilität"],
    ["M42","fi","","t","Sistema premi modal shift","Beloningssysteem modal shift","Modal shift reward system","Belohnungssystem Modal Shift",4],
    ["M43","fi","pt.5,am.5","s","Sussidi e agevolazioni fiscali","Subsidies en fiscale regelingen","Subsidies and tax benefits","Zuschüsse und Steuervorteile"],
    ["M44","cc","","p","Indagine sulla mobilità","Mobiliteitsonderzoek","Mobility survey","Mobilitätsumfrage"],
    ["M45","cc","","t","Programma onboarding mobilità","Onboardingprogramma mobiliteit","Mobility onboarding programme","Mobilitäts-Onboarding",1],
    ["M46","cc","","p","Assumere un mobility manager","Mobility manager aanstellen","Appoint a mobility manager","Mobilitätsmanager einstellen"],
    ["M47","cc","am","s","Formazione sicurezza stradale","Training verkeersveiligheid","Road safety training","Verkehrssicherheitstraining"],
    ["M48","cc","","t","Gamification cambio comportamento","Gamification gedragsverandering","Behaviour change gamification","Gamification zur Verhaltensänderung",3],
    ["M49","cc","","t","Ambasciatori interni","Interne ambassadeurs","Internal ambassadors","Interne Botschafter",1],
    ["M50","cc","","t","Campagna comunicaz. modal shift","Communicatiecampagne modal shift","Modal shift communication campaign","Kommunikationskampagne Modal Shift",1],
    ["M51","cc","","t","Registro tragitti / diario mobilità","Reisregistratie / mobiliteitsdagboek","Trip log / mobility diary","Fahrtenprotokoll / Mobilitätstagebuch",1],
    ["M52","is","am","s","Percorsi ciclabili e illuminazione","Fietspaden en verlichting","Cycle paths and lighting","Radwege und Beleuchtung"],
    ["M53","is","am","s","Stazione riparazione bici in loco","Fietsreparatiepunt op locatie","On-site bike repair station","Fahrrad-Reparaturstation vor Ort"],
    ["M54","is","am","s","Armadietti per ciclisti","Kluisjes voor fietsers","Lockers for cyclists","Spinde für Radfahrende"],
    ["M55","is","pt","s","Miglioramento fermate TP","Verbetering OV-haltes","Improved PT stops","Verbesserte ÖV-Haltestellen"],
    ["M56","is","cp,pt.5","s","Parcheggi P+R per carpooler","P+R voor carpoolers","P+R for carpoolers","P+R für Fahrgemeinschaften"],
    ["M57","is","am","s","Colonnine ricarica e-bike","Laadpunten e-bike","E-bike charging points","E-Bike-Ladestationen"],
    ["M58","is","pt,am.5","s","Accessibilità per disabili","Toegankelijkheid voor mensen met een beperking","Accessibility for people with disabilities","Barrierefreiheit"],
    ["M59","pp","","p","Elaborare e presentare il PSCL","Mobiliteitsplan (PSCL) opstellen","Draft and submit the commuting plan (PSCL)","Mobilitätsplan (PSCL) erstellen"],
    ["M60","pp","","p","Programma monitoraggio e KPI","Monitoring en KPI's","Monitoring and KPIs","Monitoring und KPIs"],
    ["M61","pp","cp,pt.5","s","Collab. aziende limitrofe (MUSA)","Samenwerking met naburige bedrijven","Cooperation with neighbouring companies","Kooperation mit Nachbarunternehmen"],
    ["M62","pp","","p","Politica mobilità nel CCNL","Mobiliteitsbeleid in de cao","Mobility policy in collective agreement","Mobilitätspolitik im Tarifvertrag"],
    ["M63","pp","","t","Implementare piattaforma mobilità","Mobiliteitsplatform implementeren","Implement a mobility platform","Mobilitätsplattform einführen",2],
    ["M64","pp","","t","Coinvolgere dipendenti nelle misure","Medewerkers betrekken bij maatregelen","Involve employees in measures","Mitarbeitende einbeziehen",1],
    ["M65","pp","pt,am,cp.5","s","Scelta sede e politica insediativa","Locatiekeuze en vestigingsbeleid","Site selection and location policy","Standortwahl und Ansiedlungspolitik"],
  ]
};
