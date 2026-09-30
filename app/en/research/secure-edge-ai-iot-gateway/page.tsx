import SecureEdgeResearchPage from "@/app/components/SecureEdgeResearchPage";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  "locale": "en",
  "path": "/research/secure-edge-ai-iot-gateway",
  "title": "Secure Edge AI Gateway for IoT Sensor Networks | Mohamed Elkaza",
  "description": "Master's research at FH Technikum Wien investigating lightweight edge-based anomaly detection for IoT sensor-data integrity using Raspberry Pi 5, ESP32-S3 and controlled experiments."
});

export default function Page() { return <SecureEdgeResearchPage locale="en" />; }
