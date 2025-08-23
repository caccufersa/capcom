import { ListMinicourse } from "../../listMinicourse";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { InfosMinicouse } from "../infoMinicourse";

export function Minicourse() {
    const [sliderPerview, setSliderPerview] = useState<number>(3)
    const [filter, setFilter] = useState<string>('Todos')
    const [modal, setModal] = useState(false)
    const [idCourse, setIdCouse] = useState<number | null>(null);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 780) {
                setSliderPerview(1)
            } else if (window.innerWidth < 1030) {
                setSliderPerview(2)
            } else {
                setSliderPerview(3)
            }
        }

        handleResize()

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const filteredCouses = ListMinicourse.filter((item) => {
        if (filter === 'Todos') return true
        return item.date.includes(filter)
    })

    return (
        <section id="minicourse" className="min-h-screen flex items-center justify-center flex-col text-center w-full bg-blue-50/50 px-4 py-12 ">
            <div className="w-full flex items-center flex-col my-8">
                <h2 className="font-bold bg-gradient-to-l from-blue-900 to-blue-500 bg-clip-text text-transparent md:text-4xl text-2xl">Minicursos em Destaque</h2>
                <p className="text-zinc-700 md:text-lg text-base md:max-w-none max-w-lg">Descubra alguns dos nossos minicursos mais populares e comece sua jornada de aprendizado.</p>
            </div>

            <div className="shadow-md bg-transparent border border-zinc-400 rounded-2xl w-full md:max-w-lg max-w-96 md:h-18 h-14 flex items-center justify-center flex-row gap-6">
                <button
                    onClick={() => setFilter('23/10')}
                    className={`px-4 rounded-xl md:h-10 h-8 md:text-base text-sm  font-medium transition-all hover:scale-105 cursor-pointer
                        ${filter === '23/10' ? 'bg-blue-600 text-white' : 'bg-blue-100/50 text-blue-700'}`}

                >
                    Quinta
                </button>
                <button
                    onClick={() => setFilter('24/10')}
                    className={`px-4 rounded-xl md:h-10 h-8 md:text-base text-sm  font-medium transition-all hover:scale-105 cursor-pointer
                        ${filter === '24/10' ? 'bg-blue-600 text-white' : 'bg-blue-100/50 text-blue-700'}`}>
                    Sexta
                </button>
                <button
                    onClick={() => setFilter('Todos')}
                    className={`px-4 rounded-xl md:h-10 h-8 md:text-base text-sm  font-medium transition-all hover:scale-105 cursor-pointer
                        ${filter === 'Todos' ? 'bg-blue-600 text-white' : 'bg-blue-100/50 text-blue-700'}`}>
                    Todos
                </button>
            </div>


            <div className="w-full max-w-7xl py-4">
                <Swiper
                    slidesPerView={sliderPerview}
                    pagination={{ clickable: true }}
                    navigation
                    modules={[Navigation, Pagination]}
                >

                    {filteredCouses.map((item) => (
                        <SwiperSlide key={item.id} className="my-12">
                            <div onClick={() => { setModal(true), setIdCouse(item.id) }} className="border-blue-500 border-l-4 bg-blue-400/10 mx-12 rounded-2xl max-w-98 px-4 md:h-73 h-58 flex justify-center text-left flex-col transition-all cursor-pointer shadow-md hover:shadow-2xl">
                                <span className="text-zinc-700 text-sm">{item.date} • {item.courseLocation}</span>
                                <h3 className="font-bold md:text-xl text-lg text-blue-950 py-2">{item.title}</h3>
                                <p className="text-zinc-700 md:text-base text-sm max-w-92">{item.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {modal && <InfosMinicouse id={idCourse} closeModal={() => setModal(false)} />}
        </section>
    )
}