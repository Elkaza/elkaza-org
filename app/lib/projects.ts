import { Locale } from "../i18n/messages";

export interface Project {
    slug: string;
    title: Record<Locale, string>;
    summary: Record<Locale, string>;
    problem: Record<Locale, string>;
    action: Record<Locale, string>;
    result: Record<Locale, string>;
    tech: string[];
    links: { label: string; url: string }[];
    year: string;
    tags: string[];
    images?: string[];
    relatedProject?: {
        name: string;
        slug: string;
    };
    iotPlatformPart?: boolean;
}

export const projects: Project[] = [
    {
        slug: "home-security-lab",
        title: {
            en: "Home Security Lab",
            de: "Home Security Lab",
            ar: "مختبر الأمن المنزلي",
        },
        summary: {
            en: "Proxmox, Pi-hole, and WireGuard (planned) setup for a secure home network.",
            de: "Proxmox, Pi-hole und WireGuard (geplant) Setup für ein sicheres Heimnetzwerk.",
            ar: "إعداد Proxmox و Pi-hole و WireGuard لشبكة منزلية آمنة.",
        },
        problem: {
            en: "Constraints by provider hardware. Need for better DNS control and segmentation.",
            de: "Einschränkungen bei Provider-Hardware. Notwendigkeit für verbesserte DNS-Kontrolle und Segmentierung.",
            ar: "قيود أجهزة مزود الخدمة. الحاجة إلى تحكم أفضل في DNS والتجزئة.",
        },
        action: {
            en: "Deployed ThinkCentre M710q (Proxmox). Configured UFW (LAN-only) and Pi-hole. Plan: Set ISP modem to bridge/single-user mode (if supported), WireGuard (planned), and use a separate SSID/network for IoT (VLANs optional with suitable setup).",
            de: "Einsatz von ThinkCentre M710q (Proxmox). Konfiguration von UFW (LAN-only) und Pi-hole. Plan: ISP-Modem in den Bridge-/Single-User-Modus versetzen (falls unterstützt), WireGuard (geplant) und ein separates SSID/Netzwerk für IoT nutzen (VLANs optional bei passendem Setup).",
            ar: "نشر ThinkCentre M710q (Proxmox). تكوين UFW (LAN-only) و Pi-hole. الخطة: مودم ISP في وضع الجسر ، WireGuard VPN ، وشبكة IoT مجزأة.",
        },
        result: {
            en: "Successfully established ad-free DNS and basic hardening. Roadmap for VPN and further segmentation ready.",
            de: "Erfolgreiche Einrichtung von werbefreiem DNS und Basis-Härtung. Roadmap für VPN und weitere Segmentierung steht.",
            ar: "تم إنشاء DNS خالٍ من الإعلانات وتصلب أساسي بنجاح. خريطة طريق لشبكة VPN والمزيد من التجزئة جاهزة.",
        },
        tech: ["Proxmox", "Debian", "Pi-hole", "WireGuard", "UFW"],
        links: [],
        year: "2025",
        tags: ["Security", "Networking", "Self-Hosted"],
    },
    {
        slug: "freertos-sensor",
        title: {
            en: "FreeRTOS IoT Sensor Node",
            de: "FreeRTOS IoT Sensorknoten",
            ar: "عقدة استشعار IoT FreeRTOS",
        },
        summary: {
            en: "ESP32-S3 node reading environmental data with separate RTOS tasks.",
            de: "ESP32-S3 Knoten liest Umweltdaten mit separaten RTOS-Tasks.",
            ar: "عقدة ESP32-S3 تقرأ البيانات البيئية بمهام RTOS منفصلة.",
        },
        problem: {
            en: "Basic Arduino loops block execution, making it hard to handle accurate sensor timing, BLE, and user input simultaneously.",
            de: "Einfache Arduino-Loops blockieren die Ausführung, was es schwierig macht, genaues Sensor-Timing, BLE und Benutzereingaben gleichzeitig zu verarbeiten.",
            ar: "حلقات Arduino الأساسية تمنع التنفيذ، مما يجعل من الصعب التعامل مع توقيت المستشعر الدقيق، BLE، ومدخلات المستخدم في وقت واحد.",
        },
        action: {
            en: "Designed a FreeRTOS architecture with dedicated tasks for Sensors, Connectivity, and UI. Used Queues for inter-task communication.",
            de: "Entwurf einer FreeRTOS-Architektur mit dedizierten Tasks für Sensoren, Konnektivität und UI sowie Nutzung von Queues für die Task-Kommunikation.",
            ar: "تصميم بنية FreeRTOS مع مهام مخصصة للمستشعرات والاتصال وواجهة المستخدم. استخدام انتظار الرسائل للاتصال بين المهام.",
        },
        result: {
            en: "Improved reliability of sensor sampling under load and highly reliable telemetry processing.",
            de: "Verbesserte Zuverlässigkeit beim Sensor-Sampling unter Last und hochzuverlässige Telemetrie-Verarbeitung.",
            ar: "نظام قياس عن بعد موثوق يعالج بيانات المستشعر بكفاءة.",
        },
        tech: ["C++", "FreeRTOS", "ESP32", "MQTT"],
        links: [],
        year: "2025",
        tags: ["IoT", "Embedded", "C++"],
    },
    {
        slug: "ble-edge-gateway",
        title: {
            en: "BLE Sensor Gateway (Edge Layer)",
            de: "BLE Sensor Gateway (Edge Layer)",
            ar: "بوابة مستشعر BLE (طبقة الحافة)",
        },
        summary: {
            en: "Containerized BLE gateway on Rock4 SE that receives sensor data from an ESP32 via Bluetooth Low Energy.",
            de: "Containerisierte BLE-Gateway auf Rock4 SE, die Sensordaten von einem ESP32 über Bluetooth Low Energy empfängt.",
            ar: "بوابة BLE في حاوية على Rock4 SE تستقبل بيانات المستشعر من ESP32 عبر Bluetooth Low Energy.",
        },
        problem: {
            en: "Bridging BLE sensor data into a standard IoT backend requires reliable D-Bus integration, containerized isolation, and robust connection retry logic — none of which are trivial on embedded Linux.",
            de: "Die Überbrückung von BLE-Sensordaten in ein Standard-IoT-Backend erfordert zuverlässige D-Bus-Integration, containerisierte Isolation und robuste Verbindungs-Retry-Logik — nichts davon ist trivial auf Embedded Linux.",
            ar: "ربط بيانات مستشعر BLE بنظام IoT خلفي يتطلب تكامل D-Bus موثوق، عزل بالحاويات، ومنطق إعادة محاولة اتصال — وكل ذلك ليس بسيطاً على Linux المدمج.",
        },
        action: {
            en: "Built a Podman container with BlueZ and D-Bus access to the host Bluetooth stack. Developed a Python gateway that connects to an ESP32 BLE sensor (Nordic UART Service), parses DHT22 temperature/humidity data, and outputs timestamped readings. Automated with build and start scripts.",
            de: "Erstellung eines Podman-Containers mit BlueZ und D-Bus-Zugriff auf den Host-Bluetooth-Stack. Entwicklung einer Python-Gateway-Anwendung, die sich mit einem ESP32-BLE-Sensor (Nordic UART Service) verbindet, DHT22-Temperatur-/Feuchtedaten parst und zeitgestempelte Messwerte ausgibt. Automatisiert mit Build- und Start-Skripten.",
            ar: "بناء حاوية Podman مع BlueZ ووصول D-Bus إلى مكدس Bluetooth المضيف. تطوير بوابة Python تتصل بمستشعر ESP32 BLE (Nordic UART Service)، تحلل بيانات درجة الحرارة والرطوبة من DHT22، وتعرض القراءات مع طوابع زمنية.",
        },
        result: {
            en: "Working containerized BLE gateway that reliably connects, parses, and displays ESP32 DHT22 sensor data with UTC timestamps. Foundation for the secure MQTT gateway.",
            de: "Funktionierende containerisierte BLE-Gateway, die ESP32-DHT22-Sensordaten zuverlässig empfängt, parst und mit UTC-Zeitstempeln anzeigt. Grundlage für das Secure MQTT Gateway.",
            ar: "بوابة BLE في حاوية تتصل وتحلل وتعرض بيانات مستشعر ESP32 DHT22 بطوابع UTC بشكل موثوق. أساس لبوابة MQTT الآمنة.",
        },
        tech: ["Python", "Podman", "BlueZ", "D-Bus", "BLE"],
        links: [{ label: "GitHub", url: "https://github.com/Elkaza/iot-edge-gateway-ble-mqtt" }],
        year: "2026",
        tags: ["IoT", "Embedded", "Containerization"],
        iotPlatformPart: true,
        relatedProject: {
            name: "Secure MQTT Gateway (mTLS)",
            slug: "rpi-ble-mqtt-gateway",
        },
    },
    {
        slug: "rpi-ble-mqtt-gateway",
        title: {
            en: "Secure MQTT Gateway (mTLS)",
            de: "Secure MQTT Gateway (mTLS)",
            ar: "بوابة MQTT الآمنة (mTLS)",
        },
        summary: {
            en: "Production-ready BLE-to-MQTT pipeline on Raspberry Pi 5 with mutual TLS and Podman Compose orchestration.",
            de: "Produktionsreife BLE-zu-MQTT-Pipeline auf Raspberry Pi 5 mit gegenseitigem TLS und Podman-Compose-Orchestrierung.",
            ar: "خط أنابيب BLE إلى MQTT جاهز للإنتاج على Raspberry Pi 5 مع TLS متبادل وتنسيق Podman Compose.",
        },
        problem: {
            en: "The BLE Sensor Gateway lacked MQTT integration, encryption, and multi-service orchestration needed for a production-like IoT data pipeline.",
            de: "Dem BLE Sensor Gateway fehlte die MQTT-Integration, Verschlüsselung und Multi-Service-Orchestrierung für eine produktionsnahe IoT-Datenpipeline.",
            ar: "بوابة مستشعر BLE تفتقر إلى تكامل MQTT والتشفير وتنسيق الخدمات المتعددة اللازمة لخط أنابيب بيانات IoT يشبه الإنتاج.",
        },
        action: {
            en: "Extended the BLE gateway into a three-service architecture orchestrated with Podman Compose: BLE Gateway, Mosquitto MQTT Broker, and MQTT Client. Secured all communication with mutual TLS (TLS 1.3, X.509 certificates). Implemented robust error handling, automatic reconnection, and comprehensive ISO 8601 logging.",
            de: "Erweiterung der BLE-Gateway zu einer Drei-Service-Architektur mit Podman Compose: BLE Gateway, Mosquitto MQTT Broker und MQTT Client. Absicherung der gesamten Kommunikation mit gegenseitigem TLS (TLS 1.3, X.509-Zertifikate). Implementierung von robustem Fehlerhandling, automatischer Wiederverbindung und umfassendem ISO-8601-Logging.",
            ar: "توسيع بوابة BLE إلى بنية ثلاث خدمات منسقة بـ Podman Compose: بوابة BLE، وسيط Mosquitto MQTT، وعميل MQTT. تأمين جميع الاتصالات بـ TLS متبادل (TLS 1.3، شهادات X.509). تنفيذ معالجة أخطاء قوية وإعادة اتصال تلقائي وتسجيل شامل بتنسيق ISO 8601.",
        },
        result: {
            en: "End-to-end encrypted IoT data pipeline: ESP32 → BLE → MQTT → Client, with verified mTLS authentication and fully containerized deployment on Raspberry Pi 5.",
            de: "Ende-zu-Ende verschlüsselte IoT-Datenpipeline: ESP32 → BLE → MQTT → Client, mit verifizierter mTLS-Authentifizierung und vollständig containerisiertem Deployment auf Raspberry Pi 5.",
            ar: "خط أنابيب بيانات IoT مشفر من طرف إلى طرف: ESP32 → BLE → MQTT → Client، مع مصادقة mTLS موثقة ونشر في حاويات بالكامل على Raspberry Pi 5.",
        },
        tech: ["Python", "Podman Compose", "Mosquitto MQTT", "mTLS/TLS 1.3", "BLE"],
        links: [{ label: "GitHub", url: "https://github.com/Elkaza/rpi-ble-mqtt-edge-gateway" }],
        year: "2026",
        tags: ["IoT", "Security", "Containerization"],
        iotPlatformPart: true,
        relatedProject: {
            name: "IoT Sensor Data Pipeline",
            slug: "iot-sensor-data-pipeline",
        },
    },
    {
        slug: "elkaza-org",
        title: {
            en: "Personal Website & Digital Identity (Vercel/GitHub)",
            de: "Persönliche Website & Digitale Identität (Vercel/GitHub)",
            ar: "الموقع الشخصي والهوية الرقمية",
        },
        summary: {
            en: "Bilingual portfolio site deployed via Vercel with GitHub integration.",
            de: "Zweisprachige Portfolio-Website mit Next.js & Tailwind.",
            ar: "موقع محفظة ثنائي اللغة باستخدام Next.js و Tailwind.",
        },
        problem: {
            en: "Needed a performant, accessible, and easy-to-update hub for my CV, projects, and research that supports multiple languages.",
            de: "Benötigte einen performanten, barrierefreien und einfach zu aktualisierenden Hub für meinen Lebenslauf, Projekte und Forschung, der mehrere Sprachen unterstützt.",
            ar: "كنت بحاجة إلى مركز عالي الأداء وسهل الوصول إليه وسهل التحديث لسيرتي الذاتية ومشاريعي وأبحاثي يدعم لغات متعددة.",
        },
        action: {
            en: "Built a portfolio site with Next.js App Router, optimized for SEO/accessibility and lightweight i18n. Deployed via Vercel with GitHub integration (CI/CD and preview deployments).",
            de: "Entwicklung einer zweisprachigen Portfolio-Website mit Next.js (App Router), optimiert für SEO/Barrierefreiheit und leichtgewichtiges i18n. Deployment über Vercel mit GitHub-Integration (CI/CD + Preview Deployments).",
            ar: "بناء موقع ثابت باستخدام Next.js App Router لتحسين محركات البحث. تنفيذ نظام i18n مخصص بدون مكتبات ثقيلة. النشر عبر Vercel مع GitHub Actions للتكامل المستمر.",
        },
        result: {
            en: "A fast, maintainable portfolio website that serves as the central entry point for my professional identity. Complemented by a self-hosted deployment variant on elkaza.at.",
            de: "Schnelle, gut wartbare Portfolio-Seite als zentraler Einstiegspunkt für meine professionelle Identität.",
            ar: "تحقيق درجات Lighthouse عالية. يعمل كنقطة مركزية لهويتي المهنية.",
        },
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GitHub CI/CD"],
        links: [{ label: "GitHub", url: "https://github.com/Elkaza/elkaza-org" }],
        year: "2025",
        tags: ["Web", "Frontend", "CI/CD"],
        relatedProject: {
            name: "elkaza.at",
            slug: "elkaza-at"
        }
    },
    {
        slug: "elkaza-at",
        title: {
            en: "Consulting Website & Static Self-Hosted Deployment",
            de: "Consulting-Website & statische Bereitstellung (Self-Hosted)",
            ar: "موقع استشارات ونشر ذاتي ثابت",
        },
        summary: {
            en: "Static export deployed to Apache on a VPS with HTTPS (Certbot).",
            de: "Bereitstellung einer statischen Seite auf einem VPS mit Ubuntu & Apache.",
            ar: "نشر موقع ثابت على VPS باستخدام Ubuntu و Apache.",
        },
        problem: {
            en: "Needed a fully self-hosted static deployment setup to demonstrate DevOps and hosting skills, independent of managed platforms.",
            de: "Ich wollte eine vollständig selbst gehostete, statische Umgebung aufbauen, um DevOps-/Hosting-Skills unabhängig von Managed Plattformen zu demonstrieren.",
            ar: "الحاجة إلى بيئة ثابتة مستضافة ذاتيًا ومنفصلة تمامًا لإثبات مهارات DevOps والاستضافة، مستقلة عن Vercel.",
        },
        action: {
            en: "Configured Next.js for static export, added static SEO assets (robots.txt, sitemap.xml), and deployed the build output to an Apache vhost on a VPS. Set up HTTPS using Certbot/Let’s Encrypt and created a repeatable workflow: build → upload to /tmp → rsync into webroot → permissions → Apache reload. Server administration via SSH and Webmin.",
            de: "Umstellung auf Next.js Static Export, Erstellung statischer robots.txt und sitemap.xml sowie Pre-Rendering dynamischer Seiten. Einrichtung eines Ubuntu-VPS mit Apache (vhost) und HTTPS via Certbot/Let’s Encrypt. Aufbau eines reproduzierbaren Deployments: Build → Upload nach /tmp → rsync in den Webroot → Rechte setzen → Apache reload.",
            ar: "تكوين Next.js للتصدير الثابت. إعداد Ubuntu VPS مع Apache و Firewall ونشر rsync. أتمتة SSL مع Certbot.",
        },
        result: {
            en: "A fully self-hosted static website served via Apache and reachable at elkaza.at and www.elkaza.at over HTTPS. Complements the Vercel-hosted portfolio version on elkaza.org.",
            de: "Eine vollständig statische, selbst gehostete Website, erreichbar unter elkaza.at und www.elkaza.at – inkl. HTTPS und einem wiederholbaren Deployment-Workflow.",
            ar: "موقع ثابت مستضاف ذاتيًا بالكامل عالي الأداء يمكن الوصول إليه عبر elkaza.at مع تصنيف A+ SSL.",
        },
        tech: ["Next.js Export", "Apache", "Ubuntu VPS", "Certbot/Let’s Encrypt", "rsync", "Webmin"],
        links: [{ label: "GitHub", url: "https://github.com/Elkaza/elkaza-web" }],
        year: "2025",
        tags: ["Web", "DevOps", "Self-Hosted"],
        relatedProject: {
            name: "elkaza.org",
            slug: "elkaza-org"
        }
    },
    {
        slug: "self-hosted-cloud",
        title: {
            en: "Self-Hosted Cloud Infrastructure",
            de: "Self-Hosted Cloud Infrastruktur",
            ar: "بنية سحابية ذاتية الاستضافة",
        },
        summary: {
            en: "Reverse proxy, TLS-secured access, and monitoring for home services.",
            de: "Reverse Proxy, TLS-gesicherter Zugriff und Monitoring für Heimdienste.",
            ar: "وكيل عكسي، وصول آمن عبر TLS، ومراقبة للخدمات المنزلية.",
        },
        problem: {
            en: "Relying on public cloud services raises privacy concerns and limits control over data.",
            de: "Das Verlassen auf öffentliche Cloud-Dienste wirft Datenschutzbedenken auf und schränkt die Kontrolle über Daten ein.",
            ar: "الاعتماد على الخدمات السحابية العامة يثير مخاوف الخصوصية ويحد من التحكم في البيانات.",
        },
        action: {
            en: "Deployed a stack with Nginx Proxy Manager, Pi-hole, and Uptime Kuma on Docker. Secured via Cloudflare tunnels.",
            de: "Bereitstellung eines Stacks mit Nginx Proxy Manager, Pi-hole und Uptime Kuma auf Docker, abgesichert über Cloudflare Tunnels.",
            ar: "نشر مجموعة مع Nginx Proxy Manager و Pi-hole و Uptime Kuma على Docker. مؤمن عبر أنفاق Cloudflare.",
        },
        result: {
            en: "Added uptime monitoring and secure inbound access without exposed ports using Cloudflare Tunnel.",
            de: "Einführung von Uptime-Monitoring und sicherer Zugriff ohne offene Ports durch Cloudflare Tunnel.",
            ar: "إضافة مراقبة الجاهزية ووصول آمن بدون منافذ مكشوفة باستخدام Cloudflare Tunnel.",
        },
        tech: ["Docker", "Linux", "Nginx", "Bash"],
        links: [],
        year: "2024",
        tags: ["DevOps", "Infrastructure", "Linux"],
    },
    {
        slug: "iot-sensor-data-pipeline",
        title: {
            en: "IoT Sensor Data Pipeline (BLE → MQTT → Node-RED → InfluxDB)",
            de: "IoT-Datenpipeline (BLE → MQTT → Node-RED → InfluxDB)",
            ar: "نظام خط أنابيب بيانات إنترنت الأشياء (BLE → MQTT → Node-RED → InfluxDB)",
        },
        summary: {
            en: "An IoT edge data pipeline that collects environmental sensor data via Bluetooth Low Energy (BLE) and processes it through an MQTT messaging system. Node-RED performs data processing and stores the measurements in InfluxDB for time-series analysis and visualization.",
            de: "Eine IoT-Datenpipeline, die Umweltsensordaten über Bluetooth Low Energy (BLE) sammelt und sie durch ein MQTT-Nachrichtensystem verarbeitet. Node-RED führt die Datenverarbeitung durch und speichert die Messungen in InfluxDB zur Zeitreihenanalyse und Visualisierung.",
            ar: "نظام خط أنابيب بيانات إنترنت الأشياء يجمع بيانات المستشعرات البيئية عبر BLE ويعالجها من خلال نظام رسائل MQTT. يقوم Node-RED بمعالجة البيانات وتخزين القياسات في InfluxDB لتحليل السلاسل الزمنية وعرضها.",
        },
        problem: {
            en: "Efficiently integrating BLE sensor data into a scalable IoT backend for real-time analysis and visualization.",
            de: "Effiziente Integration von BLE-Sensordaten in ein skalierbares IoT-Backend für Echtzeitanalyse und Visualisierung.",
            ar: "دمج بيانات مستشعر BLE بكفاءة في نظام خلفي لإنترنت الأشياء قابل للتوسع لتحليل وعرض البيانات في الوقت الحقيقي.",
        },
        action: {
            en: "Designed and implemented an IoT edge pipeline using ESP32 for BLE data collection, Raspberry Pi as an edge gateway, and Node-RED for processing. Data is stored in InfluxDB for visualization.",
            de: "Entwicklung und Implementierung einer IoT-Edge-Pipeline mit ESP32 für BLE-Datenerfassung, Raspberry Pi als Edge-Gateway und Node-RED für die Verarbeitung. Daten werden in InfluxDB zur Visualisierung gespeichert.",
            ar: "تصميم وتنفيذ خط أنابيب إنترنت الأشياء باستخدام ESP32 لجمع بيانات BLE، وRaspberry Pi كبوابة طرفية، وNode-RED للمعالجة. يتم تخزين البيانات في InfluxDB للعرض.",
        },
        result: {
            en: "Achieved a reliable and scalable IoT data pipeline with real-time visualization capabilities.",
            de: "Erreichte eine zuverlässige und skalierbare IoT-Datenpipeline mit Echtzeit-Visualisierungsfunktionen.",
            ar: "تحقيق نظام خط أنابيب بيانات إنترنت الأشياء موثوق وقابل للتوسع مع قدرات عرض في الوقت الحقيقي.",
        },
        tech: ["Raspberry Pi 5", "ESP32", "Bluetooth Low Energy (BLE)", "MQTT", "Node-RED", "InfluxDB", "Linux"],
        links: [
            { label: "GitHub", url: "https://github.com/Elkaza/iot-ble-mqtt-influxdb" }
        ],
        year: "2026",
        tags: ["IoT", "Edge Computing", "Data Pipeline"],
        images: [
            "/images/architecture.png",
            "/images/nodered-flow.png",
            "/images/sensor-data.png",
            "/images/influxdb-data.png"
        ],
        iotPlatformPart: true,
        relatedProject: {
            name: "Secure MQTT Gateway (mTLS)",
            slug: "rpi-ble-mqtt-gateway",
        }
    }
];
