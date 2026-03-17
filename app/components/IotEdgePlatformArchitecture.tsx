"use client";
import React from "react";
import Link from "next/link";
import { ArrowDown, Cpu } from "lucide-react";
import { useLocale } from "@/app/LocaleProvider";

export default function IotEdgePlatformArchitecture() {
    const { t, locale } = useLocale();

    return (
        <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-8 rounded-xl border border-blue-200 dark:border-blue-900">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h2 className="text-2xl font-bold text-main">IoT Edge Platform Architecture</h2>
                </div>

                {/* Description */}
                <p className="text-main mb-8 leading-relaxed">
                    This portfolio demonstrates the design and implementation of a modular IoT edge platform. The system collects environmental sensor data via Bluetooth Low Energy (BLE), transports it through an MQTT messaging system, processes it using Node-RED, and stores the data in InfluxDB for time-series analytics.
                </p>

                {/* Architecture Pipeline */}
                <div className="space-y-0 mb-8">
                    {/* ESP32 Sensor Node */}
                    <div className="flex items-center gap-4">
                        <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-blue-500 shadow-sm">
                            <div className="font-semibold text-main">ESP32 Sensor Node</div>
                            <div className="text-sm text-muted">Environmental data collection</div>
                        </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center py-2">
                        <div className="flex flex-col items-center gap-1">
                            <ArrowDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            <span className="text-xs text-muted font-medium">BLE</span>
                        </div>
                    </div>

                    {/* BLE Edge Gateway */}
                    <Link href="/projects/ble-edge-gateway">
                        <div className="flex items-center gap-4 cursor-pointer group">
                            <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-blue-500 shadow-sm hover:shadow-md group-hover:border-blue-600 transition-all">
                                <div className="font-semibold text-main group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">BLE Edge Gateway</div>
                                <div className="text-sm text-muted">Collects BLE data from ESP32</div>
                            </div>
                        </div>
                    </Link>

                    {/* Arrow */}
                    <div className="flex justify-center py-2">
                        <div className="flex flex-col items-center gap-1">
                            <ArrowDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            <span className="text-xs text-muted font-medium">MQTT</span>
                        </div>
                    </div>

                    {/* MQTT Gateway */}
                    <Link href="/projects/rpi-ble-mqtt-gateway">
                        <div className="flex items-center gap-4 cursor-pointer group">
                            <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-blue-500 shadow-sm hover:shadow-md group-hover:border-blue-600 transition-all">
                                <div className="font-semibold text-main group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">MQTT Messaging Infrastructure</div>
                                <div className="text-sm text-muted">Secure mTLS-enabled broker</div>
                            </div>
                        </div>
                    </Link>

                    {/* Arrow */}
                    <div className="flex justify-center py-2">
                        <div className="flex flex-col items-center gap-1">
                            <ArrowDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            <span className="text-xs text-muted font-medium">Processing</span>
                        </div>
                    </div>

                    {/* Data Pipeline */}
                    <Link href="/projects/iot-sensor-data-pipeline">
                        <div className="flex items-center gap-4 cursor-pointer group">
                            <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-blue-500 shadow-sm hover:shadow-md group-hover:border-blue-600 transition-all">
                                <div className="font-semibold text-main group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Node-RED Processing & InfluxDB Storage</div>
                                <div className="text-sm text-muted">Data transformation and time-series database</div>
                            </div>
                        </div>
                    </Link>

                    {/* Arrow */}
                    <div className="flex justify-center py-2">
                        <div className="flex flex-col items-center gap-1">
                            <ArrowDown className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            <span className="text-xs text-muted font-medium">Query</span>
                        </div>
                    </div>

                    {/* Monitoring */}
                    <div className="flex items-center gap-4">
                        <div className="flex-1 bg-white dark:bg-gray-800 p-4 rounded-lg border-2 border-green-500 shadow-sm">
                            <div className="font-semibold text-main">Monitoring / Visualization</div>
                            <div className="text-sm text-muted">Real-time dashboards and analytics</div>
                        </div>
                    </div>
                </div>

                {/* Architecture Diagram */}
                {/* Note: You can add an image here when available */}
                <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg border border-subtle">
                    <p className="text-center text-sm text-muted">Architecture diagram placeholder - add /images/iot-architecture-diagram.png when available</p>
                </div>

                {/* Project Cards */}
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    <Link href="/projects/ble-edge-gateway" className="group">
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-subtle hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
                            <h3 className="font-semibold text-main group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                                BLE Sensor Gateway
                            </h3>
                            <p className="text-sm text-muted">Containerized BLE gateway on embedded Linux</p>
                        </div>
                    </Link>

                    <Link href="/projects/rpi-ble-mqtt-gateway" className="group">
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-subtle hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
                            <h3 className="font-semibold text-main group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                                MQTT Gateway (mTLS)
                            </h3>
                            <p className="text-sm text-muted">Production-ready with mutual TLS security</p>
                        </div>
                    </Link>

                    <Link href="/projects/iot-sensor-data-pipeline" className="group">
                        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-subtle hover:border-blue-400 dark:hover:border-blue-600 transition-colors">
                            <h3 className="font-semibold text-main group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                                Data Pipeline
                            </h3>
                            <p className="text-sm text-muted">Node-RED + InfluxDB time-series analytics</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
