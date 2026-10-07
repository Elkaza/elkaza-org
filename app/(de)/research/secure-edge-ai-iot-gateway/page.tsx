import SecureEdgeResearchPage from "@/app/components/SecureEdgeResearchPage";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  "locale": "de",
  "path": "/research/secure-edge-ai-iot-gateway",
  "title": "IoT-Sensordatenintegrität am Edge Gateway | Mohamed Elkaza",
  "description": "MIO-3-Forschungsumfang zur Erkennung manipulierter Messwerte authentifizierter IoT-Sensorknoten an einem ressourcenbeschränkten Edge Gateway."
});

export default function Page() { return <SecureEdgeResearchPage locale="de" />; }
