import {Link} from "react-router-dom";


export default function Projects(){
    return(

        <div className="py-12 px-4">
            {/* PROJECTS CARD */}
            <div className="max-w-5xl mx-auto bg-[var(--mh-dark)]
                      border-4 border-[var(--mh-teal)]
                      rounded-2xl shadow-xl p-12 mb-12">

                <h2 className="text-4xl font-bold text-[var(--mh-gold)] text-center mb-10">
                    Featured Projects
                </h2>
                <div className="text-center mb-9">
                    <p className="text-[var(--mh-light)] text-xl mb-7">
                        All the projects presented in This web page and more are in the link of GitHUB
                    </p>
                    <a
                        href="https://github.com/KevinFZambrano12"
                        target="_blank"
                        className="px-6 py-3 bg-[var(--mh-blue)] text-[var(--mh-light)]
                                border-2 border-[var(--mh-gold)] font-semibold
                                rounded-md hover:bg-[var(--mh-teal)] transition
                                "
                    >
                        GitHub
                    </a>
                </div>


                <div className="grid md:grid-cols-2 gap-8">

                    {/* Card 1 */}
                    <div className="bg-[var(--mh-gray)] border-2 border-[var(--mh-red)]
                          p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-bold text-[var(--mh-gold)] mb-3">ERP for a E-commerce</h3>
                        <p className="text-[var(--mh-light)] mb-8">
                            E-TradeTech is a comprehensive Enterprise Resource Planning (ERP) system designed for Peruvian businesses,
                            providing integrated management of financial, supply chain, and human resources operations.
                        </p>
                        <a
                            href="https://github.com/Arst097/E-TradeTech"
                            target="_blank"
                            className="mt-4
                            w-full
                            sm:w-auto
                            px-4 py-3

                            bg-[var(--mh-blue)]
                            text-[var(--mh-light)]
                            border-2 border-[var(--mh-gold)]

                            rounded-md
                            font-semibold
                            text-sm sm:text-base

                            inline-flex items-center justify-center
                            text-center

                            break-words"
                        >
                            Link to the repository
                        </a>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[var(--mh-gray)] border-2 border-[var(--mh-blue)]
                          p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-bold text-[var(--mh-gold)] mb-3">Project-Fast-API-for-interwievs</h3>
                        <p className="text-[var(--mh-light)] mb-8">
                            This document provides a high-level introduction to the AI Interviewing Platform API,
                            a FastAPI-based REST API designed to support technical interview management systems. this repositories is only made with the parts of the code it can be shared
                        </p>
                        <a
                            href="https://github.com/KevinFZambrano12/Project-Fast-API-for-interwievs"
                            target="_blank"
                            className="mt-4
                                w-full
                                sm:w-auto
                                px-4 py-3

                                bg-[var(--mh-blue)]
                                text-[var(--mh-light)]
                                border-2 border-[var(--mh-gold)]

                                rounded-md
                                font-semibold
                                text-sm sm:text-base

                                inline-flex items-center justify-center
                                text-center

                                break-words
                                "
                        >
                            Link to the repository
                        </a>
                    </div>

                </div>
            </div>
            <div className="max-w-5xl mx-auto bg-[var(--mh-dark)]
                      border-4 border-[var(--mh-teal)]
                      rounded-2xl shadow-xl p-10">
                <h2 className="text-4xl font-bold text-[var(--mh-gold)] text-center mb-10">
                    ERP for a E-commerce
                </h2>

                <p className="text-[var(--mh-light)] mb-8">
                    E-TradeTech is a comprehensive Enterprise Resource Planning (ERP) system designed for Peruvian businesses, providing integrated management of financial, supply chain, and human resources operations. This wiki documents the system's architecture, implementation, and operational procedures.
                </p>
                <h3 className="text-xl font-bold text-[var(--mh-gold)] mb-3">
                    technologies used in the project
                </h3>

                <div className="max-w-5xl mx-auto bg-[var(--mh-dark)] border-2 border-[var(--mh-gold)] rounded-xl shadow-lg p-4">

                    {/* Desktop - tabla normal */}
                    <div className="hidden md:block">
                        <table className="w-full border-collapse text-left">
                            <thead>
                            <tr className="border-b border-[var(--mh-gold)] text-[var(--mh-gold)]">
                                <th className="py-3 px-4">Component</th>
                                <th className="py-3 px-4">Version</th>
                                <th className="py-3 px-4">Purpose</th>
                            </tr>
                            </thead>
                            <tbody className="text-[var(--mh-light)]">
                            <tr className="border-b border-white/10 hover:bg-white/5 transition">
                                <td className="py-3 px-4">Jakarta EE API</td>
                                <td className="py-3 px-4">9.0.0</td>
                                <td className="py-3 px-4">Core platform specification</td>
                            </tr>
                            <tr className="border-b border-white/10 hover:bg-white/5 transition">
                                <td className="py-3 px-4">Payara Server</td>
                                <td className="py-3 px-4">6.2025.4</td>
                                <td className="py-3 px-4">Application server</td>
                            </tr>

                            <tr className="border-b border-white/10 hover:bg-white/5 transition">
                                <td className="py-3 px-4">JDK</td>
                                <td className="py-3 px-4">17</td>
                                <td className="py-3 px-4">Java runtime</td>
                            </tr>

                            <tr className="border-b border-white/10 hover:bg-white/5 transition">
                                <td className="py-3 px-4">JPA API</td>
                                <td className="py-3 px-4">3.1.0</td>
                                <td className="py-3 px-4">Persistence specification</td>
                            </tr>

                            <tr className="border-b border-white/10 hover:bg-white/5 transition">
                                <td className="py-3 px-4">EclipseLink</td>
                                <td className="py-3 px-4">3.0.2</td>
                                <td className="py-3 px-4">JPA provider implementation</td>
                            </tr>

                            <tr className="border-b border-white/10 hover:bg-white/5 transition">
                                <td className="py-3 px-4">SQL Server JDBC</td>
                                <td className="py-3 px-4">12.10.0.jre11</td>
                                <td className="py-3 px-4">Database connectivity</td>
                            </tr>

                            <tr className="border-b border-white/10 hover:bg-white/5 transition">
                                <td className="py-3 px-4">JJWT</td>
                                <td className="py-3 px-4">0.11.5</td>
                                <td className="py-3 px-4">JWT token generation/validation</td>
                            </tr>

                            <tr className="border-b border-white/10 hover:bg-white/5 transition">
                                <td className="py-3 px-4">jQuery</td>
                                <td className="py-3 px-4">3.6.0</td>
                                <td className="py-3 px-4">Frontend AJAX communication</td>
                            </tr>

                            <tr className="border-b border-white/10 hover:bg-white/5 transition">
                                <td className="py-3 px-4">Maven</td>
                                <td className="py-3 px-4">3.x</td>
                                <td className="py-3 px-4">Build and dependency management</td>
                            </tr>

                            <tr>
                                <td className="py-3 px-4">JUnit Jupiter</td>
                                <td className="py-3 px-4">5.6.0</td>
                                <td className="py-3 px-4">Unit testing framework</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile - cards */}
                    <div className="md:hidden space-y-4">
                        {[
                            { name: "Jakarta EE API", version: "9.0.0", purpose: "Core platform specification" },
                            { name: "Payara Server", version: "6.2025.4", purpose: "Application server" },
                            { name: "JDK", version: "17", purpose: "Java runtime" },
                            { name: "JPA API", version: "3.1.0", purpose: "Persistence specification" },
                            { name: "EclipseLink", version: "3.0.2", purpose: "JPA provider implementation" },
                            { name: "SQL Server JDBC", version: "12.10.0.jre11", purpose: "Database connectivity" },
                            { name: "JJWT", version: "0.11.5", purpose: "JWT token generation/validation" },
                            { name: "jQuery", version: "3.6.0", purpose: "Frontend AJAX communication" },
                            { name: "Maven", version: "3.x", purpose: "Build and dependency management" },
                            { name: "JUnit Jupiter", version: "5.6.0", purpose: "Unit testing framework" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-black/40 border border-[var(--mh-gold)] rounded-lg p-4 shadow-md"
                            >
                                <h3 className="text-[var(--mh-gold)] font-bold text-lg mb-2">
                                    {item.name}
                                </h3>
                                <p className="text-[var(--mh-light)]">
                                    <span className="text-gray-400">Version:</span> {item.version}
                                </p>
                                <p className="text-[var(--mh-light)]">
                                    <span className="text-gray-400">Purpose:</span> {item.purpose}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>

                <a
                    href="https://github.com/Arst097/E-TradeTech"
                    target="_blank"
                    className="mt-4
                            w-full
                            sm:w-auto
                            px-4 py-3

                            bg-[var(--mh-blue)]
                            text-[var(--mh-light)]
                            border-2 border-[var(--mh-gold)]

                            rounded-md
                            font-semibold
                            text-sm sm:text-base

                            inline-flex items-center justify-center
                            text-center

                            break-words"
                >
                    Link to the repository
                </a>

            </div>
        </div>
    )
}