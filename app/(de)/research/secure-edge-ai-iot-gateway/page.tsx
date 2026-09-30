import SecureEdgeResearchPage from "@/app/components/SecureEdgeResearchPage";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  "locale": "de",
  "path": "/research/secure-edge-ai-iot-gateway",
  "title": "Secure Edge AI Gateway for IoT Sensor Networks | Mohamed Elkaza",
  "description": "Masterprojekt an der FH Technikum Wien zur leichtgewichtigen Erkennung von IoT-Sensordatenmanipulationen auf Raspberry Pi 5 mit ESP32-S3 und kontrollierten Experimenten."
});

export default function Page() { return <SecureEdgeResearchPage locale="de" />; }
