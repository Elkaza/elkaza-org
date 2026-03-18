"use client";
import React from "react";
import Link from "next/link";
import { Cpu, Bluetooth, Network, Cog, Database, Activity } from "lucide-react";

export default function IotEdgePlatformArchitecture() {

    return (
        <section className="mb-12 relative overflow-hidden rounded-2xl bg-gradient-to-br from-subtle/40 via-bg-page to-subtle/20 border border-blue-500/20 shadow-lg shadow-blue-500/5">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 p-32 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 p-32 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="p-8 max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-6">
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        Featured Project
                    </div>
                    <div className="flex items-center gap-3">
                        <Cpu className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                        <h2 className="text-3xl font-bold text-main">IoT Edge Platform</h2>
                    </div>
                </div>

                {/* Description */}
                <p className="text-main/90 mb-12 leading-relaxed text-lg max-w-3xl">
                    This portfolio demonstrates the design and implementation of a modular IoT edge platform. The system collects environmental sensor data via Bluetooth Low Energy (BLE), transports it through an MQTT messaging system, processes it using Node-RED, and stores the data in InfluxDB for time-series analytics.
                </p>

                {/* Data Flow Subtitle */}
                <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">System Architecture & Data Flow</h3>

                {/* Vertical Pipeline Architecture Map */}
                <div className="relative pl-8 pb-4">
                    {/* Continuous Pipeline Trace Line */}
                    <div className="absolute top-4 bottom-8 left-[15px] w-[2px] bg-gradient-to-b from-blue-500 via-blue-400/50 to-purple-500" />

                    {/* Step 1: ESP32 Sensor Node */}
                    <div className="relative mb-10">
                        <div className="absolute -left-[35px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-page border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                            <Cpu className="w-3 h-3 text-blue-500" />
                        </div>
                        <div className="bg-page/40 hover:bg-page/80 transition-colors rounded-xl p-5 border border-blue-200/50 dark:border-blue-900/30">
                            <div className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">EDGE LAYER</div>
                            <h4 className="font-bold text-main text-lg mb-1">ESP32 Sensor Node</h4>
                            <p className="text-muted text-sm">Environmental data collection (Temperature & Humidity)</p>
                        </div>
                        <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mt-2 ml-4 flex items-center gap-1">
                            <Bluetooth className="w-3 h-3" /> via Bluetooth Low Energy (BLE)
                        </div>
                    </div>

                    {/* Step 2: BLE Edge Gateway */}
                    <div className="relative mb-10">
                        <div className="absolute -left-[35px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-page border-2 border-blue-400">
                            <Network className="w-3 h-3 text-blue-400" />
                        </div>
                        <Link href="/projects/ble-edge-gateway" className="block group">
                            <div className="bg-card hover:bg-subtle/50 transition-colors rounded-xl p-5 border border-blue-200/50 dark:border-blue-900/50 group-hover:border-blue-400 dark:group-hover:border-blue-500 shadow-sm cursor-pointer relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 group-hover:bg-blue-500/10 rounded-bl-full transition-colors" />
                                <div className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">EDGE GATEWAY LAYER</div>
                                <h4 className="font-bold text-main text-lg mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">BLE Edge Gateway</h4>
                                <p className="text-muted text-sm">Containerized D-Bus gateway collecting host BLE payloads</p>
                            </div>
                        </Link>
                    </div>

                    {/* Step 3: MQTT Messaging Infrastructure */}
                    <div className="relative mb-10">
                        <div className="absolute -left-[35px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-page border-2 border-blue-400">
                            <Network className="w-3 h-3 text-blue-400" />
                        </div>
                        <Link href="/projects/rpi-ble-mqtt-gateway" className="block group">
                            <div className="bg-card hover:bg-subtle/50 transition-colors rounded-xl p-5 border border-blue-200/50 dark:border-blue-900/50 group-hover:border-blue-400 dark:group-hover:border-blue-500 shadow-sm cursor-pointer relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/5 group-hover:bg-blue-500/10 rounded-bl-full transition-colors" />
                                <div className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">MESSAGING LAYER</div>
                                <h4 className="font-bold text-main text-lg mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">MQTT Messaging Infrastructure</h4>
                                <p className="text-muted text-sm mb-2">Mosquitto broker secured via mutual TLS (mTLS) certificates</p>
                                <code className="text-[11px] text-muted block mt-1 p-1 bg-subtle/30 rounded border border-subtle w-fit group-hover:bg-blue-500/5 group-hover:border-blue-500/20 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Protocol: MQTT over TLS v1.3</code>
                            </div>
                        </Link>
                    </div>

                    {/* Step 4: Node-RED Processing */}
                    <div className="relative mb-10">
                        <div className="absolute -left-[35px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-page border-2 border-purple-500">
                            <Cog className="w-3 h-3 text-purple-500" />
                        </div>
                        <Link href="/projects/iot-sensor-data-pipeline" className="block group">
                            <div className="bg-card hover:bg-subtle/50 transition-colors rounded-xl p-5 border border-purple-200/50 dark:border-purple-900/50 group-hover:border-purple-400 dark:group-hover:border-purple-500 shadow-sm cursor-pointer relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 group-hover:bg-purple-500/10 rounded-bl-full transition-colors" />
                                <div className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">PROCESSING LAYER</div>
                                <h4 className="font-bold text-main text-lg mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Node-RED Processing</h4>
                                <p className="text-muted text-sm mb-2">Event-driven data transformation and normalization engine</p>
                                <code className="text-[11px] text-muted block mt-1 p-1 bg-subtle/30 rounded border border-subtle w-fit group-hover:bg-purple-500/5 group-hover:border-purple-500/20 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Pattern: Publish / Subscribe</code>
                            </div>
                        </Link>
                    </div>

                    {/* Step 5: InfluxDB Time-Series Database */}
                    <div className="relative mb-10">
                        <div className="absolute -left-[35px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-page border-2 border-purple-500">
                            <Database className="w-3 h-3 text-purple-500" />
                        </div>
                        <Link href="/projects/iot-sensor-data-pipeline" className="block group">
                            <div className="bg-card hover:bg-subtle/50 transition-colors rounded-xl p-5 border border-purple-200/50 dark:border-purple-900/50 group-hover:border-purple-400 dark:group-hover:border-purple-500 shadow-sm cursor-pointer relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 group-hover:bg-purple-500/10 rounded-bl-full transition-colors" />
                                <div className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">STORAGE LAYER</div>
                                <h4 className="font-bold text-main text-lg mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">InfluxDB Time-Series Database</h4>
                                <p className="text-muted text-sm mb-2">High-performance time-series storage backend</p>
                                <code className="text-[11px] text-muted block mt-1 p-1 bg-subtle/30 rounded border border-subtle w-fit group-hover:bg-purple-500/5 group-hover:border-purple-500/20 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Model: Time-series schema</code>
                            </div>
                        </Link>
                    </div>

                    {/* Step 6: Monitoring / Visualization */}
                    <div className="relative mb-8">
                        <div className="absolute -left-[35px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-page border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                            <Activity className="w-3 h-3 text-purple-500" />
                        </div>
                        <Link href="/projects/iot-sensor-data-pipeline" className="block group">
                            <div className="bg-card hover:bg-subtle/50 transition-colors rounded-xl p-5 border border-purple-200/50 dark:border-purple-900/50 group-hover:border-purple-400 dark:group-hover:border-purple-500 shadow-sm cursor-pointer relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 group-hover:bg-purple-500/10 rounded-bl-full transition-colors" />
                                <div className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">VISUALIZATION LAYER</div>
                                <h4 className="font-bold text-main text-lg mb-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Monitoring & Visualization</h4>
                                <p className="text-muted text-sm">Real-time analytical dashboards (Grafana / Node-RED UI)</p>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Architecture Diagram */}
                <div className="mt-8 relative overflow-hidden rounded-xl border border-subtle shadow-sm group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/images/architecture.png" 
                        alt="IoT Edge Platform Architecture Diagram"
                        className="w-full h-auto rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                        onError={(e) => { e.currentTarget.parentElement!.style.display = 'none'; }}
                    />
                </div>

            </div>
        </section>
    );
}
