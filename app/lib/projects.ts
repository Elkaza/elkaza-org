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
    relatedProject?: {
        name: string;
        slug: string;
    };
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
        slug: "elkaza-org",
        title: {
            en: "Personal Website & Digital Identity",
            de: "Persönliche Website & Digitale Identität",
            ar: "الموقع الشخصي والهوية الرقمية",
        },
        summary: {
            en: "Bilingual portfolio site with Next.js & Tailwind.",
            de: "Zweisprachige Portfolio-Website mit Next.js & Tailwind.",
            ar: "موقع محفظة ثنائي اللغة باستخدام Next.js و Tailwind.",
        },
        problem: {
            en: "Needed a performant, accessible, and easy-to-update hub for my CV, projects, and research that supports multiple languages.",
            de: "Benötigte einen performanten, barrierefreien und einfach zu aktualisierenden Hub für meinen Lebenslauf, Projekte und Forschung, der mehrere Sprachen unterstützt.",
            ar: "كنت بحاجة إلى مركز عالي الأداء وسهل الوصول إليه وسهل التحديث لسيرتي الذاتية ومشاريعي وأبحاثي يدعم لغات متعددة.",
        },
        action: {
            en: "Built a portfolio site with Next.js App Router optimized for SEO/accessibility and lightweight i18n. Deployed via Vercel with GitHub Actions (CI/CD + preview deployments).",
            de: "Entwicklung einer Portfolio-Website mit Next.js App Router, optimiert für SEO/Barrierefreiheit und leichtgewichtiges i18n. Deployment erfolgt via Vercel mit GitHub Actions (CI/CD + Preview-Deployments).",
            ar: "بناء موقع ثابت باستخدام Next.js App Router لتحسين محركات البحث. تنفيذ نظام i18n مخصص بدون مكتبات ثقيلة. النشر عبر Vercel مع GitHub Actions للتكامل المستمر.",
        },
        result: {
            en: "Achieved high Lighthouse scores. Serves as the central point for my professional identity.",
            de: "Erreichte hohe Lighthouse-Scores. Dient als zentraler Punkt für meine professionelle Identität.",
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
            de: "Consulting Website & Statisches Self-Hosted Deployment",
            ar: "موقع استشارات ونشر ذاتي ثابت",
        },
        summary: {
            en: "Static site deployment on VPS using Ubuntu & Apache.",
            de: "Bereitstellung einer statischen Seite auf einem VPS mit Ubuntu & Apache.",
            ar: "نشر موقع ثابت على VPS باستخدام Ubuntu و Apache.",
        },
        problem: {
            en: "Need for a totally separated, self-hosted static environment to demonstrate DevOps & Hosting skills, independent of Vercel.",
            de: "Bedarf an einer vollständig getrennten, selbst gehosteten statischen Umgebung zur Demonstration von DevOps- & Hosting-Skills, unabhängig von Vercel.",
            ar: "الحاجة إلى بيئة ثابتة مستضافة ذاتيًا ومنفصلة تمامًا لإثبات مهارات DevOps والاستضافة، مستقلة عن Vercel.",
        },
        action: {
            en: "Configured Next.js for static export. Set up Ubuntu VPS with Apache, firewall, and rsync deployment. Automated SSL ops with Certbot. Created deployment workflow involving local build -> upload to /tmp -> rsync into Webroot.",
            de: "Konfiguration von Next.js für statischen Export. Einrichtung eines Ubuntu VPS mit Apache, Firewall und rsync-Deployment. Automatisierung von SSL mit Certbot. Erstellung eines Deployment-Workflows: lokaler Build -> Upload nach /tmp -> rsync in Webroot.",
            ar: "تكوين Next.js للتصدير الثابت. إعداد Ubuntu VPS مع Apache و Firewall ونشر rsync. أتمتة SSL مع Certbot.",
        },
        result: {
            en: "A fully self-hosted, high-performance static site reachable under elkaza.at/www.elkaza.at with A+ SSL rating.",
            de: "Eine vollständig selbst gehostete, leistungsstarke statische Seite, erreichbar unter elkaza.at/www.elkaza.at mit A+ SSL-Rating.",
            ar: "موقع ثابت مستضاف ذاتيًا بالكامل عالي الأداء يمكن الوصول إليه عبر elkaza.at مع تصنيف A+ SSL.",
        },
        tech: ["Next.js Export", "Apache", "Ubuntu VPS", "Certbot/Let’s Encrypt", "rsync"],
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
];
