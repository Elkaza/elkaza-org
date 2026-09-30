import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { projectText, repositoryUrl, researchMethods, researchQuestions, researchScenarios } from "../lib/secureEdgeResearch";

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} aria-labelledby={`${id}-title`} className="mt-10 border-t border-subtle pt-8"><h2 id={`${id}-title`} className="mb-4 text-2xl font-semibold text-main">{title}</h2>{children}</section>;
}

function Items({ items }: { items: string[] }) {
  return <ul className="mt-3 list-disc space-y-2 pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

const linkClass = "font-semibold text-blue-800 underline underline-offset-4 dark:text-blue-300";

  function Diagram({ name, alt, width, height, fullSize }: { name: string; alt: string; width: number; height: number; fullSize: string }) {
    const src = `/project-diagrams/secure-edge-ai-iot-gateway/${name}.png`;
    return <figure className="mt-6"><a href={src} aria-label={`${fullSize}: ${alt}`}><Image src={src} alt={alt} width={width} height={height} unoptimized className={`mx-auto h-auto w-full rounded-lg border border-subtle bg-white ${name === "research-methodology" ? "max-w-xl" : ""}`} /></a><figcaption className="mt-3 text-sm"><a className={linkClass} href={src}>{fullSize}</a></figcaption></figure>;
  }

export default function SecureEdgeResearchPage({ locale }: { locale: "de" | "en" }) {
  const t = projectText[locale];
  const back = locale === "de" ? "/research" : "/en/research";

  return <main className="min-h-screen bg-page text-main"><article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-16">
    <header className="border-b border-subtle pb-8">
      <p className="border-l-2 border-blue-600 pl-2 text-xs font-extrabold uppercase text-blue-800 dark:text-blue-300">FH Technikum Wien</p>
      <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight tracking-normal sm:text-4xl md:text-5xl">Secure Edge AI Gateway for IoT Sensor Networks</h1>
      <p className="mt-4 text-lg text-secondary" lang="en">Lightweight Detection of Sensor-Data Integrity Attacks</p>
      <p className="mt-5 text-sm font-semibold text-secondary">MIO-3 Master&apos;s Project · 2026–2027 · {t.status}</p>
      <p className="mt-2 text-sm text-secondary">MSc Internet of Things &amp; Intelligent Systems</p>
      <p className="mt-4 max-w-3xl text-sm text-muted">{t.scope}</p>
      <nav aria-label={locale === "de" ? "Projektlinks" : "Project links"} className="mt-6 flex flex-wrap gap-5"><a className={linkClass} href={repositoryUrl}>GitHub Repository</a><Link className={linkClass} href={back}>{t.back}</Link></nav>
    </header>
    <div className="leading-8 text-secondary">
      <Section id="overview" title={t.overviewTitle}><p className="max-w-3xl">{t.overview}</p></Section>
      <Section id="objective" title={t.objectiveTitle}><p className="max-w-3xl">{t.objective}</p></Section>
      <Section id="questions" title={t.questionsTitle}><p className="text-sm text-muted">{t.draft}</p><dl className="mt-4 space-y-5">{researchQuestions.map((q, i) => <div key={q} className="grid gap-1 sm:grid-cols-[3rem_1fr]"><dt className="font-semibold text-main">RQ{i + 1}</dt><dd lang="en" className="max-w-3xl">{q}</dd></div>)}</dl></Section>
      <Section id="architecture" title={t.architectureTitle}><Diagram fullSize={t.fullSize} name="system-architecture" width={1536} height={1024} alt="System architecture of the isolated Secure Edge AI IoT research testbed with ESP32-S3 sensor node, controlled attack injection and Raspberry Pi 5 edge security gateway." /><p className="mt-5 max-w-3xl">{t.architecture}</p></Section>
      <Section id="methodology" title={t.experimentTitle}><p className="max-w-3xl">{t.experiment}</p><Diagram fullSize={t.fullSize} name="research-methodology" width={1024} height={1536} alt="Research methodology from problem and research questions through normal-behaviour modelling, controlled attack injection, independent detection methods, edge deployment and evaluation; RQ1 maps to modelling, RQ2 to detection, RQ3 to edge resources." /></Section>
      <Section id="methods" title={t.methodsTitle}><Items items={researchMethods} /><p className="mt-4 max-w-3xl">{t.methods}</p></Section>
      <Section id="scenarios" title={t.scenariosTitle}><p>{t.scenarios}</p><Items items={[...researchScenarios, t.optionalReplay]} /></Section>
      <Section id="platform" title={t.platformTitle}><div className="grid gap-6 sm:grid-cols-2"><div><h3 className="font-semibold text-main">{t.hardware}</h3><Items items={t.hardwareItems} /></div><div><h3 className="font-semibold text-main">{t.software}</h3><Items items={["Linux / Raspberry Pi OS", "Wi-Fi / MQTT", "Python · pandas / NumPy · scikit-learn", locale === "de" ? "Jupyter bei Bedarf für explorative Analysen" : "Jupyter for exploratory analysis where appropriate"]} /></div></div></Section>
      <Section id="evaluation" title={t.evaluationTitle}><p className="max-w-3xl">{t.evaluation}</p><div className="mt-5 grid gap-6 sm:grid-cols-2"><div><h3 className="font-semibold text-main">{t.detection}</h3><Items items={["Precision", "Recall", "F1-score", "False-Alarm Rate", t.delay]} /></div><div><h3 className="font-semibold text-main">{t.resources}</h3><Items items={["Inference Latency", "CPU Usage", "Memory Usage"]} /></div></div></Section>
      <Section id="scope" title={t.boundaryTitle}><p className="max-w-3xl">{t.boundary}</p></Section>
      <Section id="status" title={t.statusTitle}><div className="grid gap-6 sm:grid-cols-2"><div><h3 className="font-semibold text-main">{t.available}</h3><Items items={t.availableItems} /></div><div><h3 className="font-semibold text-main">{t.next}</h3><Items items={t.nextItems} /></div></div></Section>
    </div>
    <footer className="mt-10 flex flex-wrap gap-5 border-t border-subtle pt-6"><a className={linkClass} href={repositoryUrl}>GitHub Repository</a><Link className={linkClass} href={back}>{t.back}</Link></footer>
  </article></main>;
}
