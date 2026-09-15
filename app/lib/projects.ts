import { Locale } from "../i18n/messages";

type LocalizedString = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type ProjectCategory =
    | "featured-aiot"
    | "platform-component"
    | "security-infrastructure"
    | "delivery-platform";

export type ProjectStatus =
    | "live"
    | "implemented"
    | "demonstrated-prototype"
    | "academic-prototype"
    | "in-progress"
    | "planned";

export type ProjectHighlight = {
    value: LocalizedString;
    label: LocalizedString;
};

export interface Project {
    slug: string;
    category: ProjectCategory;
    status: ProjectStatus;
    year: string;
    title: LocalizedString;
    oneLiner: LocalizedString;
    seoDescription?: LocalizedString;
    overview: LocalizedString;
    problem: LocalizedString;
    solution: LocalizedString;
    architecture: {
        node: LocalizedString;
        edge: LocalizedString;
        cloud: LocalizedString;
    };
    architectureLabels?: {
        node: LocalizedString;
        edge: LocalizedString;
        cloud: LocalizedString;
    };
    security: LocalizedString;
    reliability: LocalizedString;
    keyFeatures: LocalizedList;
    results: LocalizedList;
    lessons?: LocalizedList;
    hybridLab?: {
        title: LocalizedString;
        overview: LocalizedString;
        implementation: LocalizedList;
        validation: LocalizedList;
        scopeNote: LocalizedString;
    };
    highlights?: ProjectHighlight[];
    tech: string[];
    tags: string[];
    links: { label: string; url: string }[];
    images?: string[];
    diagrams?: {
        title: LocalizedString;
        caption: LocalizedString;
        alt?: LocalizedString;
        summary?: LocalizedList;
        src: string;
    }[];
    relatedProjectSlug?: string;
}

const loc = (en: string, de = en, ar = en): LocalizedString => ({ en, de, ar });
const locList = (en: string[], de = en, ar = en): LocalizedList => ({ en, de, ar });

