import React, { useEffect, useState } from 'react';
import NavLink from '@/Components/NavLink';

export default function MainLink() {
    const sections = ['main', 'services', 'about', 'feedback', 'map'];

    const getVisibleSection = () => {
        for (let section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const rect = element.getBoundingClientRect();
                const elementHeight = rect.height || element.offsetHeight;
                const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
    
                // Перевіряємо, чи видимою є більше ніж 70% елемента
                if (visibleHeight / elementHeight >= 0.55) {
                    return section;
                }
            }
        }
        return null;
    };

    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const visibleSection = getVisibleSection();
            if (visibleSection && visibleSection !== activeSection) {
                setActiveSection(visibleSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeSection]);

    const getSectionTitle = (section) => {
        const titles = {
            main: 'Головна',
            services: 'Послуги',
            about: 'Про нас',
            feedback: 'Відгуки',
            map: 'Наше місцезнаходження',
        };
        return titles[section] || section;
    };

    return (
        <div className="flex items-center">
            {sections.map((section) => (
                <div key={section} className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                    <NavLink href={`/#${section}`} active={activeSection === section}>
                        {getSectionTitle(section)}
                    </NavLink>
                </div>
            ))}
        </div>
    );
}
