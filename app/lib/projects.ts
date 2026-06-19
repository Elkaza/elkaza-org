import { Locale } from "../i18n/messages";

type LocalizedString = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type ProjectCategory =
    | "featured-aiot"
    | "platform-component"
    | "security-infrastructure"
    | "delivery-platform";

export type ProjectStatus = "implemented" | "in-progress" | "planned";

export interface Project {
    slug: string;
    category: ProjectCategory;
    status: ProjectStatus;
    year: string;
    title: LocalizedString;
    oneLiner: LocalizedString;
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
    tech: string[];
    tags: string[];
    links: { label: string; url: string }[];
    images?: string[];
    diagrams?: {
        title: LocalizedString;
        caption: LocalizedString;
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
        status: "implemented",
        year: "2026",
        title: loc(
            "EdgeGuardian: Edge AI Safety Bubble for Machine Monitoring",
            "EdgeGuardian: Edge-AI-Sicherheitszone für Maschinenüberwachung"
        ),
        oneLiner: loc(
            "Built a Raspberry Pi 5 and Hailo-8L edge AI prototype that fuses camera-based person detection with Hokuyo LiDAR distance sensing to classify SAFE, WARNING, and ALERT states locally.",
            "Entwickelt einen Raspberry-Pi-5- und Hailo-8L-Edge-AI-Prototyp, der kamerabasierte Personenerkennung mit Hokuyo-LiDAR-Distanzmessung kombiniert und lokal SAFE-, WARNING- und ALERT-Zustände entscheidet."
        ),
        overview: loc(
            "EdgeGuardian turns a desk into a representative machine danger zone and creates a local AI safety bubble around it. The system combines Hailo-accelerated YOLO person detection, LiDAR distance confirmation, Raspberry Pi sensor fusion, ESP32 serial actuation, a browser dashboard, Telegram alert handling, and CSV evidence logs.",
            "EdgeGuardian nutzt einen Schreibtisch als repräsentative Maschinen-Gefahrenzone und erzeugt darum eine lokale AI-Sicherheitszone. Das System kombiniert Hailo-beschleunigte YOLO-Personenerkennung, LiDAR-Distanzbestätigung, Raspberry-Pi-Sensorfusion, ESP32-Serial-Aktuatorik, Browser-Dashboard, Telegram-Alerting und CSV-Evidenzlogs."
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
            cloud: loc("Evidence outputs", "Evidenz-Ausgaben"),
        },
        architecture: {
            node: loc(
                "Raspberry Pi camera / AI camera, Hokuyo URG-04LX-UG01 LiDAR, and ESP32-S3 serial endpoint provide visual detection input, physical distance confirmation, and actuator proof.",
                "Raspberry-Pi-Kamera / AI Camera, Hokuyo URG-04LX-UG01 LiDAR und ESP32-S3-Serial-Endpunkt liefern visuelle Erkennung, physische Distanzbestätigung und Aktuatornachweis."
            ),
            edge: loc(
                "The Raspberry Pi 5 runs the fusion loop, parses Hailo detection output, reads LiDAR distance, applies SAFE/WARNING/ALERT thresholds, and logs every decision.",
                "Der Raspberry Pi 5 führt die Fusion aus, verarbeitet Hailo-Erkennungsdaten, liest LiDAR-Distanzen, wendet SAFE/WARNING/ALERT-Schwellen an und protokolliert jede Entscheidung."
            ),
            cloud: loc(
                "The system stays local for safety decisions while exposing evidence through a browser dashboard, optional Telegram module, terminal output, and final CSV logs.",
                "Die Sicherheitsentscheidung bleibt lokal; Evidenz wird über Browser-Dashboard, optionales Telegram-Modul, Terminalausgabe und finale CSV-Logs sichtbar gemacht."
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
                "ESP32-S3 serial command proof for actuator integration",
                "Dark browser dashboard reading live CSV logs with last update age and event table",
                "Final evidence package with Hailo, LiDAR, fusion, dashboard, ESP32, and Telegram logs",
            ],
            [
                "Hailo-8L-beschleunigte YOLO-Personenerkennung auf Raspberry Pi 5",
                "Hokuyo-LiDAR-Distanzbestätigung für Kamera-LiDAR-Sensorfusion",
                "SAFE/WARNING/ALERT-State-Machine mit Hysterese und Stale-Data-Prüfung",
                "ESP32-S3-Serial-Kommandos als Aktuatornachweis",
                "Dark-Mode-Browser-Dashboard mit Live-CSV-Logs, Update-Alter und Event-Tabelle",
                "Finales Evidenzpaket mit Hailo-, LiDAR-, Fusion-, Dashboard-, ESP32- und Telegram-Logs",
            ]
        ),
        results: locList(
            [
                "Demonstrated end-to-end local edge AI safety monitoring with camera, LiDAR, embedded actuation, dashboard, and logs",
                "Demo evidence captured SAFE -> WARNING -> ALERT -> SAFE transitions at about 30 FPS",
                "Real-mode evidence logged continuous Raspberry Pi decisions from hardware inputs",
                "Made system behavior explainable through dashboard reason cards and reproducible CSV evidence",
            ],
            [
                "End-to-End lokale Edge-AI-Sicherheitsüberwachung mit Kamera, LiDAR, Embedded-Aktuatorik, Dashboard und Logs demonstriert",
                "Demo-Evidenz mit SAFE -> WARNING -> ALERT -> SAFE-Übergängen bei etwa 30 FPS erfasst",
                "Real-Mode-Evidenz mit kontinuierlichen Raspberry-Pi-Entscheidungen aus Hardware-Inputs protokolliert",
                "Systemverhalten über Dashboard-Reason-Cards und reproduzierbare CSV-Evidenz nachvollziehbar gemacht",
            ]
        ),
        tech: ["Raspberry Pi 5", "Hailo-8L", "YOLOv8n", "Hokuyo LiDAR", "ESP32-S3", "Python", "Flask"],
        tags: ["Edge AI", "AIoT", "Sensor Fusion", "Raspberry Pi", "Embedded"],
        links: [
            { label: "GitHub", url: "https://github.com/Elkaza/edgeguardian-edge-ai-safety-bubble" },
        ],
        diagrams: [
            {
                title: loc("System Context", "Systemkontext"),
                caption: loc(
                    "Camera and LiDAR inputs are processed locally on the Raspberry Pi 5 with Hailo acceleration, then fused into SAFE/WARNING/ALERT outputs for dashboard visualization, ESP32 actuation, optional Telegram alerts, and CSV evidence logs.",
                    "Kamera- und LiDAR-Inputs werden lokal auf dem Raspberry Pi 5 mit Hailo-Beschleunigung verarbeitet und zu SAFE/WARNING/ALERT-Ausgaben für Dashboard, ESP32-Aktuatorik, optionale Telegram-Alerts und CSV-Evidenzlogs fusioniert."
                ),
                summary: locList(
                    [
                        "Local-only inference path: camera frames and LiDAR distance stay on the Raspberry Pi runtime",
                        "Separate evidence outputs: dashboard, CSV logs, optional Telegram, and ESP32 actuation proof",
                        "Safety decision model is visible through SAFE/WARNING/ALERT state transitions",
                    ],
                    [
                        "Lokaler Inferenzpfad: Kameraframes und LiDAR-Distanz bleiben in der Raspberry-Pi-Runtime",
                        "Getrennte Evidenz-Ausgaben: Dashboard, CSV-Logs, optional Telegram und ESP32-Aktuatornachweis",
                        "Die Sicherheitsentscheidung wird über SAFE/WARNING/ALERT-Zustandswechsel sichtbar",
                    ]
                ),
                src: "/project-diagrams/edgeguardian-system-context.png",
            },
            {
                title: loc("Container / Deployment View", "Container- / Deployment-Ansicht"),
                caption: loc(
                    "Physical sensors feed a Raspberry Pi 5 runtime with Hailo-accelerated person detection, fusion logic, ESP32 serial actuation, dashboard visualization, optional Telegram alerts, and evidence logs.",
                    "Physische Sensoren speisen eine Raspberry-Pi-5-Runtime mit Hailo-beschleunigter Personenerkennung, Fusionslogik, ESP32-Serial-Aktuatorik, Dashboard-Visualisierung, optionalen Telegram-Alerts und Evidenzlogs."
                ),
                summary: locList(
                    [
                        "Hailo detection output and LiDAR distance converge in the fusion script",
                        "Hysteresis, stale-data checks, and thresholds sit before actuation or alerting",
                        "Dashboard and final evidence folder make the demo inspectable after the run",
                    ],
                    [
                        "Hailo-Erkennung und LiDAR-Distanz laufen im Fusionsskript zusammen",
                        "Hysterese, Stale-Data-Prüfung und Schwellwerte liegen vor Aktuatorik oder Alerting",
                        "Dashboard und finaler Evidenzordner machen die Demo nachträglich prüfbar",
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
        status: "implemented",
        year: "2026",
        title: loc(
            "TinyML Vibration Anomaly Detection on Arduino Nano 33 BLE Sense Rev2",
            "TinyML-Vibrationsanomalie-Erkennung auf Arduino Nano 33 BLE Sense Rev2"
        ),
        oneLiner: loc(
            "Deployed a lightweight softmax classifier on an Arduino Nano 33 BLE Sense Rev2 to detect NORMAL, ANOMALY, and ALERT vibration states from onboard IMU data in real time.",
            "Deployt einen leichtgewichtigen Softmax-Klassifikator auf einem Arduino Nano 33 BLE Sense Rev2, um NORMAL-, ANOMALY- und ALERT-Vibrationszustaende aus Onboard-IMU-Daten in Echtzeit zu erkennen."
        ),
        overview: loc(
            "This TinyML project demonstrates the full node-device pipeline: synthetic IMU data generation, 20-feature vibration extraction, offline Python training, C++ header export, and continuous inference on the Arduino Nano 33 BLE Sense Rev2.",
            "Dieses TinyML-Projekt zeigt die komplette Node-Device-Pipeline: synthetische IMU-Datengenerierung, Extraktion von 20 Vibrationsfeatures, Offline-Training in Python, C++-Header-Export und kontinuierliche Inferenz auf dem Arduino Nano 33 BLE Sense Rev2."
        ),
        problem: loc(
            "Small fans and motors can develop abnormal vibration before failure. A node device should detect this locally with low memory use, no cloud dependency, and a clear live output for the operator.",
            "Kleine Luefter und Motoren koennen vor einem Ausfall auffaellige Vibrationen entwickeln. Ein Node-Device soll dies lokal, speicherschonend, ohne Cloud-Abhängigkeit und mit klarer Live-Ausgabe erkennen."
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
                "The Arduino Nano 33 BLE Sense Rev2 reads onboard accelerometer data at 100 Hz, stores 2-second rolling windows, extracts features, runs inference, prints Serial Monitor evidence, and lights the LED on ALERT.",
                "Der Arduino Nano 33 BLE Sense Rev2 liest Beschleunigungsdaten mit 100 Hz, speichert 2-Sekunden-Rolling-Windows, extrahiert Features, führt Inferenz aus, druckt Serial-Monitor-Evidenz und schaltet bei ALERT die LED."
            ),
            edge: loc(
                "Python generates the dataset, trains the model offline, validates performance, and exports the model parameters into a small C++ header.",
                "Python generiert den Datensatz, trainiert das Modell offline, validiert die Performance und exportiert die Modellparameter in einen kleinen C++-Header."
            ),
            cloud: loc(
                "No cloud is required during inference; the laptop is only used for programming, compiling, and viewing the Serial Monitor during the demo.",
                "Waehrend der Inferenz ist keine Cloud erforderlich; der Laptop dient nur zum Programmieren, Kompilieren und Anzeigen des Serial Monitors in der Demo."
            ),
        },
        security: loc(
            "The device processes motion locally and does not transmit sensor data. The design keeps the demo self-contained and avoids credentials, network dependency, or external services.",
            "Das Gerät verarbeitet Bewegungsdaten lokal und übertraegt keine Sensordaten. Das Design bleibt in der Demo eigenstaendig und vermeidet Credentials, Netzabhängigkeit und externe Services."
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
                "Serial-Monitor-Ausgabe für Zeit, Zustand, Wahrscheinlichkeiten, Persistenzzaehler und Latenz",
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
                "98.61% Offline-Testgenauigkeit auf dem synthetischen balancierten Datensatz erreicht",
                "Etwa 1 ms Inferenzlatenz im Arduino Serial Monitor gemessen",
                "Kompiliert mit 12% Flash- und 19% RAM-Nutzung auf dem Nano 33 BLE Sense Rev2",
                "Live-Demo zeigte stabiles Board als NORMAL, Tippen/Schütteln als ANOMALY, anhaltende Bewegung als ALERT und Rückkehr zu NORMAL",
            ]
        ),
        tech: ["Arduino Nano 33 BLE Sense Rev2", "C++", "Python", "TinyML", "IMU", "Softmax"],
        tags: ["TinyML", "Embedded", "Arduino", "Signal Processing", "AIoT"],
        links: [
            { label: "GitHub", url: "https://github.com/Elkaza/tinyml-vibration-anomaly-detection" },
        ],
        diagrams: [
            {
                title: loc("TinyML Training and Local Inference Flow", "TinyML-Training und lokaler Inferenzfluss"),
                caption: loc(
                    "End-to-end TinyML architecture for vibration anomaly detection: offline Python training, C++ model parameter export, Arduino deployment, local IMU sampling, softmax inference, Serial Monitor evidence, and built-in LED alerting.",
                    "End-to-End-TinyML-Architektur für Vibrationsanomalie-Erkennung: Offline-Training in Python, C++-Parameterexport, Arduino-Deployment, lokales IMU-Sampling, Softmax-Inferenz, Serial-Monitor-Evidenz und Built-in-LED-Alerting."
                ),
                summary: locList(
                    [
                        "Separates offline training/export from the runtime path so it is clear that no cloud inference is used",
                        "Shows the embedded runtime loop: 100 Hz sampling, 2-second windows, 50% overlap, 20 features, normalization, softmax inference, thresholding, and persistence",
                        "Includes the project evidence: 98.61% offline accuracy, about 1 ms inference latency, 12% flash usage, and 19% RAM usage",
                    ],
                    [
                        "Trennt Offline-Training/Export vom Runtime-Pfad und macht klar, dass keine Cloud-Inferenz genutzt wird",
                        "Zeigt den Embedded-Runtime-Loop: 100-Hz-Sampling, 2-Sekunden-Fenster, 50% Überlappung, 20 Features, Normalisierung, Softmax-Inferenz, Schwellwert und Persistenz",
                        "Enthält die Projektnachweise: 98.61% Offline-Genauigkeit, etwa 1 ms Inferenzlatenz, 12% Flash-Nutzung und 19% RAM-Nutzung",
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
            "Österreich-Tourismus-Dashboard: Saisonale Nächtiggungsanalyse"
        ),
        oneLiner: loc(
            "Built a one-page Python/HTML dashboard that combines Austrian overnight-stay tables, compares seasonal tourism patterns, and turns national tourism data into an evidence-based story.",
            "Erstellt ein einseitiges Python/HTML-Dashboard, das oesterreichische Nächtiggungstabellen kombiniert, saisonale Tourismusmuster vergleicht und nationale Tourismusdaten in eine datenbasierte Story überführt."
        ),
        overview: loc(
            "The dashboard was created for a data analysis assignment using Austrian accommodation statistics by country of origin and federal state. It combines semicolon-separated source tables, calculates seasonal metrics, and presents the results through an interactive static dashboard and short submission report.",
            "Das Dashboard entstand für eine Data-Analysis-Aufgabe mit oesterreichischen Beherbergungsstatistiken nach Herkunftsland und Bundesland. Es kombiniert semikolon-getrennte Quelltabellen, berechnet saisonale Kennzahlen und präsentiert die Ergebnisse in einem interaktiven statischen Dashboard und Kurzbericht."
        ),
        problem: loc(
            "Raw tourism CSV tables are difficult to inspect directly and do not tell a clear story about seasonal importance, origin countries, or regional hotspots. The task required a concise dashboard that promotes one tourism season using appropriate visuals and analysis.",
            "Rohe Tourismus-CSV-Tabellen sind schwer direkt auswertbar und erzaehlen keine klare Story über saisonale Bedeutung, Herkunftslaender oder regionale Schwerpunkte. Gefordert war ein kompaktes Dashboard, das eine Tourismussaison mit geeigneten Visualisierungen und Analyse bewirbt."
        ),
        solution: loc(
            "I built a barebones but performant Python pipeline that loads and combines the provided CSV files, derives seasonal aggregates, prepares summary metrics, exports dashboard-ready data, and renders a polished one-page HTML report with charts, widgets, and explanatory text.",
            "Ich habe eine schlanke und performante Python-Pipeline gebaut, die die bereitgestellten CSV-Dateien laedt und kombiniert, saisonale Aggregate ableitet, Summary-Metriken vorbereitet, dashboardfähige Daten exportiert und einen sauberen einseitigen HTML-Report mit Charts, Widgets und Erklaertext rendert."
        ),
        architectureLabels: {
            node: loc("Data sources", "Datenquellen"),
            edge: loc("Processing", "Verarbeitung"),
            cloud: loc("Presentation", "Präsentation"),
        },
        architecture: {
            node: loc(
                "Semicolon-separated CSV tables from Austrian accommodation statistics provide overnight stays by country of origin and federal states.",
                "Semikolon-getrennte CSV-Tabellen der oesterreichischen Beherbergungsstatistik liefern Nächtiggungen nach Herkunftsland und Bundeslaendern."
            ),
            edge: loc(
                "Python combines the files, cleans fields, computes seasonal totals, ranks countries and regions, and exports summary metrics.",
                "Python kombiniert die Dateien, bereinigt Felder, berechnet Saison-Summen, rankt Herkunftslaender und Regionen und exportiert Summary-Metriken."
            ),
            cloud: loc(
                "The final artifact is a static HTML dashboard and report that can be opened locally or hosted as a lightweight web page.",
                "Das finale Artefakt ist ein statisches HTML-Dashboard samt Bericht, das lokal geoeffnet oder als leichtgewichtige Webseite gehostet werden kann."
            ),
        },
        security: loc(
            "The dashboard uses public statistical data and static generated artifacts, so it avoids database credentials, live APIs, and user data collection.",
            "Das Dashboard nutzt öffentliche Statistikdaten und statisch generierte Artefakte; dadurch entfallen Datenbank-Credentials, Live-APIs und Nutzerdatenerfassung."
        ),
        reliability: loc(
            "The pipeline writes combined CSV files, summary JSON, dashboard HTML, widget exports, and a submission report so the analysis can be reproduced and inspected from multiple artifacts.",
            "Die Pipeline schreibt kombinierte CSV-Dateien, Summary-JSON, Dashboard-HTML, Widget-Exports und einen Submission-Report, sodass die Analyse reproduzierbar und aus mehreren Artefakten pruefbar ist."
        ),
        keyFeatures: locList(
            [
                "Combines multiple semicolon-separated tourism tables into one analysis dataset",
                "Ranks important origin countries and Austrian federal states",
                "Uses multiple visual types and text widgets for storytelling",
                "Generates dashboard HTML, submission report, metrics JSON, and image exports",
                "Runs with lightweight Python and static web output rather than a heavy BI stack",
            ],
            [
                "Kombiniert mehrere semikolon-getrennte Tourismustabellen zu einem Analysedatensatz",
                "Rankt wichtige Herkunftslaender und oesterreichische Bundeslaender",
                "Nutzt mehrere Visualisierungstypen und Text-Widgets für Storytelling",
                "Generiert Dashboard-HTML, Submission-Report, Metrics-JSON und Bild-Exports",
                "Läuft mit leichtgewichtigem Python und statischem Web-Output statt schwerem BI-Stack",
            ]
        ),
        results: locList(
            [
                "Delivered a complete one-page tourism dashboard and written report for the assignment",
                "Received feedback highlighting a beautiful report, strong performance, and extra points",
                "Created a reusable static-dashboard workflow for public data storytelling",
            ],
            [
                "Vollständiges einseitiges Tourismus-Dashboard und schriftlichen Report für die Aufgabe geliefert",
                "Feedback für einen sehr schoenen Report, starke Performance und Zusatzpunkte erhalten",
                "Wiederverwendbaren Static-Dashboard-Workflow für Public-Data-Storytelling aufgebaut",
            ]
        ),
        tech: ["Python", "HTML", "CSS", "Data Analysis", "CSV", "Static Dashboard"],
        tags: ["Data Analysis", "Dashboard", "Python", "Storytelling"],
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
            "Das Validierungsset enthält Features, aber keine Labels. Das Modell muss daher aus den gelabelten Trainingsdaten den Zusammenhang zwischen Random-Walk-Verhalten und versteckter Gravitationskonstante lernen und gleichzeitig strikte Dateiformat-Anforderungen erfuellen."
        ),
        solution: loc(
            "I created a reproducible notebook and helper Python module, used train/test validation, compared at least four regression approaches, selected a HistGradientBoostingRegressor, and generated the final io25m025_validate.txt file with run_id and gravity predictions.",
            "Ich habe ein reproduzierbares Notebook und ein Helper-Python-Modul erstellt, Train/Test-Validierung genutzt, mindestens vier Regressionsansaetze verglichen, einen HistGradientBoostingRegressor ausgewählt und die finale io25m025_validate.txt-Datei mit run_id- und gravity-Vorhersagen erzeugt."
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
                "The final artifact is a plain-text validation file with exactly the required header and prediction rows, plus notebook and HTML report evidence.",
                "Das finale Artefakt ist eine Plain-Text-Validierungsdatei mit exakt gefordertem Header und Vorhersagezeilen, ergaenzt durch Notebook- und HTML-Report-Evidenz."
            ),
        },
        security: loc(
            "The project uses local CSV files only and keeps the validation workflow deterministic and inspectable; no external service or credential is required.",
            "Das Projekt nutzt ausschliesslich lokale CSV-Dateien und hält den Validierungsworkflow deterministisch und pruefbar; externe Services oder Credentials sind nicht erforderlich."
        ),
        reliability: loc(
            "The submission file was checked for row count, header format, duplicate run IDs, missing values, validation-order consistency, and prediction range before packaging.",
            "Die Abgabedatei wurde vor dem Packaging auf Zeilenanzahl, Header-Format, doppelte run_ids, fehlende Werte, Validierungsreihenfolge und Vorhersagebereich geprueft."
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
                "Best held-out model reached about 1.19% normalized MAE and R2 of 0.9914",
                "Generated a valid io25m025_validate.txt file for the unlabeled validation set",
                "Packaged code, notebook, HTML report, PDF instruction, and prediction file for submission",
            ],
            [
                "Bestes Hold-out-Modell erreichte etwa 1.19% normalisierte MAE und R2 von 0.9914",
                "Gültige io25m025_validate.txt-Datei für das ungelabelte Validierungsset generiert",
                "Code, Notebook, HTML-Report, PDF-Instruktion und Prediction-Datei für die Abgabe paketiert",
            ]
        ),
        tech: ["Python", "scikit-learn", "Pandas", "Jupyter", "Regression", "Feature Engineering"],
        tags: ["Machine Learning", "Regression", "Python", "Data Analysis"],
        links: [
            { label: "GitHub", url: "https://github.com/Elkaza/random-walk-gravity-regression" },
        ],
    },
    {
        slug: "enterprise-self-hosted-infrastructure",
        category: "security-infrastructure",
        status: "implemented",
        year: "2026",
        title: loc(
            "Enterprise Self-Hosted Infrastructure & Privacy-First Analytics Setup",
            "Enterprise-Self-Hosted-Infrastruktur und Privacy-First-Analytics"
        ),
        oneLiner: loc(
            "Migrated core web operations away from SaaS dependency and third-party trackers by building an owner-controlled hybrid-cloud platform with first-party Plausible analytics, self-hosted Elkaza.at delivery, Tailscale routing, automated deployments, observability, and disaster-ready backups.",
            "Kernfunktionen des Webbetriebs von SaaS-Abhängigkeit und Third-Party-Trackern auf eine eigenkontrollierte Hybrid-Cloud-Plattform mit First-Party-Plausible-Analytics, self-hosted Elkaza.at-Delivery, Tailscale-Routing, automatisierten Deployments, Observability und recovery-fähigen Backups migriert."
        ),
        overview: loc(
            "This case study documents the move from rented convenience to owned infrastructure. The platform keeps public ingress lightweight in the cloud, runs application and analytics services on private Proxmox and Debian infrastructure, and uses automation for deployment, monitoring, and recovery. Elkaza.org remains the Vercel-hosted portfolio surface, while Elkaza.at is delivered through the self-hosted path. The result is not just a cheaper hosting setup; it is a privacy-first operating model where data paths, analytics, logs, and backups stay under direct control.",
            "Diese Fallstudie dokumentiert den Wechsel von gemieteter Bequemlichkeit zu eigener Infrastruktur. Die Plattform hält den öffentlichen Ingress schlank in der Cloud, betreibt Applikations- und Analytics-Services auf privater Proxmox- und Debian-Infrastruktur und nutzt Automatisierung für Deployment, Monitoring und Recovery. Elkaza.org bleibt die über Vercel ausgelieferte Portfolio-Oberfläche, während Elkaza.at über den Self-Hosted-Pfad ausgeliefert wird. Das Ergebnis ist nicht nur ein günstigeres Hosting-Setup, sondern ein privacy-orientiertes Betriebsmodell, bei dem Datenpfade, Analytics, Logs und Backups unter direkter Kontrolle bleiben."
        ),
        problem: loc(
            "SaaS subscriptions and third-party analytics tools create recurring cost, external data dependency, and fragile measurement when browser extensions or network filters block common tracker domains. At the same time, exposing a private server directly from a residential network would leak the home IP address and expand the public attack surface.",
            "SaaS-Abonnements und Third-Party-Analytics erzeugen laufende Kosten, externe Datenabhaengigkeit und brüchige Messbarkeit, wenn Browser-Erweiterungen oder Netzwerkfilter bekannte Tracker-Domains blockieren. Gleichzeitig würde die direkte Exponierung eines privaten Servers aus einem Heimnetz die private IP-Adresse sichtbar machen und die öffentliche Angriffsoberfläche vergrößern."
        ),
        solution: loc(
            "I built a hybrid-cloud architecture around a hardened public VPS, a private Proxmox VE host on Debian 12, and Docker Compose service stacks. The VPS acts as a minimal ingress shield with strict UFW policy and unattended upgrades, then forwards HTTP/S over a private Tailscale tunnel to the local platform. Nginx Proxy Manager terminates HTTPS for Elkaza.at, www.elkaza.at, and analytics.elkaza.at, routes the static web frontend and Plausible stack, and keeps the private runtime off the open internet. GitHub Actions automates Next.js production deployments, while a daily Bash backup job captures database and Docker volume state with a seven-day retention policy.",
            "Ich habe eine Hybrid-Cloud-Architektur aus gehärtetem öffentlichem VPS, privatem Proxmox-VE-Host auf Debian 12 und Docker-Compose-Service-Stacks aufgebaut. Der VPS dient als minimaler Ingress-Schutzschild mit strikter UFW-Policy und Unattended Upgrades und leitet HTTP/S über einen privaten Tailscale-Tunnel an die lokale Plattform weiter. Nginx Proxy Manager terminiert HTTPS für Elkaza.at, www.elkaza.at und analytics.elkaza.at, routet das statische Web-Frontend und den Plausible-Stack und hält die private Runtime vom offenen Internet getrennt. GitHub Actions automatisiert Next.js-Production-Deployments, während ein täglicher Bash-Backup-Job Datenbank- und Docker-Volume-Zustand mit Sieben-Tage-Retention sichert."
        ),
        architectureLabels: {
            node: loc("Visitor path", "Besucherpfad"),
            edge: loc("Private platform", "Private Plattform"),
            cloud: loc("Public ingress", "Öffentlicher Ingress"),
        },
        architecture: {
            node: loc(
                "Visitors reach the site through controlled HTTPS endpoints and a first-party analytics subdomain, keeping analytics delivery inside an owner-controlled domain path instead of a generic third-party tracker host.",
                "Besucher erreichen die Seite über kontrollierte HTTPS-Endpunkte und eine First-Party-Analytics-Subdomain, wodurch die Analytics-Auslieferung in einem eigentuergesteuerten Domain-Pfad bleibt statt über einen generischen Third-Party-Tracker-Host zu laufen."
            ),
            edge: loc(
                "A private Proxmox VE and Debian 12 platform runs Docker Compose services for the web stack, Plausible, PostgreSQL, ClickHouse, Nginx Proxy Manager, observability, management, and backup automation.",
                "Eine private Proxmox-VE- und Debian-12-Plattform betreibt Docker-Compose-Services für Web-Stack, Plausible, PostgreSQL, ClickHouse, Nginx Proxy Manager, Observability, Management und Backup-Automation."
            ),
            cloud: loc(
                "A low-cost public VPS provides hardened ingress, hides the residential IP address, and forwards traffic through Tailscale rather than requiring inbound ports on the local router.",
                "Ein kostengünstiger öffentlicher VPS stellt gehärteten Ingress bereit, verbirgt die private Wohnanschluss-IP und leitet Traffic über Tailscale weiter, statt eingehende Ports am lokalen Router zu benötigen."
            ),
        },
        security: loc(
            "The platform reduces public exposure by separating ingress from the private runtime. Tailscale carries traffic over an encrypted overlay, UFW limits the VPS surface, Nginx Proxy Manager centralizes HTTPS routing, CrowdSec and Pi-hole add defensive layers, and the first-party Plausible setup avoids handing visitor analytics to a third-party tracking provider.",
            "Die Plattform reduziert öffentliche Exponierung, indem Ingress und private Runtime getrennt werden. Tailscale transportiert Traffic über ein verschlüsseltes Overlay, UFW begrenzt die VPS-Oberfläche, Nginx Proxy Manager zentralisiert HTTPS-Routing, CrowdSec und Pi-hole ergaenzen Schutzschichten, und das First-Party-Plausible-Setup vermeidet die Weitergabe von Besucher-Analytics an einen Third-Party-Tracking-Anbieter."
        ),
        reliability: loc(
            "A root cronjob runs a daily 3:00 AM dump-and-pack backup: PostgreSQL is dumped safely, ClickHouse is paused before volume extraction to prevent corruption, Docker named volumes are archived, the complete application state is compressed, and old snapshots are pruned through a seven-day rolling retention policy.",
            "Ein Root-Cronjob startet taeglich um 03:00 Uhr ein Dump-and-Pack-Backup: PostgreSQL wird sauber gedumpt, ClickHouse vor der Volume-Extraktion pausiert, um Korruption zu vermeiden, Docker-Named-Volumes werden archiviert, der gesamte Applikationszustand wird komprimiert und alte Snapshots werden über eine Sieben-Tage-Retention bereinigt."
        ),
        keyFeatures: locList(
            [
                "Self-hosted Plausible Analytics with PostgreSQL and ClickHouse, served from analytics.elkaza.at as a first-party analytics path",
                "Self-hosted Elkaza.at delivery through VPS TCP ingress, Tailscale, Nginx Proxy Manager, and a private static web container",
                "Hardened VPS ingress shield with strict UFW policy, unattended upgrades, and no direct exposure of the residential IP",
                "Tailscale reverse tunnel from public ingress to the private Proxmox platform without opening local router ports",
                "GitHub Actions CI/CD for automated Next.js production deployments with minimal manual release handling",
                "Daily Bash dump-and-pack backups covering PostgreSQL, ClickHouse, Docker named volumes, compression, and seven-day retention",
                "Homepage-based local .lan dashboard mapping Netdata, Portainer, Dozzle, CrowdSec, Pi-hole, Uptime Kuma, and Watchtower state",
            ],
            [
                "Self-hosted Plausible Analytics mit PostgreSQL und ClickHouse, ausgeliefert über analytics.elkaza.at als First-Party-Analytics-Pfad",
                "Self-hosted Elkaza.at-Delivery über VPS-TCP-Ingress, Tailscale, Nginx Proxy Manager und einen privaten statischen Web-Container",
                "Gehärteter VPS-Ingress-Schutzschild mit strikter UFW-Policy, Unattended Upgrades und ohne direkte Exponierung der privaten Wohnanschluss-IP",
                "Tailscale-Reverse-Tunnel vom öffentlichen Ingress zur privaten Proxmox-Plattform ohne offene Ports am lokalen Router",
                "GitHub Actions CI/CD für automatisierte Next.js-Production-Deployments mit minimaler manueller Release-Arbeit",
                "Tägliche Bash-Dump-and-Pack-Backups für PostgreSQL, ClickHouse, Docker-Named-Volumes, Kompression und Sieben-Tage-Retention",
                "Lokales .lan-Dashboard auf Homepage-Basis mit YAML-State-Mapping für Netdata, Portainer, Dozzle, CrowdSec, Pi-hole, Uptime Kuma und Watchtower",
            ]
        ),
        results: locList(
            [
                "Reduced dependency on paid SaaS subscriptions and third-party analytics domains",
                "Kept visitor analytics under owner control while preserving privacy-oriented measurement",
                "Hid the residential IP address and removed the need for open inbound ports on the local router",
                "Turned deployment, monitoring, updates, and backups into repeatable DevOps routines",
                "Created a stronger portfolio proof point for owner-controlled infrastructure, secure networking, and automated operations",
            ],
            [
                "Die Abhängigkeit von kostenpflichtigen SaaS-Abonnements und Third-Party-Analytics-Domains reduziert",
                "Besucher-Analytics unter eigener Kontrolle gehalten und gleichzeitig privacy-orientierte Messbarkeit bewahrt",
                "Die private Wohnanschluss-IP verborgen und offene eingehende Ports am lokalen Router vermieden",
                "Deployment, Monitoring, Updates und Backups in wiederholbare DevOps-Routinen überführt",
                "Einen stärkeren Portfolio-Nachweis für eigenkontrollierte Infrastruktur, sichere Netzwerke und automatisierten Betrieb geschaffen",
            ]
        ),
        tech: [
            "Proxmox VE",
            "Debian 12",
            "Docker Compose",
            "Tailscale",
            "Plausible Analytics",
            "PostgreSQL",
            "ClickHouse",
            "Nginx Proxy Manager",
            "CrowdSec",
            "Pi-hole",
            "UFW",
            "GitHub Actions",
            "Bash",
            "Uptime Kuma",
            "Netdata",
            "Portainer",
            "Dozzle",
            "Watchtower",
            "Homepage",
        ],
        tags: ["Self-Hosted", "Privacy", "Analytics", "DevOps", "Hybrid Cloud"],
        links: [
            { label: "Live Site", url: "https://www.elkaza.org" },
        ],
        diagrams: [
            {
                title: loc("System Context", "Systemkontext"),
                caption: loc(
                    "System context of the hybrid portfolio and privacy-first analytics platform: the public site runs on Vercel, while first-party analytics traffic is routed through VPS/Tailscale to a private self-hosted Plausible stack.",
                    "Systemkontext der hybriden Portfolio- und Privacy-First-Analytics-Plattform: Die öffentliche Seite läuft auf Vercel, während First-Party-Analytics-Traffic über VPS/Tailscale zu einem privaten self-hosted Plausible-Stack geroutet wird."
                ),
                summary: locList(
                    [
                        "Public website delivery stays lightweight on Vercel while analytics ownership moves private",
                        "A VPS ingress layer avoids exposing the residential IP or local router ports",
                        "Operational paths for CI/CD, monitoring, and platform management are separated from visitor traffic",
                    ],
                    [
                        "Die öffentliche Website-Auslieferung bleibt schlank auf Vercel, während Analytics privat betrieben wird",
                        "Eine VPS-Ingress-Schicht vermeidet die Exponierung der privaten IP und lokaler Router-Ports",
                        "CI/CD, Monitoring und Plattformmanagement sind vom Besuchertraffic getrennt",
                    ]
                ),
                src: "/project-diagrams/enterprise-self-hosted-system-context.png",
            },
            {
                title: loc("Container / Deployment View", "Container- / Deployment-Ansicht"),
                caption: loc(
                    "Container/deployment view of the hybrid portfolio platform: frontend deployment on Vercel, public VPS ingress, private Tailscale routing, and self-hosted Plausible/PostgreSQL containers on a Proxmox/Debian runtime.",
                    "Container- und Deployment-Ansicht der hybriden Portfolio-Plattform: Frontend-Deployment auf Vercel, öffentlicher VPS-Ingress, privates Tailscale-Routing und self-hosted Plausible/PostgreSQL-Container auf einer Proxmox/Debian-Runtime."
                ),
                summary: locList(
                    [
                        "GitHub Actions deploys the public frontend while the private runtime owns analytics state",
                        "Tailscale bridges the public VPS and private Proxmox/Debian runtime without direct inbound exposure",
                        "Docker Compose groups Plausible, PostgreSQL, and backup handling into an operable service layer",
                    ],
                    [
                        "GitHub Actions deployt das öffentliche Frontend, während die private Runtime den Analytics-State hält",
                        "Tailscale verbindet öffentlichen VPS und private Proxmox/Debian-Runtime ohne direkte Inbound-Exponierung",
                        "Docker Compose bündelt Plausible, PostgreSQL und Backups zu einer betreibbaren Service-Schicht",
                    ]
                ),
                src: "/project-diagrams/enterprise-self-hosted-container-deployment.png",
            },
            {
                title: loc("Data Flow View", "Datenfluss-Ansicht"),
                caption: loc(
                    "Data flow view of the privacy-first analytics platform: public visitors load the Vercel-hosted frontend, first-party analytics events are routed through VPS/Tailscale to the private Plausible/PostgreSQL stack, while CI/CD, monitoring, and backups remain separated from runtime traffic.",
                    "Datenfluss-Ansicht der Privacy-First-Analytics-Plattform: Besucher laden das Vercel-gehostete Frontend, First-Party-Analytics-Events laufen über VPS/Tailscale zum privaten Plausible/PostgreSQL-Stack, während CI/CD, Monitoring und Backups vom Runtime-Traffic getrennt bleiben."
                ),
                summary: locList(
                    [
                        "Runtime user traffic, analytics events, CI/CD, monitoring, and backups are modeled as distinct flows",
                        "First-party analytics requests travel through the controlled ingress path before private processing",
                        "Backup and observability loops show recovery readiness rather than only happy-path hosting",
                    ],
                    [
                        "User-Traffic, Analytics-Events, CI/CD, Monitoring und Backups sind als getrennte Flüsse modelliert",
                        "First-Party-Analytics-Requests laufen über den kontrollierten Ingress-Pfad vor der privaten Verarbeitung",
                        "Backup- und Observability-Schleifen zeigen Recovery-Fähigkeit statt nur Happy-Path-Hosting",
                    ]
                ),
                src: "/project-diagrams/enterprise-self-hosted-data-flow.png",
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
            "Entwickelt eine Raspberry-Pi-5-Monitoring-Plattform, die BLE-Sensordaten erfasst, den Transport über TLS-abgesichertes MQTT schuetzt, Ereignisse in Node-RED verarbeitet, Metriken in InfluxDB speichert und in Grafana visualisiert."
        ),
        overview: loc(
            "This project combines multiple course assignments into one end-to-end system that runs locally on a Raspberry Pi 5. Instead of presenting BLE, MQTT, dashboards, and storage as isolated exercises, the stack is framed as one deployable monitoring platform with secure messaging, observability, and GitHub-safe secret handling.",
            "Dieses Projekt führt mehrere Aufgaben in ein durchgaengiges System zusammen, das lokal auf einem Raspberry Pi 5 läuft. Statt BLE, MQTT, Dashboards und Speicherung als getrennte Uebungen zu zeigen, ist der Stack als eine deploybare Monitoring-Plattform mit sicherer Nachrichtenübertragung, Observability und GitHub-sicherem Secret-Handling aufgebaut."
        ),
        problem: loc(
            "Separate homework-style steps do not communicate real engineering depth. The system needed to be combined into one coherent platform with secure transport, secret management, processing, storage, dashboards, and a repository structure that can be published safely.",
            "Getrennte aufgabenartige Teilschritte vermitteln keine wirkliche Engineering-Tiefe. Das System musste zu einer zusammenhaengenden Plattform mit sicherem Transport, Secret-Management, Verarbeitung, Speicherung, Dashboards und einer sicher publizierbaren Repository-Struktur zusammengeführt werden."
        ),
        solution: loc(
            "I combined the BLE collector, Mosquitto broker, Node-RED flow, InfluxDB, and Grafana into a Podman Compose stack on Raspberry Pi 5. MQTT traffic is protected with X.509 certificates, Grafana and InfluxDB credentials are injected through Podman secrets, Node-RED credentials are moved out of hardcoded config, and the public repository now ships with .env.example, .gitignore, and a reusable create_secrets.sh workflow.",
            "Ich habe BLE-Collector, Mosquitto-Broker, Node-RED-Flow, InfluxDB und Grafana zu einem Podman-Compose-Stack auf dem Raspberry Pi 5 zusammengeführt. Der MQTT-Verkehr ist mit X.509-Zertifikaten geschuetzt, Grafana- und InfluxDB-Zugangsdaten werden über Podman-Secrets injiziert, Node-RED-Credentials aus der hartkodierten Konfiguration herausgelöst und das öffentliche Repository mit .env.example, .gitignore und einem wiederverwendbaren create_secrets.sh-Workflow ausgestattet."
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
            "Gegenseitiges TLS mit X.509-Zertifikaten schuetzt den MQTT-Verkehr, Podman-Secrets kapseln Admin-Passwoerter und Token-Schlüssel, und das GitHub-Repository schliesst lokale Env-Dateien, generierte Tokens und privates Zertifikatsmaterial aus."
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
                "BLE-Ingestion auf dem Raspberry Pi 5 mit MQTT als Rueckgrat des Transports",
                "Mosquitto abgesichert mit TLS und Client-Zertifikaten",
                "Node-RED-Verarbeitung, InfluxDB-Zeitreihenspeicherung und Grafana-Dashboards",
                "Podman-Compose-Orchestrierung mit Podman-Secrets und GitHub-sicherer Repository-Struktur",
            ]
        ),
        results: locList(
            [
                "Turned several separate assignments into one coherent monitoring platform",
                "Published a public GitHub repository without shipping secrets or private key material",
                "Created a stronger portfolio signal for systems integration, observability, and secure deployment on Raspberry Pi",
            ],
            [
                "Mehrere getrennte Aufgaben in eine zusammenhaengende Monitoring-Plattform überführt",
                "Ein öffentliches GitHub-Repository veröffentlicht, ohne Secrets oder privates Key-Material mitzuliefern",
                "Ein stärkeres Portfolio-Signal für Systemintegration, Observability und sicheres Deployment auf dem Raspberry Pi geschaffen",
            ]
        ),
        tech: ["Raspberry Pi 5", "Python", "Podman Compose", "Mosquitto MQTT", "Node-RED", "InfluxDB", "Grafana", "BLE", "TLS", "X.509"],
        tags: ["IoT", "Monitoring", "Security", "MQTT"],
        links: [
            { label: "GitHub", url: "https://github.com/Elkaza/secure-ble-mqtt-monitoring-platform" },
        ],
        images: [
            "/images/architecture.png",
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
                "Der Stack ist so aufgebaut, dass er auch ohne externe Cloud-Abhängigkeiten nützlich bleibt und gleichzeitig Raum für späteres Alerting oder entfernte Visualisierung laesst."
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
                "Dem BLE-Monitoring-Stack eine betreibernahe Sichtbarkeit hinzugefuegt",
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
            "Entwickelt ein containerisiertes BLE-Gateway auf Embedded Linux, um Sensordaten in eine wiederverwendbare Edge-Integrationsschicht zu überfuehren."
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
                "Bridged physical BLE sensing into a reusable software integration point",
                "Demonstrated Linux-side systems engineering beyond device firmware",
                "Created the foundation for the secured MQTT gateway",
            ],
            [
                "Physische BLE-Sensorik in einen wiederverwendbaren Software-Integrationspunkt überführt",
                "Linux-seitiges Systems Engineering jenseits reiner Firmware demonstriert",
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
            "Implemented a FreeRTOS-based sensor node that separates sensing, connectivity, and telemetry tasks for predictable real-time behavior.",
            "Implementiert einen FreeRTOS-basierten Sensorknoten, der Erfassung, Konnektivität und Telemetrie in getrennte Tasks aufteilt, um vorhersagbares Echtzeitverhalten zu erreichen."
        ),
        overview: loc(
            "This project reframes a small sensor build as embedded systems engineering. The focus is not just reading a value from a sensor, but designing firmware that can scale into a larger AIoT stack without blocking loops and timing drift.",
            "Dieses Projekt rahmt einen kleinen Sensoraufbau als Embedded-Systems-Engineering neu ein. Der Fokus liegt nicht nur auf dem Auslesen eines Sensors, sondern auf Firmware, die sich ohne blockierende Loops und Timing-Drift in einen größeren AIoT-Stack integrieren laesst."
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
                "Normalisierte Messwerte koennen nach Verlassen des Knotens über den Gateway-Pfad an Dashboards, Speicher oder KI-Pipelines weitergeleitet werden."
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
                "Moved beyond a blocking prototype into a structured embedded architecture",
                "Improved timing consistency for telemetry acquisition",
                "Created a stronger foundation for future sensor fusion work",
            ],
            [
                "Den Schritt von einem blockierenden Prototypen zu einer strukturierten Embedded-Architektur gemacht",
                "Die Timing-Konsistenz bei der Telemetrieerfassung verbessert",
                "Eine stärkere Grundlage für künftige Sensorfusion geschaffen",
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
            "The Vienna Fortress turns a basic private infrastructure lab into a more production-minded internal platform and private runtime anchor for selected public services. The project focuses on defense in depth, service visibility, operational hygiene, and a central dashboard-driven control plane for self-hosted services.",
            "The Vienna Fortress entwickelt ein einfaches privates Infrastruktur-Lab zu einer produktionsnaeheren internen Plattform und privaten Runtime-Basis für ausgewählte öffentliche Services weiter. Im Fokus stehen Defense in Depth, Service-Sichtbarkeit, operative Hygiene und eine zentrale dashboardgetriebene Control Plane für Self-Hosted-Services."
        ),
        problem: loc(
            "Deploying individual tools is easy; building a secure and operable platform is harder. The environment needed layered protection, live health visibility, reliable log access, and a clean way to surface Proxmox state inside a frontend dashboard without brittle ad hoc scripts.",
            "Einzelne Tools zu deployen ist einfach; daraus eine sichere und betreibbare Plattform zu machen ist deutlich schwieriger. Die Umgebung brauchte mehrschichtigen Schutz, Live-Sicht auf den Systemzustand, verlässlichen Log-Zugriff und einen sauberen Weg, Proxmox-Zustand in einem Frontend-Dashboard sichtbar zu machen, ohne fragile Ad-hoc-Skripte."
        ),
        solution: loc(
            "I built the stack on Proxmox 9.1 and Debian 12, then deployed Dockerized services for reverse proxying, DNS filtering, intrusion response, monitoring, status checks, log viewing, update automation, internal service discovery, and the Elkaza.at/Plausible runtime path. I also stabilized the Proxmox API integration used by a React-based dashboard by validating authentication flow, isolating response mismatches, and adapting request handling so virtualization data could render reliably.",
            "Ich habe den Stack auf Proxmox 9.1 und Debian 12 aufgebaut und darauf Dockerisierte Services für Reverse Proxying, DNS-Filterung, Intrusion Response, Monitoring, Statuspruefungen, Log-Einsicht, Update-Automatisierung, interne Service-Übersicht und den Elkaza.at-/Plausible-Runtime-Pfad bereitgestellt. Zusaetzlich habe ich die Proxmox-API-Integration eines React-basierten Dashboards stabilisiert, indem ich den Authentifizierungsfluss validiert, Antwortabweichungen isoliert und das Request-Handling so angepasst habe, dass Virtualisierungsdaten verlässlich dargestellt werden."
        ),
        architecture: {
            node: loc(
                "Admins and users consume services through Homepage and reverse-proxied entry points, while the dashboard layer surfaces service and virtualization state in one place.",
                "Admins und Nutzer greifen über Homepage und reverse-proxied Einstiegspunkte auf Services zu, während die Dashboard-Schicht Service- und Virtualisierungszustand an einer Stelle sichtbar macht."
            ),
            edge: loc(
                "A Proxmox 9.1 host runs Debian 12 workloads and Docker services including Nginx Proxy Manager, Pi-hole, CrowdSec, Netdata, Uptime Kuma, Dozzle, Watchtower, and Homepage.",
                "Ein Proxmox-9.1-Host betreibt Debian-12-Workloads und Docker-Services wie Nginx Proxy Manager, Pi-hole, CrowdSec, Netdata, Uptime Kuma, Dozzle, Watchtower und Homepage."
            ),
            cloud: loc(
                "The core platform is local-first; public exposure is added through a separate VPS and Tailscale ingress path for selected services without opening local router ports.",
                "Die Kernplattform ist local-first; öffentliche Exponierung wird für ausgewählte Services über einen separaten VPS- und Tailscale-Ingress-Pfad ergänzt, ohne lokale Router-Ports zu öffnen."
            ),
        },
        security: loc(
            "Security is layered instead of concentrated in one component: Pi-hole handles DNS filtering, CrowdSec adds IPS-style detection and remediation, Nginx Proxy Manager centralizes service exposure, and workload separation on Proxmox limits blast radius.",
            "Sicherheit ist geschichtet statt auf eine einzelne Komponente konzentriert: Pi-hole übernimmt DNS-Filterung, CrowdSec ergaenzt IPS-aehnliche Erkennung und Gegenmassnahmen, Nginx Proxy Manager zentralisiert Service-Exponierung, und die Workload-Trennung auf Proxmox begrenzt den Schadensradius."
        ),
        reliability: loc(
            "Netdata, Uptime Kuma, and Dozzle provide metrics, health checks, and log visibility, while Watchtower automates the container update lifecycle and reduces manual drift across long-running services.",
            "Netdata, Uptime Kuma und Dozzle liefern Metriken, Health Checks und Log-Sichtbarkeit, während Watchtower den Container-Update-Lifecycle automatisiert und manuellen Drift über langlebige Services hinweg reduziert."
        ),
        keyFeatures: locList(
            [
                "Layered security with Pi-hole DNS filtering and CrowdSec-based intrusion response",
                "Reverse-proxied service access through Nginx Proxy Manager",
                "Private runtime foundation for Elkaza.at static delivery and first-party Plausible analytics",
                "Netdata, Uptime Kuma, and Dozzle for metrics, uptime checks, and live container logs",
                "Stabilized a React-based Proxmox API integration for dashboard visibility",
                "Watchtower-driven container update workflow for routine maintenance",
            ],
            [
                "Mehrschichtige Sicherheit mit Pi-hole-DNS-Filterung und CrowdSec-basierter Intrusion Response",
                "Reverse-proxied Service-Zugriff über Nginx Proxy Manager",
                "Private Runtime-Basis für statische Elkaza.at-Auslieferung und First-Party-Plausible-Analytics",
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
        tech: ["Debian 12", "Proxmox 9.1", "Docker", "Nginx Proxy Manager", "Pi-hole", "CrowdSec", "Netdata", "Uptime Kuma", "Dozzle", "Watchtower", "Homepage"],
        tags: ["Security", "Infrastructure", "Operations", "Platform"],
        links: [],
        images: [
            "/images/vienna-fortress-dashboard.png",
        ],
        diagrams: [
            {
                title: loc("Private Infrastructure and Operations Platform", "Private Infrastruktur- und Betriebsplattform"),
                caption: loc(
                    "The Vienna Fortress architecture shows the split between public admin/user entry, the public VPS edge, the private Tailscale transport, and the Proxmox/Debian Docker runtime where web, analytics, security, observability, operations, and backup services are separated.",
                    "Die Vienna-Fortress-Architektur zeigt die Trennung zwischen oeffentlichem Admin-/User-Einstieg, Public-VPS-Edge, privatem Tailscale-Transport und der Proxmox-/Debian-Docker-Runtime, in der Web, Analytics, Security, Observability, Operations und Backups getrennt betrieben werden."
                ),
                summary: locList(
                    [
                        "Public exposure is concentrated at the VPS edge instead of the home router",
                        "Runtime traffic and operational traffic are shown as separate flows",
                        "The private runtime groups services by responsibility: web, analytics, security, observability, operations, and backups",
                    ],
                    [
                        "Oeffentliche Exponierung liegt am VPS-Edge statt am Home-Router",
                        "Runtime-Traffic und operativer Traffic sind als getrennte Fluesse dargestellt",
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
            "Phase 1 abgeschlossen: Aufbau eines Zero-Trust-Privatnetzwerks über On-Premises-, Cloud- und mobile Endpunkte mit SSH-Haertung, DNS-Privatsphaere und sicherem Remote-Transit."
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
                "Zero-trust Tailscale overlay across mobile workstations, cloud VPS, and private on-premises infrastructure",
                "Pi-hole with Unbound for full recursive DNS instead of third-party resolvers",
                "Exit-node routing and IP forwarding for encrypted transit on untrusted networks",
                "Interface-aware UFW policy allowing trusted overlay traffic while restricting other ingress",
            ],
            [
                "ED25519-basiertes SSH-Hardening mit passwortloser Administration",
                "Zero-Trust-Tailscale-Overlay über mobile Workstations, Cloud-VPS und private On-Premises-Infrastruktur",
                "Pi-hole mit Unbound für vollständige rekursive DNS-Auflösung statt Third-Party-Resolvern",
                "Exit-Node-Routing und IP-Forwarding für verschlüsselten Transit in unsicheren Netzen",
                "Interface-basierte UFW-Policy, die vertrauenswürdigen Overlay-Traffic erlaubt und anderen Ingress einschraenkt",
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
                "Privaten, ortsunabhaengigen Zugriff über On-Premises-, Cloud- und mobile Endpunkte hinweg geschaffen",
                "Die DNS-Auflösung in einen privacy-orientierten lokalen rekursiven Pfad unter eigener Kontrolle verlagert",
                "Einen stärkeren Security- und Betriebsunterbau für künftige Self-Hosted- und Edge-Services geschaffen",
            ]
        ),
        tech: ["Tailscale", "WireGuard", "OpenSSH", "ED25519", "Proxmox", "Debian 13", "Pi-hole", "Unbound", "UFW", "sysctl", "btop"],
        tags: ["Security", "Networking", "Hybrid Cloud", "Zero Trust"],
        links: [],
        diagrams: [
            {
                title: loc("Hardened Hybrid-Cloud Private Network", "Gehaertetes Hybrid-Cloud-Privatnetzwerk"),
                caption: loc(
                    "The network diagram shows roaming devices, Tailscale private overlay, the VPS cloud node, and the home lab runtime. It emphasizes key-only SSH, private DNS, interface-aware firewalling, exit-node routing, and planned segmentation without exposing management services directly to the public Internet.",
                    "Das Netzwerkdiagramm zeigt mobile Geraete, Tailscale Private Overlay, den VPS-Cloud-Node und die Home-Lab-Runtime. Es betont schluesselbasiertes SSH, private DNS-Aufloesung, interface-bewusste Firewall-Regeln, Exit-Node-Routing und geplante Segmentierung ohne direkte oeffentliche Exponierung der Management-Services."
                ),
                summary: locList(
                    [
                        "Management access is routed through authenticated private overlay nodes",
                        "Pi-hole and Unbound keep DNS resolution under local control",
                        "Planned IoT, guest, and detection layers are separated from the current verified baseline",
                    ],
                    [
                        "Management-Zugriff laeuft ueber authentifizierte private Overlay-Nodes",
                        "Pi-hole und Unbound halten DNS-Aufloesung unter eigener Kontrolle",
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
            "Dieses Projekt fokussiert den Betrieb persoenlicher Infrastruktur mit derselben Denkweise wie bei kleinen internen Plattformen: Services isolieren, Exponierung reduzieren, Verfuegbarkeit überwachen und Datenpfade kontrollieren."
        ),
        problem: loc(
            "Public SaaS tools simplify operations but reduce control over data location, exposure, and operational behavior.",
            "Öffentliche SaaS-Tools vereinfachen zwar den Betrieb, reduzieren aber die Kontrolle über Datenstandort, Exponierung und Betriebsverhalten."
        ),
        solution: loc(
            "I deployed a Docker-based services stack with reverse proxying, uptime monitoring, and controlled remote access. The platform complements the security lab by turning baseline infrastructure into an operational services environment.",
            "Ich habe einen Docker-basierten Service-Stack mit Reverse Proxy, Uptime-Monitoring und kontrolliertem Fernzugriff aufgebaut. Die Plattform ergaenzt das Security-Lab, indem sie die Basisinfrastruktur in eine operative Service-Umgebung überführt."
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
            "Monitoring und Service-Trennung erleichtern die Fehlererkennung und erlauben den Betrieb persoenlicher Infrastruktur wie eine kleine Produktivplattform."
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
                "DNS-Kontrolle und privacy-orientierte Service-Eigentuemerschaft",
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
                "Die Sichtbarkeit von Service-Zustand und Verfuegbarkeit verbessert",
                "Die öffentliche Exponierung interner Services reduziert",
                "Eine betriebsfähige Umgebung aufgebaut, die spätere AIoT-Workloads unterstuetzt",
            ]
        ),
        tech: ["Docker", "Linux", "Nginx Proxy Manager", "Pi-hole", "Uptime Kuma", "Cloudflare Tunnel"],
        tags: ["Infrastructure", "Security", "Operations"],
        links: [],
        diagrams: [
            {
                title: loc("Self-Hosted Services Platform", "Self-Hosted-Service-Plattform"),
                caption: loc(
                    "The service-platform diagram presents the project as a small production-minded self-hosted environment: client devices enter through controlled access, a Linux host runs Docker services behind Nginx Proxy Manager, and reliability is handled through monitoring, DNS control, backups, and service separation.",
                    "Das Service-Plattform-Diagramm zeigt das Projekt als kleine produktionsnahe Self-Hosted-Umgebung: Client-Geraete nutzen kontrollierte Einstiegspunkte, ein Linux-Host betreibt Docker-Services hinter Nginx Proxy Manager, und Zuverlaessigkeit entsteht durch Monitoring, DNS-Kontrolle, Backups und Service-Trennung."
                ),
                summary: locList(
                    [
                        "Only necessary entry points are represented as public-facing",
                        "Application services are isolated into containers instead of unmanaged host processes",
                        "Monitoring, backups, DNS control, and service separation are part of the operating model",
                    ],
                    [
                        "Nur notwendige Einstiegspunkte werden als oeffentlich erreichbar dargestellt",
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
            "Entwickelt eine mehrsprachige Portfolio-Plattform mit strukturierten Inhalten, CI-gestuetztem Deployment und wartbaren Publishing-Workflows."
        ),
        overview: loc(
            "This website is treated as a product, not a static resume page. The engineering focus is on maintainability, content structure, deployment flow, and presenting technical work with enough clarity to support recruiting and professional positioning.",
            "Diese Website wird als Produkt behandelt und nicht als statische Lebenslaufseite. Der Engineering-Fokus liegt auf Wartbarkeit, Inhaltsstruktur, Deployment-Flow und der klaren Darstellung technischer Arbeit für Recruiting und eine klare professionelle Positionierung."
        ),
        problem: loc(
            "A personal website needs to be fast, maintainable, and easy to update across multiple content areas without turning every change into manual rework.",
            "Eine persoenliche Website muss schnell, wartbar und über mehrere Inhaltsbereiche hinweg leicht aktualisierbar sein, ohne dass jede Aenderung zu manueller Mehrarbeit wird."
        ),
        solution: loc(
            "I built the site on Next.js App Router with TypeScript, lightweight i18n, reusable content components, and GitHub-connected deployment. The result is a maintainable publishing platform that supports projects, CV, blog content, and technical case studies.",
            "Ich habe die Seite mit Next.js App Router, TypeScript, leichtgewichtigem i18n, wiederverwendbaren Inhaltskomponenten und GitHub-gekoppeltem Deployment umgesetzt. Das Ergebnis ist eine wartbare Publishing-Plattform für Projekte, CV, Blog-Inhalte und technische Fallstudien."
        ),
        architecture: {
            node: loc(
                "The browser receives a performance-oriented frontend tailored for project discovery and professional positioning.",
                "Der Browser erhält ein performance-orientiertes Frontend für Projekterkundung und professionelle Positionierung."
            ),
            edge: loc(
                "Vercel handles delivery, previews, and runtime hosting for the public site experience.",
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
            "Versionskontrollierte Inhalte und Preview-Deployments reduzieren Publishing-Risiken und machen Site-Aenderungen vor dem Release besser pruefbar."
        ),
        keyFeatures: locList(
            [
                "Multilingual content model for projects, CV, and writing",
                "Reusable component structure for maintainable site evolution",
                "GitHub-connected deployment workflow",
                "SEO and accessibility-aware public presentation",
            ],
            [
                "Mehrsprachiges Inhaltsmodell für Projekte, CV und Fachtexte",
                "Wiederverwendbare Komponentenstruktur für wartbare Weiterentwicklung",
                "GitHub-gekoppelter Deployment-Workflow",
                "SEO- und Accessibility-bewusste öffentliche Präsentation",
            ]
        ),
        results: locList(
            [
                "Created a stronger professional platform for technical storytelling",
                "Reduced friction for publishing new case studies and portfolio updates",
                "Built a reusable web delivery baseline alongside the self-hosted variant",
            ],
            [
                "Eine stärkere professionelle Plattform für technisches Storytelling geschaffen",
                "Den Aufwand für neue Fallstudien und Portfolio-Updates reduziert",
                "Eine wiederverwendbare Web-Delivery-Basis parallel zur Self-Hosted-Variante aufgebaut",
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
                        "Shows source control, structured content, CI validation, preview deployment, production delivery, and visitor access in one review artifact",
                        "Matches the actual platform technologies: Next.js, TypeScript, Tailwind CSS, GitHub Actions, Vercel, and Plausible Analytics",
                        "Makes the project easier to evaluate as an engineered publishing platform rather than a static personal website",
                    ],
                    [
                        "Zeigt Source Control, strukturierte Inhalte, CI-Validierung, Preview-Deployment, Produktionsauslieferung und Besucherzugriff in einem Review-Artefakt",
                        "Passt zum realen Plattform-Stack: Next.js, TypeScript, Tailwind CSS, GitHub Actions, Vercel und Plausible Analytics",
                        "Macht das Projekt als entwickelte Publishing-Plattform bewertbar statt nur als statische persönliche Website",
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
            "Hybrid Cloud Delivery Platform",
            "Hybrid-Cloud-Delivery-Plattform"
        ),
        oneLiner: loc(
            "Elkaza.at runs on a self-hosted hybrid delivery platform where vps1 handles public ingress and CI/CD control, while debian-core serves the hardened static frontend, analytics, observability, and backups through Docker.",
            "Elkaza.at läuft auf einer self-hosted Hybrid-Delivery-Plattform, bei der vps1 den öffentlichen Ingress und die CI/CD-Steuerung übernimmt, während debian-core das gehärtete statische Frontend, Analytics, Observability und Backups über Docker ausliefert."
        ),
        overview: loc(
            "Elkaza.at is operated as a production-minded self-hosted delivery environment. Public HTTP/S traffic reaches vps1 first, where Nginx stream proxying forwards ports 80 and 443 over Tailscale to debian-core. The private Debian/Proxmox host runs Docker Compose, Nginx Proxy Manager, a static Nginx container for the exported Next.js frontend, and the Plausible analytics stack behind the same controlled ingress path.",
            "Elkaza.at wird als produktionsnahes Self-Hosted-Delivery-Environment betrieben. Öffentlicher HTTP/S-Traffic erreicht zuerst vps1, wo Nginx-Stream-Proxying die Ports 80 und 443 über Tailscale an debian-core weiterleitet. Der private Debian-/Proxmox-Host betreibt Docker Compose, Nginx Proxy Manager, einen statischen Nginx-Container für den exportierten Next.js-Frontend-Build und den Plausible-Analytics-Stack hinter demselben kontrollierten Ingress-Pfad."
        ),
        problem: loc(
            "A simple static VPS setup was not enough to demonstrate client-grade operations. The platform needed stronger automation, lower public exposure, reliable recovery options, and a deployment model that separates cloud build responsibilities from private hosting infrastructure.",
            "Ein einfacher statischer VPS-Betrieb reichte nicht aus, um clientfähige Operations zu demonstrieren. Die Plattform brauchte stärkere Automatisierung, geringere öffentliche Exponierung, verlässliche Recovery-Optionen und ein Deployment-Modell, das Cloud-Build-Verantwortung von privater Hosting-Infrastruktur trennt."
        ),
        solution: loc(
            "Elkaza upgraded the deployment into a fully automated CI/CD flow. GitHub Actions connects to vps1, refreshes the production checkout, runs linting, type checks, and the static Next.js build, then rsyncs the exported site over Tailscale into the debian-core Docker mount. Nginx Proxy Manager terminates the multi-domain certificate for elkaza.at, www.elkaza.at, and analytics.elkaza.at, applies the canonical www-to-apex redirect, and routes traffic to the web and analytics containers. The backend Nginx config adds compression, cache policy, HSTS, CSP, and other baseline security headers.",
            "Elkaza hat das Deployment zu einem vollautomatisierten CI/CD-Flow ausgebaut. GitHub Actions verbindet sich mit vps1, aktualisiert den Production-Checkout, führt Linting, Type-Checks und den statischen Next.js-Build aus und synchronisiert den exportierten Build über Tailscale in den Docker-Mount auf debian-core. Nginx Proxy Manager terminiert das Multi-Domain-Zertifikat für elkaza.at, www.elkaza.at und analytics.elkaza.at, setzt den kanonischen www-zu-Apex-Redirect und routet Traffic zu Web- und Analytics-Containern. Die Backend-Nginx-Konfiguration ergänzt Kompression, Cache-Policy, HSTS, CSP und weitere grundlegende Security-Header."
        ),
        architecture: {
            node: loc(
                "Client browsers receive the canonical HTTPS site from elkaza.at, with www redirected to the apex domain and analytics delivered through the first-party analytics.elkaza.at subdomain.",
                "Client-Browser erhalten die kanonische HTTPS-Seite über elkaza.at, wobei www auf die Apex-Domain umgeleitet wird und Analytics über die First-Party-Subdomain analytics.elkaza.at ausgeliefert wird."
            ),
            edge: loc(
                "debian-core hosts the private runtime layer with Docker Compose, Nginx Proxy Manager, the elkaza-web static Nginx container, Plausible, PostgreSQL, ClickHouse, observability, and backup services.",
                "debian-core hostet die private Runtime-Schicht mit Docker Compose, Nginx Proxy Manager, dem statischen Nginx-Container elkaza-web, Plausible, PostgreSQL, ClickHouse, Observability und Backup-Services."
            ),
            cloud: loc(
                "vps1 stays deliberately thin: it is the public TCP ingress and deployment control point, forwarding web traffic and release artifacts to debian-core over the private Tailscale overlay.",
                "vps1 bleibt bewusst schlank: Der Server ist öffentlicher TCP-Ingress und Deployment-Kontrollpunkt und leitet Web-Traffic sowie Release-Artefakte über das private Tailscale-Overlay an debian-core weiter."
            ),
        },
        security: loc(
            "The architecture follows a Zero-Trust access model. The private hosting server is reached over Tailscale rather than exposed directly through the home router, TLS is centralized in Nginx Proxy Manager, and the web container enforces HSTS, CSP, X-Frame-Options, Referrer-Policy, and MIME-sniffing protection. Public ingress is limited to the controlled HTTP/S path needed to serve the website and analytics.",
            "Die Architektur folgt einem Zero-Trust-Zugriffsmodell. Der private Hosting-Server wird über Tailscale erreicht statt direkt über den Heimrouter exponiert, TLS ist in Nginx Proxy Manager zentralisiert, und der Web-Container erzwingt HSTS, CSP, X-Frame-Options, Referrer-Policy und Schutz gegen MIME-Sniffing. Öffentlicher Ingress bleibt auf den kontrollierten HTTP/S-Pfad für Website und Analytics beschränkt."
        ),
        reliability: loc(
            "Automated builds, scripted rsync releases, bounded smoke checks, service separation, and a 7-day backup rotation reduce manual deployment risk and improve recovery readiness. The deployment workflow now tests both the private backend path and the local ingress path so routing mistakes are caught before they become silent production drift.",
            "Automatisierte Builds, geskriptete rsync-Releases, begrenzte Smoke-Checks, Service-Trennung und eine 7-Tage-Backup-Rotation reduzieren manuelles Deployment-Risiko und verbessern die Recovery-Bereitschaft. Der Deployment-Workflow prüft jetzt sowohl den privaten Backend-Pfad als auch den lokalen Ingress-Pfad, damit Routing-Fehler nicht unbemerkt in Production driften."
        ),
        keyFeatures: locList(
            [
                "Public vps1 TCP ingress for ports 80 and 443, forwarded over Tailscale to the private debian-core runtime",
                "Nginx Proxy Manager termination for elkaza.at, www.elkaza.at, and analytics.elkaza.at with canonical www-to-apex redirect",
                "Dockerized elkaza-web Nginx container serving the static Next.js export with gzip, long-lived asset caching, HSTS, and CSP",
                "GitHub Actions deployment through vps1 with linting, type checks, static build, rsync release, and smoke checks",
                "Self-hosted Plausible analytics with PostgreSQL and ClickHouse behind a first-party analytics subdomain",
                "Observability and operations layer with Uptime Kuma, Netdata, Portainer, Dozzle, Watchtower, CrowdSec, Pi-hole, and rotating backups",
            ],
            [
                "Öffentlicher vps1-TCP-Ingress für die Ports 80 und 443, über Tailscale an die private debian-core-Runtime weitergeleitet",
                "Nginx-Proxy-Manager-Terminierung für elkaza.at, www.elkaza.at und analytics.elkaza.at mit kanonischem www-zu-Apex-Redirect",
                "Dockerisierter elkaza-web-Nginx-Container, der den statischen Next.js-Export mit gzip, langlebigem Asset-Caching, HSTS und CSP ausliefert",
                "GitHub-Actions-Deployment über vps1 mit Linting, Type-Checks, statischem Build, rsync-Release und Smoke-Checks",
                "Self-hosted Plausible Analytics mit PostgreSQL und ClickHouse hinter einer First-Party-Analytics-Subdomain",
                "Observability- und Operations-Schicht mit Uptime Kuma, Netdata, Portainer, Dozzle, Watchtower, CrowdSec, Pi-hole und rotierenden Backups",
            ]
        ),
        results: locList(
            [
                "Moved Elkaza.at from a manual static VPS workflow to a repeatable self-hosted delivery platform",
                "Reduced exposure by keeping the private runtime behind Tailscale instead of direct home-router ingress",
                "Improved production behavior with canonical redirects, strict TLS coverage, compression, cache headers, HSTS, CSP, and static asset caching",
                "Validated the delivery workflow with passing lint, typecheck, build, backend smoke checks, ingress smoke checks, and GitHub Actions deployment",
                "Created a client-facing infrastructure case study around automation, security, performance, and operational maturity",
            ],
            [
                "Elkaza.at von einem manuellen statischen VPS-Workflow zu einer wiederholbaren Self-Hosted-Delivery-Plattform weiterentwickelt",
                "Die Exponierung reduziert, indem die private Runtime hinter Tailscale statt hinter direktem Heimrouter-Ingress bleibt",
                "Das Production-Verhalten durch kanonische Redirects, strikte TLS-Abdeckung, Kompression, Cache-Header, HSTS, CSP und Static-Asset-Caching verbessert",
                "Den Delivery-Workflow mit erfolgreichen Lint-, Typecheck-, Build-, Backend-Smoke-, Ingress-Smoke- und GitHub-Actions-Deployments validiert",
                "Eine kundenorientierte Infrastruktur-Fallstudie zu Automatisierung, Sicherheit, Performance und operativer Reife geschaffen",
            ]
        ),
        tech: ["Next.js", "TypeScript", "GitHub Actions", "Bash", "Tailscale", "Docker Compose", "Nginx", "Nginx Proxy Manager", "Plausible Analytics", "PostgreSQL", "ClickHouse"],
        tags: ["Web", "Hybrid Cloud", "Zero Trust", "Automation"],
        links: [
            { label: "Live Site", url: "https://www.elkaza.at" },
            { label: "GitHub", url: "https://github.com/Elkaza/elkaza-web" },
        ],
        diagrams: [
            {
                title: loc("Elkaza.at Delivery Architecture", "Elkaza.at-Delivery-Architektur"),
                caption: loc(
                    "Current request and deployment path for Elkaza.at: public traffic reaches vps1, Nginx streams HTTP/S over Tailscale to debian-core, Nginx Proxy Manager terminates HTTPS and routes to static web and analytics containers, while GitHub Actions deploys through vps1.",
                    "Aktueller Request- und Deployment-Pfad für Elkaza.at: Öffentlicher Traffic erreicht vps1, Nginx streamt HTTP/S über Tailscale zu debian-core, Nginx Proxy Manager terminiert HTTPS und routet zu statischen Web- und Analytics-Containern, während GitHub Actions über vps1 deployt."
                ),
                summary: locList(
                    [
                        "Separates public ingress, private runtime, and CI/CD control so each part has a clear responsibility",
                        "Shows why the private Debian host is not directly exposed even though Elkaza.at is public",
                        "Documents the current hardening changes: canonical redirect, SAN certificate, security headers, caching, and smoke checks",
                    ],
                    [
                        "Trennt öffentlichen Ingress, private Runtime und CI/CD-Steuerung mit klarer Verantwortung je Schicht",
                        "Zeigt, warum der private Debian-Host nicht direkt exponiert ist, obwohl Elkaza.at öffentlich erreichbar ist",
                        "Dokumentiert die aktuellen Hardening-Änderungen: kanonischer Redirect, SAN-Zertifikat, Security-Header, Caching und Smoke-Checks",
                    ]
                ),
                src: "/project-diagrams/elkaza-at-delivery-architecture.svg",
            },
        ],
        relatedProjectSlug: "elkaza-org",
    },
];