export const projects: Project[] = [
    {
        slug: "edgeguardian-edge-ai-safety-bubble",
        category: "featured-aiot",
        status: "demonstrated-prototype",
        year: "2026",
        title: loc(
            "EdgeGuardian: Edge AI Safety Bubble for Machine Monitoring",
            "EdgeGuardian: Edge-AI-Sicherheitszone für Maschinenüberwachung"
        ),
        oneLiner: loc(
            "EdgeGuardian is a local monitoring prototype that combines camera-based person detection with LiDAR distance measurements and classifies the current state as SAFE, WARNING or ALERT.",
            "EdgeGuardian ist ein lokaler Monitoring-Prototyp, der kamerabasierte Personenerkennung mit LiDAR-Distanzmessungen kombiniert und den aktuellen Zustand als SAFE, WARNING oder ALERT klassifiziert."
        ),
        overview: loc(
            "EdgeGuardian turns a desk into a representative machine danger zone and creates a local AI safety bubble around it. The system combines Hailo-accelerated YOLO person detection, LiDAR distance confirmation, Raspberry Pi sensor fusion, ESP32 serial actuation, a browser dashboard, Telegram alert handling, and CSV logs.",
            "EdgeGuardian nutzt einen Schreibtisch als repräsentative Maschinen-Gefahrenzone und erzeugt darum eine lokale AI-Sicherheitszone. Das System kombiniert Hailo-beschleunigte YOLO-Personenerkennung, LiDAR-Distanzbestätigung, Raspberry-Pi-Sensorfusion, ESP32-Serial-Aktuatorik, Browser-Dashboard, Telegram-Alerting und CSV-Logs."
        ),
        problem: loc(
            "Machine areas become dangerous when a person enters the operating zone of moving parts. A cloud-only camera pipeline would add latency, privacy concerns, and network dependency, while camera-only detection cannot reliably confirm physical distance.",
            "Maschinenbereiche werden gefährlich, wenn Personen in den Arbeitsbereich beweglicher Teile gelangen. Eine reine Cloud-Kamera-Pipeline würde Latenz, Datenschutzrisiken und Netzabhängigkeit erzeugen; reine Kameraerkennung bestätigt zudem keine physische Distanz."
        ),
        solution: loc(
            "I implemented the decision loop on a Raspberry Pi 5. The camera pipeline detects the person class with YOLO on the Hailo-8L accelerator, the Hokuyo LiDAR provides measured distance, and the fusion script applies confidence thresholds, stale-data checks, and hysteresis before sending state commands to the ESP32 and updating the dashboard.",
            "Ich habe die Entscheidungslogik auf einem Raspberry Pi 5 umgesetzt. Die Kamera-Pipeline erkennt die Klasse Person mit YOLO auf dem Hailo-8L-Beschleuniger, der Hokuyo-LiDAR liefert die gemessene Distanz, und das Fusionsskript nutzt Confidence-Schwellen, Stale-Data-Prüfung und Hysterese, bevor ESP32-Kommandos und Dashboard-Updates erzeugt werden."
        ),
        architectureLabels: {
            node: loc("Sensing and actuation", "Sensorik und Aktuatorik"),
            edge: loc("Edge fusion", "Edge-Fusion"),
            cloud: loc("Logs and outputs", "Ausgaben und Protokolle"),
        },
        architecture: {
            node: loc(
                "Raspberry Pi camera / AI camera, Hokuyo URG-04LX-UG01 LiDAR, and ESP32-S3 serial endpoint provide visual detection input, physical distance confirmation, and actuator validation.",
                "Raspberry-Pi-Kamera / AI Camera, Hokuyo URG-04LX-UG01 LiDAR und ESP32-S3-Serial-Endpunkt liefern visuelle Erkennung, physische Distanzbestätigung und Aktuatornachweis."
            ),
            edge: loc(
                "The Raspberry Pi 5 runs the fusion loop, parses Hailo detection output, reads LiDAR distance, applies SAFE/WARNING/ALERT thresholds, and logs every decision.",
                "Der Raspberry Pi 5 führt die Fusion aus, verarbeitet Hailo-Erkennungsdaten, liest LiDAR-Distanzen, wendet SAFE/WARNING/ALERT-Schwellen an und protokolliert jede Entscheidung."
            ),
            cloud: loc(
                "The system stays local for safety decisions while showing the current state through a browser dashboard, optional Telegram module, terminal output, and final CSV logs.",
                "Die Sicherheitsentscheidung bleibt lokal; der aktuelle Zustand wird über Browser-Dashboard, optionales Telegram-Modul, Terminalausgabe und finale CSV-Logs sichtbar gemacht."
            ),
        },
        security: loc(
            "The design keeps camera inference and safety decisions on the local edge device rather than sending video to a cloud service. Configuration examples avoid private Telegram secrets, and the dashboard reads logs without streaming camera frames.",
            "Das Design hält Kamera-Inferenz und Sicherheitsentscheidungen lokal auf dem Edge-Gerät, statt Videodaten an einen Cloud-Dienst zu senden. Beispielkonfigurationen vermeiden private Telegram-Secrets, und das Dashboard liest Logs ohne Kamera-Streaming."
        ),
        reliability: loc(
            "Confidence filtering, LiDAR stale-data protection, 3-frame ALERT hysteresis, 5-frame SAFE recovery, Telegram cooldown, and CSV event logs make the prototype more stable and explainable during a live demonstration.",
            "Confidence-Filter, LiDAR-Stale-Data-Schutz, 3-Frame-ALERT-Hysterese, 5-Frame-SAFE-Recovery, Telegram-Cooldown und CSV-Event-Logs machen den Prototyp stabiler und in der Live-Demo nachvollziehbar."
        ),
        keyFeatures: locList(
            [
                "Hailo-8L accelerated YOLO person detection on Raspberry Pi 5",
                "Hokuyo LiDAR distance confirmation for camera-LiDAR sensor fusion",
                "SAFE/WARNING/ALERT state machine with hysteresis and stale-data checks",
                "ESP32-S3 serial command test for actuator integration",
                "Dark browser dashboard reading live CSV logs with last update age and event table",
                "Final logs and outputs with Hailo, LiDAR, fusion, dashboard, ESP32, and Telegram traces",
            ],
            [
                "Hailo-8L-beschleunigte YOLO-Personenerkennung auf Raspberry Pi 5",
                "Hokuyo-LiDAR-Distanzbestätigung für Kamera-LiDAR-Sensorfusion",
                "SAFE/WARNING/ALERT-State-Machine mit Hysterese und Stale-Data-Prüfung",
                "ESP32-S3-Serial-Kommandos als Aktuatornachweis",
                "Dark-Mode-Browser-Dashboard mit Live-CSV-Logs, Update-Alter und Event-Tabelle",
                "Finale Ausgaben und Protokolle mit Hailo-, LiDAR-, Fusion-, Dashboard-, ESP32- und Telegram-Traces",
            ]
        ),
        results: locList(
            [
                "Demonstrated end-to-end local edge AI safety monitoring with camera, LiDAR, embedded actuation, dashboard, and logs",
                "Demo captured SAFE -> WARNING -> ALERT -> SAFE transitions at about 30 FPS",
                "Real-mode logs captured continuous Raspberry Pi decisions from hardware inputs",
                "Dashboard reason cards and CSV logs made the state transitions traceable during the demo",
            ],
            [
                "End-to-End lokale Edge-AI-Sicherheitsüberwachung mit Kamera, LiDAR, Embedded-Aktuatorik, Dashboard und Logs demonstriert",
                "Demo mit SAFE -> WARNING -> ALERT -> SAFE-Übergängen bei etwa 30 FPS erfasst",
                "Real-Mode-Logs mit kontinuierlichen Raspberry-Pi-Entscheidungen aus Hardware-Inputs protokolliert",
                "Dashboard-Reason-Cards und CSV-Logs machten die Zustandswechsel während der Demo nachvollziehbar",
            ]
        ),
        highlights: [
            { value: loc("~30 FPS", "~30 FPS"), label: loc("Demo throughput", "Demo-Durchsatz") },
            { value: loc("Local inference", "Lokale Inferenz"), label: loc("Raspberry Pi 5 + Hailo-8L", "Raspberry Pi 5 + Hailo-8L") },
            { value: loc("Camera + LiDAR", "Kamera + LiDAR"), label: loc("Fused sensing", "Fusionierte Sensorik") },
            { value: loc("SAFE → WARNING → ALERT → SAFE", "SAFE → WARNING → ALERT → SAFE"), label: loc("Demonstrated state sequence", "Demonstrierte Zustandsfolge") },
        ],
        tech: ["Raspberry Pi 5", "Hailo-8L", "YOLOv8n", "Hokuyo LiDAR", "ESP32-S3", "Python", "Flask"],
        tags: ["Edge AI", "AIoT", "Sensor Fusion", "Raspberry Pi", "Embedded"],
        links: [
            { label: "GitHub", url: "https://github.com/Elkaza/edgeguardian-edge-ai-safety-bubble" },
        ],
        diagrams: [
            {
                title: loc("System Context", "Systemkontext"),
                caption: loc(
                    "Camera and LiDAR inputs are processed locally on the Raspberry Pi 5 with Hailo acceleration, then fused into SAFE/WARNING/ALERT outputs for dashboard visualization, ESP32 actuation, optional Telegram alerts, and CSV logs.",
                    "Kamera- und LiDAR-Inputs werden lokal auf dem Raspberry Pi 5 mit Hailo-Beschleunigung verarbeitet und zu SAFE/WARNING/ALERT-Ausgaben für Dashboard, ESP32-Aktuatorik, optionale Telegram-Alerts und CSV-Logs fusioniert."
                ),
                summary: locList(
                    [
                        "Local-only inference path: camera frames and LiDAR distance stay on the Raspberry Pi runtime",
                        "Separate outputs: dashboard, CSV logs, optional Telegram, and ESP32 actuation test",
                        "Safety decision model is visible through SAFE/WARNING/ALERT state transitions",
                    ],
                    [
                        "Lokaler Inferenzpfad: Kameraframes und LiDAR-Distanz bleiben in der Raspberry-Pi-Runtime",
                        "Getrennte Ausgaben und Protokolle: Dashboard, CSV-Logs, optional Telegram und ESP32-Aktuatornachweis",
                        "Die Sicherheitsentscheidung wird über SAFE/WARNING/ALERT-Zustandswechsel sichtbar",
                    ]
                ),
                src: "/project-diagrams/edgeguardian-system-context.png",
            },
            {
                title: loc("Container / Deployment View", "Container- / Deployment-Ansicht"),
                caption: loc(
                    "Physical sensors feed a Raspberry Pi 5 runtime with Hailo-accelerated person detection, fusion logic, ESP32 serial actuation, dashboard visualization, optional Telegram alerts, and logs.",
                    "Physische Sensoren speisen eine Raspberry-Pi-5-Runtime mit Hailo-beschleunigter Personenerkennung, Fusionslogik, ESP32-Serial-Aktuatorik, Dashboard-Visualisierung, optionalen Telegram-Alerts und Logs."
                ),
                summary: locList(
                    [
                        "Hailo detection output and LiDAR distance converge in the fusion script",
                        "Hysteresis, stale-data checks, and thresholds sit before actuation or alerting",
                        "Dashboard and final test artefacts make the demo inspectable after the run",
                    ],
                    [
                        "Hailo-Erkennung und LiDAR-Distanz laufen im Fusionsskript zusammen",
                        "Hysterese, Stale-Data-Prüfung und Schwellwerte liegen vor Aktuatorik oder Alerting",
                        "Dashboard und finale Testartefakte machen die Demo nachträglich prüfbar",
                    ]
                ),
                src: "/project-diagrams/edgeguardian-container-deployment.png",
            },
        ],
        relatedProjectSlug: "tinyml-vibration-anomaly-detection",
    },
    {
        slug: "tinyml-vibration-anomaly-detection",
        category: "featured-aiot",
        status: "academic-prototype",
        year: "2026",
        title: loc(
            "TinyML Vibration Anomaly Detection on Arduino Nano 33 BLE Sense Rev2",
            "TinyML-Vibrationsanomalie-Erkennung auf Arduino Nano 33 BLE Sense Rev2"
        ),
        oneLiner: loc(
            "A lightweight softmax model classifies local IMU windows as NORMAL or ANOMALY and triggers ALERT after three consecutive anomaly windows.",
            "Ein leichtgewichtiges Softmax-Modell klassifiziert lokale IMU-Fenster als NORMAL oder ANOMALY und löst nach drei aufeinanderfolgenden Anomaliefenstern einen ALERT aus."
        ),
        overview: loc(
            "This TinyML project demonstrates the full node-device pipeline: synthetic IMU data generation, 20-feature vibration extraction, offline Python training, C++ header export, and continuous inference on the Arduino Nano 33 BLE Sense Rev2.",
            "Dieses TinyML-Projekt zeigt die komplette Node-Device-Pipeline: synthetische IMU-Datengenerierung, Extraktion von 20 Vibrationsfeatures, Offline-Training in Python, C++-Header-Export und kontinuierliche Inferenz auf dem Arduino Nano 33 BLE Sense Rev2."
        ),
        problem: loc(
            "Small fans and motors can develop abnormal vibration before failure. A node device should detect this locally with low memory use, no cloud dependency, and a clear live output for the operator.",
            "Kleine Lüfter und Motoren können vor einem Ausfall auffällige Vibrationen entwickeln. Ein Node-Device soll dies lokal, speicherschonend, ohne Cloud-Abhängigkeit und mit klarer Live-Ausgabe erkennen."
        ),
        solution: loc(
            "I generated balanced synthetic vibration windows, extracted 20 statistical features from 2-second IMU windows, trained a two-class softmax model, exported means, standard deviations, weights, and biases into model_parameters.h, and implemented the same processing path in Arduino C++.",
            "Ich habe balancierte synthetische Vibrationsfenster erzeugt, 20 statistische Features aus 2-Sekunden-IMU-Fenstern extrahiert, ein zweiklassiges Softmax-Modell trainiert, Mittelwerte, Standardabweichungen, Gewichte und Biases nach model_parameters.h exportiert und denselben Verarbeitungspfad in Arduino-C++ umgesetzt."
        ),
        architectureLabels: {
            node: loc("Node device", "Node-Device"),
            edge: loc("Training workstation", "Training-Umgebung"),
            cloud: loc("Outputs", "Ausgaben"),
        },
        architecture: {
            node: loc(
                "The Arduino Nano 33 BLE Sense Rev2 reads onboard accelerometer data at 100 Hz, stores 2-second rolling windows, extracts features, runs inference, prints Serial Monitor output, and lights the LED on ALERT.",
                "Der Arduino Nano 33 BLE Sense Rev2 liest Beschleunigungsdaten mit 100 Hz, speichert 2-Sekunden-Rolling-Windows, extrahiert Features, führt Inferenz aus, druckt Serial-Monitor-Ausgabe und schaltet bei ALERT die LED."
            ),
            edge: loc(
                "Python generates the dataset, trains the model offline, validates performance, and exports the model parameters into a small C++ header.",
                "Python generiert den Datensatz, trainiert das Modell offline, validiert die Performance und exportiert die Modellparameter in einen kleinen C++-Header."
            ),
            cloud: loc(
                "No cloud is required during inference; the laptop is only used for programming, compiling, and viewing the Serial Monitor during the demo.",
                "Während der Inferenz ist keine Cloud erforderlich; der Laptop dient nur zum Programmieren, Kompilieren und Anzeigen des Serial Monitors in der Demo."
            ),
        },
        security: loc(
            "The device processes motion locally and does not transmit sensor data. The design keeps the demo self-contained and avoids credentials, network dependency, or external services.",
            "Das Gerät verarbeitet Bewegungsdaten lokal und überträgt keine Sensordaten. Das Design bleibt in der Demo eigenständig und vermeidet Credentials, Netzabhängigkeit und externe Services."
        ),
        reliability: loc(
            "The sketch uses overlapping windows, normalized features, an anomaly probability threshold of 0.60, and a 3-window ALERT persistence rule so a single accidental bump does not immediately become a final alert.",
            "Der Sketch nutzt überlappende Fenster, normalisierte Features, eine Anomalie-Schwelle von 0.60 und eine 3-Fenster-ALERT-Persistenz, damit ein einzelner Störimpuls nicht sofort einen finalen Alarm auslöst."
        ),
        keyFeatures: locList(
            [
                "100 Hz IMU sampling with 2-second windows and 50% overlap",
                "20 lightweight vibration features from X/Y/Z axes and combined magnitude",
                "Two-class softmax classifier exported directly to C++ without a large inference runtime",
                "Serial Monitor output for time, state, probabilities, persistence counter, and latency",
                "Built-in LED alert after 3 consecutive anomaly windows",
                "Compact model footprint suitable for microcontroller deployment",
            ],
            [
                "100-Hz-IMU-Sampling mit 2-Sekunden-Fenstern und 50% Überlappung",
                "20 leichtgewichtige Vibrationsfeatures aus X/Y/Z-Achsen und kombinierter Magnitude",
                "Zweiklassiger Softmax-Klassifikator direkt als C++ exportiert, ohne große Inferenz-Runtime",
                "Serial-Monitor-Ausgabe für Zeit, Zustand, Wahrscheinlichkeiten, Persistenzzähler und Latenz",
                "Onboard-LED-Alarm nach 3 aufeinanderfolgenden Anomaliefenstern",
                "Kompakter Modell-Footprint für Microcontroller-Deployment",
            ]
        ),
        results: locList(
            [
                "Reached 98.61% offline test accuracy on the synthetic balanced dataset",
                "Measured about 1 ms inference latency in the Arduino Serial Monitor",
                "Compiled at 12% flash usage and 19% RAM usage on the Nano 33 BLE Sense Rev2",
                "Live demo showed stable board as NORMAL, tap/shake as ANOMALY, sustained movement as ALERT, and recovery to NORMAL",
            ],
            [
                "98,61 % Offline-Testgenauigkeit auf dem synthetischen balancierten Datensatz erreicht",
                "ca. 1 ms Inferenzlatenz im Arduino Serial Monitor gemessen",
                "Kompiliert mit 12 % Flash- und 19 % RAM-Nutzung auf dem Nano 33 BLE Sense Rev2",
                "Live-Demo zeigte stabiles Board als NORMAL, Tippen/Schütteln als ANOMALY, anhaltende Bewegung als ALERT und Rückkehr zu NORMAL",
            ]
        ),
        highlights: [
            { value: loc("98.61%", "98,61 %"), label: loc("Offline test accuracy · synthetic dataset", "Offline-Testgenauigkeit · synthetischer Datensatz") },
            { value: loc("~1 ms", "~1 ms"), label: loc("Measured inference latency", "Gemessene Inferenzlatenz") },
            { value: loc("12% flash · 19% RAM", "12 % Flash · 19 % RAM"), label: loc("Compiled resource usage", "Kompilierte Ressourcennutzung") },
        ],
        tech: ["Arduino Nano 33 BLE Sense Rev2", "C++", "Python", "TinyML", "IMU", "Softmax"],
        tags: ["TinyML", "Embedded", "Arduino", "Signal Processing", "AIoT"],
        links: [
            { label: "GitHub", url: "https://github.com/Elkaza/tinyml-vibration-anomaly-detection" },
        ],
        diagrams: [
            {
                title: loc("TinyML Training and Local Inference Flow", "TinyML-Training und lokaler Inferenzfluss"),
                caption: loc(
                    "End-to-end TinyML architecture for vibration anomaly detection: offline Python training, C++ model parameter export, Arduino deployment, local IMU sampling, softmax inference, Serial Monitor output, and built-in LED alerting.",
                    "End-to-End-TinyML-Architektur für Vibrationsanomalie-Erkennung: Offline-Training in Python, C++-Parameterexport, Arduino-Deployment, lokales IMU-Sampling, Softmax-Inferenz, Serial-Monitor-Ausgabe und Built-in-LED-Alerting."
                ),
                summary: locList(
                    [
                        "Separates offline training/export from the runtime path so it is clear that no cloud inference is used",
                        "Shows the embedded runtime loop: 100 Hz sampling, 2-second windows, 50% overlap, 20 features, normalization, softmax inference, thresholding, and persistence",
                        "Includes the project result: 98.61% offline accuracy, about 1 ms inference latency, 12% flash usage, and 19% RAM usage",
                    ],
                    [
                        "Trennt Offline-Training/Export vom Runtime-Pfad und macht klar, dass keine Cloud-Inferenz genutzt wird",
                        "Zeigt den Embedded-Runtime-Loop: 100-Hz-Sampling, 2-Sekunden-Fenster, 50% Überlappung, 20 Features, Normalisierung, Softmax-Inferenz, Schwellwert und Persistenz",
                        "Enthält die Projektnachweise: 98,61 % Offline-Genauigkeit, ca. 1 ms Inferenzlatenz, 12 % Flash-Nutzung und 19 % RAM-Nutzung",
                    ]
                ),
                src: "/project-diagrams/tinyml-vibration-anomaly-architecture.svg",
            },
        ],
        relatedProjectSlug: "edgeguardian-edge-ai-safety-bubble",
    },
    {
        slug: "austria-tourism-dashboard",
        category: "delivery-platform",
        status: "implemented",
        year: "2026",
        title: loc(
            "Austria Tourism Dashboard: Seasonal Overnight-Stay Analysis",
            "Österreich-Tourismus-Dashboard: Saisonale Nächtigungsanalyse"
        ),
        oneLiner: loc(
            "Combined the provided tourism CSV tables, calculated seasonal aggregates, and produced a one-page HTML dashboard and written analysis report.",
            "Die bereitgestellten Tourismus-CSV-Tabellen kombiniert, saisonale Kennzahlen berechnet und ein einseitiges HTML-Dashboard sowie einen schriftlichen Analysebericht erstellt."
        ),
        overview: loc(
            "The dashboard was created for a data analysis assignment using Austrian accommodation statistics by country of origin and federal state. It combines semicolon-separated source tables, calculates seasonal metrics, and presents the results through an interactive static dashboard and short submission report.",
            "Das Dashboard entstand für eine Data-Analysis-Aufgabe mit österreichischen Beherbergungsstatistiken nach Herkunftsland und Bundesland. Es kombiniert semikolon-getrennte Quelltabellen, berechnet saisonale Kennzahlen und präsentiert die Ergebnisse in einem interaktiven statischen Dashboard und Kurzbericht."
        ),
        problem: loc(
            "Raw tourism CSV tables are difficult to inspect directly and do not tell a clear story about seasonal importance, origin countries, or regional hotspots. The task required a concise dashboard that promotes one tourism season using appropriate visuals and analysis.",
            "Rohe Tourismus-CSV-Tabellen sind schwer direkt auswertbar und erzählen keine klare Story über saisonale Bedeutung, Herkunftsländer oder regionale Schwerpunkte. Gefordert war ein kompaktes Dashboard, das eine Tourismussaison mit geeigneten Visualisierungen und Analyse bewirbt."
        ),
        solution: loc(
            "I built a barebones but performant Python pipeline that loads and combines the provided CSV files, derives seasonal aggregates, prepares summary metrics, exports dashboard-ready data, and renders a polished one-page HTML report with charts, widgets, and explanatory text.",
            "Ich habe eine schlanke und performante Python-Pipeline gebaut, die die bereitgestellten CSV-Dateien lädt und kombiniert, saisonale Aggregate ableitet, Summary-Metriken vorbereitet, dashboardfähige Daten exportiert und einen sauberen einseitigen HTML-Report mit Charts, Widgets und Erklärtext rendert."
        ),
        architectureLabels: {
            node: loc("Data sources", "Datenquellen"),
            edge: loc("Processing", "Verarbeitung"),
            cloud: loc("Presentation", "Präsentation"),
        },
        architecture: {
            node: loc(
                "Semicolon-separated CSV tables from Austrian accommodation statistics provide overnight stays by country of origin and federal states.",
                "Semikolon-getrennte CSV-Tabellen der österreichischen Beherbergungsstatistik liefern Nächtigungen nach Herkunftsland und Bundesländern."
            ),
            edge: loc(
                "Python combines the files, cleans fields, computes seasonal totals, ranks countries and regions, and exports summary metrics.",
                "Python kombiniert die Dateien, bereinigt Felder, berechnet Saison-Summen, rankt Herkunftsländer und Regionen und exportiert Summary-Metriken."
            ),
            cloud: loc(
                "The final artifact is a static HTML dashboard and report that can be opened locally or hosted as a lightweight web page.",
                "Das finale Artefakt ist ein statisches HTML-Dashboard samt Bericht, das lokal geöffnet oder als leichtgewichtige Webseite gehostet werden kann."
            ),
        },
        security: loc(
            "The dashboard uses public statistical data and static generated artifacts, so it avoids database credentials, live APIs, and user data collection.",
            "Das Dashboard nutzt öffentliche Statistikdaten und statisch generierte Artefakte; dadurch entfallen Datenbank-Credentials, Live-APIs und Nutzerdatenerfassung."
        ),
        reliability: loc(
            "The pipeline writes combined CSV files, summary JSON, dashboard HTML, widget exports, and a submission report so the analysis can be reproduced and inspected from multiple artifacts.",
            "Die Pipeline schreibt kombinierte CSV-Dateien, Summary-JSON, Dashboard-HTML, Widget-Exports und einen Submission-Report, sodass die Analyse reproduzierbar und aus mehreren Artefakten prüfbar ist."
        ),
        keyFeatures: locList(
            [
                "Combines multiple semicolon-separated tourism tables into one analysis dataset",
                "Ranks important origin countries and Austrian federal states",
                "Uses multiple chart types and text widgets to explain seasonal tourism patterns",
                "Generates dashboard HTML, submission report, metrics JSON, and image exports",
                "Runs with lightweight Python and static web output rather than a heavy BI stack",
            ],
            [
                "Kombiniert mehrere semikolon-getrennte Tourismustabellen zu einem Analysedatensatz",
                "Rankt wichtige Herkunftsländer und österreichische Bundesländer",
                "Nutzt mehrere Visualisierungstypen und Text-Widgets zur Erklärung saisonaler Tourismusmuster",
                "Generiert Dashboard-HTML, Submission-Report, Metrics-JSON und Bild-Exports",
                "Läuft mit leichtgewichtigem Python und statischem Web-Output statt schwerem BI-Stack",
            ]
        ),
        results: locList(
            [
                "Combined the provided tourism CSV tables, calculated seasonal aggregates, and produced a one-page HTML dashboard and written analysis report.",
                "Generated dashboard HTML, metrics JSON, image exports, and a submission report from one Python workflow",
                "Kept the output static so the result can be opened locally without a database or BI server",
            ],
            [
                "Die bereitgestellten Tourismus-CSV-Tabellen kombiniert, saisonale Kennzahlen berechnet und ein einseitiges HTML-Dashboard sowie einen schriftlichen Analysebericht erstellt.",
                "Dashboard-HTML, Metrics-JSON, Bild-Exports und Submission-Report aus einem Python-Workflow generiert",
                "Die Ausgabe statisch gehalten, sodass das Ergebnis lokal ohne Datenbank oder BI-Server geöffnet werden kann",
            ]
        ),
        tech: ["Python", "HTML", "CSS", "Data Analysis", "CSV", "Static Dashboard"],
        tags: ["Data Analysis", "Dashboard", "Python", "Tourism Data"],
        links: [
            { label: "GitHub", url: "https://github.com/Elkaza/austria-tourism-dashboard" },
        ],
    },
    {
        slug: "random-walk-gravity-regression",
        category: "platform-component",
        status: "implemented",
        year: "2026",
        title: loc(
            "Random Walk Gravity Regression Case Study",
            "Random-Walk-Gravity-Regression-Fallstudie"
        ),
        oneLiner: loc(
            "Built and validated a regression pipeline that predicts the gravity constant behind a 2D random-walk simulation and exports a competition-style validation file.",
            "Entwickelt und validiert eine Regressionspipeline, die die Gravitationskonstante einer 2D-Random-Walk-Simulation vorhersagt und eine wettbewerbsartige Validierungsdatei exportiert."
        ),
        overview: loc(
            "This data analysis case study focuses on supervised regression for simulation-derived data. The workflow reads the training dataset, engineers features, compares multiple regression models, selects the best performer, and writes predictions for the unlabeled validation set in the required submission format.",
            "Diese Data-Analysis-Fallstudie behandelt überwachtes Regressionslernen auf simulationsbasierten Daten. Der Workflow liest den Trainingsdatensatz, erstellt Features, vergleicht mehrere Regressionsmodelle, wählt das beste Modell aus und schreibt Vorhersagen für das ungelabelte Validierungsset im geforderten Abgabeformat."
        ),
        problem: loc(
            "The validation set contains features but no labels, so the model must learn the relationship between random-walk behavior and the hidden gravity constant from the labeled training data while meeting strict file-format requirements.",
            "Das Validierungsset enthält Features, aber keine Labels. Das Modell muss daher aus den gelabelten Trainingsdaten den Zusammenhang zwischen Random-Walk-Verhalten und versteckter Gravitationskonstante lernen und gleichzeitig strikte Dateiformat-Anforderungen erfüllen."
        ),
        solution: loc(
            "I created a reproducible notebook and helper Python module, used train/test validation, compared at least four regression approaches, selected a HistGradientBoostingRegressor, and generated the final io25m025_validate.txt file with run_id and gravity predictions.",
            "Ich habe ein reproduzierbares Notebook und ein Helper-Python-Modul erstellt, Train/Test-Validierung genutzt, mindestens vier Regressionsansätze verglichen, einen HistGradientBoostingRegressor ausgewählt und die finale io25m025_validate.txt-Datei mit run_id- und gravity-Vorhersagen erzeugt."
        ),
        architectureLabels: {
            node: loc("Dataset", "Datensatz"),
            edge: loc("Modeling", "Modellierung"),
            cloud: loc("Submission", "Abgabe"),
        },
        architecture: {
            node: loc(
                "The training CSV provides labeled simulation features; the validation CSV provides the same feature structure without gravity labels.",
                "Das Trainings-CSV liefert gelabelte Simulationsfeatures; das Validierungs-CSV liefert dieselbe Feature-Struktur ohne Gravity-Labels."
            ),
            edge: loc(
                "The Python pipeline prepares features, splits training and test data, evaluates several regressors, and keeps reusable code in a helper module.",
                "Die Python-Pipeline bereitet Features vor, teilt Trainings- und Testdaten, bewertet mehrere Regressoren und hält wiederverwendbaren Code in einem Helper-Modul."
            ),
            cloud: loc(
                "The final artifact is a plain-text validation file with exactly the required header and prediction rows, plus notebook and HTML report output.",
                "Das finale Artefakt ist eine Plain-Text-Validierungsdatei mit exakt gefordertem Header und Vorhersagezeilen, ergänzt durch Notebook- und HTML-Report-Ergebnis."
            ),
        },
        security: loc(
            "The project uses local CSV files only and keeps the validation workflow deterministic and inspectable; no external service or credential is required.",
            "Das Projekt nutzt ausschließlich lokale CSV-Dateien und hält den Validierungsworkflow deterministisch und prüfbar; externe Services oder Credentials sind nicht erforderlich."
        ),
        reliability: loc(
            "The submission file was checked for row count, header format, duplicate run IDs, missing values, validation-order consistency, and prediction range before packaging.",
            "Die Abgabedatei wurde vor dem Packaging auf Zeilenanzahl, Header-Format, doppelte run_ids, fehlende Werte, Validierungsreihenfolge und Vorhersagebereich geprüft."
        ),
        keyFeatures: locList(
            [
                "Feature preparation and reusable helper module for regression experiments",
                "Comparison of multiple regression models with train/test evaluation",
                "Final prediction export using the required student-ID naming convention",
                "Notebook and HTML report documenting the pipeline and model choice",
                "Validation checks for header, row count, missing values, duplicates, and run_id alignment",
            ],
            [
                "Feature-Aufbereitung und wiederverwendbares Helper-Modul für Regressionsexperimente",
                "Vergleich mehrerer Regressionsmodelle mit Train/Test-Evaluation",
                "Finaler Prediction-Export mit geforderter Student-ID-Namenskonvention",
                "Notebook und HTML-Report dokumentieren Pipeline und Modellauswahl",
                "Validierungschecks für Header, Zeilenanzahl, fehlende Werte, Duplikate und run_id-Ausrichtung",
            ]
        ),
        results: locList(
            [
                "Best held-out model reached about 1.19% normalized MAE and R² of 0.9914",
                "Generated a valid io25m025_validate.txt file for the unlabeled validation set",
                "Packaged code, notebook, HTML report, PDF instruction, and prediction file for submission",
            ],
            [
                "Bestes Hold-out-Modell erreichte etwa 1,19 % normalisierte MAE und R² von 0,9914",
                "Gültige io25m025_validate.txt-Datei für das ungelabelte Validierungsset generiert",
                "Code, Notebook, HTML-Report, PDF-Instruktion und Prediction-Datei für die Abgabe paketiert",
            ]
        ),
        highlights: [
            { value: loc("R² 0.9914", "R² 0,9914"), label: loc("Best held-out model", "Bestes Hold-out-Modell") },
            { value: loc("~1.19%", "~1,19 %"), label: loc("Normalized MAE", "Normalisierte MAE") },
        ],
        tech: ["Python", "scikit-learn", "Pandas", "Jupyter", "Regression", "Feature Engineering"],
        tags: ["Machine Learning", "Regression", "Python", "Data Analysis"],
        links: [
            { label: "GitHub", url: "https://github.com/Elkaza/random-walk-gravity-regression" },
        ],
    },
    {
        slug: "enterprise-self-hosted-infrastructure",
        category: "security-infrastructure",
        status: "live",
        year: "2026",
        title: loc(
            "Hybrid Self-Hosted Infrastructure & Operations",
            "Hybride Self-Hosted-Infrastruktur & Betrieb"
        ),
        oneLiner: loc(
            "An Ansible-managed hybrid infrastructure lab that separates public ingress from private administration across Linux and Windows systems, with Azure Arc governance, monitoring and tested recovery.",
            "Ein mit Ansible verwaltetes hybrides Infrastrukturlabor, das öffentlichen Ingress von privater Administration über Linux- und Windows-Systeme hinweg trennt – mit Azure-Arc-Governance, Monitoring und getesteter Wiederherstellung."
        ),
        seoDescription: loc(
            "Engineering case study of a hybrid Linux and Windows infrastructure lab using Proxmox, Docker, Ansible over Tailscale, Azure Arc governance, monitoring and tested recovery.",
            "Technische Fallstudie zu einem hybriden Linux- und Windows-Infrastrukturlabor mit Proxmox, Docker, Ansible über Tailscale, Azure-Arc-Governance, Monitoring und getesteter Wiederherstellung."
        ),
        overview: loc(
            "The lab spans a Public Edge VPS, an on-site Proxmox and Debian platform, and an external Windows Server environment. Tailscale carries private administration and the edge-to-application path; Git and Ansible provide version-controlled desired state and automated Linux and Windows configuration. Azure Arc adds outbound-only inventory and governance without hosting the managed systems.",
            "Das Labor umfasst einen Public Edge VPS, eine lokale Proxmox- und Debian-Plattform sowie eine externe Windows-Server-Umgebung. Tailscale transportiert die private Administration und den Edge-to-Application-Pfad; Git und Ansible liefern versionierten Sollzustand sowie automatisierte Linux- und Windows-Konfiguration. Azure Arc ergänzt ausgehend angebundene Inventarisierung und Governance, ohne die verwalteten Systeme zu hosten."
        ),
        problem: loc(
            "Selected web workloads needed a controlled public entry point while administration remained private across local and external compute. The environment also needed repeatable Linux and Windows configuration, runtime visibility, protected backups with recovery evidence, and cross-environment governance without moving the systems into Azure.",
            "Ausgewählte Web-Workloads benötigten einen kontrollierten öffentlichen Einstieg, während die Administration über lokale und externe Compute-Ressourcen hinweg privat bleiben sollte. Zusätzlich waren wiederholbare Linux- und Windows-Konfiguration, Runtime-Sichtbarkeit, geschützte Backups mit Wiederherstellungsnachweis und umgebungsübergreifende Governance erforderlich, ohne die Systeme nach Azure zu verlagern."
        ),
        solution: loc(
            "Git stores the desired configuration and operational documentation. Ansible applies Linux configuration through SSH and Windows configuration through WinRM over Tailscale. Relevant changes are reviewed with syntax checks, check mode and diffs before application; assertions, post-change verification and repeated runs cover connectivity-sensitive firewall, SSH and RDP changes. The Administration Controller also acts as the first canary for reviewed Linux hardening changes.",
            "Git speichert den gewünschten Konfigurationszustand und die Betriebsdokumentation. Ansible wendet Linux-Konfiguration über SSH und Windows-Konfiguration über WinRM via Tailscale an. Relevante Änderungen werden vor der Anwendung mit Syntaxprüfungen, Check Mode und Diffs geprüft; Assertions, Post-Change-Verifikation und wiederholte Läufe decken konnektivitätssensitive Firewall-, SSH- und RDP-Änderungen ab. Der Administration Controller dient außerdem als erster Canary für geprüfte Linux-Hardening-Änderungen."
        ),
        architectureLabels: {
            node: loc("Public application traffic", "Öffentlicher Anwendungsverkehr"),
            edge: loc("Private management traffic", "Privater Managementverkehr"),
            cloud: loc("Azure Arc control plane", "Azure-Arc-Steuerungsebene"),
        },
        architecture: {
            node: loc(
                "Internet traffic follows public DNS to the Public Edge VPS, then ports 80 and 443 are forwarded over the encrypted Tailscale path to the On-site Server, Nginx Proxy Manager and an approved application container.",
                "Internetverkehr folgt dem öffentlichen DNS zum Public Edge VPS; anschließend werden die Ports 80 und 443 über den verschlüsselten Tailscale-Pfad zum On-site Server, zu Nginx Proxy Manager und einem freigegebenen Anwendungscontainer weitergeleitet."
            ),
            edge: loc(
                "The Administration Controller reaches managed Linux systems through SSH and the Hybrid Windows Lab through WinRM over Tailscale; RDP and the private IIS site remain on the same private administration network.",
                "Der Administration Controller erreicht verwaltete Linux-Systeme über SSH und das Hybrid Windows Lab über WinRM via Tailscale; RDP und die private IIS-Seite bleiben im selben privaten Administrationsnetz."
            ),
            cloud: loc(
                "The On-site Debian Server and Hybrid Windows Lab connect outbound over HTTPS port 443 to Azure Arc for hybrid inventory, resource visibility and Azure Resource Graph; no inbound Azure Arc management port is required.",
                "Der On-site Debian Server und das Hybrid Windows Lab verbinden sich ausgehend über HTTPS-Port 443 mit Azure Arc für Hybrid-Inventarisierung, Ressourcensichtbarkeit und Azure Resource Graph; ein eingehender Azure-Arc-Managementport ist nicht erforderlich."
            ),
        },
        security: loc(
            "The security model uses defense in depth: public ingress is separated from administration, management paths use Tailscale, and host firewalls restrict inbound access. The Public Edge VPS uses UFW and Fail2ban; the On-site Server combines UFW with Docker-aware firewall policy. On Windows, Microsoft Defender and Windows Firewall remain enabled, RDP requires Network Level Authentication, WinRM Basic authentication and unencrypted communication are disabled, SMBv1 is disabled, insecure SMB guest logons are blocked, and IIS remains private.",
            "Das Sicherheitsmodell folgt Defense in Depth: Öffentlicher Ingress ist von der Administration getrennt, Managementpfade nutzen Tailscale und Host-Firewalls beschränken eingehende Zugriffe. Der Public Edge VPS verwendet UFW und Fail2ban; der On-site Server kombiniert UFW mit einer Docker-aware Firewall-Policy. Unter Windows bleiben Microsoft Defender und Windows Firewall aktiv, RDP erfordert Network Level Authentication, WinRM Basic Authentication und unverschlüsselte Kommunikation sind deaktiviert, SMBv1 ist abgeschaltet, unsichere SMB-Gastanmeldungen sind blockiert und IIS bleibt privat."
        ),
        reliability: loc(
            "Uptime Kuma monitors service availability, Netdata provides host metrics, and CrowdSec contributes threat and security visibility. A recurring systemd health check covers disk state and backup freshness, with operational notifications sent through Telegram.\n\nThe backup workflow uses fail-fast execution, locking, atomic archive publication, restricted permissions, integrity checks and SHA-256 checksum sidecars. Recovery checks go beyond backup creation: Restic repository integrity and full-data-read checks passed, PostgreSQL was restored to an isolated temporary container with 50 application tables present, and ClickHouse filesystem extraction was verified before temporary plaintext staging data was removed.",
            "Uptime Kuma überwacht die Service-Verfügbarkeit, Netdata liefert Host-Metriken und CrowdSec ergänzt Bedrohungs- und Security-Sichtbarkeit. Eine wiederkehrende systemd-Health-Prüfung deckt Datenträgerzustand und Backup-Aktualität ab; operative Benachrichtigungen werden über Telegram versendet.\n\nDer Backup-Workflow nutzt Fail-fast-Ausführung, Locking, atomare Archivveröffentlichung, eingeschränkte Berechtigungen, Integritätsprüfungen und SHA-256-Prüfsummen-Sidecars. Recovery-Prüfungen gehen über die reine Backup-Erstellung hinaus: Restic-Repository-Integrität und vollständiges Lesen der Daten waren erfolgreich, PostgreSQL wurde mit 50 vorhandenen Anwendungstabellen in einem isolierten temporären Container wiederhergestellt und die ClickHouse-Dateisystemextraktion wurde verifiziert, bevor temporäre Klartext-Staging-Daten entfernt wurden."
        ),
        keyFeatures: locList(
            [
                "Public Edge VPS: keeps public HTTP/HTTPS ingress separate from the main application host and exposes no administrative service publicly",
                "Tailscale: provides encrypted private connectivity for administration and distributed system paths without opening management services to the internet",
                "Proxmox and the On-site Server: separate the local virtualization layer from Debian and Docker Compose application workloads",
                "Hybrid Windows Lab: adds practical Windows Server administration and hardening while remaining isolated from public ingress",
                "Git and Ansible: provide version-controlled desired state, repeatable Linux and Windows configuration, check-mode review, audits and idempotency checks",
                "Azure Arc: adds inventory and governance across environments without replacing Ansible, Tailscale or the underlying compute platforms",
            ],
            [
                "Public Edge VPS: trennt öffentlichen HTTP-/HTTPS-Ingress vom Hauptanwendungshost und exponiert keine Administrationsdienste öffentlich",
                "Tailscale: stellt verschlüsselte private Konnektivität für Administration und verteilte Systempfade bereit, ohne Managementdienste zum Internet zu öffnen",
                "Proxmox und der On-site Server: trennen die lokale Virtualisierungsschicht von Debian- und Docker-Compose-Anwendungsworkloads",
                "Hybrid Windows Lab: ergänzt praktische Windows-Server-Administration und -Härtung und bleibt vom öffentlichen Ingress isoliert",
                "Git und Ansible: liefern versionierten Sollzustand, wiederholbare Linux- und Windows-Konfiguration, Check-Mode-Prüfung, Audits und Idempotenzkontrollen",
                "Azure Arc: ergänzt Inventarisierung und Governance über mehrere Umgebungen hinweg, ohne Ansible, Tailscale oder die zugrunde liegenden Compute-Plattformen zu ersetzen",
            ]
        ),
        results: locList(
            [
                "Public application ingress is separated from private administration across the hybrid environment.",
                "Ansible automates and validates configuration across Linux and Windows systems over private Tailscale paths.",
                "Azure Arc provides outbound-only inventory and governance visibility for the On-site Debian Server and Hybrid Windows Lab.",
                "Uptime Kuma, Netdata and CrowdSec provide service, host and security visibility without promoting an undefined uptime percentage.",
                "Backup integrity checks and an isolated PostgreSQL restore provide tested recovery evidence rather than relying on backup existence alone.",
            ],
            [
                "Öffentlicher Anwendungs-Ingress ist in der hybriden Umgebung von privater Administration getrennt.",
                "Ansible automatisiert und validiert die Konfiguration von Linux- und Windows-Systemen über private Tailscale-Pfade.",
                "Azure Arc liefert ausgehend angebundene Inventarisierungs- und Governance-Sichtbarkeit für den On-site Debian Server und das Hybrid Windows Lab.",
                "Uptime Kuma, Netdata und CrowdSec liefern Service-, Host- und Security-Sichtbarkeit, ohne eine nicht definierte Uptime-Prozentzahl zu bewerben.",
                "Backup-Integritätsprüfungen und eine isolierte PostgreSQL-Wiederherstellung liefern getestete Recovery-Nachweise, statt sich allein auf die Existenz von Backups zu verlassen.",
            ]
        ),
        lessons: locList(
            [
                "Architecture diagrams are clearer when compute, connectivity, configuration management, governance and observability are shown as distinct concerns.",
                "Private administration reduces public attack surface, but it still requires host-level firewall and authentication controls.",
                "Configuration automation becomes more reliable when paired with review, read-only audits, post-change checks and idempotency verification.",
                "Backup integrity is incomplete until representative data has been restored and checked in isolation.",
                "Hybrid governance does not require centralizing every workload on one cloud platform.",
            ],
            [
                "Architekturdiagramme werden verständlicher, wenn Compute, Konnektivität, Konfigurationsmanagement, Governance und Observability als getrennte Aspekte dargestellt werden.",
                "Private Administration reduziert die öffentliche Angriffsfläche, benötigt aber weiterhin Host-Firewalls und Authentifizierungskontrollen.",
                "Konfigurationsautomatisierung wird verlässlicher, wenn sie mit Review, Read-only-Audits, Post-Change-Checks und Idempotenzprüfung kombiniert wird.",
                "Backup-Integrität ist unvollständig, solange repräsentative Daten nicht isoliert wiederhergestellt und geprüft wurden.",
                "Hybride Governance erfordert nicht, jeden Workload auf einer einzigen Cloud-Plattform zu zentralisieren.",
            ]
        ),
        hybridLab: {
            title: loc(
                "Hybrid Windows Lab and Azure Arc Governance",
                "Hybrid Windows Lab und Azure-Arc-Governance"
            ),
            overview: loc(
                "The separate Windows Server 2022 Datacenter environment broadens the lab beyond Linux and Docker operations. Azure Arc represents both the Hybrid Windows Lab and On-site Debian Server as connected hybrid machines through outbound HTTPS for inventory, tags and control-plane visibility. Tailscale remains the private administration path, while paid Azure extensions and Azure benefits remain disabled.",
                "Die getrennte Windows-Server-2022-Datacenter-Umgebung erweitert das Labor über Linux- und Docker-Betrieb hinaus. Azure Arc bildet sowohl das Hybrid Windows Lab als auch den On-site Debian Server über ausgehendes HTTPS als verbundene Hybridmaschinen für Inventarisierung, Tags und Sichtbarkeit in der Steuerungsebene ab. Tailscale bleibt der private Administrationspfad; kostenpflichtige Azure-Erweiterungen und Azure-Benefits bleiben deaktiviert."
            ),
            implementation: locList(
                [
                    "Tailscale provides the private administration path. Public RDP, WinRM and IIS access was tested and confirmed closed; Windows Firewall restricts RDP, WinRM and the private IIS site to the administration workstation.",
                    "Ansible manages Windows roles and firewall state over PowerShell and WinRM with NTLM message encryption. Basic authentication and unencrypted WinRM payloads are disabled, while credentials remain in an encrypted vault outside Git.",
                    "A dedicated hardening playbook creates the restricted RDP rule before disabling broad built-in RDP rules, verifies the resulting firewall state and connectivity, and restores the prior rules on verification failure.",
                    "A read-only security audit checks Defender, firewall profiles, RDP with Network Level Authentication, SMB settings, local administration, TLS configuration and update state. SMBv1 server support and insecure SMB guest logons are disabled.",
                    "Azure Arc onboarding for the On-site Debian Server and Hybrid Windows Lab, the private IIS configuration, security audit and remote-access hardening are documented as code.",
                ],
                [
                    "Tailscale stellt den privaten Administrationspfad bereit. Öffentliche Zugriffe über RDP, WinRM und IIS wurden getestet und als geschlossen bestätigt; die Windows Firewall beschränkt RDP, WinRM und die private IIS-Seite auf den Administration Controller.",
                    "Ansible verwaltet Windows-Rollen und den Firewall-Zustand über PowerShell und WinRM mit NTLM-Nachrichtenverschlüsselung. Basic Authentication und unverschlüsselte WinRM-Nutzdaten sind deaktiviert; die Zugangsdaten verbleiben in einem verschlüsselten Vault außerhalb von Git.",
                    "Ein eigenes Hardening-Playbook erstellt die eingeschränkte RDP-Regel vor der Deaktivierung breiter integrierter RDP-Regeln, prüft anschließend Firewall-Zustand und Konnektivität und stellt bei einer fehlgeschlagenen Prüfung die vorherigen Regeln wieder her.",
                    "Ein Read-only-Sicherheitsaudit prüft Defender, Firewall-Profile, RDP mit Network Level Authentication, SMB-Einstellungen, lokale Administration, TLS-Konfiguration und Update-Status. SMBv1-Serverunterstützung und unsichere SMB-Gastanmeldungen sind deaktiviert.",
                    "Azure-Arc-Onboarding für den On-site Debian Server und das Hybrid Windows Lab, die private IIS-Konfiguration, das Sicherheitsaudit und die Remote-Access-Härtung sind als Code dokumentiert.",
                ]
            ),
            validation: locList(
                [
                    "The private IIS endpoint returned HTTP 200 while public RDP, WinRM and IIS access remained closed.",
                    "The final IIS idempotence run reported ok=9, changed=0, unreachable=0 and failed=0.",
                    "The final Windows security audit reported no baseline violations and completed with changed=0, unreachable=0 and failed=0.",
                    "A follow-up hardening check-mode run completed with changed=0 and failed=0, confirming idempotence.",
                    "Azure Resource Graph showed the On-site Debian Server and Hybrid Windows Lab connected through Azure Arc.",
                ],
                [
                    "Der private IIS-Endpunkt lieferte HTTP 200, während öffentliche Zugriffe über RDP, WinRM und IIS geschlossen blieben.",
                    "Der abschließende IIS-Idempotenzlauf meldete ok=9, changed=0, unreachable=0 und failed=0.",
                    "Das abschließende Windows-Sicherheitsaudit meldete keine Baseline-Verletzungen und endete mit changed=0, unreachable=0 und failed=0.",
                    "Ein anschließender Hardening-Lauf im Check Mode endete mit changed=0 und failed=0 und bestätigte damit die Idempotenz.",
                    "Azure Resource Graph zeigte den On-site Debian Server und das Hybrid Windows Lab als über Azure Arc verbunden.",
                ]
            ),
            scopeNote: loc(
                "This enterprise-inspired lab demonstrates practical Windows Server 2022 administration, Azure Arc onboarding for Windows and Debian, and PowerShell/WinRM automation. It is not a production Windows workload or an Azure-hosted compute environment and does not carry public application traffic.",
                "Dieses Enterprise-inspirierte Labor zeigt praktische Windows-Server-2022-Administration, Azure-Arc-Onboarding für Windows und Debian sowie PowerShell-/WinRM-Automatisierung. Es ist weder ein produktiver Windows-Workload noch eine in Azure gehostete Compute-Umgebung und verarbeitet keinen öffentlichen Anwendungsverkehr."
            ),
        },
        highlights: [
            { value: loc("Public / private split", "Public-/Private-Trennung"), label: loc("Ingress and administration", "Ingress und Administration") },
            { value: loc("Linux + Windows", "Linux + Windows"), label: loc("Ansible-managed configuration", "Ansible-verwaltete Konfiguration") },
            { value: loc("Outbound HTTPS", "Ausgehendes HTTPS"), label: loc("Azure Arc governance", "Azure-Arc-Governance") },
            { value: loc("Restore tested", "Restore getestet"), label: loc("Isolated recovery evidence", "Isolierter Recovery-Nachweis") },
        ],
        tech: [
            "Ansible",
            "Linux",
            "Proxmox VE",
            "Debian",
            "Docker Compose",
            "Tailscale",
            "UFW",
            "Fail2Ban",
            "CrowdSec",
            "Uptime Kuma",
            "systemd",
            "Restic",
            "Nginx",
            "Telegram",
            "Windows Server 2022",
            "Azure Arc",
            "Azure Resource Graph",
            "PowerShell",
            "WinRM",
            "IIS",
            "Microsoft Defender",
            "Windows Firewall",
        ],
        tags: ["Hybrid Infrastructure", "Configuration as Code", "Operations", "Backup", "Defense in Depth"],
        links: [],
        diagrams: [
            {
                title: loc(
                    "Figure 1 — High-level Hybrid Infrastructure",
                    "Abbildung 1 — Hybride Infrastruktur im Überblick"
                ),
                caption: loc(
                    "High-level view of the hybrid infrastructure, showing public ingress, local and external compute, private configuration management, and cross-environment governance and operations.",
                    "Überblick über die hybride Infrastruktur mit öffentlichem Ingress, lokalen und externen Compute-Ressourcen, privatem Konfigurationsmanagement sowie umgebungsübergreifender Governance und Betrieb."
                ),
                alt: loc(
                    "High-level hybrid infrastructure overview showing a Public Edge VPS, an on-site Proxmox and Debian platform, a private Windows Server lab, Tailscale with Git and Ansible for administration, and Azure Arc, monitoring, backup and recovery as cross-environment operational capabilities.",
                    "Überblick einer hybriden Infrastruktur mit Public Edge VPS, lokaler Proxmox- und Debian-Plattform, privatem Windows-Server-Labor, Tailscale mit Git und Ansible für die Administration sowie Azure Arc, Monitoring, Backup und Recovery als umgebungsübergreifenden Betriebsfunktionen."
                ),
                src: "/images/projects/enterprise-self-hosted-infrastructure/hybrid-infrastructure-overview.png",
            },
            {
                title: loc(
                    "Figure 2 — Architecture and Trust Boundaries",
                    "Abbildung 2 — Architektur und Vertrauensgrenzen"
                ),
                caption: loc(
                    "Hybrid infrastructure deployment showing public ingress, private administration over Tailscale, and outbound Azure Arc governance.",
                    "Hybrides Infrastruktur-Deployment mit öffentlichem Ingress, privater Administration über Tailscale und ausgehend angebundener Azure-Arc-Governance."
                ),
                alt: loc(
                    "Detailed hybrid infrastructure architecture showing Internet and public DNS, a Public Edge VPS, an on-site Proxmox-hosted Debian server, private Tailscale administration, an external Windows Server lab, monitoring, and outbound Azure Arc governance.",
                    "Detaillierte Hybrid-Infrastrukturarchitektur mit Internet und öffentlichem DNS, Public Edge VPS, lokalem Proxmox-gehostetem Debian-Server, privater Tailscale-Administration, externem Windows-Server-Labor, Monitoring und ausgehender Azure-Arc-Governance."
                ),
                src: "/images/projects/enterprise-self-hosted-infrastructure/hybrid-infrastructure-architecture.png",
            },
            {
                title: loc(
                    "Figure 3 — Operations, Automation and Recovery",
                    "Abbildung 3 — Betrieb, Automatisierung und Recovery"
                ),
                caption: loc(
                    "Infrastructure operations workflow covering version-controlled configuration, validation, Ansible automation, monitoring, backup integrity, and tested recovery.",
                    "Infrastruktur-Betriebsworkflow mit versionierter Konfiguration, Validierung, Ansible-Automatisierung, Monitoring, Backup-Integrität und getesteter Wiederherstellung."
                ),
                alt: loc(
                    "Infrastructure operations workflow from Git-based desired state through pre-deployment validation, Ansible configuration management, post-change verification, continuous monitoring, recurring backups, recovery testing, and validated recovery.",
                    "Infrastruktur-Betriebsworkflow vom Git-basierten Sollzustand über Pre-Deployment-Validierung, Ansible-Konfigurationsmanagement, Post-Change-Verifikation, kontinuierliches Monitoring und wiederkehrende Backups bis zu Recovery-Test und validierter Wiederherstellung."
                ),
                src: "/images/projects/enterprise-self-hosted-infrastructure/infrastructure-operations-recovery-workflow.png",
            },
            {
                title: loc(
                    "Figure 4 — Sanitized Operations Dashboard",
                    "Abbildung 4 — Bereinigtes Betriebsdashboard"
                ),
                caption: loc(
                    "Sanitized operational overview showing documented service management, security visibility, hybrid governance, and recovery validation.",
                    "Bereinigte Betriebsübersicht mit dokumentiertem Service-Management, Security-Transparenz, hybrider Governance und validierter Wiederherstellung."
                ),
                alt: loc(
                    "Sanitized operations dashboard showing three managed environments, private administration, Azure Arc governance, configuration automation, monitoring, security controls, and validated recovery.",
                    "Bereinigtes Betriebsdashboard mit drei verwalteten Umgebungen, privater Administration, Azure-Arc-Governance, Konfigurationsautomatisierung, Monitoring, Sicherheitskontrollen und validierter Wiederherstellung."
                ),
                src: "/images/projects/enterprise-self-hosted-infrastructure/infrastructure-operations-dashboard.png",
            },
        ],
        relatedProjectSlug: "vienna-fortress",
    },
    {
        slug: "rpi-ble-mqtt-gateway",
        category: "featured-aiot",
        status: "implemented",
        year: "2026",
        title: loc(
            "Secure BLE MQTT Monitoring Platform",
            "Sichere BLE-MQTT-Monitoring-Plattform"
        ),
        oneLiner: loc(
            "Built a Raspberry Pi 5 monitoring platform that ingests BLE sensor data, secures transport with TLS-enabled MQTT, processes events in Node-RED, stores metrics in InfluxDB, and visualizes them in Grafana.",
            "Entwickelt eine Raspberry-Pi-5-Monitoring-Plattform, die BLE-Sensordaten erfasst, den Transport über TLS-abgesichertes MQTT schützt, Ereignisse in Node-RED verarbeitet, Metriken in InfluxDB speichert und in Grafana visualisiert."
        ),
        overview: loc(
            "This project combines multiple course assignments into one end-to-end system that runs locally on a Raspberry Pi 5. Instead of presenting BLE, MQTT, dashboards, and storage as isolated exercises, the stack is framed as one deployable monitoring platform with secure messaging, observability, and GitHub-safe secret handling.",
            "Dieses Projekt führt mehrere Aufgaben in ein durchgängiges System zusammen, das lokal auf einem Raspberry Pi 5 läuft. Statt BLE, MQTT, Dashboards und Speicherung als getrennte Übungen zu zeigen, ist der Stack als eine deploybare Monitoring-Plattform mit sicherer Nachrichtenübertragung, Observability und GitHub-sicherem Secret-Handling aufgebaut."
        ),
        problem: loc(
            "Separate homework-style steps do not communicate real engineering depth. The system needed to be combined into one coherent platform with secure transport, secret management, processing, storage, dashboards, and a repository structure that can be published safely.",
            "Getrennte aufgabenartige Teilschritte vermitteln keine wirkliche Engineering-Tiefe. Das System musste zu einer zusammenhängenden Plattform mit sicherem Transport, Secret-Management, Verarbeitung, Speicherung, Dashboards und einer sicher publizierbaren Repository-Struktur zusammengeführt werden."
        ),
        solution: loc(
            "I combined the BLE collector, Mosquitto broker, Node-RED flow, InfluxDB, and Grafana into a Podman Compose stack on Raspberry Pi 5. MQTT traffic is protected with X.509 certificates, Grafana and InfluxDB credentials are injected through Podman secrets, Node-RED credentials are moved out of hardcoded config, and the public repository now ships with .env.example, .gitignore, and a reusable create_secrets.sh workflow.",
            "Ich habe BLE-Collector, Mosquitto-Broker, Node-RED-Flow, InfluxDB und Grafana zu einem Podman-Compose-Stack auf dem Raspberry Pi 5 zusammengeführt. Der MQTT-Verkehr ist mit X.509-Zertifikaten geschützt, Grafana- und InfluxDB-Zugangsdaten werden über Podman-Secrets injiziert, Node-RED-Credentials aus der hartkodierten Konfiguration herausgelöst und das öffentliche Repository mit .env.example, .gitignore und einem wiederverwendbaren create_secrets.sh-Workflow ausgestattet."
        ),
        architecture: {
            node: loc(
                "BLE sensor nodes publish environmental telemetry from ESP32-class devices into the local gateway path.",
                "BLE-Sensorknoten senden Umgebungs-Telemetrie von ESP32-basierten Geräten in den lokalen Gateway-Pfad."
            ),
            edge: loc(
                "Raspberry Pi 5 hosts containerized BLE ingestion, Mosquitto, Node-RED, InfluxDB, and Grafana as one local monitoring stack managed with Podman Compose.",
                "Der Raspberry Pi 5 hostet containerisierte BLE-Ingestion, Mosquitto, Node-RED, InfluxDB und Grafana als lokalen Monitoring-Stack, verwaltet mit Podman Compose."
            ),
            cloud: loc(
                "The design is local-first and does not require a public cloud; processed telemetry can later be forwarded to remote dashboards or alerting systems if needed.",
                "Das Design ist local-first und benötigt keine Public Cloud; verarbeitete Telemetrie kann später bei Bedarf an entfernte Dashboards oder Alerting-Systeme weitergeleitet werden."
            ),
        },
        security: loc(
            "Mutual TLS with X.509 certificates protects MQTT traffic, Podman secrets isolate admin passwords and token keys, and the GitHub repository excludes local env files, generated tokens, and private certificate material.",
            "Gegenseitiges TLS mit X.509-Zertifikaten schützt den MQTT-Verkehr, Podman-Secrets kapseln Admin-Passwörter und Token-Schlüssel, und das GitHub-Repository schließt lokale Env-Dateien, generierte Tokens und privates Zertifikatsmaterial aus."
        ),
        reliability: loc(
            "Decoupled services, restart policies, health checks, and a repeatable secret bootstrap script make the platform easier to redeploy after service failures, host changes, or fresh Pi setups.",
            "Entkoppelte Services, Restart-Policies, Health Checks und ein wiederholbarer Secret-Bootstrap machen die Plattform nach Servicefehlern, Host-Wechseln oder frischen Pi-Setups leichter neu ausrollbar."
        ),
        keyFeatures: locList(
            [
                "BLE ingestion on Raspberry Pi 5 with MQTT as the backbone transport",
                "Mosquitto secured with TLS and client certificates",
                "Node-RED processing, InfluxDB time-series storage, and Grafana dashboards",
                "Podman Compose orchestration with Podman secrets and GitHub-safe repo structure",
            ],
            [
                "BLE-Ingestion auf dem Raspberry Pi 5 mit MQTT als Rückgrat des Transports",
                "Mosquitto abgesichert mit TLS und Client-Zertifikaten",
                "Node-RED-Verarbeitung, InfluxDB-Zeitreihenspeicherung und Grafana-Dashboards",
                "Podman-Compose-Orchestrierung mit Podman-Secrets und GitHub-sicherer Repository-Struktur",
            ]
        ),
        results: locList(
            [
                "Turned several separate assignments into one coherent monitoring platform",
                "Published a public GitHub repository without shipping secrets or private key material",
                "Shows systems integration, observability, and secure deployment on Raspberry Pi",
            ],
            [
                "Mehrere getrennte Aufgaben in eine zusammenhängende Monitoring-Plattform überführt",
                "Ein öffentliches GitHub-Repository veröffentlicht, ohne Secrets oder privates Key-Material mitzuliefern",
                "Ein stärkeres Portfolio-Signal für Systemintegration, Observability und sicheres Deployment auf dem Raspberry Pi geschaffen",
            ]
        ),
        highlights: [
            { value: loc("TLS / X.509", "TLS / X.509"), label: loc("Secured MQTT transport", "Abgesicherter MQTT-Transport") },
            { value: loc("Podman Compose", "Podman Compose"), label: loc("Containerized services", "Containerisierte Dienste") },
            { value: loc("InfluxDB", "InfluxDB"), label: loc("Time-series storage", "Zeitreihenspeicherung") },
            { value: loc("Grafana", "Grafana"), label: loc("Telemetry visualization", "Telemetrievisualisierung") },
        ],
        tech: ["Raspberry Pi 5", "Python", "Podman Compose", "Mosquitto MQTT", "Node-RED", "InfluxDB", "Grafana", "BLE", "TLS", "X.509"],
        tags: ["IoT", "Monitoring", "Security", "MQTT"],
        links: [
            { label: "GitHub", url: "https://github.com/Elkaza/secure-ble-mqtt-monitoring-platform" },
        ],
        images: [
            "/images/nodered-flow.png",
            "/images/sensor-data.png",
            "/images/influxdb-data.png",
        ],
        relatedProjectSlug: "iot-sensor-data-pipeline",
    },
    {
        slug: "iot-sensor-data-pipeline",
        category: "platform-component",
        status: "implemented",
        year: "2026",
        title: loc(
            "Telemetry Processing and Dashboard Layer",
            "Telemetrie-, Verarbeitungs- und Dashboard-Schicht"
        ),
        oneLiner: loc(
            "Built the Node-RED, InfluxDB, and Grafana layer that transforms MQTT telemetry into stored metrics and operator-facing dashboards.",
            "Entwickelt die Node-RED-, InfluxDB- und Grafana-Schicht, die MQTT-Telemetrie in gespeicherte Metriken und operatornahe Dashboards überführt."
        ),
        overview: loc(
            "This project is the observability and analytics layer inside the wider BLE monitoring platform. It focuses on how telemetry is normalized, stored, provisioned into dashboards, and made useful for operators instead of remaining raw MQTT payloads.",
            "Dieses Projekt bildet die Observability- und Analytics-Schicht innerhalb der größeren BLE-Monitoring-Plattform. Der Fokus liegt darauf, wie Telemetrie normalisiert, gespeichert, in Dashboards provisioniert und für Betreiber nutzbar gemacht wird, statt als rohe MQTT-Payloads liegenzubleiben."
        ),
        problem: loc(
            "MQTT messages alone do not provide operational visibility. The platform still needs schema normalization, durable storage, dashboard provisioning, and a clean way to share access tokens between services without hardcoding secrets.",
            "MQTT-Nachrichten allein liefern noch keine operative Sichtbarkeit. Die Plattform braucht weiterhin Schema-Normalisierung, dauerhafte Speicherung, Dashboard-Provisionierung und einen sauberen Weg, Zugriffstokens zwischen Services zu teilen, ohne Secrets hart zu kodieren."
        ),
        solution: loc(
            "I implemented a local analytics stack in which Node-RED subscribes to MQTT, reshapes telemetry into a stable measurement schema, writes it to InfluxDB, and exposes dashboards through Grafana. Token handoff between InfluxDB, Node-RED, and Grafana is handled through encrypted files and Podman secrets rather than plaintext values in the repository.",
            "Ich habe einen lokalen Analytics-Stack umgesetzt, in dem Node-RED MQTT abonniert, Telemetrie in ein stabiles Messschema überführt, in InfluxDB schreibt und Dashboards über Grafana bereitstellt. Die Token-Übergabe zwischen InfluxDB, Node-RED und Grafana erfolgt über verschlüsselte Dateien und Podman-Secrets statt über Klartextwerte im Repository."
        ),
        architecture: {
            node: loc(
                "Sensor events arrive from the BLE and MQTT path as the input stream for downstream processing.",
                "Sensoreignisse kommen über den BLE- und MQTT-Pfad als Eingabestrom für die nachgelagerte Verarbeitung an."
            ),
            edge: loc(
                "Raspberry Pi 5 runs Node-RED, InfluxDB, and Grafana as the local analytics and dashboard layer of the monitoring platform.",
                "Der Raspberry Pi 5 betreibt Node-RED, InfluxDB und Grafana als lokale Analytics- und Dashboard-Schicht der Monitoring-Plattform."
            ),
            cloud: loc(
                "The stack is designed to stay useful without external cloud dependencies, while leaving room for later alerting or remote visualization if needed.",
                "Der Stack ist so aufgebaut, dass er auch ohne externe Cloud-Abhängigkeiten nützlich bleibt und gleichzeitig Raum für späteres Alerting oder entfernte Visualisierung lässt."
            ),
        },
        security: loc(
            "InfluxDB tokens are generated inside the stack, encrypted before being shared through mounted volumes, and decrypted only inside the services that need them.",
            "InfluxDB-Tokens werden innerhalb des Stacks erzeugt, vor der Weitergabe über gemountete Volumes verschlüsselt und nur in den Services entschlüsselt, die sie wirklich benötigen."
        ),
        reliability: loc(
            "Provisioned dashboards, local persistence, and decoupled processing make the analytics layer repeatable after rebuilds and easier to inspect during troubleshooting.",
            "Provisionierte Dashboards, lokale Persistenz und entkoppelte Verarbeitung machen die Analytics-Schicht nach Rebuilds wiederholbar und in der Fehlersuche leichter nachvollziehbar."
        ),
        keyFeatures: locList(
            [
                "Node-RED flow for normalization and routing of MQTT telemetry",
                "InfluxDB setup and token creation during container initialization",
                "Grafana datasource and dashboard provisioning from versioned files",
                "Encrypted token exchange between analytics services",
            ],
            [
                "Node-RED-Flow für Normalisierung und Routing der MQTT-Telemetrie",
                "InfluxDB-Setup und Token-Erzeugung während der Container-Initialisierung",
                "Grafana-Datasource- und Dashboard-Provisionierung aus versionierten Dateien",
                "Verschlüsselter Token-Austausch zwischen Analytics-Services",
            ]
        ),
        results: locList(
            [
                "Added operator-facing visibility to the BLE monitoring stack",
                "Made dashboards and datasources reproducible from source control",
                "Turned a classroom dashboard task into a reusable observability component",
            ],
            [
                "MQTT-Telemetrie in InfluxDB gespeichert und mit Grafana sowie Node-RED visualisiert",
                "Dashboards und Datasources aus der Versionsverwaltung reproduzierbar gemacht",
                "Eine Unterrichtsaufgabe zu einem wiederverwendbaren Observability-Baustein weiterentwickelt",
            ]
        ),
        tech: ["Node-RED", "InfluxDB 2", "Grafana", "Podman Compose", "Bash", "MQTT"],
        tags: ["Observability", "Dashboard", "Time Series", "IoT"],
        links: [
            { label: "GitHub", url: "https://github.com/Elkaza/secure-ble-mqtt-monitoring-platform" },
        ],
        relatedProjectSlug: "rpi-ble-mqtt-gateway",
    },
    {
        slug: "ble-edge-gateway",
        category: "platform-component",
        status: "implemented",
        year: "2026",
        title: loc(
            "Containerized BLE Edge Gateway",
            "Containerisiertes BLE Edge Gateway"
        ),
        oneLiner: loc(
            "Built a containerized BLE gateway on embedded Linux to bridge sensor data into a reusable edge integration layer.",
            "Entwickelt ein containerisiertes BLE-Gateway auf Embedded Linux, um Sensordaten in eine wiederverwendbare Edge-Integrationsschicht zu überführen."
        ),
        overview: loc(
            "This gateway project focuses on the difficult middle layer between embedded devices and backend services. The main engineering work is not the sensor itself, but the reliable Linux-side integration with BlueZ, D-Bus, and container boundaries.",
            "Dieses Gateway-Projekt fokussiert die anspruchsvolle Mittelschicht zwischen Embedded-Geräten und Backend-Services. Die eigentliche Ingenieursarbeit liegt nicht im Sensor selbst, sondern in der zuverlässigen Linux-Integration mit BlueZ, D-Bus und Containergrenzen."
        ),
        problem: loc(
            "BLE payloads are awkward to operationalize on embedded Linux when host Bluetooth access, D-Bus, and container isolation all need to coexist.",
            "BLE-Payloads lassen sich auf Embedded Linux nur schwer operationalisieren, wenn Host-Bluetooth-Zugriff, D-Bus und Container-Isolation gleichzeitig funktionieren müssen."
        ),
        solution: loc(
            "I built a Podman-based Python gateway that connects to an ESP32 BLE sensor, parses environmental telemetry, and emits normalized timestamped readings. The container is configured to access the host Bluetooth stack through BlueZ and D-Bus without turning the solution into a single ad hoc script.",
            "Ich habe ein Podman-basiertes Python-Gateway gebaut, das sich mit einem ESP32-BLE-Sensor verbindet, Umweltdaten parst und normalisierte zeitgestempelte Messwerte ausgibt. Der Container greift über BlueZ und D-Bus auf den Host-Bluetooth-Stack zu, ohne dass die Lösung zu einem einmaligen Skript verkommt."
        ),
        architecture: {
            node: loc(
                "An ESP32 BLE sensor publishes environmental readings using a lightweight custom device profile.",
                "Ein ESP32-BLE-Sensor sendet Umweltdaten über ein leichtgewichtiges Geräteprofil."
            ),
            edge: loc(
                "A Rock4 SE runs a containerized Python gateway that reads BLE data through BlueZ and D-Bus on the host.",
                "Ein Rock4 SE betreibt ein containerisiertes Python-Gateway, das BLE-Daten über BlueZ und D-Bus auf dem Host liest."
            ),
            cloud: loc(
                "The output is designed to feed downstream MQTT and analytics layers rather than stay trapped inside the gateway host.",
                "Die Ausgabe ist so aufgebaut, dass sie nachgelagerte MQTT- und Analytics-Schichten versorgt, statt auf dem Gateway-Host zu verbleiben."
            ),
        },
        security: loc(
            "Container boundaries reduce blast radius, while Bluetooth access is limited to the specific service that needs BlueZ and D-Bus integration.",
            "Containergrenzen reduzieren den Schadensradius, während Bluetooth-Zugriff auf den Service begrenzt bleibt, der BlueZ- und D-Bus-Integration wirklich benötigt."
        ),
        reliability: loc(
            "Retry handling and timestamped parsing turn the gateway into a long-running edge component rather than a brittle development script.",
            "Retry-Logik und zeitgestempeltes Parsing machen das Gateway zu einer dauerlaufenden Edge-Komponente statt zu einem fragilen Entwicklungsskript."
        ),
        keyFeatures: locList(
            [
                "BlueZ and D-Bus integration from inside a containerized workflow",
                "Python telemetry parser for BLE environmental payloads",
                "Repeatable build and start scripts for embedded Linux deployment",
                "Normalized timestamped output for downstream systems",
            ],
            [
                "BlueZ- und D-Bus-Integration aus einer containerisierten Umgebung",
                "Python-Telemetrieparser für BLE-Umweltpayloads",
                "Wiederholbare Build- und Start-Skripte für Embedded-Linux-Deployment",
                "Normalisierte zeitgestempelte Ausgabe für nachgelagerte Systeme",
            ]
        ),
        results: locList(
            [
                "Parsed BLE sensor payloads in Python and exposed normalized timestamped output for downstream services.",
                "Ran BlueZ and D-Bus integration from a containerized Linux environment.",
                "Created the foundation for the secured MQTT gateway",
            ],
            [
                "BLE-Sensor-Payloads in Python verarbeitet und normalisierte, zeitgestempelte Ausgaben für nachgelagerte Dienste bereitgestellt.",
                "BlueZ- und D-Bus-Integration aus einer containerisierten Linux-Umgebung betrieben.",
                "Die Grundlage für das abgesicherte MQTT-Gateway geschaffen",
            ]
        ),
        tech: ["Python", "Podman", "BlueZ", "D-Bus", "BLE", "Rock4 SE"],
        tags: ["IoT", "Edge", "Linux", "Containerization"],
        links: [
            { label: "GitHub", url: "https://github.com/Elkaza/iot-edge-gateway-ble-mqtt" },
        ],
        relatedProjectSlug: "rpi-ble-mqtt-gateway",
    },
    {
        slug: "freertos-sensor",
        category: "platform-component",
        status: "implemented",
        year: "2025",
        title: loc(
            "Real-Time Environmental Sensor Node",
            "Echtzeit-Umweltsensorknoten"
        ),
        oneLiner: loc(
            "Built a FreeRTOS-based sensor node that separates sensing, connectivity, and telemetry tasks for predictable real-time behavior.",
            "FreeRTOS-basierten Sensorknoten aufgebaut, der Erfassung, Konnektivität und Telemetrie in getrennte Tasks aufteilt, um vorhersagbares Echtzeitverhalten zu erreichen."
        ),
        overview: loc(
            "This project reframes a small sensor build as embedded systems engineering. The focus is not just reading a value from a sensor, but designing firmware that can scale into a larger AIoT stack without blocking loops and timing drift.",
            "Dieses Projekt rahmt einen kleinen Sensoraufbau als Embedded-Systems-Engineering neu ein. Der Fokus liegt nicht nur auf dem Auslesen eines Sensors, sondern auf Firmware, die sich ohne blockierende Loops und Timing-Drift in einen größeren AIoT-Stack integrieren lässt."
        ),
        problem: loc(
            "Simple Arduino-style loops become fragile once sensor timing, wireless communication, and user interaction need to happen concurrently.",
            "Einfache Arduino-Loops werden fragil, sobald Sensor-Timing, Funkkommunikation und Benutzereingaben gleichzeitig stattfinden müssen."
        ),
        solution: loc(
            "I designed a FreeRTOS architecture with dedicated tasks for sensing, connectivity, and telemetry, using queue-based communication between execution domains. This makes the node a reusable building block for future BLE, MQTT, and TinyML extensions.",
            "Ich habe eine FreeRTOS-Architektur mit dedizierten Tasks für Sensorik, Konnektivität und Telemetrie entworfen und die Ausführungsbereiche über Queues gekoppelt. Damit wird der Knoten zu einem wiederverwendbaren Baustein für spätere BLE-, MQTT- und TinyML-Erweiterungen."
        ),
        architecture: {
            node: loc(
                "An ESP32-S3 acquires environmental data and runs separate RTOS tasks for sensing, connectivity, and telemetry handling.",
                "Ein ESP32-S3 erfasst Umweltdaten und betreibt getrennte RTOS-Tasks für Sensorik, Konnektivität und Telemetrie."
            ),
            edge: loc(
                "An edge receiver or gateway ingests telemetry so the device does not need to expose a complex external surface itself.",
                "Ein Edge-Receiver oder Gateway nimmt die Telemetrie auf, sodass das Gerät selbst keine komplexe externe Oberfläche anbieten muss."
            ),
            cloud: loc(
                "Normalized measurements can be forwarded to dashboards, storage, or AI pipelines after they leave the node through the gateway path.",
                "Normalisierte Messwerte können nach Verlassen des Knotens über den Gateway-Pfad an Dashboards, Speicher oder KI-Pipelines weitergeleitet werden."
            ),
        },
        security: loc(
            "The node is designed to publish through an authenticated gateway path instead of acting like a directly exposed network service.",
            "Der Knoten ist darauf ausgelegt, über einen authentifizierten Gateway-Pfad zu publizieren, statt selbst als direkt exponierter Netzwerkdienst aufzutreten."
        ),
        reliability: loc(
            "Task separation and queue-based communication keep sensor sampling stable under concurrent load and reduce the risk of timing-related faults.",
            "Task-Trennung und Queue-basierte Kommunikation halten das Sensor-Sampling unter gleichzeitiger Last stabil und reduzieren timingbedingte Fehler."
        ),
        keyFeatures: locList(
            [
                "FreeRTOS task isolation for sensing, connectivity, and telemetry",
                "Queue-based communication between execution domains",
                "Predictable sampling behavior under concurrent system load",
                "Reusable embedded pattern for future TinyML and BLE extensions",
            ],
            [
                "FreeRTOS-Task-Isolation für Sensorik, Konnektivität und Telemetrie",
                "Queue-basierte Kommunikation zwischen Ausführungsbereichen",
                "Vorhersagbares Sampling-Verhalten unter gleichzeitiger Systemlast",
                "Wiederverwendbares Embedded-Muster für spätere TinyML- und BLE-Erweiterungen",
            ]
        ),
        results: locList(
            [
                "Separated sensing, connectivity and telemetry into FreeRTOS tasks with queue-based communication.",
                "Improved timing consistency for telemetry acquisition",
                "Kept a reusable task structure for later BLE and TinyML extensions",
            ],
            [
                "Sensorik, Konnektivität und Telemetrie in getrennte FreeRTOS-Tasks mit queue-basierter Kommunikation aufgeteilt.",
                "Die Timing-Konsistenz bei der Telemetrieerfassung verbessert",
                "Eine wiederverwendbare Task-Struktur für spätere BLE- und TinyML-Erweiterungen beibehalten",
            ]
        ),
        tech: ["ESP32-S3", "C++", "FreeRTOS", "MQTT", "BLE"],
        tags: ["Embedded", "RTOS", "IoT", "Firmware"],
        links: [],
        relatedProjectSlug: "ble-edge-gateway",
    },
    {
        slug: "vienna-fortress",
        category: "security-infrastructure",
        status: "in-progress",
        year: "2026",
        title: loc(
            "The Vienna Fortress",
            "The Vienna Fortress"
        ),
        oneLiner: loc(
            "Built a hardened Proxmox and Docker operations platform that combines layered security, real-time observability, reverse proxying, and automated container lifecycle management.",
            "Eine gehärtete Proxmox- und Docker-Betriebsplattform aufgebaut, die mehrschichtige Sicherheit, Echtzeit-Observability, Reverse Proxying und automatisiertes Container-Lifecycle-Management verbindet."
        ),
        overview: loc(
            "The Vienna Fortress turns a basic private infrastructure lab into a clearer internal platform and private runtime anchor for selected public services. The project focuses on defense in depth, service visibility, operational hygiene, and a central dashboard-driven control plane for self-hosted services.",
            "The Vienna Fortress entwickelt ein einfaches privates Infrastruktur-Lab zu einer produktionsnäheren internen Plattform und privaten Runtime-Basis für ausgewählte öffentliche Services weiter. Im Fokus stehen Defense in Depth, Service-Sichtbarkeit, operative Hygiene und eine zentrale dashboardgetriebene Control Plane für Self-Hosted-Services."
        ),
        problem: loc(
            "Deploying individual tools is easy; building a secure and operable platform is harder. The environment needed layered protection, live health visibility, reliable log access, and a clean way to surface Proxmox state inside a frontend dashboard without brittle ad hoc scripts.",
            "Einzelne Tools zu deployen ist einfach; daraus eine sichere und betreibbare Plattform zu machen ist deutlich schwieriger. Die Umgebung brauchte mehrschichtigen Schutz, Live-Sicht auf den Systemzustand, verlässlichen Log-Zugriff und einen sauberen Weg, Proxmox-Zustand in einem Frontend-Dashboard sichtbar zu machen, ohne fragile Ad-hoc-Skripte."
        ),
        solution: loc(
            "I built the stack on Proxmox 9.1 and Debian 13, then deployed Dockerized services for reverse proxying, DNS filtering, security detection, monitoring, status checks, log viewing, update automation, internal service discovery, and an unreleased static-site/Plausible runtime prototype. I also stabilized the Proxmox API integration used by a React-based dashboard by validating authentication flow, isolating response mismatches, and adapting request handling so virtualization data could render reliably.",
            "Ich habe den Stack auf Proxmox 9.1 und Debian 13 aufgebaut und darauf Dockerisierte Services für Reverse Proxying, DNS-Filterung, Security Detection, Monitoring, Statusprüfungen, Log-Einsicht, Update-Automatisierung, interne Service-Übersicht und einen unveröffentlichten Static-Site-/Plausible-Runtime-Prototyp bereitgestellt. Zusätzlich habe ich die Proxmox-API-Integration eines React-basierten Dashboards stabilisiert, indem ich den Authentifizierungsfluss validiert, Antwortabweichungen isoliert und das Request-Handling so angepasst habe, dass Virtualisierungsdaten verlässlich dargestellt werden."
        ),
        architecture: {
            node: loc(
                "Admins and users consume services through Homepage and reverse-proxied entry points, while the dashboard layer surfaces service and virtualization state in one place.",
                "Admins und Nutzer greifen über Homepage und reverse-proxied Einstiegspunkte auf Services zu, während die Dashboard-Schicht Service- und Virtualisierungszustand an einer Stelle sichtbar macht."
            ),
            edge: loc(
                "A Proxmox 9.1 host runs a Debian 13 VM and Docker services including Nginx Proxy Manager, Pi-hole, CrowdSec, Netdata, Uptime Kuma, Dozzle, Watchtower, and Homepage.",
                "Ein Proxmox-9.1-Host betreibt eine Debian-13-VM und Docker-Services wie Nginx Proxy Manager, Pi-hole, CrowdSec, Netdata, Uptime Kuma, Dozzle, Watchtower und Homepage."
            ),
            cloud: loc(
                "The core platform is local-first; public exposure is added through a separate VPS and Tailscale ingress path for selected services without opening local router ports.",
                "Die Kernplattform ist local-first; öffentliche Exponierung wird für ausgewählte Services über einen separaten VPS- und Tailscale-Ingress-Pfad ergänzt, ohne lokale Router-Ports zu öffnen."
            ),
        },
        security: loc(
            "Security is layered instead of concentrated in one component: Pi-hole handles DNS filtering, CrowdSec provides detection and community threat intelligence, persistent host and Docker rules control ingress, Nginx Proxy Manager centralizes service exposure, and workload separation on Proxmox limits blast radius.",
            "Sicherheit ist geschichtet statt auf eine einzelne Komponente konzentriert: Pi-hole übernimmt DNS-Filterung, CrowdSec liefert Erkennung und Community Threat Intelligence, persistente Host- und Docker-Regeln kontrollieren den Ingress, Nginx Proxy Manager zentralisiert Service-Exponierung, und die Workload-Trennung auf Proxmox begrenzt den Schadensradius."
        ),
        reliability: loc(
            "Netdata, Uptime Kuma, and Dozzle provide metrics, health checks, and log visibility, while Watchtower automates the container update lifecycle and reduces manual drift across long-running services.",
            "Netdata, Uptime Kuma und Dozzle liefern Metriken, Health Checks und Log-Sichtbarkeit, während Watchtower den Container-Update-Lifecycle automatisiert und manuellen Drift über langlebige Services hinweg reduziert."
        ),
        keyFeatures: locList(
            [
                "Layered security with Pi-hole DNS filtering, persistent ingress rules, and CrowdSec detection",
                "Reverse-proxied service access through Nginx Proxy Manager",
                "Private runtime foundation for an unreleased static-site prototype and first-party Plausible analytics",
                "Netdata, Uptime Kuma, and Dozzle for metrics, uptime checks, and live container logs",
                "Stabilized a React-based Proxmox API integration for dashboard visibility",
                "Watchtower-driven container update workflow for routine maintenance",
            ],
            [
                "Mehrschichtige Sicherheit mit Pi-hole-DNS-Filterung, persistenten Ingress-Regeln und CrowdSec Detection",
                "Reverse-proxied Service-Zugriff über Nginx Proxy Manager",
                "Private Runtime-Basis für einen unveröffentlichten Static-Site-Prototyp und First-Party-Plausible-Analytics",
                "Netdata, Uptime Kuma und Dozzle für Metriken, Uptime-Checks und Live-Container-Logs",
                "Eine React-basierte Proxmox-API-Integration für Dashboard-Sichtbarkeit stabilisiert",
                "Ein Watchtower-gesteuerter Container-Update-Workflow für die Regelwartung",
            ]
        ),
        results: locList(
            [
                "Turned a generic private lab into a hardened internal platform with clearer operational boundaries",
                "Added real-time visibility across service health, metrics, and logs",
                "Resolved a cross-layer integration mismatch between frontend code and the Proxmox API",
                "Reduced routine maintenance effort through automated container updates",
                "Created a scalable baseline for adding future internal tools without reworking the control plane",
            ],
            [
                "Ein generisches privates Lab in eine gehärtete interne Plattform mit klareren Betriebsgrenzen überführt",
                "Echtzeit-Sicht auf Service-Zustand, Metriken und Logs geschaffen",
                "Ein schichtübergreifendes Integrationsproblem zwischen Frontend-Code und der Proxmox-API gelöst",
                "Den Wartungsaufwand durch automatisierte Container-Updates reduziert",
                "Eine skalierbare Basis für weitere interne Tools geschaffen, ohne die Control Plane neu aufbauen zu müssen",
            ]
        ),
        tech: ["Debian 13", "Proxmox 9.1", "Docker", "Nginx Proxy Manager", "Pi-hole", "CrowdSec", "Netdata", "Uptime Kuma", "Dozzle", "Watchtower", "Homepage"],
        tags: ["Security", "Infrastructure", "Operations", "Platform"],
        links: [],
        diagrams: [
            {
                title: loc("Private Infrastructure and Operations Platform", "Private Infrastruktur- und Betriebsplattform"),
                caption: loc(
                    "The Vienna Fortress architecture shows the split between public admin/user entry, the Public Edge VPS, the private Tailscale transport, and the On-site Server runtime where web, analytics, security, observability, operations, and backup services are separated.",
                    "Die Vienna-Fortress-Architektur zeigt die Trennung zwischen öffentlichem Admin-/User-Einstieg, Public Edge VPS, privatem Tailscale-Transport und der Runtime des On-site Servers, in der Web, Analytics, Security, Observability, Operations und Backups getrennt betrieben werden."
                ),
                summary: locList(
                    [
                        "Public exposure is concentrated at the VPS edge instead of the home router",
                        "Runtime traffic and operational traffic are shown as separate flows",
                        "The private runtime groups services by responsibility: web, analytics, security, observability, operations, and backups",
                    ],
                    [
                        "Oeffentliche Exponierung liegt am VPS-Edge statt am Home-Router",
                        "Runtime-Traffic und operativer Traffic sind als getrennte Flüsse dargestellt",
                        "Die private Runtime gruppiert Services nach Verantwortung: Web, Analytics, Security, Observability, Operations und Backups",
                    ]
                ),
                src: "/project-diagrams/vienna-fortress-architecture.svg",
            },
        ],
        relatedProjectSlug: "home-security-lab",
    },
    {
        slug: "home-security-lab",
        category: "security-infrastructure",
        status: "in-progress",
        year: "2026",
        title: loc(
            "Hardened Hybrid-Cloud Private Network",
            "Gehärtetes Hybrid-Cloud-Privatnetzwerk"
        ),
        oneLiner: loc(
            "Phase 1 completed: designed a zero-trust private network across on-premises, cloud, and roaming endpoints with SSH hardening, DNS privacy, and secure remote transit.",
            "Phase 1 abgeschlossen: Aufbau eines Zero-Trust-Privatnetzwerks über On-Premises-, Cloud- und mobile Endpunkte mit SSH-Härtung, DNS-Privatsphäre und sicherem Remote-Transit."
        ),
        overview: loc(
            "This project shows the transition from a basic private lab to a hardened hybrid-cloud architecture. The focus is on zero-trust access, private DNS resolution, interface-aware firewalling, and an operations-friendly foundation for distributed services and later edge workloads.",
            "Dieses Projekt zeigt den Übergang von einem einfachen privaten Lab zu einer gehärteten Hybrid-Cloud-Architektur. Im Fokus stehen Zero-Trust-Zugriff, private DNS-Auflösung, interface-basierte Firewall-Regeln und ein betriebsfähiger Unterbau für verteilte Services und spätere Edge-Workloads."
        ),
        problem: loc(
            "Distributed infrastructure across private lab systems, cloud servers, and travel devices quickly becomes hard to secure. Without key-only administration, private DNS, and consistent remote access patterns, the attack surface grows and operations become brittle.",
            "Verteilte Infrastruktur über private Lab-Systeme, Cloud-Server und Reisegeräte hinweg wird schnell schwer abzusichern. Ohne schlüsselbasierte Administration, private DNS-Auflösung und konsistente Fernzugriffsmuster wächst die Angriffsoberfläche und der Betrieb wird fragil."
        ),
        solution: loc(
            "I implemented a Tailscale-based private overlay connecting roaming workstations, a VPS, and a Debian VM on Proxmox. SSH was hardened around ED25519 keys and passwordless access, Pi-hole and Unbound provide private recursive DNS, and interface-aware UFW rules plus exit-node routing make the environment safer and more usable across locations.",
            "Ich habe ein Tailscale-basiertes privates Overlay umgesetzt, das mobile Workstations, einen VPS und eine Debian-VM auf Proxmox verbindet. SSH wurde auf ED25519-Schlüssel und passwortlose Anmeldung gehärtet, Pi-hole und Unbound liefern private rekursive DNS-Auflösung, und interface-basierte UFW-Regeln plus Exit-Node-Routing machen die Umgebung sicherer und über Standorte hinweg besser nutzbar."
        ),
        architecture: {
            node: loc(
                "Roaming laptops and other client devices join the private overlay as authenticated nodes and use stable private addressing plus shared SSH aliases for consistent administration.",
                "Mobile Laptops und andere Client-Geräte treten dem privaten Overlay als authentifizierte Nodes bei und nutzen stabile private Adressen plus gemeinsame SSH-Aliasse für konsistente Administration."
            ),
            edge: loc(
                "A Debian VM on a Proxmox host provides the private operations anchor: hardened SSH, Pi-hole, Unbound, exit-node capability, and the firewall rules that separate trusted overlay traffic from other interfaces.",
                "Eine Debian-VM auf einem Proxmox-Host bildet den privaten Betriebsanker: gehärtetes SSH, Pi-hole, Unbound, Exit-Node-Funktion und Firewall-Regeln, die vertrauenswürdigen Overlay-Traffic von anderen Interfaces trennen."
            ),
            cloud: loc(
                "A VPS participates in the same private overlay, extending the network into the cloud without turning the management plane into a broadly exposed public surface.",
                "Ein VPS nimmt am selben privaten Overlay teil und erweitert das Netz in die Cloud, ohne die Management-Ebene zu einer breit exponierten öffentlichen Fläche zu machen."
            ),
        },
        security: loc(
            "The design uses key-only SSH access with ED25519, disables password-based administration paths, avoids dependency on public DNS resolvers, and minimizes direct exposure. Private recursive DNS through Unbound and interface-aware firewall rules reduce leakage and attack surface.",
            "Das Design nutzt rein schlüsselbasierten SSH-Zugriff mit ED25519, deaktiviert passwortbasierte Administrationspfade, vermeidet Abhängigkeit von öffentlichen DNS-Resolvern und minimiert direkte Exponierung. Private rekursive DNS-Auflösung über Unbound und interface-basierte Firewall-Regeln reduzieren Datenabfluss und Angriffsoberfläche."
        ),
        reliability: loc(
            "Stable private IPs, shared SSH configuration, tuned IP forwarding for overlay traffic, and lightweight host monitoring with btop make the environment easier to operate across locations. Service separation on Proxmox keeps the control plane easier to change and maintain.",
            "Stabile private IPs, gemeinsame SSH-Konfiguration, optimiertes IP-Forwarding für Overlay-Traffic und leichtgewichtiges Host-Monitoring mit btop machen die Umgebung über Standorte hinweg leichter betreibbar. Die Service-Trennung auf Proxmox hält die Control Plane leichter änderbar und wartbar."
        ),
        keyFeatures: locList(
            [
                "ED25519-based SSH hardening with passwordless administration",
                "Private Tailscale overlay across mobile workstations, cloud VPS, and private on-premises infrastructure",
                "Pi-hole with Unbound for full recursive DNS instead of third-party resolvers",
                "Exit-node routing and IP forwarding for encrypted transit on untrusted networks",
                "Interface-aware UFW policy allowing trusted overlay traffic while restricting other ingress",
            ],
            [
                "ED25519-basiertes SSH-Hardening mit passwortloser Administration",
                "Privates Tailscale-Overlay über mobile Workstations, Cloud-VPS und private On-Premises-Infrastruktur",
                "Pi-hole mit Unbound für vollständige rekursive DNS-Auflösung statt Third-Party-Resolvern",
                "Exit-Node-Routing und IP-Forwarding für verschlüsselten Transit in unsicheren Netzen",
                "Interface-basierte UFW-Policy, die vertrauenswürdigen Overlay-Traffic erlaubt und anderen Ingress einschränkt",
            ]
        ),
        results: locList(
            [
                "Removed password-based SSH administration from the environment",
                "Established private, location-independent access across on-premises, cloud, and roaming endpoints",
                "Moved DNS resolution into a privacy-preserving local recursive path under direct control",
                "Built a stronger security and operations foundation for future self-hosted and edge services",
            ],
            [
                "Passwortbasierte SSH-Administration aus der Umgebung entfernt",
                "Privaten, ortsunabhängigen Zugriff über On-Premises-, Cloud- und mobile Endpunkte hinweg geschaffen",
                "Die DNS-Auflösung in einen privacy-orientierten lokalen rekursiven Pfad unter eigener Kontrolle verlagert",
                "Einen stärkeren Security- und Betriebsunterbau für künftige Self-Hosted- und Edge-Services geschaffen",
            ]
        ),
        tech: ["Tailscale", "WireGuard", "OpenSSH", "ED25519", "Proxmox", "Debian 13", "Pi-hole", "Unbound", "UFW", "sysctl", "btop"],
        tags: ["Security", "Networking", "Hybrid Cloud", "Defense in Depth"],
        links: [],
        diagrams: [
            {
                title: loc("Hardened Hybrid-Cloud Private Network", "Gehärtetes Hybrid-Cloud-Privatnetzwerk"),
                caption: loc(
                    "The network diagram shows roaming devices, Tailscale private overlay, the VPS cloud node, and the home lab runtime. It emphasizes key-only SSH, private DNS, interface-aware firewalling, exit-node routing, and planned segmentation without exposing management services directly to the public Internet.",
                    "Das Netzwerkdiagramm zeigt mobile Geräte, Tailscale Private Overlay, den VPS-Cloud-Node und die Home-Lab-Runtime. Es betont schlüsselbasiertes SSH, private DNS-Auflösung, interface-bewusste Firewall-Regeln, Exit-Node-Routing und geplante Segmentierung ohne direkte öffentliche Exponierung der Management-Services."
                ),
                summary: locList(
                    [
                        "Management access is routed through authenticated private overlay nodes",
                        "Pi-hole and Unbound keep DNS resolution under local control",
                        "Planned IoT, guest, and detection layers are separated from the current verified baseline",
                    ],
                    [
                        "Management-Zugriff läuft über authentifizierte private Overlay-Nodes",
                        "Pi-hole und Unbound halten DNS-Auflösung unter eigener Kontrolle",
                        "Geplante IoT-, Gastnetz- und Detection-Ebenen sind vom verifizierten Ist-Stand getrennt dargestellt",
                    ]
                ),
                src: "/project-diagrams/home-security-lab-hybrid-network.svg",
            },
        ],
        relatedProjectSlug: "vienna-fortress",
    },
    {
        slug: "self-hosted-cloud",
        category: "security-infrastructure",
        status: "implemented",
        year: "2024",
        title: loc(
            "Self-Hosted Services Platform",
            "Self-Hosted Service-Plattform"
        ),
        oneLiner: loc(
            "Deployed a small self-hosted platform with reverse proxying, monitoring, DNS control, and controlled remote exposure.",
            "Bereitgestellt eine kleine Self-Hosted-Plattform mit Reverse Proxy, Monitoring, DNS-Kontrolle und kontrollierter externer Erreichbarkeit."
        ),
        overview: loc(
            "This project focuses on operating personal infrastructure with the same mindset used for small internal platforms: isolate services, reduce exposure, monitor availability, and keep control over data paths.",
            "Dieses Projekt fokussiert den Betrieb persönlicher Infrastruktur mit derselben Denkweise wie bei kleinen internen Plattformen: Services isolieren, Exponierung reduzieren, Verfügbarkeit überwachen und Datenpfade kontrollieren."
        ),
        problem: loc(
            "Public SaaS tools simplify operations but reduce control over data location, exposure, and operational behavior.",
            "Öffentliche SaaS-Tools vereinfachen zwar den Betrieb, reduzieren aber die Kontrolle über Datenstandort, Exponierung und Betriebsverhalten."
        ),
        solution: loc(
            "I deployed a Docker-based services stack with reverse proxying, uptime monitoring, and controlled remote access. The platform complements the security lab by turning baseline infrastructure into an operational services environment.",
            "Ich habe einen Docker-basierten Service-Stack mit Reverse Proxy, Uptime-Monitoring und kontrolliertem Fernzugriff aufgebaut. Die Plattform ergänzt das Security-Lab, indem sie die Basisinfrastruktur in eine operative Service-Umgebung überführt."
        ),
        architecture: {
            node: loc(
                "Client devices consume internal services through stable named entry points instead of service-specific direct exposure.",
                "Client-Geräte greifen über stabile benannte Einstiegspunkte auf interne Services zu statt über direkte Einzel-Exponierung."
            ),
            edge: loc(
                "A Linux host runs Dockerized services including reverse proxying, DNS control, and uptime monitoring.",
                "Ein Linux-Host betreibt Dockerisierte Services für Reverse Proxy, DNS-Kontrolle und Uptime-Monitoring."
            ),
            cloud: loc(
                "External reachability is brokered through tunnel-based access patterns rather than a broad set of public inbound ports.",
                "Externe Erreichbarkeit wird über tunnelbasierte Zugriffsmuster vermittelt statt über eine breite Menge öffentlicher Inbound-Ports."
            ),
        },
        security: loc(
            "TLS-secured entry points and tunnel-based remote exposure avoid unnecessary public port openings and reduce attack surface.",
            "TLS-abgesicherte Einstiegspunkte und tunnelbasierte externe Erreichbarkeit vermeiden unnötige öffentliche Portfreigaben und reduzieren die Angriffsoberfläche."
        ),
        reliability: loc(
            "Monitoring and service separation make it easier to detect failures and operate personal infrastructure like a small production platform.",
            "Monitoring und Service-Trennung erleichtern die Fehlererkennung und erlauben den Betrieb persönlicher Infrastruktur wie eine kleine Produktivplattform."
        ),
        keyFeatures: locList(
            [
                "Reverse proxying for clean service exposure",
                "Uptime monitoring for internal services",
                "DNS control and privacy-oriented service ownership",
                "Tunnel-based remote access instead of broad port forwarding",
            ],
            [
                "Reverse Proxy für saubere Service-Exponierung",
                "Uptime-Monitoring für interne Services",
                "DNS-Kontrolle und privacy-orientierte Service-Eigentümerschaft",
                "Tunnelbasierter Fernzugriff statt breitem Port-Forwarding",
            ]
        ),
        results: locList(
            [
                "Improved visibility into service health and uptime",
                "Reduced public exposure of internal services",
                "Built an operations-ready environment that supports later AIoT workloads",
            ],
            [
                "Die Sichtbarkeit von Service-Zustand und Verfügbarkeit verbessert",
                "Die öffentliche Exponierung interner Services reduziert",
                "Eine betriebsfähige Umgebung aufgebaut, die spätere AIoT-Workloads unterstützt",
            ]
        ),
        tech: ["Docker", "Linux", "Nginx Proxy Manager", "Pi-hole", "Uptime Kuma", "Cloudflare Tunnel"],
        tags: ["Infrastructure", "Security", "Operations"],
        links: [],
        diagrams: [
            {
                title: loc("Self-Hosted Services Platform", "Self-Hosted-Service-Plattform"),
                caption: loc(
                    "The service-platform diagram presents the project as a small self-hosted operating environment: client devices enter through controlled access, a Linux host runs Docker services behind Nginx Proxy Manager, and reliability is handled through monitoring, DNS control, backups, and service separation.",
                    "Das Service-Plattform-Diagramm zeigt das Projekt als kleine produktionsnahe Self-Hosted-Umgebung: Client-Geräte nutzen kontrollierte Einstiegspunkte, ein Linux-Host betreibt Docker-Services hinter Nginx Proxy Manager, und Zuverlässigkeit entsteht durch Monitoring, DNS-Kontrolle, Backups und Service-Trennung."
                ),
                summary: locList(
                    [
                        "Only necessary entry points are represented as public-facing",
                        "Application services are isolated into containers instead of unmanaged host processes",
                        "Monitoring, backups, DNS control, and service separation are part of the operating model",
                    ],
                    [
                        "Nur notwendige Einstiegspunkte werden als öffentlich erreichbar dargestellt",
                        "Anwendungsservices laufen isoliert in Containern statt als unstrukturierte Host-Prozesse",
                        "Monitoring, Backups, DNS-Kontrolle und Service-Trennung sind Teil des Betriebsmodells",
                    ]
                ),
                src: "/project-diagrams/self-hosted-cloud-services-platform.svg",
            },
        ],
        relatedProjectSlug: "vienna-fortress",
    },
    {
        slug: "elkaza-org",
        category: "delivery-platform",
        status: "implemented",
        year: "2025",
        title: loc(
            "Engineering Portfolio Platform",
            "Engineering-Portfolio-Plattform"
        ),
        oneLiner: loc(
            "Built a multilingual portfolio platform with structured content, CI-enabled deployment, and maintainable publishing workflows.",
            "Entwickelt eine mehrsprachige Portfolio-Plattform mit strukturierten Inhalten, CI-gestütztem Deployment und wartbaren Publishing-Workflows."
        ),
        overview: loc(
            "This portfolio is implemented as a Next.js App Router site with TypeScript, static generation, German and English routes, localized metadata, and reusable project components.",
            "Dieses Portfolio ist als Next.js-App-Router-Site mit TypeScript, statischer Generierung, deutschen und englischen Routen, lokalisierter Metadata und wiederverwendbaren Projektkomponenten umgesetzt."
        ),
        problem: loc(
            "A personal website needs to be fast, maintainable, and easy to update across multiple content areas without turning every change into manual rework.",
            "Eine persönliche Website muss schnell, wartbar und über mehrere Inhaltsbereiche hinweg leicht aktualisierbar sein, ohne dass jede Änderung zu manueller Mehrarbeit wird."
        ),
        solution: loc(
            "I built the site on Next.js App Router with TypeScript, lightweight i18n, reusable content components, and GitHub-connected deployment. The result is a maintainable publishing platform that supports projects, CV, blog content, and technical case studies.",
            "Ich habe die Seite mit Next.js App Router, TypeScript, leichtgewichtigem i18n, wiederverwendbaren Inhaltskomponenten und GitHub-Actions-Deployment umgesetzt. Das Ergebnis ist eine wartbare Publishing-Plattform für Projekte, CV, Blog-Inhalte und technische Fallstudien."
        ),
        architecture: {
            node: loc(
                "The browser receives statically generated German and English pages with project, CV, blog, and case-study routes.",
                "Der Browser erhält statisch generierte deutsche und englische Seiten mit Projekt-, CV-, Blog- und Fallstudienrouten."
            ),
            edge: loc(
                "Vercel handles hosting, previews, and runtime operation for the public site experience.",
                "Vercel übernimmt Auslieferung, Preview-Deployments und Hosting für die öffentliche Site-Erfahrung."
            ),
            cloud: loc(
                "GitHub acts as the source-of-truth platform for version control and deployment-triggered updates.",
                "GitHub fungiert als Source-of-Truth für Versionskontrolle und deploymentgesteuerte Aktualisierungen."
            ),
        },
        security: loc(
            "A managed deployment model, minimal backend surface, and controlled content workflow keep the public platform simpler and safer to operate.",
            "Ein gemanagtes Deployment-Modell, minimale Backend-Oberfläche und ein kontrollierter Content-Workflow halten die öffentliche Plattform einfacher und sicherer im Betrieb."
        ),
        reliability: loc(
            "Version-controlled content and preview deployments reduce publishing risk and make site changes easier to review before release.",
            "Versionskontrollierte Inhalte und Preview-Deployments reduzieren Publishing-Risiken und machen Site-Änderungen vor dem Release besser prüfbar."
        ),
        keyFeatures: locList(
            [
                "Multilingual content model for projects, CV, and writing",
                "Reusable component structure for maintainable site evolution",
                "GitHub-connected deployment workflow",
                "Localized metadata, canonical URLs, reciprocal hreflang, and sitemap generation",
            ],
            [
                "Mehrsprachiges Inhaltsmodell für Projekte, CV und Fachtexte",
                "Wiederverwendbare Komponentenstruktur für wartbare Weiterentwicklung",
                "Deployment-Workflow über GitHub Actions",
                "Lokalisierte Metadata, kanonische URLs, reziprokes hreflang und Sitemap-Generierung",
            ]
        ),
        results: locList(
            [
                "Built German and English SSR routes with static generation for portfolio pages and project details",
                "Added localized metadata, canonical URLs, reciprocal hreflang, sitemap output, and production SHA verification",
                "Connected GitHub-based validation and Vercel deployment to the portfolio release flow",
            ],
            [
                "Deutsche und englische SSR-Routen mit statischer Generierung für Portfolio-Seiten und Projektdetails aufgebaut",
                "Lokalisierte Metadata, kanonische URLs, reziprokes hreflang, Sitemap-Ausgabe und Production-SHA-Verifikation ergänzt",
                "GitHub-basierte Validierung und Vercel-Deployment mit dem Portfolio-Release-Flow verbunden",
            ]
        ),
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GitHub"],
        tags: ["Web", "Platform", "CI/CD"],
        links: [
            { label: "Live Site", url: "https://www.elkaza.org" },
            { label: "GitHub", url: "https://github.com/Elkaza/elkaza-org" },
        ],
        diagrams: [
            {
                title: loc("System / Deployment / Content Flow", "System-, Deployment- und Content-Flow"),
                caption: loc(
                    "End-to-end architecture view for the portfolio platform: local content work, GitHub source control, CI validation, Vercel deployment, public routes, and optional privacy-first analytics.",
                    "End-to-End-Architekturansicht der Portfolio-Plattform: lokale Content-Arbeit, GitHub als Source of Truth, CI-Validierung, Vercel-Deployment, öffentliche Routen und optionale privacy-first Analytics."
                ),
                summary: locList(
                    [
                        "Shows source control, structured content, CI validation, preview deployment, production release, and visitor access in one inspection view",
                        "Matches the actual platform technologies: Next.js, TypeScript, Tailwind CSS, GitHub Actions, Vercel, and Plausible Analytics",
                        "Shows the reusable project and case-study components that feed the generated routes",
                    ],
                    [
                        "Zeigt Source Control, strukturierte Inhalte, CI-Validierung, Preview-Deployment, Produktionsauslieferung und Besucherzugriff in einer kompakten Architekturansicht",
                        "Passt zum realen Plattform-Stack: Next.js, TypeScript, Tailwind CSS, GitHub Actions, Vercel und Plausible Analytics",
                        "Zeigt die wiederverwendbaren Projekt- und Fallstudienkomponenten, die die generierten Routen speisen",
                    ]
                ),
                src: "/project-diagrams/elkaza-org-platform-architecture.svg",
            },
        ],
        relatedProjectSlug: "elkaza-at",
    },
    {
        slug: "elkaza-at",
        category: "delivery-platform",
        status: "implemented",
        year: "2025",
        title: loc(
            "Unreleased Hybrid Deployment Prototype",
            "Unveröffentlichter Hybrid-Deployment-Prototyp"
        ),
        oneLiner: loc(
            "Implemented an unreleased static-site deployment prototype across a Public Edge VPS and an On-site Server, with private Tailscale transport, containerized services and a repeatable delivery workflow.",
            "Einen unveröffentlichten Deployment-Prototyp für eine statische Website über Public Edge VPS und On-site Server umgesetzt – mit privatem Tailscale-Transport, containerisierten Diensten und wiederholbarem Delivery-Workflow."
        ),
        overview: loc(
            "The deployment environment and delivery path were implemented as an engineering prototype, but Elkaza.at is not presented as a released public website. The architecture separates a thin edge layer from a private Debian and Docker runtime and uses Tailscale for the inter-system path.",
            "Die Deployment-Umgebung und der Delivery-Pfad wurden als technischer Prototyp umgesetzt; Elkaza.at wird jedoch nicht als veröffentlichte öffentliche Website dargestellt. Die Architektur trennt eine schlanke Edge-Schicht von einer privaten Debian- und Docker-Runtime und nutzt Tailscale für den systemübergreifenden Pfad."
        ),
        problem: loc(
            "A simple static VPS workflow did not exercise the desired separation between delivery automation, edge ingress and a private runtime. The prototype therefore needed repeatable validation and a clearer boundary between public and privately managed infrastructure.",
            "Ein einfacher statischer VPS-Workflow bildete die gewünschte Trennung zwischen Delivery-Automatisierung, Edge-Ingress und privater Runtime nicht ab. Der Prototyp benötigte deshalb wiederholbare Validierung und eine klarere Grenze zwischen öffentlicher und privat verwalteter Infrastruktur."
        ),
        solution: loc(
            "The delivery workflow validates linting, type checks and the static Next.js build before synchronizing the export through the Public Edge VPS to the On-site Server over Tailscale. Docker Compose and Nginx Proxy Manager provide the private runtime and routing structure. This documents an implemented deployment path, not a public release claim.",
            "Der Delivery-Workflow validiert Linting, Type-Checks und den statischen Next.js-Build, bevor der Export über den Public Edge VPS und Tailscale zum On-site Server synchronisiert wird. Docker Compose und Nginx Proxy Manager stellen die private Runtime- und Routing-Struktur bereit. Dies dokumentiert einen umgesetzten Deployment-Pfad, keine öffentliche Veröffentlichung."
        ),
        architecture: {
            node: loc(
                "The intended request path begins at the Public Edge VPS and forwards approved application traffic over Tailscale to the private runtime.",
                "Der vorgesehene Request-Pfad beginnt am Public Edge VPS und leitet freigegebenen Anwendungsverkehr über Tailscale zur privaten Runtime weiter."
            ),
            edge: loc(
                "The On-site Server hosts the private runtime layer with Docker Compose, Nginx Proxy Manager, static web services, observability and backup components.",
                "Der On-site Server hostet die private Runtime-Schicht mit Docker Compose, Nginx Proxy Manager, statischen Webdiensten, Observability- und Backup-Komponenten."
            ),
            cloud: loc(
                "The Public Edge VPS remains deliberately thin and acts as the deployment relay and intended TCP ingress layer rather than storing primary application data.",
                "Der Public Edge VPS bleibt bewusst schlank und dient als Deployment-Relay sowie vorgesehene TCP-Ingress-Schicht, statt primäre Anwendungsdaten zu speichern."
            ),
        },
        security: loc(
            "The prototype applies defense in depth: the private runtime is reached over Tailscale rather than through direct router exposure, ingress and administration are separated, and baseline web security headers are configured at the application layer.",
            "Der Prototyp nutzt Defense in Depth: Die private Runtime wird über Tailscale statt durch direkte Router-Exponierung erreicht, Ingress und Administration sind getrennt und grundlegende Web-Security-Header werden auf Anwendungsebene konfiguriert."
        ),
        reliability: loc(
            "Automated builds, scripted synchronization, bounded smoke checks and service separation reduce manual delivery risk. Backup integrity and isolated recovery evidence belong to the underlying infrastructure case study rather than proving that this unreleased site has a production availability commitment.",
            "Automatisierte Builds, geskriptete Synchronisierung, begrenzte Smoke-Checks und Service-Trennung reduzieren manuelle Delivery-Risiken. Backup-Integrität und isolierte Recovery-Nachweise gehören zur zugrunde liegenden Infrastruktur-Fallstudie und belegen keine Production-Verfügbarkeitszusage für diese unveröffentlichte Website."
        ),
        keyFeatures: locList(
            [
                "Public Edge VPS as a thin deployment relay and intended TCP ingress layer",
                "Private Tailscale transport to the On-site Server runtime",
                "Dockerized static Next.js export behind Nginx Proxy Manager",
                "Automated lint, typecheck, build, synchronization and smoke-check workflow",
            ],
            [
                "Public Edge VPS als schlankes Deployment-Relay und vorgesehene TCP-Ingress-Schicht",
                "Privater Tailscale-Transport zur Runtime des On-site Servers",
                "Dockerisierter statischer Next.js-Export hinter Nginx Proxy Manager",
                "Automatisierter Workflow für Linting, Typecheck, Build, Synchronisierung und Smoke-Checks",
            ]
        ),
        results: locList(
            [
                "Implemented a repeatable hybrid deployment prototype without presenting Elkaza.at as a released public site",
                "Kept the private runtime behind Tailscale instead of direct router ingress",
                "Validated lint, typecheck, build, synchronization and smoke-check stages",
            ],
            [
                "Einen wiederholbaren Hybrid-Deployment-Prototyp umgesetzt, ohne Elkaza.at als veröffentlichte öffentliche Website darzustellen",
                "Die private Runtime hinter Tailscale statt hinter direktem Router-Ingress gehalten",
                "Lint-, Typecheck-, Build-, Synchronisierungs- und Smoke-Check-Stufen validiert",
            ]
        ),
        tech: ["Next.js", "TypeScript", "GitHub Actions", "Bash", "Tailscale", "Docker Compose", "Nginx", "Nginx Proxy Manager", "Plausible Analytics", "PostgreSQL", "ClickHouse"],
        tags: ["Web", "Hybrid Infrastructure", "Defense in Depth", "Automation"],
        links: [
            { label: "GitHub", url: "https://github.com/Elkaza/elkaza-web" },
        ],
        relatedProjectSlug: "elkaza-org",
    },
];
