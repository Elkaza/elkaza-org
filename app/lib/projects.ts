import { Locale } from "../i18n/messages";

type LocalizedString = Record<Locale, string>;
type LocalizedList = Record<Locale, string[]>;

export type ProjectCategory =
    | "featured-aiot"
    | "platform-component"
    | "security-infrastructure"
    | "delivery-platform";

export interface Project {
    slug: string;
    category: ProjectCategory;
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
    security: LocalizedString;
    reliability: LocalizedString;
    keyFeatures: LocalizedList;
    results: LocalizedList;
    tech: string[];
    tags: string[];
    links: { label: string; url: string }[];
    images?: string[];
    relatedProjectSlug?: string;
}

const loc = (en: string, de = en, ar = en): LocalizedString => ({ en, de, ar });
const locList = (en: string[], de = en, ar = en): LocalizedList => ({ en, de, ar });

export const projects: Project[] = [
    {
        slug: "rpi-ble-mqtt-gateway",
        category: "featured-aiot",
        year: "2026",
        title: loc(
            "Secure BLE MQTT Monitoring Platform",
            "Sichere BLE-MQTT-Monitoring-Plattform"
        ),
        oneLiner: loc(
            "Built a Raspberry Pi 5 monitoring platform that ingests BLE sensor data, secures transport with TLS-enabled MQTT, processes events in Node-RED, stores metrics in InfluxDB, and visualizes them in Grafana.",
            "Entwickelt eine Raspberry-Pi-5-Monitoring-Plattform, die BLE-Sensordaten erfasst, den Transport ueber TLS-abgesichertes MQTT schuetzt, Ereignisse in Node-RED verarbeitet, Metriken in InfluxDB speichert und in Grafana visualisiert."
        ),
        overview: loc(
            "This project combines multiple course assignments into one end-to-end system that runs locally on a Raspberry Pi 5. Instead of presenting BLE, MQTT, dashboards, and storage as isolated exercises, the stack is framed as one deployable monitoring platform with secure messaging, observability, and GitHub-safe secret handling.",
            "Dieses Projekt fuehrt mehrere Aufgaben in ein durchgaengiges System zusammen, das lokal auf einem Raspberry Pi 5 laeuft. Statt BLE, MQTT, Dashboards und Speicherung als getrennte Uebungen zu zeigen, ist der Stack als eine deploybare Monitoring-Plattform mit sicherer Nachrichtenuebertragung, Observability und GitHub-sicherem Secret-Handling aufgebaut."
        ),
        problem: loc(
            "Separate homework-style steps do not communicate real engineering depth. The system needed to be combined into one coherent platform with secure transport, secret management, processing, storage, dashboards, and a repository structure that can be published safely.",
            "Getrennte aufgabenartige Teilschritte vermitteln keine wirkliche Engineering-Tiefe. Das System musste zu einer zusammenhaengenden Plattform mit sicherem Transport, Secret-Management, Verarbeitung, Speicherung, Dashboards und einer sicher publizierbaren Repository-Struktur zusammengefuehrt werden."
        ),
        solution: loc(
            "I combined the BLE collector, Mosquitto broker, Node-RED flow, InfluxDB, and Grafana into a Podman Compose stack on Raspberry Pi 5. MQTT traffic is protected with X.509 certificates, Grafana and InfluxDB credentials are injected through Podman secrets, Node-RED credentials are moved out of hardcoded config, and the public repository now ships with .env.example, .gitignore, and a reusable create_secrets.sh workflow.",
            "Ich habe BLE-Collector, Mosquitto-Broker, Node-RED-Flow, InfluxDB und Grafana zu einem Podman-Compose-Stack auf dem Raspberry Pi 5 zusammengefuehrt. Der MQTT-Verkehr ist mit X.509-Zertifikaten geschuetzt, Grafana- und InfluxDB-Zugangsdaten werden ueber Podman-Secrets injiziert, Node-RED-Credentials aus der hartkodierten Konfiguration herausgeloest und das oeffentliche Repository mit .env.example, .gitignore und einem wiederverwendbaren create_secrets.sh-Workflow ausgestattet."
        ),
        architecture: {
            node: loc(
                "BLE sensor nodes publish environmental telemetry from ESP32-class devices into the local gateway path.",
                "BLE-Sensorknoten senden Umgebungs-Telemetrie von ESP32-basierten Geraeten in den lokalen Gateway-Pfad."
            ),
            edge: loc(
                "Raspberry Pi 5 hosts containerized BLE ingestion, Mosquitto, Node-RED, InfluxDB, and Grafana as one local monitoring stack managed with Podman Compose.",
                "Der Raspberry Pi 5 hostet containerisierte BLE-Ingestion, Mosquitto, Node-RED, InfluxDB und Grafana als lokalen Monitoring-Stack, verwaltet mit Podman Compose."
            ),
            cloud: loc(
                "The design is local-first and does not require a public cloud; processed telemetry can later be forwarded to remote dashboards or alerting systems if needed.",
                "Das Design ist local-first und benoetigt keine Public Cloud; verarbeitete Telemetrie kann spaeter bei Bedarf an entfernte Dashboards oder Alerting-Systeme weitergeleitet werden."
            ),
        },
        security: loc(
            "Mutual TLS with X.509 certificates protects MQTT traffic, Podman secrets isolate admin passwords and token keys, and the GitHub repository excludes local env files, generated tokens, and private certificate material.",
            "Gegenseitiges TLS mit X.509-Zertifikaten schuetzt den MQTT-Verkehr, Podman-Secrets kapseln Admin-Passwoerter und Token-Schluessel, und das GitHub-Repository schliesst lokale Env-Dateien, generierte Tokens und privates Zertifikatsmaterial aus."
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
                "Mehrere getrennte Aufgaben in eine zusammenhaengende Monitoring-Plattform ueberfuehrt",
                "Ein oeffentliches GitHub-Repository veroeffentlicht, ohne Secrets oder privates Key-Material mitzuliefern",
                "Ein staerkeres Portfolio-Signal fuer Systemintegration, Observability und sicheres Deployment auf dem Raspberry Pi geschaffen",
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
        year: "2026",
        title: loc(
            "Telemetry Processing and Dashboard Layer",
            "Telemetrie-, Verarbeitungs- und Dashboard-Schicht"
        ),
        oneLiner: loc(
            "Built the Node-RED, InfluxDB, and Grafana layer that transforms MQTT telemetry into stored metrics and operator-facing dashboards.",
            "Entwickelt die Node-RED-, InfluxDB- und Grafana-Schicht, die MQTT-Telemetrie in gespeicherte Metriken und operatornahe Dashboards ueberfuehrt."
        ),
        overview: loc(
            "This project is the observability and analytics layer inside the wider BLE monitoring platform. It focuses on how telemetry is normalized, stored, provisioned into dashboards, and made useful for operators instead of remaining raw MQTT payloads.",
            "Dieses Projekt bildet die Observability- und Analytics-Schicht innerhalb der groesseren BLE-Monitoring-Plattform. Der Fokus liegt darauf, wie Telemetrie normalisiert, gespeichert, in Dashboards provisioniert und fuer Betreiber nutzbar gemacht wird, statt als rohe MQTT-Payloads liegenzubleiben."
        ),
        problem: loc(
            "MQTT messages alone do not provide operational visibility. The platform still needs schema normalization, durable storage, dashboard provisioning, and a clean way to share access tokens between services without hardcoding secrets.",
            "MQTT-Nachrichten allein liefern noch keine operative Sichtbarkeit. Die Plattform braucht weiterhin Schema-Normalisierung, dauerhafte Speicherung, Dashboard-Provisionierung und einen sauberen Weg, Zugriffstokens zwischen Services zu teilen, ohne Secrets hart zu kodieren."
        ),
        solution: loc(
            "I implemented a local analytics stack in which Node-RED subscribes to MQTT, reshapes telemetry into a stable measurement schema, writes it to InfluxDB, and exposes dashboards through Grafana. Token handoff between InfluxDB, Node-RED, and Grafana is handled through encrypted files and Podman secrets rather than plaintext values in the repository.",
            "Ich habe einen lokalen Analytics-Stack umgesetzt, in dem Node-RED MQTT abonniert, Telemetrie in ein stabiles Messschema ueberfuehrt, in InfluxDB schreibt und Dashboards ueber Grafana bereitstellt. Die Token-Uebergabe zwischen InfluxDB, Node-RED und Grafana erfolgt ueber verschluesselte Dateien und Podman-Secrets statt ueber Klartextwerte im Repository."
        ),
        architecture: {
            node: loc(
                "Sensor events arrive from the BLE and MQTT path as the input stream for downstream processing.",
                "Sensoreignisse kommen ueber den BLE- und MQTT-Pfad als Eingabestrom fuer die nachgelagerte Verarbeitung an."
            ),
            edge: loc(
                "Raspberry Pi 5 runs Node-RED, InfluxDB, and Grafana as the local analytics and dashboard layer of the monitoring platform.",
                "Der Raspberry Pi 5 betreibt Node-RED, InfluxDB und Grafana als lokale Analytics- und Dashboard-Schicht der Monitoring-Plattform."
            ),
            cloud: loc(
                "The stack is designed to stay useful without external cloud dependencies, while leaving room for later alerting or remote visualization if needed.",
                "Der Stack ist so aufgebaut, dass er auch ohne externe Cloud-Abhaengigkeiten nuetzlich bleibt und gleichzeitig Raum fuer spaeteres Alerting oder entfernte Visualisierung laesst."
            ),
        },
        security: loc(
            "InfluxDB tokens are generated inside the stack, encrypted before being shared through mounted volumes, and decrypted only inside the services that need them.",
            "InfluxDB-Tokens werden innerhalb des Stacks erzeugt, vor der Weitergabe ueber gemountete Volumes verschluesselt und nur in den Services entschluesselt, die sie wirklich benoetigen."
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
                "Node-RED-Flow fuer Normalisierung und Routing der MQTT-Telemetrie",
                "InfluxDB-Setup und Token-Erzeugung waehrend der Container-Initialisierung",
                "Grafana-Datasource- und Dashboard-Provisionierung aus versionierten Dateien",
                "Verschluesselter Token-Austausch zwischen Analytics-Services",
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
        year: "2026",
        title: loc(
            "Containerized BLE Edge Gateway",
            "Containerisiertes BLE Edge Gateway"
        ),
        oneLiner: loc(
            "Built a containerized BLE gateway on embedded Linux to bridge sensor data into a reusable edge integration layer.",
            "Entwickelt ein containerisiertes BLE-Gateway auf Embedded Linux, um Sensordaten in eine wiederverwendbare Edge-Integrationsschicht zu ueberfuehren."
        ),
        overview: loc(
            "This gateway project focuses on the difficult middle layer between embedded devices and backend services. The main engineering work is not the sensor itself, but the reliable Linux-side integration with BlueZ, D-Bus, and container boundaries.",
            "Dieses Gateway-Projekt fokussiert die anspruchsvolle Mittelschicht zwischen Embedded-Geraeten und Backend-Services. Die eigentliche Ingenieursarbeit liegt nicht im Sensor selbst, sondern in der zuverlaessigen Linux-Integration mit BlueZ, D-Bus und Containergrenzen."
        ),
        problem: loc(
            "BLE payloads are awkward to operationalize on embedded Linux when host Bluetooth access, D-Bus, and container isolation all need to coexist.",
            "BLE-Payloads lassen sich auf Embedded Linux nur schwer operationalisieren, wenn Host-Bluetooth-Zugriff, D-Bus und Container-Isolation gleichzeitig funktionieren muessen."
        ),
        solution: loc(
            "I built a Podman-based Python gateway that connects to an ESP32 BLE sensor, parses environmental telemetry, and emits normalized timestamped readings. The container is configured to access the host Bluetooth stack through BlueZ and D-Bus without turning the solution into a single ad hoc script.",
            "Ich habe ein Podman-basiertes Python-Gateway gebaut, das sich mit einem ESP32-BLE-Sensor verbindet, Umweltdaten parst und normalisierte zeitgestempelte Messwerte ausgibt. Der Container greift ueber BlueZ und D-Bus auf den Host-Bluetooth-Stack zu, ohne dass die Loesung zu einem einmaligen Skript verkommt."
        ),
        architecture: {
            node: loc(
                "An ESP32 BLE sensor publishes environmental readings using a lightweight custom device profile.",
                "Ein ESP32-BLE-Sensor sendet Umweltdaten ueber ein leichtgewichtiges Geraeteprofil."
            ),
            edge: loc(
                "A Rock4 SE runs a containerized Python gateway that reads BLE data through BlueZ and D-Bus on the host.",
                "Ein Rock4 SE betreibt ein containerisiertes Python-Gateway, das BLE-Daten ueber BlueZ und D-Bus auf dem Host liest."
            ),
            cloud: loc(
                "The output is designed to feed downstream MQTT and analytics layers rather than stay trapped inside the gateway host.",
                "Die Ausgabe ist so aufgebaut, dass sie nachgelagerte MQTT- und Analytics-Schichten versorgt, statt auf dem Gateway-Host zu verbleiben."
            ),
        },
        security: loc(
            "Container boundaries reduce blast radius, while Bluetooth access is limited to the specific service that needs BlueZ and D-Bus integration.",
            "Containergrenzen reduzieren den Schadensradius, waehrend Bluetooth-Zugriff auf den Service begrenzt bleibt, der BlueZ- und D-Bus-Integration wirklich benoetigt."
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
                "Python-Telemetrieparser fuer BLE-Umweltpayloads",
                "Wiederholbare Build- und Start-Skripte fuer Embedded-Linux-Deployment",
                "Normalisierte zeitgestempelte Ausgabe fuer nachgelagerte Systeme",
            ]
        ),
        results: locList(
            [
                "Bridged physical BLE sensing into a reusable software integration point",
                "Demonstrated Linux-side systems engineering beyond device firmware",
                "Created the foundation for the secured MQTT gateway",
            ],
            [
                "Physische BLE-Sensorik in einen wiederverwendbaren Software-Integrationspunkt ueberfuehrt",
                "Linux-seitiges Systems Engineering jenseits reiner Firmware demonstriert",
                "Die Grundlage fuer das abgesicherte MQTT-Gateway geschaffen",
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
        year: "2025",
        title: loc(
            "Real-Time Environmental Sensor Node",
            "Echtzeit-Umweltsensorknoten"
        ),
        oneLiner: loc(
            "Implemented a FreeRTOS-based sensor node that separates sensing, connectivity, and telemetry tasks for predictable real-time behavior.",
            "Implementiert einen FreeRTOS-basierten Sensorknoten, der Erfassung, Konnektivitaet und Telemetrie in getrennte Tasks aufteilt, um vorhersagbares Echtzeitverhalten zu erreichen."
        ),
        overview: loc(
            "This project reframes a small sensor build as embedded systems engineering. The focus is not just reading a value from a sensor, but designing firmware that can scale into a larger AIoT stack without blocking loops and timing drift.",
            "Dieses Projekt rahmt einen kleinen Sensoraufbau als Embedded-Systems-Engineering neu ein. Der Fokus liegt nicht nur auf dem Auslesen eines Sensors, sondern auf Firmware, die sich ohne blockierende Loops und Timing-Drift in einen groesseren AIoT-Stack integrieren laesst."
        ),
        problem: loc(
            "Simple Arduino-style loops become fragile once sensor timing, wireless communication, and user interaction need to happen concurrently.",
            "Einfache Arduino-Loops werden fragil, sobald Sensor-Timing, Funkkommunikation und Benutzereingaben gleichzeitig stattfinden muessen."
        ),
        solution: loc(
            "I designed a FreeRTOS architecture with dedicated tasks for sensing, connectivity, and telemetry, using queue-based communication between execution domains. This makes the node a reusable building block for future BLE, MQTT, and TinyML extensions.",
            "Ich habe eine FreeRTOS-Architektur mit dedizierten Tasks fuer Sensorik, Konnektivitaet und Telemetrie entworfen und die Ausfuehrungsbereiche ueber Queues gekoppelt. Damit wird der Knoten zu einem wiederverwendbaren Baustein fuer spaetere BLE-, MQTT- und TinyML-Erweiterungen."
        ),
        architecture: {
            node: loc(
                "An ESP32-S3 acquires environmental data and runs separate RTOS tasks for sensing, connectivity, and telemetry handling.",
                "Ein ESP32-S3 erfasst Umweltdaten und betreibt getrennte RTOS-Tasks fuer Sensorik, Konnektivitaet und Telemetrie."
            ),
            edge: loc(
                "An edge receiver or gateway ingests telemetry so the device does not need to expose a complex external surface itself.",
                "Ein Edge-Receiver oder Gateway nimmt die Telemetrie auf, sodass das Geraet selbst keine komplexe externe Oberflaeche anbieten muss."
            ),
            cloud: loc(
                "Normalized measurements can be forwarded to dashboards, storage, or AI pipelines after they leave the node through the gateway path.",
                "Normalisierte Messwerte koennen nach Verlassen des Knotens ueber den Gateway-Pfad an Dashboards, Speicher oder KI-Pipelines weitergeleitet werden."
            ),
        },
        security: loc(
            "The node is designed to publish through an authenticated gateway path instead of acting like a directly exposed network service.",
            "Der Knoten ist darauf ausgelegt, ueber einen authentifizierten Gateway-Pfad zu publizieren, statt selbst als direkt exponierter Netzwerkdienst aufzutreten."
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
                "FreeRTOS-Task-Isolation fuer Sensorik, Konnektivitaet und Telemetrie",
                "Queue-basierte Kommunikation zwischen Ausfuehrungsbereichen",
                "Vorhersagbares Sampling-Verhalten unter gleichzeitiger Systemlast",
                "Wiederverwendbares Embedded-Muster fuer spaetere TinyML- und BLE-Erweiterungen",
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
                "Eine staerkere Grundlage fuer kuenftige Sensorfusion geschaffen",
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
        year: "2026",
        title: loc(
            "The Vienna Fortress",
            "The Vienna Fortress"
        ),
        oneLiner: loc(
            "Built a hardened Proxmox and Docker operations platform that combines layered security, real-time observability, reverse proxying, and automated container lifecycle management.",
            "Eine gehaertete Proxmox- und Docker-Betriebsplattform aufgebaut, die mehrschichtige Sicherheit, Echtzeit-Observability, Reverse Proxying und automatisiertes Container-Lifecycle-Management verbindet."
        ),
        overview: loc(
            "The Vienna Fortress turns a basic home lab into a more production-minded internal platform. The project focuses on defense in depth, service visibility, operational hygiene, and a central dashboard-driven control plane for self-hosted services.",
            "The Vienna Fortress entwickelt ein einfaches Homelab zu einer produktionsnaeheren internen Plattform weiter. Im Fokus stehen Defense in Depth, Service-Sichtbarkeit, operative Hygiene und eine zentrale dashboardgetriebene Control Plane fuer Self-Hosted-Services."
        ),
        problem: loc(
            "Deploying individual tools is easy; building a secure and operable platform is harder. The environment needed layered protection, live health visibility, reliable log access, and a clean way to surface Proxmox state inside a frontend dashboard without brittle ad hoc scripts.",
            "Einzelne Tools zu deployen ist einfach; daraus eine sichere und betreibbare Plattform zu machen ist deutlich schwieriger. Die Umgebung brauchte mehrschichtigen Schutz, Live-Sicht auf den Systemzustand, verlaesslichen Log-Zugriff und einen sauberen Weg, Proxmox-Zustand in einem Frontend-Dashboard sichtbar zu machen, ohne fragile Ad-hoc-Skripte."
        ),
        solution: loc(
            "I built the stack on Proxmox 9.1 and Debian 12, then deployed Dockerized services for reverse proxying, DNS filtering, intrusion response, monitoring, status checks, log viewing, update automation, and internal service discovery. I also debugged the Proxmox API integration used by a React-based dashboard by validating authentication flow, isolating response mismatches, and adapting request handling so virtualization data could render reliably.",
            "Ich habe den Stack auf Proxmox 9.1 und Debian 12 aufgebaut und darauf Dockerisierte Services fuer Reverse Proxying, DNS-Filterung, Intrusion Response, Monitoring, Statuspruefungen, Log-Einsicht, Update-Automatisierung und interne Service-Uebersicht bereitgestellt. Zusaetzlich habe ich die Proxmox-API-Integration eines React-basierten Dashboards debuggt, indem ich den Authentifizierungsfluss validiert, Antwortabweichungen isoliert und das Request-Handling so angepasst habe, dass Virtualisierungsdaten verlaesslich dargestellt werden."
        ),
        architecture: {
            node: loc(
                "Admins and users consume services through Homepage and reverse-proxied entry points, while the dashboard layer surfaces service and virtualization state in one place.",
                "Admins und Nutzer greifen ueber Homepage und reverse-proxied Einstiegspunkte auf Services zu, waehrend die Dashboard-Schicht Service- und Virtualisierungszustand an einer Stelle sichtbar macht."
            ),
            edge: loc(
                "A Proxmox 9.1 host runs Debian 12 workloads and Docker services including Nginx Proxy Manager, Pi-hole, CrowdSec, Netdata, Uptime Kuma, Dozzle, Watchtower, and Homepage.",
                "Ein Proxmox-9.1-Host betreibt Debian-12-Workloads und Docker-Services wie Nginx Proxy Manager, Pi-hole, CrowdSec, Netdata, Uptime Kuma, Dozzle, Watchtower und Homepage."
            ),
            cloud: loc(
                "The design is local-first and does not depend on a public cloud. It can later be extended with secure remote access or replicated services without redesigning the service plane.",
                "Das Design ist local-first und benoetigt keine Public Cloud. Es kann spaeter mit sicherem Fernzugriff oder replizierten Services erweitert werden, ohne die Service-Ebene neu entwerfen zu muessen."
            ),
        },
        security: loc(
            "Security is layered instead of concentrated in one component: Pi-hole handles DNS filtering, CrowdSec adds IPS-style detection and remediation, Nginx Proxy Manager centralizes service exposure, and workload separation on Proxmox limits blast radius.",
            "Sicherheit ist geschichtet statt auf eine einzelne Komponente konzentriert: Pi-hole uebernimmt DNS-Filterung, CrowdSec ergaenzt IPS-aehnliche Erkennung und Gegenmassnahmen, Nginx Proxy Manager zentralisiert Service-Exponierung, und die Workload-Trennung auf Proxmox begrenzt den Schadensradius."
        ),
        reliability: loc(
            "Netdata, Uptime Kuma, and Dozzle provide metrics, health checks, and log visibility, while Watchtower automates the container update lifecycle and reduces manual drift across long-running services.",
            "Netdata, Uptime Kuma und Dozzle liefern Metriken, Health Checks und Log-Sichtbarkeit, waehrend Watchtower den Container-Update-Lifecycle automatisiert und manuellen Drift ueber langlebige Services hinweg reduziert."
        ),
        keyFeatures: locList(
            [
                "Layered security with Pi-hole DNS filtering and CrowdSec-based intrusion response",
                "Reverse-proxied service access through Nginx Proxy Manager",
                "Netdata, Uptime Kuma, and Dozzle for metrics, uptime checks, and live container logs",
                "Debugged and stabilized a React-based Proxmox API integration for dashboard visibility",
                "Watchtower-driven container update workflow for routine maintenance",
            ],
            [
                "Mehrschichtige Sicherheit mit Pi-hole-DNS-Filterung und CrowdSec-basierter Intrusion Response",
                "Reverse-proxied Service-Zugriff ueber Nginx Proxy Manager",
                "Netdata, Uptime Kuma und Dozzle fuer Metriken, Uptime-Checks und Live-Container-Logs",
                "Eine React-basierte Proxmox-API-Integration fuer Dashboard-Sichtbarkeit debuggt und stabilisiert",
                "Ein Watchtower-gesteuerter Container-Update-Workflow fuer die Regelwartung",
            ]
        ),
        results: locList(
            [
                "Turned a generic home lab into a hardened internal platform with clearer operational boundaries",
                "Added real-time visibility across service health, metrics, and logs",
                "Resolved a cross-layer integration issue between frontend code and the Proxmox API",
                "Reduced routine maintenance effort through automated container updates",
                "Created a scalable baseline for adding future internal tools without reworking the control plane",
            ],
            [
                "Ein generisches Homelab in eine gehaertete interne Plattform mit klareren Betriebsgrenzen ueberfuehrt",
                "Echtzeit-Sicht auf Service-Zustand, Metriken und Logs geschaffen",
                "Ein schichtuebergreifendes Integrationsproblem zwischen Frontend-Code und der Proxmox-API geloest",
                "Den Wartungsaufwand durch automatisierte Container-Updates reduziert",
                "Eine skalierbare Basis fuer weitere interne Tools geschaffen, ohne die Control Plane neu aufbauen zu muessen",
            ]
        ),
        tech: ["Debian 12", "Proxmox 9.1", "Docker", "Nginx Proxy Manager", "Pi-hole", "CrowdSec", "Netdata", "Uptime Kuma", "Dozzle", "Watchtower", "Homepage"],
        tags: ["Security", "Infrastructure", "Operations", "Platform"],
        links: [],
        images: [
            "/images/vienna-fortress-architecture.svg",
            "/images/vienna-fortress-dashboard.svg",
            "/images/vienna-fortress-evidence.svg",
        ],
        relatedProjectSlug: "home-security-lab",
    },
    {
        slug: "home-security-lab",
        category: "security-infrastructure",
        year: "2026",
        title: loc(
            "Hardened Hybrid-Cloud Private Network",
            "Gehaertetes Hybrid-Cloud-Privatnetzwerk"
        ),
        oneLiner: loc(
            "Phase 1 completed: designed a zero-trust private network across home, cloud, and roaming endpoints with SSH hardening, DNS privacy, and secure remote transit.",
            "Phase 1 abgeschlossen: Aufbau eines Zero-Trust-Privatnetzwerks ueber Home-, Cloud- und mobile Endpunkte mit SSH-Haertung, DNS-Privatsphaere und sicherem Remote-Transit."
        ),
        overview: loc(
            "This project shows the transition from a basic home lab to a hardened hybrid-cloud architecture. The focus is on zero-trust access, private DNS resolution, interface-aware firewalling, and an operations-friendly foundation for distributed services and later edge workloads.",
            "Dieses Projekt zeigt den Uebergang von einem einfachen Homelab zu einer gehaerteten Hybrid-Cloud-Architektur. Im Fokus stehen Zero-Trust-Zugriff, private DNS-Aufloesung, interface-basierte Firewall-Regeln und ein betriebsfaehiger Unterbau fuer verteilte Services und spaetere Edge-Workloads."
        ),
        problem: loc(
            "Distributed infrastructure across home lab systems, cloud servers, and travel devices quickly becomes hard to secure. Without key-only administration, private DNS, and consistent remote access patterns, the attack surface grows and operations become brittle.",
            "Verteilte Infrastruktur ueber Homelab-Systeme, Cloud-Server und Reisegeraete hinweg wird schnell schwer abzusichern. Ohne schluesselbasierte Administration, private DNS-Aufloesung und konsistente Fernzugriffsmuster waechst die Angriffsoberflaeche und der Betrieb wird fragil."
        ),
        solution: loc(
            "I implemented a Tailscale-based private overlay connecting roaming workstations, a VPS, and a Debian VM on Proxmox. SSH was hardened around ED25519 keys and passwordless access, Pi-hole and Unbound provide sovereign DNS, and interface-aware UFW rules plus exit-node routing make the environment safer and more usable across locations.",
            "Ich habe ein Tailscale-basiertes privates Overlay umgesetzt, das mobile Workstations, einen VPS und eine Debian-VM auf Proxmox verbindet. SSH wurde auf ED25519-Schluessel und passwortlose Anmeldung gehaertet, Pi-hole und Unbound liefern souveraene DNS-Aufloesung, und interface-basierte UFW-Regeln plus Exit-Node-Routing machen die Umgebung sicherer und ueber Standorte hinweg besser nutzbar."
        ),
        architecture: {
            node: loc(
                "Roaming laptops and other client devices join the private overlay as authenticated nodes and use stable private addressing plus shared SSH aliases for consistent administration.",
                "Mobile Laptops und andere Client-Geraete treten dem privaten Overlay als authentifizierte Nodes bei und nutzen stabile private Adressen plus gemeinsame SSH-Aliasse fuer konsistente Administration."
            ),
            edge: loc(
                "A Debian VM on a Proxmox host provides the private operations anchor: hardened SSH, Pi-hole, Unbound, exit-node capability, and the firewall rules that separate trusted overlay traffic from other interfaces.",
                "Eine Debian-VM auf einem Proxmox-Host bildet den privaten Betriebsanker: gehaertetes SSH, Pi-hole, Unbound, Exit-Node-Funktion und Firewall-Regeln, die vertrauenswuerdigen Overlay-Traffic von anderen Interfaces trennen."
            ),
            cloud: loc(
                "A VPS participates in the same private overlay, extending the network into the cloud without turning the management plane into a broadly exposed public surface.",
                "Ein VPS nimmt am selben privaten Overlay teil und erweitert das Netz in die Cloud, ohne die Management-Ebene zu einer breit exponierten oeffentlichen Flaeche zu machen."
            ),
        },
        security: loc(
            "The design uses key-only SSH access with ED25519, disables password-based administration paths, avoids dependency on public DNS resolvers, and minimizes direct exposure. Private recursive DNS through Unbound and interface-aware firewall rules reduce leakage and attack surface.",
            "Das Design nutzt rein schluesselbasierten SSH-Zugriff mit ED25519, deaktiviert passwortbasierte Administrationspfade, vermeidet Abhaengigkeit von oeffentlichen DNS-Resolvern und minimiert direkte Exponierung. Private rekursive DNS-Aufloesung ueber Unbound und interface-basierte Firewall-Regeln reduzieren Datenabfluss und Angriffsoberflaeche."
        ),
        reliability: loc(
            "Stable private IPs, shared SSH configuration, tuned IP forwarding for overlay traffic, and lightweight host monitoring with btop make the environment easier to operate across locations. Service separation on Proxmox keeps the control plane easier to change and maintain.",
            "Stabile private IPs, gemeinsame SSH-Konfiguration, optimiertes IP-Forwarding fuer Overlay-Traffic und leichtgewichtiges Host-Monitoring mit btop machen die Umgebung ueber Standorte hinweg leichter betreibbar. Die Service-Trennung auf Proxmox haelt die Control Plane leichter aenderbar und wartbar."
        ),
        keyFeatures: locList(
            [
                "ED25519-based SSH hardening with passwordless administration",
                "Zero-trust Tailscale overlay across mobile workstations, cloud VPS, and home infrastructure",
                "Pi-hole with Unbound for full recursive DNS instead of third-party resolvers",
                "Exit-node routing and IP forwarding for encrypted transit on untrusted networks",
                "Interface-aware UFW policy allowing trusted overlay traffic while restricting other ingress",
            ],
            [
                "ED25519-basiertes SSH-Hardening mit passwortloser Administration",
                "Zero-Trust-Tailscale-Overlay ueber mobile Workstations, Cloud-VPS und Home-Infrastruktur",
                "Pi-hole mit Unbound fuer vollstaendige rekursive DNS-Aufloesung statt Third-Party-Resolvern",
                "Exit-Node-Routing und IP-Forwarding fuer verschluesselten Transit in unsicheren Netzen",
                "Interface-basierte UFW-Policy, die vertrauenswuerdigen Overlay-Traffic erlaubt und anderen Ingress einschraenkt",
            ]
        ),
        results: locList(
            [
                "Removed password-based SSH administration from the environment",
                "Established private, location-independent access across home, cloud, and roaming endpoints",
                "Moved DNS resolution into a privacy-preserving local recursive path under direct control",
                "Built a stronger security and operations foundation for future self-hosted and edge services",
            ],
            [
                "Passwortbasierte SSH-Administration aus der Umgebung entfernt",
                "Privaten, ortsunabhaengigen Zugriff ueber Home-, Cloud- und mobile Endpunkte hinweg geschaffen",
                "Die DNS-Aufloesung in einen privacy-orientierten lokalen rekursiven Pfad unter eigener Kontrolle verlagert",
                "Einen staerkeren Security- und Betriebsunterbau fuer kuenftige Self-Hosted- und Edge-Services geschaffen",
            ]
        ),
        tech: ["Tailscale", "WireGuard", "OpenSSH", "ED25519", "Proxmox", "Debian 13", "Pi-hole", "Unbound", "UFW", "sysctl", "btop"],
        tags: ["Security", "Networking", "Hybrid Cloud", "Zero Trust"],
        links: [],
        relatedProjectSlug: "vienna-fortress",
    },
    {
        slug: "self-hosted-cloud",
        category: "security-infrastructure",
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
            "Dieses Projekt fokussiert den Betrieb persoenlicher Infrastruktur mit derselben Denkweise wie bei kleinen internen Plattformen: Services isolieren, Exponierung reduzieren, Verfuegbarkeit ueberwachen und Datenpfade kontrollieren."
        ),
        problem: loc(
            "Public SaaS tools simplify operations but reduce control over data location, exposure, and operational behavior.",
            "Oeffentliche SaaS-Tools vereinfachen zwar den Betrieb, reduzieren aber die Kontrolle ueber Datenstandort, Exponierung und Betriebsverhalten."
        ),
        solution: loc(
            "I deployed a Docker-based services stack with reverse proxying, uptime monitoring, and controlled remote access. The platform complements the security lab by turning baseline infrastructure into an operational services environment.",
            "Ich habe einen Docker-basierten Service-Stack mit Reverse Proxy, Uptime-Monitoring und kontrolliertem Fernzugriff aufgebaut. Die Plattform ergaenzt das Security-Lab, indem sie die Basisinfrastruktur in eine operative Service-Umgebung ueberfuehrt."
        ),
        architecture: {
            node: loc(
                "Client devices consume internal services through stable named entry points instead of service-specific direct exposure.",
                "Client-Geraete greifen ueber stabile benannte Einstiegspunkte auf interne Services zu statt ueber direkte Einzel-Exponierung."
            ),
            edge: loc(
                "A Linux host runs Dockerized services including reverse proxying, DNS control, and uptime monitoring.",
                "Ein Linux-Host betreibt Dockerisierte Services fuer Reverse Proxy, DNS-Kontrolle und Uptime-Monitoring."
            ),
            cloud: loc(
                "External reachability is brokered through tunnel-based access patterns rather than a broad set of public inbound ports.",
                "Externe Erreichbarkeit wird ueber tunnelbasierte Zugriffsmuster vermittelt statt ueber eine breite Menge oeffentlicher Inbound-Ports."
            ),
        },
        security: loc(
            "TLS-secured entry points and tunnel-based remote exposure avoid unnecessary public port openings and reduce attack surface.",
            "TLS-abgesicherte Einstiegspunkte und tunnelbasierte externe Erreichbarkeit vermeiden unnoetige oeffentliche Portfreigaben und reduzieren die Angriffsoberflaeche."
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
                "Reverse Proxy fuer saubere Service-Exponierung",
                "Uptime-Monitoring fuer interne Services",
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
                "Die oeffentliche Exponierung interner Services reduziert",
                "Eine betriebsfaehige Umgebung aufgebaut, die spaetere AIoT-Workloads unterstuetzt",
            ]
        ),
        tech: ["Docker", "Linux", "Nginx Proxy Manager", "Pi-hole", "Uptime Kuma", "Cloudflare Tunnel"],
        tags: ["Infrastructure", "Security", "Operations"],
        links: [],
        relatedProjectSlug: "vienna-fortress",
    },
    {
        slug: "elkaza-org",
        category: "delivery-platform",
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
            "Diese Website wird als Produkt behandelt und nicht als statische Lebenslaufseite. Der Engineering-Fokus liegt auf Wartbarkeit, Inhaltsstruktur, Deployment-Flow und der klaren Darstellung technischer Arbeit fuer Recruiting und eine klare professionelle Positionierung."
        ),
        problem: loc(
            "A personal website needs to be fast, maintainable, and easy to update across multiple content areas without turning every change into manual rework.",
            "Eine persoenliche Website muss schnell, wartbar und ueber mehrere Inhaltsbereiche hinweg leicht aktualisierbar sein, ohne dass jede Aenderung zu manueller Mehrarbeit wird."
        ),
        solution: loc(
            "I built the site on Next.js App Router with TypeScript, lightweight i18n, reusable content components, and GitHub-connected deployment. The result is a maintainable publishing platform that supports projects, CV, blog content, and technical case studies.",
            "Ich habe die Seite mit Next.js App Router, TypeScript, leichtgewichtigem i18n, wiederverwendbaren Inhaltskomponenten und GitHub-gekoppeltem Deployment umgesetzt. Das Ergebnis ist eine wartbare Publishing-Plattform fuer Projekte, CV, Blog-Inhalte und technische Fallstudien."
        ),
        architecture: {
            node: loc(
                "The browser receives a performance-oriented frontend tailored for project discovery and professional positioning.",
                "Der Browser erhaelt ein performance-orientiertes Frontend fuer Projekterkundung und professionelle Positionierung."
            ),
            edge: loc(
                "Vercel handles delivery, previews, and runtime hosting for the public site experience.",
                "Vercel uebernimmt Auslieferung, Preview-Deployments und Hosting fuer die oeffentliche Site-Erfahrung."
            ),
            cloud: loc(
                "GitHub acts as the source-of-truth platform for version control and deployment-triggered updates.",
                "GitHub fungiert als Source-of-Truth fuer Versionskontrolle und deploymentgesteuerte Aktualisierungen."
            ),
        },
        security: loc(
            "A managed deployment model, minimal backend surface, and controlled content workflow keep the public platform simpler and safer to operate.",
            "Ein gemanagtes Deployment-Modell, minimale Backend-Oberflaeche und ein kontrollierter Content-Workflow halten die oeffentliche Plattform einfacher und sicherer im Betrieb."
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
                "Mehrsprachiges Inhaltsmodell fuer Projekte, CV und Fachtexte",
                "Wiederverwendbare Komponentenstruktur fuer wartbare Weiterentwicklung",
                "GitHub-gekoppelter Deployment-Workflow",
                "SEO- und Accessibility-bewusste oeffentliche Praesentation",
            ]
        ),
        results: locList(
            [
                "Created a stronger professional platform for technical storytelling",
                "Reduced friction for publishing new case studies and portfolio updates",
                "Built a reusable web delivery baseline alongside the self-hosted variant",
            ],
            [
                "Eine staerkere professionelle Plattform fuer technisches Storytelling geschaffen",
                "Den Aufwand fuer neue Fallstudien und Portfolio-Updates reduziert",
                "Eine wiederverwendbare Web-Delivery-Basis parallel zur Self-Hosted-Variante aufgebaut",
            ]
        ),
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GitHub"],
        tags: ["Web", "Platform", "CI/CD"],
        links: [
            { label: "Live Site", url: "https://www.elkaza.org" },
            { label: "GitHub", url: "https://github.com/Elkaza/elkaza-org" },
        ],
        relatedProjectSlug: "elkaza-at",
    },
    {
        slug: "elkaza-at",
        category: "delivery-platform",
        year: "2025",
        title: loc(
            "Self-Hosted Static Delivery Platform",
            "Self-Hosted Static-Delivery-Plattform"
        ),
        oneLiner: loc(
            "Deployed a static site delivery workflow on an Ubuntu VPS with Apache, HTTPS automation, and repeatable release steps.",
            "Bereitgestellt einen statischen Site-Delivery-Workflow auf einem Ubuntu-VPS mit Apache, HTTPS-Automatisierung und wiederholbaren Release-Schritten."
        ),
        overview: loc(
            "This project complements the managed deployment path by proving ownership of the last mile: packaging static output, transferring artifacts, configuring the server, and keeping the deployment repeatable.",
            "Dieses Projekt ergaenzt den gemanagten Deployment-Pfad, indem es den letzten Abschnitt in eigener Verantwortung abbildet: statische Artefakte paketieren, uebertragen, den Server konfigurieren und das Deployment wiederholbar halten."
        ),
        problem: loc(
            "Managed hosting hides many operational details. To demonstrate infrastructure ownership, the site also needed a self-hosted deployment path on Linux.",
            "Managed Hosting verdeckt viele operative Details. Um Infrastrukturverantwortung zu demonstrieren, brauchte die Site auch einen selbst gehosteten Deployment-Pfad auf Linux."
        ),
        solution: loc(
            "I configured a static export workflow, shipped the build output to an Ubuntu VPS, and served it through Apache with HTTPS automation. The release path was documented as a repeatable operational flow rather than an improvised upload step.",
            "Ich habe einen Static-Export-Workflow konfiguriert, das Build-Ergebnis auf einen Ubuntu-VPS uebertragen und ueber Apache mit automatisiertem HTTPS ausgeliefert. Der Release-Pfad wurde als wiederholbarer operativer Ablauf dokumentiert und nicht als improvisierter Upload."
        ),
        architecture: {
            node: loc(
                "Browsers consume a static site build with minimal runtime complexity.",
                "Browser konsumieren einen statischen Site-Build mit minimaler Laufzeitkomplexitaet."
            ),
            edge: loc(
                "An Ubuntu VPS with Apache serves the exported frontend as the delivery edge.",
                "Ein Ubuntu-VPS mit Apache liefert das exportierte Frontend als Delivery-Edge aus."
            ),
            cloud: loc(
                "DNS and certificate automation complete the path from build artifact to public HTTPS delivery.",
                "DNS- und Zertifikatsautomatisierung vervollstaendigen den Weg vom Build-Artefakt zur oeffentlichen HTTPS-Auslieferung."
            ),
        },
        security: loc(
            "HTTPS automation and controlled vhost configuration provide a simpler and safer public serving model for static content.",
            "HTTPS-Automatisierung und kontrollierte Vhost-Konfiguration schaffen ein einfacheres und sichereres oeffentliches Auslieferungsmodell fuer statische Inhalte."
        ),
        reliability: loc(
            "A repeatable build-upload-sync-release flow reduces deployment mistakes and keeps the self-hosted site maintainable over time.",
            "Ein wiederholbarer Build-Upload-Sync-Release-Flow reduziert Deployment-Fehler und haelt die selbst gehostete Site langfristig wartbar."
        ),
        keyFeatures: locList(
            [
                "Static export and server-side delivery ownership",
                "Apache-based public serving on Ubuntu VPS",
                "HTTPS automation with certificate renewal",
                "Repeatable rsync-style release process",
            ],
            [
                "Static Export und Verantwortung fuer die Server-Auslieferung",
                "Apache-basierte oeffentliche Auslieferung auf Ubuntu-VPS",
                "HTTPS-Automatisierung mit Zertifikatserneuerung",
                "Wiederholbarer rsync-aehnlicher Release-Prozess",
            ]
        ),
        results: locList(
            [
                "Demonstrated ownership from artifact creation to public hosting",
                "Built a self-hosted alternative to the managed Vercel deployment path",
                "Strengthened the infrastructure side of the public portfolio platform",
            ],
            [
                "Verantwortung vom Artefakt bis zum oeffentlichen Hosting demonstriert",
                "Eine selbst gehostete Alternative zum gemanagten Vercel-Deployment aufgebaut",
                "Die Infrastrukturseite der oeffentlichen Portfolio-Plattform gestaerkt",
            ]
        ),
        tech: ["Next.js Export", "Ubuntu VPS", "Apache", "Certbot", "rsync", "SSH"],
        tags: ["Web", "Infrastructure", "Self-Hosted"],
        links: [
            { label: "Live Site", url: "https://www.elkaza.at" },
            { label: "GitHub", url: "https://github.com/Elkaza/elkaza-web" },
        ],
        relatedProjectSlug: "elkaza-org",
    },
];
