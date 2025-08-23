import { IoIosArrowForward } from "react-icons/io";
import { ListMinicourse } from "../../listMinicourse";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

export function Minicourse() {
    const [sliderPerview, setSliderPerview] = useState<number>(3)

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

    return (
        <section id="minicourse" className="min-h-screen flex items-center justify-center flex-col text-center w-full bg-blue-50/50 px-4 py-12 ">
            <div className="w-full flex items-center flex-col">
                <h2 className="font-bold bg-gradient-to-l from-blue-900 to-blue-500 bg-clip-text text-transparent md:text-4xl text-2xl">Minicursos em Destaque</h2>
                <p className="text-zinc-700 md:text-lg text-base md:max-w-none max-w-lg">Descubra alguns dos nossos minicursos mais populares e comece sua jornada de aprendizado.</p>
            </div>
            {/*"bg-gray-300/50 w-full max-w-7xl rounded-xl flex items-center justify-center pt-12 md:px-8 px-0 shadow-md"*/}
            <div className="w-full max-w-7xl mb-12 py-4">
                <Swiper
                    slidesPerView={sliderPerview}
                    pagination={{ clickable: true }}
                    navigation
                    modules={[Navigation, Pagination]}
                >

                    {ListMinicourse.map((item) => (
                        <SwiperSlide key={item.id} className="my-12">
                            <div className="border-blue-500 border-l-4 bg-blue-400/10 mx-12 rounded-2xl max-w-98 px-4 md:h-73 h-58 flex justify-center text-left flex-col transition-all cursor-pointer shadow-md hover:shadow-2xl">
                                <span className="text-zinc-700 text-sm">{item.date} • {item.courseLocation}</span>
                                <h3 className="font-bold md:text-xl text-lg text-blue-950 py-2">{item.title}</h3>
                                <p className="text-zinc-700 md:text-base text-sm max-w-92">{item.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <button className="bg-transparent flex items-center justify-center gap-4 border border-zinc-400 rounded-4xl px-6 h-10 shadow-md text-zinc-700 font-medium cursor-pointer transition-all hover:scale-105">
                Ver Todos os Minicursos
                <IoIosArrowForward className="text-zinc-700 md:text-xl text-lg mt-1" />
            </button>
        </section>
    )
}