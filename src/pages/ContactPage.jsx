import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-6 md:pt-12 pb-10 md:pb-20">
            <div className="container mx-auto px-5 sm:px-8 lg:px-10">
                <Link to="/" className="font-bold uppercase tracking-tight hover:text-gray-400 inline-block">
                    ← Retour à l'accueil
                </Link>
            </div>

            {/* Contact provides its own container and gutters */}
            <div className="-mt-6 md:-mt-12">
                <Contact />
            </div>
        </div>
    );
};

export default ContactPage;
