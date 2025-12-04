

export default function Projects(){
    return(

        <div className="w-full bg-[var(--mh-gray)] py-12 px-4">
            {/* PROJECTS CARD */}
            <div className="max-w-5xl mx-auto bg-[var(--mh-dark)]
                      border-4 border-[var(--mh-teal)]
                      rounded-2xl shadow-xl p-12 mb-12">

                <h2 className="text-4xl font-bold text-[var(--mh-gold)] text-center mb-10">
                    Proyectos Destacados
                </h2>
                <div className="text-center">
                    <p className="text-[var(--mh-light)] text-xl mb-7">
                        todos los proyectos presentados en esta pagina estaran presentes en el link de GitHUB
                    </p>
                    <h2 className="mb-7"><a href="https://github.com/KevinFZambrano12"
                           className="text-[var(--mh-light)] text-xl
                            hover:text-blue-500">
                        Link de Github
                        </a>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <div className="bg-[var(--mh-gray)] border-2 border-[var(--mh-red)]
                          p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-bold text-[var(--mh-gold)] mb-3">E-commerce</h3>
                        <p className="text-[var(--mh-light)]">
                            Tienda completa con carrito, pedidos, pagos e interfaz moderna.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[var(--mh-gray)] border-2 border-[var(--mh-blue)]
                          p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-bold text-[var(--mh-gold)] mb-3">App de Reuniones</h3>
                        <p className="text-[var(--mh-light)]">
                            App móvil con grabación de reuniones y resúmenes generados por IA.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[var(--mh-gray)] border-2 border-[var(--mh-teal)]
                          p-6 rounded-xl shadow-lg">
                        <h3 className="text-xl font-bold text-[var(--mh-gold)] mb-3">API REST + Dashboard</h3>
                        <p className="text-[var(--mh-light)]">
                            Backend con autenticación avanzada, roles y panel de control.
                        </p>
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