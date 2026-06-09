# Project Diagram Prompts

Use these prompts with an image/SVG generation agent. Keep diagrams minimal, technical, and consistent with the portfolio style: light background, dark text, blue/green accent lines, rounded rectangles, no decorative blobs, readable labels, and simple arrows. Export as SVG where possible and include alt text.

## EdgeGuardian

Create a clean SVG architecture diagram for "EdgeGuardian: Edge AI Safety Bubble for Machine Monitoring". Show a desk/machine danger zone monitored by a Raspberry Pi 5. Inputs: Raspberry Pi Camera / AI Camera to Hailo-8L YOLO person detection, Hokuyo URG-04LX-UG01 LiDAR distance measurement. Center: Raspberry Pi 5 fusion logic with confidence threshold, LiDAR distance thresholds, stale-data check, and hysteresis. Outputs: browser dashboard, CSV evidence logs, ESP32-S3 serial actuator proof, optional Telegram alert. Use arrows from sensors to fusion logic and from fusion logic to outputs. Include state labels SAFE, WARNING, ALERT. Caption: "Local camera-LiDAR fusion for machine safety-state decisions." Alt text: "EdgeGuardian architecture showing camera, Hailo accelerator, LiDAR, Raspberry Pi fusion logic, ESP32, dashboard, Telegram, and CSV logs."

## TinyML Vibration Anomaly Detection

Create a clean SVG pipeline diagram for "TinyML Vibration Anomaly Detection on Arduino Nano 33 BLE Sense Rev2". Show Python-generated IMU vibration windows, 20 lightweight features, softmax classifier training, export to C++ header model_parameters.h, and Arduino Nano 33 BLE Sense Rev2 real-time inference. Add live outputs: Serial Monitor NORMAL, ANOMALY, ALERT and built-in LED after 3 anomaly windows. Include 100 Hz sampling, 2-second windows, 50% overlap, 1 ms latency, 12% flash and 19% RAM. Caption: "Offline training in Python, local inference on the microcontroller." Alt text: "TinyML pipeline from synthetic IMU data and feature extraction to softmax model export and Arduino real-time anomaly inference."

## Secure BLE-MQTT Monitoring Platform

Create a clean SVG system diagram for "Secure BLE-MQTT Monitoring Platform". Show ESP32/BLE sensor nodes sending telemetry to Raspberry Pi 5. On the Raspberry Pi, show BLE collector, Mosquitto MQTT broker with mTLS, Node-RED processing, InfluxDB storage, and Grafana dashboard. Include security elements: X.509 certificates, Podman secrets, no public cloud required. Use a left-to-right data flow from sensors to dashboard. Caption: "Local BLE-to-MQTT telemetry pipeline with storage and dashboards." Alt text: "BLE sensor telemetry flowing through Raspberry Pi BLE collector, MQTT broker, Node-RED, InfluxDB, and Grafana."

## Self-Hosted Infrastructure

Create a clean SVG hybrid-cloud architecture diagram for "Enterprise Self-Hosted Infrastructure". Show public users reaching a hardened cloud VPS ingress. The VPS forwards traffic through Tailscale to a private Proxmox/Debian runtime. In the private environment, show Docker Compose services: Next.js site, Nginx Proxy Manager, Plausible Analytics, PostgreSQL, ClickHouse, Uptime Kuma, Netdata, Dozzle, Watchtower, backups. Include GitHub Actions deployment and dump-and-pack backups. Caption: "Public ingress in the cloud, private runtime and analytics under direct control." Alt text: "Hybrid self-hosted infrastructure with cloud VPS ingress, Tailscale tunnel, private Proxmox runtime, Docker services, analytics, monitoring, and backups."

## Security / Home Lab

Create a clean SVG security/operations diagram for "The Vienna Fortress". Show Proxmox/Debian host with Dockerized services. Include layers: private Tailscale access, Nginx Proxy Manager reverse proxy, Pi-hole DNS filtering, CrowdSec intrusion response, UFW firewall rules, Netdata metrics, Uptime Kuma status checks, Dozzle logs, Watchtower updates, Homepage dashboard. Use a layered-defense style with management access separated from public services. Caption: "Layered self-hosted security and observability lab." Alt text: "Security home lab showing Tailscale access, firewall, reverse proxy, DNS filtering, intrusion response, monitoring, logs, updates, and dashboard."

## Dashboards / Analytics Projects

Create a clean SVG data workflow diagram for "Dashboards and Analytics Projects". Show CSV/source data inputs flowing into Python preprocessing, validation and feature engineering, then into analysis/modeling: tourism dashboard, KMeans clustering report, random-walk gravity regression. Outputs: static HTML dashboard, notebook/report, validation prediction file, charts and evidence tables. Include tools: Python, pandas, scikit-learn, HTML/CSS, CSV. Caption: "Reproducible Python data workflows for dashboards, reports, and model outputs." Alt text: "Data analytics workflow from CSV inputs through Python preprocessing and modeling to dashboards, reports, validation files, and charts."
