export const researchQuestions = [
  "How can legitimate sensor behaviour be represented using causal temporal and physical-consistency features to support the detection of manipulated sensor values?",
  "How do lightweight anomaly-detection methods compare with a statistical baseline in terms of precision, recall, F1-score, false-alarm rate, and detection delay across different forms and levels of sensor-data manipulation?",
  "What trade-offs arise between detection quality (F1-score, false-alarm rate, detection delay) and edge-resource consumption (inference latency, CPU usage, memory usage) on a resource-constrained IoT gateway?",
];

export const researchMethods = [
  "Modified Z-score (statistical baseline)",
  "Isolation Forest",
  "One-Class SVM",
];

export const researchScenarios = [
  "Spike / false-data injection",
  "Persistent bias",
  "Gradual drift",
  "Stuck / frozen values",
];

export const repositoryUrl = "https://github.com/Elkaza/secure-edge-ai-iot-gateway";

export const projectText = {
  de: {
    back: "Zur Forschungsübersicht",
    statusLine: "MIO-3-Masterprojekt / geplante Masterarbeitsrichtung",
    programmeLine: "FH Technikum Wien · MSc Internet of Things & Intelligent Systems",
    scopeDate: "Aktueller Forschungsumfang: Oktober 2026",
    approvalNote: "Der Themenumfang ist noch nicht als Masterarbeit formal genehmigt.",
    overviewTitle: "Forschungsproblem",
    overview:
      "Das Projekt untersucht die Integrität von Sensordaten auf der Anwendungs- und Payload-Ebene eines authentifizierten MQTT-Sensorsystems. Im Mittelpunkt steht die Frage, ob ein ressourcenbeschränktes Edge Gateway verdächtige semantische Veränderungen in Messwerten erkennen kann, obwohl die Nachricht von einem legitimen, authentifizierten und autorisierten Gerät stammt. Es geht weder um die Umgehung der MQTT-Authentifizierung noch darum, gewöhnliche Umweltabweichungen als Angriff zu klassifizieren.",
    objectiveTitle: "Forschungsziel",
    objective:
      "Geplant ist ein reproduzierbares Testbed, in dem eine statistische Baseline und zwei leichtgewichtige Verfahren auf demselben Raspberry Pi 5 verglichen werden. Jedes Verfahren wird einzeln auf kontrolliert manipulierten Sensorströmen evaluiert.",
    threatTitle: "Bedrohungsmodell",
    threat:
      "TLS, MQTT-Client-Authentifizierung und Topic-ACLs werden vorausgesetzt. Das betrachtete Szenario ist ein legitimer Sensorknoten, der kompromittiert wurde oder aus einem anderen Grund syntaktisch gültige, aber manipulierte Messwerte sendet. Transport- und Zugriffssicherheit sind bestehende Kontrollen und nicht Teil der Experimente.",
    questionsTitle: "Forschungsfragen",
    draft: "Aktueller Forschungsumfang · Oktober 2026",
    architectureTitle: "Systemarchitektur",
    architecture:
      "ASAIR AM2302 → ESP32-S3-DevKitC-1 → Wi-Fi / authentifiziertes MQTT → kontrollierte Manipulationsschicht im isolierten Testbed → Raspberry Pi 5 → Vorverarbeitung und kausale, zeitliche sowie physikalische Konsistenzmerkmale → ein unabhängig ausgewähltes Verfahren → Anomaly Score / Sicherheitsentscheidung → Experimentprotokollierung.",
    experimentTitle: "Experimenteller Ablauf",
    experiment:
      "Zuerst werden lokale ESP32-S3-/AM2302-Messungen für legitimes Verhalten erfasst. Anschließend werden gelabelte Manipulationen mit unterschiedlicher Stärke, Rate oder Dauer eingespeist. Die statistische Baseline, Isolation Forest und One-Class SVM werden getrennt ausgeführt und mit denselben Erkennungs- und Ressourcenmetriken verglichen.",
    methodsTitle: "Erkennungsverfahren",
    methods:
      "Die Modified-Z-Score-Baseline, Isolation Forest und One-Class SVM werden als unabhängige Detektoren verglichen. Sie stimmen nicht gemeinsam ab und bilden kein Ensemble.",
    scenariosTitle: "Kontrollierte Manipulationen",
    scenarios:
      "Die Manipulationsstärke ist eine experimentelle Variable. Stärke, Rate oder Dauer werden von offensichtlich bis subtil variiert. Alle Versuche finden ausschließlich im isolierten Forschungstestbed statt.",
    optionalReplay: "Replay (optional)",
    platformTitle: "Testplattform",
    software: "Software / Protokolle",
    hardware: "Kernhardware",
    hardwareItems: ["Raspberry Pi 5", "ESP32-S3-DevKitC-1", "ASAIR AM2302"],
    optionalHardware:
      "Ein Arduino Nano 33 BLE Sense Rev2 kann optional als nicht manipulierter Referenzsensor für Cross-Sensor-Konsistenz eingesetzt werden. Er ist keine Voraussetzung für den Kernversuch.",
    dataTitle: "Daten",
    dataIntro:
      "Die Kerndaten werden lokal mit ESP32-S3 und AM2302 erhoben. Zusätzlich kann ein historischer Datensatz verwendet werden, ohne die Sicherheitslabels der kontrollierten Versuche zu ersetzen.",
    dataItems: [
      "Bevorzugt: autorisierte historische FH-Umwelt- oder Wetterdaten, falls der Zugang genehmigt wird",
      "Öffentlicher Fallback: AIRWISE",
      "Ground-Truth-Sicherheitslabels existieren nur für bewusst injizierte Manipulationen",
      "Umweltanomalien sind nicht automatisch Cybersecurity-Angriffe",
    ],
    evaluationTitle: "Evaluierung",
    evaluation:
      "Jedes Verfahren wird separat bewertet. Die Auswertung verbindet Erkennungsqualität mit dem Ressourcenverbrauch auf dem Edge Gateway.",
    detection: "Erkennung",
    resources: "Edge-Ressourcen",
    boundaryTitle: "Umfang und Sicherheit",
    boundaryItems: [
      "Manipulationsexperimente finden ausschließlich in einem isolierten Forschungstestbed statt.",
      "Angriffe gegen die FH-Produktionsinfrastruktur sind ausgeschlossen.",
      "Das Projekt ist kein allgemeines IoT-Intrusion-Detection-System.",
      "Ein Anomaly- oder Security-Alert zeigt verdächtiges Verhalten, ist aber kein Beweis für böswillige Absicht.",
      "Wi-Fi-, TLS- und MQTT-Zugriffsschutz werden vorausgesetzt und nicht angegriffen.",
    ],
    statusTitle: "Aktueller Stand",
    available: "Definiert / vorhanden",
    next: "Nächste Schritte",
    availableItems: [
      "Forschungsumfang vom Oktober 2026 definiert",
      "Raspberry Pi 5, ESP32-S3 und ASAIR AM2302 vorhanden",
      "Systemarchitektur und experimenteller Ablauf entworfen",
    ],
    nextItems: [
      "Formale Abstimmung des Umfangs und Klärung des FH-Datenzugangs",
      "Testbed-Aufbau und lokale Datenerfassung",
      "Feature-Definition und getrennte Detektor-Experimente",
      "Erkennungs- und Ressourcenmessung auf dem Raspberry Pi 5",
    ],
    fullSize: "Diagramm in Originalgröße öffnen",
  },
  en: {
    back: "Back to research",
    statusLine: "MIO-3 Master's Project / planned Master's thesis direction",
    programmeLine: "FH Technikum Wien · MSc Internet of Things & Intelligent Systems",
    scopeDate: "Current research scope: October 2026",
    approvalNote: "This scope has not received final formal approval as a Master's thesis topic.",
    overviewTitle: "Research problem",
    overview:
      "This project studies sensor-data integrity at the application and payload layer of an authenticated MQTT sensor system. It asks whether a resource-constrained edge gateway can flag suspicious semantic changes in sensor values when a message comes from a legitimate, authenticated and authorised device. It does not study bypassing MQTT authentication, and it does not treat ordinary environmental variation as an attack.",
    objectiveTitle: "Research objective",
    objective:
      "The plan is to build a reproducible testbed and compare one statistical baseline with two lightweight detection methods on the same Raspberry Pi 5. Each method will be evaluated separately on controlled, manipulated sensor streams.",
    threatTitle: "Threat model",
    threat:
      "TLS, MQTT client authentication and topic ACLs are assumed to be in place. The threat is a legitimate sensor node that has been compromised or otherwise sends manipulated but syntactically valid measurements. Transport and access security are existing controls, not experimental targets.",
    questionsTitle: "Research questions",
    draft: "Current research scope · October 2026",
    architectureTitle: "System architecture",
    architecture:
      "ASAIR AM2302 → ESP32-S3-DevKitC-1 → Wi-Fi / authenticated MQTT → controlled manipulation layer in the isolated testbed → Raspberry Pi 5 → preprocessing and causal temporal and physical-consistency features → one independently selected detector → anomaly score / security decision → experiment logging.",
    experimentTitle: "Experimental procedure",
    experiment:
      "Local ESP32-S3 and AM2302 measurements will first establish legitimate behaviour. Labelled manipulations will then be introduced at different magnitudes, rates or durations. The statistical baseline, Isolation Forest and One-Class SVM will run separately and be compared using the same detection and resource metrics.",
    methodsTitle: "Detection methods",
    methods:
      "The modified Z-score baseline, Isolation Forest and One-Class SVM will be compared as independent detectors. They will not vote together and will not form an ensemble.",
    scenariosTitle: "Controlled manipulations",
    scenarios:
      "Attack subtlety is an experimental variable. Magnitude, rate or duration will range from obvious to subtle. All manipulation experiments will take place only inside the isolated research testbed.",
    optionalReplay: "Replay (optional)",
    platformTitle: "Experimental platform",
    software: "Software / protocols",
    hardware: "Core hardware",
    hardwareItems: ["Raspberry Pi 5", "ESP32-S3-DevKitC-1", "ASAIR AM2302"],
    optionalHardware:
      "An Arduino Nano 33 BLE Sense Rev2 may be used as an unmanipulated reference sensor for cross-sensor consistency. It is not required for the core experiment.",
    dataTitle: "Data",
    dataIntro:
      "The core dataset will be collected locally with the ESP32-S3 and AM2302. An additional historical dataset may be used, but it will not replace the security labels from controlled experiments.",
    dataItems: [
      "Preferred: authorised historical FH environmental or weather data, if access is granted",
      "Public fallback: AIRWISE",
      "Ground-truth security labels exist only for deliberately injected manipulations",
      "Environmental anomalies are not automatically cybersecurity attacks",
    ],
    evaluationTitle: "Evaluation",
    evaluation:
      "Each method will be evaluated separately. The analysis will relate detection quality to resource consumption on the edge gateway.",
    detection: "Detection",
    resources: "Edge resources",
    boundaryTitle: "Scope and safety",
    boundaryItems: [
      "Manipulation experiments will take place only in an isolated research testbed.",
      "Attacks against FH production infrastructure are out of scope.",
      "This is not a general-purpose IoT intrusion-detection project.",
      "An anomaly or security alert indicates suspicious behaviour, not proof of malicious intent.",
      "Wi-Fi, TLS and MQTT access controls are assumed and will not be attacked.",
    ],
    statusTitle: "Current status",
    available: "Defined / available",
    next: "Next steps",
    availableItems: [
      "October 2026 research scope defined",
      "Raspberry Pi 5, ESP32-S3 and ASAIR AM2302 available",
      "System architecture and experimental procedure drafted",
    ],
    nextItems: [
      "Formal scope alignment and FH data-access decision",
      "Testbed setup and local data collection",
      "Feature definition and separate detector experiments",
      "Detection and resource measurements on Raspberry Pi 5",
    ],
    fullSize: "Open original-size diagram",
  },
};
