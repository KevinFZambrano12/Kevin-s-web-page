
export default function contact(){
    return(
        <div className="max-w-6xl mx-auto px-4 py-12">
            <div
                className="max-w-4xl mx-auto
                        bg-[var(--mh-dark)]
                        border-4 border-[var(--mh-teal)]
                        rounded-2xl shadow-xl
                        p-6 sm:p-8 md:p-10
                        mb-12">
                <h2 className="text-4xl sm:text-4xl font-bold text-[var(--mh-gold)] text-center mb-4 sm:mb-6">
                    Contact
                </h2>
                <ul className="list-disc pl-6" color="">
                    <li className="marker:text-[var(--mh-gold)] marker:text-3xl text-[var(--mh-light)]">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--mh-gold)] mb-1">
                            E-mail
                        </h3>
                        <a href="mailto:kevinfzambrano@hotmail.com"
                           className=" text-[var(--mh-light)] text-lg sm:text-xl underline underline-offset-2 ">
                            kevinfzambrano@hotmail.com
                        </a>
                    </li>
                    <li className="marker:text-[var(--mh-gold)] marker:text-3xl text-[var(--mh-light)]">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--mh-gold)] mb-1">
                            Phone
                        </h3>
                        <p className="text-[var(--mh-light)] text-base sm:text-lg leading-relaxed px-2">
                            +57 3017506083
                        </p>
                    </li>
                    <li className="marker:text-[var(--mh-gold)] marker:text-3xl text-[var(--mh-light)]">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--mh-gold)] mb-1">
                            GitHub
                        </h3>
                        <a href="https://github.com/KevinFZambrano12"
                           className=" text-[var(--mh-light)] text-lg sm:text-xl underline underline-offset-2 ">
                            KevinFZambrano12
                        </a>
                    </li>
                    <li className="marker:text-[var(--mh-gold)] marker:text-3xl text-[var(--mh-light)]">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--mh-gold)] mb-1">
                            Linkendin
                        </h3>
                        <a href="https://www.linkedin.com/in/kevin-f-zambrano-guaca-6a471625a"
                           className=" text-[var(--mh-light)] text-lg sm:text-xl underline underline-offset-2 ">
                            Kevin F. Zambrano Guaca
                        </a>
                    </li>
                    <li className="marker:text-[var(--mh-gold)] marker:text-3xl text-[var(--mh-light)]">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--mh-gold)] mb-1">
                            Credly
                        </h3>
                        <a href="https://www.credly.com/users/kevin-felipe-zambrano-guaca.fdd0fb73/badges#credly"
                           className=" text-[var(--mh-light)] text-lg sm:text-xl underline underline-offset-2 ">
                            Kevin Felipe Zambrano Guaca
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}