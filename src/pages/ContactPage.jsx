import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-12 pb-20">
            <div className="container mx-auto px-10">
                <div className="">
                    <Link to="/" className="font-bold uppercase tracking-tight hover:text-gray-400 mb-8 inline-block">
                        ← Retour à l'accueil
                    </Link>
                </div>

                <div className="-mt-20">
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
