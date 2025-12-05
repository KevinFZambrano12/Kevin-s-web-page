

export default function Projects(){
    return(

        <div className="py-12 px-4">
            {/* PROJECTS CARD */}
            <div className="max-w-5xl mx-auto bg-[var(--mh-dark)]
                      border-4 border-[var(--mh-teal)]
                      rounded-2xl shadow-xl p-12 mb-12">

                <h2 className="text-4xl font-bold text-[var(--mh-gold)] text-center mb-10">
                    Proyectos Destacados
                </h2>
                <div className="text-center mb-9">
                    <p className="text-[var(--mh-light)] text-xl mb-7">
                        todos los proyectos presentados en esta pagina estaran presentes en el link de GitHUB
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
                            className="px-6 py-3 bg-[var(--mh-blue)] text-[var(--mh-light)]
                                border-2 border-[var(--mh-gold)] font-semibold
                                rounded-md hover:bg-[var(--mh-teal)] transition
                                "
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
                            className="px-6 py-3 bg-[var(--mh-blue)] text-[var(--mh-light)]
                                border-2 border-[var(--mh-gold)] font-semibold
                                rounded-md hover:bg-[var(--mh-teal)] transition
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

            </div>
        </div>
    )
}