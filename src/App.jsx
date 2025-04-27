import { useState } from "react";
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';


import logo from "./assets/mtechlogo.png";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="App flex flex-col items-center bg-light text-dark min-h-screen scroll-smooth">
            <div className="w-full max-w-[1920px]">
                {/* Навигация */}
                <header className="bg-primary shadow-md">
                    <nav className="max-w-7xl mx-auto flex justify-between items-center p-4">
                        <div className="">
                            <img src={logo} alt="logo" className="w-24" />
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
                <section id="about" className="bg-white mx-auto flex flex-col items-center py-16 px-6 text-center">
                    <h1 className="text-4xl font-bold mb-6">IT-разработка, которая решает задачи бизнеса</h1>
                    <div className="text-lg max-w-2xl">
                        <p className="text-2xl font-medium text-secondary">Веб. Мобайл. Интеграции. Автоматизация. </p><br />
                        <p>Мы создаём цифровые решения под ключ — от лендингов и телеграм-ботов до мобильных приложений и корпоративных систем.</p>
                    </div>
                </section>

                {/* Что мы делаем */}
                <section id="services" className="bg-white py-16">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-semibold mb-8 text-center">Что мы делаем</h2>
                        <ul className="space-y-4 text-lg list-inside">
                            <li>Веб-сайты и платформы</li>
                            <li>Мобильные приложения (iOS, Android)</li>
                            <li>Системы лояльности и CRM</li>
                            <li>Телеграм-боты и чат-решения</li>
                            <li>Автоматизация бизнес-процессов</li>
                        </ul>
                    </div>
                </section>

                {/* Почему выбирают нас */}
                <section className="pb-16 bg-white">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-semibold mb-8 text-center">Почему выбирают нас</h2>
                        <ul className="space-y-4 text-lg list-inside">
                            <li>Разработка под любые задачи — от идеи до поддержки</li>
                            <li>Глубокое погружение в бизнес-процессы</li>
                            <li>Прозрачность, сроки и контроль на всех этапах</li>
                            <li>Сильная команда: разработчики, дизайнеры, аналитики</li>
                        </ul>
                    </div>
                </section>

                {/* Наш опыт */}
                <section id="experience" className="bg-white pb-16">
                    <div className="max-w-4xl mx-auto px-6">
                        <h2 className="text-3xl font-semibold mb-8 text-center">Наш опыт</h2>
                        <ul className="space-y-4 text-lg list-inside">
                            <li className="flex items-center">Системы лояльности для ритейла</li>
                            <li className="flex items-center">Телеграм-боты для HR-направления</li>
                            <li className="flex items-center">Мобильные приложения для бизнеса</li>
                            <li className="flex items-center">Корпоративные сайты и личные кабинеты</li>
                            <li className="flex items-center">Системы микрофинансовых организаций</li>
                            <li className="flex items-center">Системы автоматизации контроля доступа</li>
                            <li className="flex items-center">Приложения для автоматизации доставки товаров</li>
                            <li className="flex items-center">Тендерные платформы</li>
                        </ul>
                    </div>
                </section>

                {/* Проекты */}
                <section id="projects" className="pb-16 bg-white">
                    <div className="max-w-6xl mx-auto px-6">
                        <h2 className="text-3xl font-semibold mb-12 text-center text-dark">Проекты</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            <div className="bg-primary text-white rounded-lg p-6 flex items-center justify-center text-xl font-semibold shadow-md hover:scale-105 transition-transform">
                                MagnumClub
                            </div>
                            <div className="bg-primary text-white rounded-lg p-6 flex items-center justify-center text-xl font-semibold shadow-md hover:scale-105 transition-transform">
                                MagnumLife
                            </div>
                            <div className="bg-primary text-white rounded-lg p-6 flex items-center justify-center text-xl font-semibold shadow-md hover:scale-105 transition-transform">
                                Mtrade
                            </div>
                        </div>
                    </div>
                </section>

                {/* Контакты */}
                <footer id="contacts" className="bg-dark text-light py-8 text-center text-white">
                    <h3 className="text-2xl mb-4">Контакты</h3>
                    <p>Остались вопросы? Обязательно нас спросите :)</p>
                    <a href="mailto:info@mtechs.kz" className="mt-2 font-semibold text-white hover:text-secondary">info@mtechs.kz</a>
                </footer>
            </div>
        </div>
    );
}

export default App;
