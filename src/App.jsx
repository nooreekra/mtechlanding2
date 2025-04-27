import {useEffect, useState} from "react";
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import back from './assets/back.gif'
import WebIcon from '@mui/icons-material/Public';
import MobileIcon from '@mui/icons-material/Smartphone';
import LoyaltyIcon from '@mui/icons-material/CardGiftcard';
import ChatIcon from '@mui/icons-material/Chat';
import AutomationIcon from '@mui/icons-material/Settings';
import ShieldIcon from '@mui/icons-material/Security';
import BrainIcon from '@mui/icons-material/Psychology';
import ClockIcon from '@mui/icons-material/AccessTime';
import TeamIcon from '@mui/icons-material/Group';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css"; // стили карусели

import logo from "./assets/mtechlogo.png";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        mode: "snap",
        slides: {
            perView: 1,
            spacing: 20,
        },
    });

    useEffect(() => {
        let interval;
        if (instanceRef.current) {
            interval = setInterval(() => {
                instanceRef.current?.next();
            }, 3000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [instanceRef]);


    return (
        <div className="App flex flex-col items-center bg-light text-dark min-h-screen scroll-smooth">
            <div className="w-full max-w-[1920px]">
                {/* Навигация */}
                <header className="bg-primary shadow-md">
                    <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
                        <div className="">
                            <img src={logo} alt="logo" className="w-28" />
                        </div>

                        {/* Десктоп меню */}
                        <div className="hidden md:flex space-x-6 text-lg px-8">
                            <a href="#about" className="text-white hover:text-secondary">О нас</a>
                            <a href="#services" className="text-white hover:text-secondary">Компетенции</a>
                            <a href="#experience" className="text-white hover:text-secondary">Проекты</a>
                            <a href="#contacts" className="text-white hover:text-secondary">Контакты</a>
                        </div>

                        {/* Бургер кнопка */}
                        <div className="md:hidden px-8">
                            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none text-white">
                                {menuOpen ? <CloseIcon fontSize="large"/> : <MenuIcon fontSize="large"/>}
                            </button>
                        </div>
                    </nav>

                    {/* Мобильное меню */}
                    {/* Мобильное меню с анимацией */}
                    <div
                        className={`
                        flex flex-col items-center bg-primary text-white md:hidden space-y-4 overflow-hidden transition-all duration-300 ease-in-out 
                        ${menuOpen ? "max-h-96 opacity-100 scale-100 py-4" : "max-h-0 opacity-0 scale-95 py-0"}
                        text-lg
                      `}
                    >
                        <a href="#about" className="hover:text-secondary" onClick={() => setMenuOpen(false)}>О нас</a>
                        <a href="#services" className="hover:text-secondary" onClick={() => setMenuOpen(false)}>Компетенции</a>
                        <a href="#projects" className="hover:text-secondary" onClick={() => setMenuOpen(false)}>Проекты</a>
                        <a href="#contacts" className="hover:text-secondary" onClick={() => setMenuOpen(false)}>Контакты</a>
                    </div>

                </header>

                {/* О нас */}
                <section
                    id="about"
                    className="relative flex flex-col items-center justify-center text-center min-h-[600px] py-16 px-6 overflow-hidden"
                >
                    {/* Фоновая гифка */}
                    <img
                        src={back}
                        alt="Background animation"
                        className="absolute inset-0 w-full h-full object-cover opacity-20"
                    />

                    {/* Содержимое поверх */}
                    <div className="flex flex-col items-center relative z-10 text-white">
                        <h1 className="text-4xl font-bold mb-6">IT-разработка, которая решает задачи бизнеса</h1>
                        <div className="text-lg max-w-2xl">
                            <p className="text-2xl font-medium text-secondary">Веб. Мобайл. Интеграции.
                                Автоматизация. </p><br/>
                            <p>Мы создаём цифровые решения под ключ — от лендингов и телеграм-ботов до мобильных
                                приложений и корпоративных систем.</p>
                        </div>
                    </div>
                </section>


                {/* Что мы делаем */}
                <section id="services" className="bg-white py-16">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-semibold mb-8 text-center">Что мы делаем</h2>
                        <ul className="space-y-4 text-lg list-none">
                            <li className="flex items-center gap-3">
                                <WebIcon className="text-primary"/>
                                Веб-сайты и платформы
                            </li>
                            <li className="flex items-center gap-3">
                                <MobileIcon className="text-primary"/>
                                Мобильные приложения (iOS, Android)
                            </li>
                            <li className="flex items-center gap-3">
                                <LoyaltyIcon className="text-primary"/>
                                Системы лояльности и CRM
                            </li>
                            <li className="flex items-center gap-3">
                                <ChatIcon className="text-primary"/>
                                Телеграм-боты и чат-решения
                            </li>
                            <li className="flex items-center gap-3">
                                <AutomationIcon className="text-primary"/>
                                Автоматизация бизнес-процессов
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Почему выбирают нас */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-semibold mb-8 text-center">Почему выбирают нас</h2>
                        <ul className="space-y-4 text-lg list-none">
                            <li className="flex items-center gap-3">
                                <ShieldIcon className="text-primary"/>
                                Разработка под любые задачи — от идеи до поддержки
                            </li>
                            <li className="flex items-center gap-3">
                                <BrainIcon className="text-primary"/>
                                Глубокое погружение в бизнес-процессы
                            </li>
                            <li className="flex items-center gap-3">
                                <ClockIcon className="text-primary"/>
                                Прозрачность, сроки и контроль на всех этапах
                            </li>
                            <li className="flex items-center gap-3">
                                <TeamIcon className="text-primary"/>
                                Сильная команда: разработчики, дизайнеры, аналитики
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Наш опыт */}
                <section id="experience" className="bg-white py-16">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-semibold mb-8 text-center">Наш опыт</h2>
                        <ul className="space-y-4 text-lg list-inside">
                            <li className="flex items-center"><CheckCircleIcon className="text-primary mr-2" />Системы лояльности для ритейла</li>
                            <li className="flex items-center"><CheckCircleIcon className="text-primary mr-2"/>Телеграм-боты
                                для HR-направления
                            </li>
                            <li className="flex items-center"><CheckCircleIcon className="text-primary mr-2"/>Мобильные
                                приложения для бизнеса
                            </li>
                            <li className="flex items-center"><CheckCircleIcon className="text-primary mr-2"/>Корпоративные
                                сайты и личные кабинеты
                            </li>
                            <li className="flex items-center"><CheckCircleIcon className="text-primary mr-2"/>Системы
                                микрофинансовых организаций
                            </li>
                            <li className="flex items-center"><CheckCircleIcon className="text-primary mr-2"/>Системы
                                автоматизации контроля доступа
                            </li>
                            <li className="flex items-center"><CheckCircleIcon className="text-primary mr-2"/>Приложения для
                                автоматизации доставки товаров
                            </li>
                            <li className="flex items-center"><CheckCircleIcon className="text-primary mr-2"/>Тендерные
                                платформы
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Проекты */}
                <section id="projects" className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-semibold mb-12 text-center text-dark">Проекты</h2>
                        {/* Контейнер с кнопками и слайдером */}
                        <div className="relative">
                            {/* Стрелка влево */}
                            <button
                                onClick={() => instanceRef.current?.prev()}
                                className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-3 hover:bg-secondary transition"
                            >
                                <ArrowBackIosNewIcon/>
                            </button>

                            {/* Слайдер */}
                            <div ref={sliderRef} className="keen-slider">
                                <div
                                    className="keen-slider__slide number-slide1 rounded-lg p-6 flex flex-col items-center justify-center text-xl font-semibold">
                                    MagnumClub
                                </div>
                                <div className="keen-slider__slide number-slide2 rounded-lg p-6 flex flex-col items-center justify-center text-xl font-semibold">
                                    MagnumLife
                                </div>
                                <div className="keen-slider__slide number-slide3 rounded-lg p-6 flex flex-col items-center justify-center text-xl font-semibold">
                                    Mtrade
                                </div>
                            </div>

                            {/* Стрелка вправо */}
                            <button
                                onClick={() => instanceRef.current?.next()}
                                className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 bg-primary text-white rounded-full p-3 hover:bg-secondary transition"
                            >
                                <ArrowForwardIosIcon/>
                            </button>
                        </div>
                    </div>
                </section>

                {/* Контакты */}
                <footer id="contacts" className="bg-dark text-light py-8 text-center text-white">
                <h3 className="text-2xl mb-4">Контакты</h3>
                    <p>Остались вопросы? Обязательно нас спросите :)</p>
                    <a href="mailto:info@mtechs.kz"
                       className="mt-2 font-semibold text-white hover:text-secondary">info@mtechs.kz</a>
                </footer>
            </div>
        </div>
    );
}

export default App;
