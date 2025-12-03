

export default function home(){
    let text = "I am a Software Engineering student, a program that has taught me a deep understanding of computer systems, the development of technological solutions, and software project management. During my studies, I have acquired skills in programming, requirements analysis, architectural design, databases, version control, and agile methodologies.I understand that software engineering involves not only writing code, but also solving problems, working in teams, and creating functional and sustainable solutions. Today, I am at the stage of applying this knowledge to the real world, seeking opportunities to gain experience, strengthen my skills, and grow professionally. My goal is to learn by doing: to join projects, take on challenges, and contribute with the vision and energy of a growth-minded student.";

    return(
        <div className="min-h-screen w-full flex justify-center px-4 py-12 bg-gray-50">
            <div className="max-w-4xl w-full space-y-10">

                {/* ENCABEZADO */}
                <section className="bg-white/70 backdrop-blur-sm shadow-md rounded-xl p-8">
                    <div className="flex items-center gap-4 mb-4">
                        <img
                            src="/logo.png" // cambia por tu imagen
                            alt="Profile"
                            className="h-20 w-20 rounded-full object-cover"
                        />
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Kevin Felipe Zambrano Guaca</h1>
                            <h2 className="text-lg text-gray-700">Software Engineer</h2>
                            <p className="text-sm text-gray-500">Universidad Manuela Beltrán</p>
                        </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                        {text}
                    </p>
                </section>

                {/* TECNOLOGÍAS */}
                <section className="bg-white/70 backdrop-blur-sm shadow-md rounded-xl p-8">
                    <h3 className="text-2xl font-semibold mb-4">Technologies I Use</h3>

                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                        <li>Technology 1</li>
                        <li>Technology 2</li>
                        <li>Technology 3</li>
                        <li>Technology 4</li>
                    </ul>
                </section>

                {/* CERTIFICACIONES */}
                <section className="bg-white/70 backdrop-blur-sm shadow-md rounded-xl p-8">
                    <h3 className="text-2xl font-semibold mb-4">Certifications</h3>

                    <p className="text-gray-700">Here you can list certificates or badges you have earned.</p>
                </section>

                {/* SKILLS */}
                <section className="bg-white/70 backdrop-blur-sm shadow-md rounded-xl p-8">
                    <h3 className="text-2xl font-semibold mb-4">Skills</h3>

                    <p className="text-gray-700">Add your skills here in a list or as icons.</p>
                </section>
            </div>
        </div>
    );
}
