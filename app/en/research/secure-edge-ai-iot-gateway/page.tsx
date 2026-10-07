import SecureEdgeResearchPage from "@/app/components/SecureEdgeResearchPage";
import { localizedMetadata } from "@/app/lib/seo";

export const metadata = localizedMetadata({
  "locale": "en",
  "path": "/research/secure-edge-ai-iot-gateway",
  "title": "IoT Sensor Integrity at the Edge | Mohamed Elkaza",
  "description": "MIO-3 research scope on detecting manipulated measurements from authenticated IoT sensor nodes at a resource-constrained edge gateway."
});

export default function Page() { return <SecureEdgeResearchPage locale="en" />; }
