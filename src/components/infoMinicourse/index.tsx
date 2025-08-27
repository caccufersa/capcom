import { MdOutlineClose, MdOutlineMail } from "react-icons/md";
import { ListMinicourse } from "../../listMinicourse";
import { FaInstagram, FaItchIo, FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

interface ModalProps {
    closeModal: () => void;
    id: number | null;
}

export function InfosMinicouse({ closeModal, id }: ModalProps) {

    const course = ListMinicourse.find((item) => item.id === id)

    return (
        <div className="bg-black/40 fixed inset-0 flex items-center justify-center z-100" onClick={closeModal}>
            <main className="max-h-11/12 overflow-y-auto bg-white w-11/12 max-w-5xl h-auto flex flex-col rounded-lg p-8 " onClick={(e) => e.stopPropagation()}>
                <header>
                    <div className="flex  justify-between mb-2">
                        <p className="font-bold md:text-xl text-lg text-blue-950 text-left">{course?.title}</p>
                        <MdOutlineClose onClick={closeModal} size={25} className="cursor-pointer mb-4 text-black transition-all duration-200 hover:text-red-500" />
                    </div>
                </header>
                <section className="flex gap-6 lg:flex-row flex-col">
                    <div className="flex flex-2 flex-col text-left max-w-xl">
                        <p>{course?.description}</p>
                        <p className="font-medium mt-4 md:text-lg text-base">Pré-Requisitos: </p>
                        <span className="text-zinc-700">{course?.prerequisites}</span>
                        <a
                            onClick={closeModal}
                            href="#instructions"
                            className="text-left mt-6 bg-blue-600 max-w-38 flex items-center justify-center py-1 rounded-3xl text-white font-medium transition-all hover:scale-105 cursor-pointer">Inscrever-se!</a>
                    </div>
                    <div className="flex flex-col gap-4 flex-1 justify-center">
                        <div className="flex gap-4">
                            <img className="rounded-full w-28 h-28 object-cover" src={course?.instructor1.img} alt="Foto do ministrante" />
                            <div>
                                <p className="text-left">{course?.instructor1.name}</p>
                                <p className="pb-2 text-left text-zinc-700 text-sm">{course?.instructor1.description}</p>
                                <span className="flex gap-2 items-center">
                                    {course?.instructor1.insta && (
                                        <a href={course?.instructor1.insta} target="_blank">
                                            <FaInstagram size={26} color="#000" />
                                        </a>
                                    )}
                                    {course?.instructor1.github && (
                                        <a href={course?.instructor1.github} target="_blank">
                                            <IoLogoGithub size={26} color="#000" />
                                        </a>
                                    )}
                                    {course?.instructor1.email && (
                                        <a href={course?.instructor1.email} target="_blank">
                                            <MdOutlineMail size={26} color="#000" />
                                        </a>
                                    )}
                                    {course?.instructor1.itchio && (
                                        <a href={course?.instructor1.itchio} target="_blank">
                                            <FaItchIo size={26} color="#000" />
                                        </a>
                                    )}
                                    {course?.instructor1.linkedin && (
                                        <a href={course?.instructor1.linkedin} target="_blank">
                                            <FaLinkedin size={26} color="#000" />
                                        </a>
                                    )}
                                </span>
                            </div>
                        </div>
                        {course?.instructor2 && (
                            <div className="flex gap-4">
                                <img className="rounded-full w-28 h-28 object-cover" src={course?.instructor2?.img} alt="Foto do ministrante" />
                                <div>
                                    <p className="text-left">{course?.instructor2?.name}</p>
                                    <p className="pb-2 text-left text-zinc-700 text-sm">{course?.instructor2?.description}</p>
                                    <span className="flex gap-2 items-center">
                                        {course?.instructor2?.insta && (
                                            <a href={course?.instructor2?.insta} target="_blank">
                                                <FaInstagram size={26} color="#000" />
                                            </a>
                                        )}
                                        {course?.instructor2?.github && (
                                            <a href={course?.instructor2?.github} target="_blank">
                                                <IoLogoGithub size={26} color="#000" />
                                            </a>
                                        )}
                                        {course?.instructor2?.email && (
                                            <a href={course?.instructor2?.email} target="_blank">
                                                <MdOutlineMail size={26} color="#000" />
                                            </a>
                                        )}
                                        {course?.instructor2?.itchio && (
                                            <a href={course?.instructor2?.itchio} target="_blank">
                                                <FaItchIo size={26} color="#000" />
                                            </a>
                                        )}
                                        {course?.instructor2?.linkedin && (
                                            <a href={course?.instructor2?.linkedin} target="_blank">
                                                <FaLinkedin size={26} color="#000" />
                                            </a>
                                        )}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </main>
        </div>
    )
}