import {Link} from "react-router-dom";

export default function home() {
    let text = "I am a Software Engineering student, a program that has taught me a deep understanding of computer systems, the development of technological solutions, and software project management. During my studies, I have acquired skills in programming, requirements analysis, architectural design, databases, version control, and agile methodologies.I understand that software engineering involves not only writing code, but also solving problems, working in teams, and creating functional and sustainable solutions. Today, I am at the stage of applying this knowledge to the real world, seeking opportunities to gain experience, strengthen my skills, and grow professionally. My goal is to learn by doing: to join projects, take on challenges, and contribute with the vision and energy of a growth-minded student.";
    let text2 = "Developer experienced in building modern applications using React for dynamic interfaces, Python for backend logic and automation, and Java for robust, high-performance architectures. I focus on creating scalable, clean, and maintainable solutions by applying best practices, design patterns, and a quality-driven approach to software development."

    return (
        <div className="max-w-6xl mx-auto px-4 py-12">

            {/* HERO CARD */}
            <div className="max-w-4xl mx-auto
                    bg-[var(--mh-dark)]
                    border-4 border-[var(--mh-gold)]
                    rounded-2xl shadow-xl
                    p-6 sm:p-8 md:p-10
                    mb-12">

                <div className="text-center">

                    <img
                        src="/Kevinphoto.jpeg"
                        alt="Foto de perfil"
                        className="min-h-[500px] min-w-[400px]
                            sm:w-28 sm:h-28
                            mx-auto rounded-full
                            border-4 border-[var(--mh-teal)] shadow-lg
                            mb-4 sm:mb-6"
                    />

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--mh-gold)] mb-2">
                        Kevin Zambrano
                    </h1>

                    <p className="text-[var(--mh-light)] text-lg sm:text-xl mb-4">
                        Full Stack Developer | React • Java • Python • AWS • GCP
                    </p>

                    <p className="text-[var(--mh-light)] max-w-2xl mx-auto leading-relaxed text-base sm:text-lg mb-6 px-2">
                        {text2}
                    </p>

                    <div className="flex justify-center gap-4">
                        <Link
                            to="/projects"
                            className="px-5 py-3
                                sm:px-6 sm:py-3
                                bg-[var(--mh-red)] text-[var(--mh-light)]
                                border-2 border-[var(--mh-gold)] font-semibold
                                rounded-md hover:bg-[var(--mh-orange)] transition text-center"
                        >
                            See Projects
                        </Link>
                        <a
                            href="https://github.com/KevinFZambrano12"
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
            <div
                className="max-w-4xl mx-auto
                    bg-[var(--mh-dark)]
                    border-4 border-[var(--mh-teal)]
                    rounded-2xl shadow-xl
                    p-6 sm:p-8 md:p-10
                    mb-12">
                <h2 className="text-4xl sm:text-4xl font-bold text-[var(--mh-gold)] text-center mb-4 sm:mb-6">
                    About me
                </h2>
                <p className="text-[var(--mh-light)] text-base sm:text-lg leading-relaxed text-center px-2">
                    {text}
                </p>
            </div>

            <div
                className="max-w-4xl mx-auto
                    bg-[var(--mh-dark)]
                    border-4 border-[var(--mh-red)]
                    rounded-2xl shadow-xl
                    p-6 sm:p-8 md:p-10
                    mb-12">
                <h2 className="text-4xl sm:text-4xl font-bold text-[var(--mh-gold)] text-center mb-4 sm:mb-6">
                    technologies that I specialize in
                </h2>
                <ul className="list-disc pl-6" color="">
                    <li className="marker:text-[var(--mh-gold)] marker:text-3xl text-[var(--mh-light)]">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--mh-gold)] mb-1">
                            JAVA
                        </h3>
                        <p className="text-[var(--mh-light)] text-base sm:text-lg leading-relaxed px-2">
                            3 years of experience with different frameworks like jakarta and Spring
                        </p>
                    </li>
                    <li className="marker:text-[var(--mh-gold)] marker:text-3xl text-[var(--mh-light)]">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--mh-gold)] mb-1">
                            PYTHON
                        </h3>
                        <p className="text-[var(--mh-light)] text-base sm:text-lg leading-relaxed px-2">
                            2 years of experience with frameworks like FastAPI and Django
                        </p>
                    </li>
                    <li className="marker:text-[var(--mh-gold)] marker:text-3xl text-[var(--mh-light)]">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--mh-gold)] mb-1">
                            REACT.JS
                        </h3>
                        <p className="text-[var(--mh-light)] text-base sm:text-lg leading-relaxed px-2">
                            2 years of experience with tools like tailwind CSS
                        </p>
                    </li>
                    <li className="marker:text-[var(--mh-gold)] marker:text-3xl text-[var(--mh-light)]">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--mh-gold)] mb-1">
                            POSTGRESSSQL
                        </h3>
                        <p className="text-[var(--mh-light)] text-base sm:text-lg leading-relaxed px-2">
                            2 years of experience
                        </p>
                    </li>
                    <li className="marker:text-[var(--mh-gold)] marker:text-3xl text-[var(--mh-light)]">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--mh-gold)] mb-1">
                            MONGO DB
                        </h3>
                        <p className="text-[var(--mh-light)] text-base sm:text-lg leading-relaxed px-2">
                            2 years of experience
                        </p>
                    </li>
                    <li className="marker:text-[var(--mh-gold)] marker:text-3xl text-[var(--mh-light)]">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--mh-gold)] mb-1">
                            AWS
                        </h3>
                        <p className="text-[var(--mh-light)] text-base sm:text-lg leading-relaxed px-2">
                            2 years of experience in diferents tool in AWS like lambada, EC2, S3, RDS
                        </p>
                    </li>
                </ul>
            </div>

            <div
                className="max-w-4xl mx-auto
                    bg-[var(--mh-dark)]
                    border-4 border-[var(--mh-teal)]
                    rounded-2xl shadow-xl
                    p-6 sm:p-8 md:p-10
                    mb-12">
                <h2 className="text-4xl sm:text-4xl font-bold text-[var(--mh-gold)] text-center mb-4 sm:mb-6">
                    Previous Experience
                </h2>
                <ul className="list-disc pl-6" color="">
                    <li className="marker:text-[var(--mh-gold)] marker:text-3xl text-[var(--mh-light)]">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--mh-gold)] mb-1">
                            Freelance Software Developer
                        </h2>
                        <h3 className="text-1xl sm:text-2xl md:text-3xl font-extrabold text-[var(--mh-gold)] mb-1">
                            Outlier (nov. 2025 - nowdays)
                        </h3>
                        <p className="text-[var(--mh-light)] text-base sm:text-lg leading-relaxed px-2">
                            Analyzed conversations between end-users and an AI coding assistant to evaluate the technical performance of generated code.
                            Assessed code correctness, runtime feasibility, adherence to programming standards, and problem-solving effectiveness.
                            Identified errors, edge cases, and missing logic while producing detailed assessment reports to support model training and continuous improvement.
                            Analyzed conversations between end-users and an AI coding assistant to evaluate the technical performance of generated code. Assessed code correctness, runtime feasibility, adherence to programming standards, and problem-solving effectiveness. Identified errors, edge cases,
                            and missing logic while producing detailed assessment reports to support model training and continuous improvement.
                        </p>
                    </li>
                </ul>
            </div>
        </div>

    );
}
