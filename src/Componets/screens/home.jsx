

export default function home(){
    let text = "I am a Software Engineering student, a program that has taught me a deep understanding of computer systems, the development of technological solutions, and software project management. During my studies, I have acquired skills in programming, requirements analysis, architectural design, databases, version control, and agile methodologies.I understand that software engineering involves not only writing code, but also solving problems, working in teams, and creating functional and sustainable solutions. Today, I am at the stage of applying this knowledge to the real world, seeking opportunities to gain experience, strengthen my skills, and grow professionally. My goal is to learn by doing: to join projects, take on challenges, and contribute with the vision and energy of a growth-minded student.";

    return(
        <>
            <div className="w-full bg-[var(--mh-gray)] py-12 px-4">

                {/* HERO CARD */}
                <div className="max-w-4xl mx-auto bg-[var(--mh-dark)]
                      border-4 border-[var(--mh-gold)]
                      rounded-2xl shadow-xl p-10 mb-12">
                    <div className="text-center">

                        <img
                            src="/avatar.jpg"
                            alt="Foto de perfil"
                            className="w-28 h-28 mx-auto rounded-full border-4 border-[var(--mh-gold)] shadow-lg mb-6"
                        />

                        <h1 className="text-5xl font-extrabold text-[var(--mh-gold)] mb-2">
                            Kevin Zambrano
                        </h1>

                        <p className="text-[var(--mh-light)] text-xl mb-4">
                            Full Stack Developer | React • Node • SQL • Cloud
                        </p>

                        <p className="text-[var(--mh-light)] max-w-2xl mx-auto leading-relaxed mb-6">
                            Desarrollador enfocado en construir soluciones eficientes,
                            escalables y modernas utilizando tecnologías de punta.
                        </p>

                        <div className="flex justify-center gap-4">
                            <a
                                href="#projects"
                                className="px-6 py-3 bg-[var(--mh-red)] text-[var(--mh-light)]
                         border-2 border-[var(--mh-gold)] font-semibold
                         rounded-md hover:bg-[var(--mh-orange)] transition"
                            >
                                Ver Proyectos
                            </a>

                            <a
                                href="https://github.com/"
                                target="_blank"
                                className="px-6 py-3 bg-[var(--mh-blue)] text-[var(--mh-light)]
                         border-2 border-[var(--mh-gold)] font-semibold
                         rounded-md hover:bg-[var(--mh-teal)] transition"
                            >
                                GitHub
                            </a>
                        </div>

                    </div>
                </div>


                {/* ABOUT CARD */}
                <div className="max-w-4xl mx-auto bg-[var(--mh-dark)]
                      border-4 border-[var(--mh-blue)]
                      rounded-2xl shadow-xl p-10 mb-12">
                    <h2 className="text-4xl font-bold text-[var(--mh-gold)] text-center mb-6">
                        Sobre mí
                    </h2>
                    <p className="text-[var(--mh-light)] text-lg leading-relaxed text-center">
                        Tengo experiencia desarrollando aplicaciones web modernas con React,
                        Node, Python, SQL y herramientas en la nube. Me apasiona crear
                        interfaces intuitivas y sistemas robustos siguiendo buenas prácticas
                        y diseño orientado a componentes.
                    </p>
                </div>

            </div>
        </>
    );
}
