import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = ({ images, projectColor = 'design-cyan' }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const openLightbox = (img, index) => {
        setSelectedImage(img);
        setSelectedIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        const newIndex = (selectedIndex + 1) % images.length;
        setSelectedIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        const newIndex = (selectedIndex - 1 + images.length) % images.length;
        setSelectedIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    // Extract color class from projectColor (e.g., 'bg-design-cyan' -> 'design-cyan')
    const colorClass = projectColor?.replace('bg-', '') || 'design-cyan';

    return (
        <>
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((img, i) => {
                    const imgSrc = typeof img === 'string' ? img : img.src;
                    const caption = typeof img === 'object' ? img.caption : null;
                    const isVideo = imgSrc?.endsWith('.mp4') || imgSrc?.endsWith('.webm');
                    const isLarge = typeof img === 'object' ? img.isLarge : false;

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => openLightbox(img, i)}
                            className={`aspect-video bg-card-bg border-2 border-border-dark 
                                     hover:-translate-y-1 hover:shadow-lg cursor-pointer
                                     transition-all overflow-hidden group relative
                                     ${isLarge ? 'md:col-span-2 lg:col-span-3 max-w-2xl mx-auto w-full' : ''}`}
                        >
                            {isVideo ? (
                                <video
                                    src={imgSrc}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    muted
                                    loop
                                    autoPlay
                                    playsInline
                                />
                            ) : (
                                <img
                                    src={imgSrc}
                                    alt={caption || `Photo ${i + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            )}
                            {caption && (
                                <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-2">
                                    <p className="text-sm font-inter text-white">{caption}</p>
                                </div>
                            )}
                            <div className={`absolute top-2 right-2 bg-${colorClass} text-black px-2 py-1 text-xs font-bold border border-black`}>
                                {i + 1}/{images.length}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={closeLightbox}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
                        >
                            ×
                        </button>

                        {/* Navigation Arrows */}
                        {images.length > 1 && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 text-white text-6xl hover:text-gray-300 z-10"
                                >
                                    ‹
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 text-white text-6xl hover:text-gray-300 z-10"
                                >
                                    ›
                                </button>
                            </>
                        )}

                        {/* Image/Video Container */}
                        <motion.div
                            className="relative max-w-7xl max-h-[90vh] flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                        >
                            {(() => {
                                const mediaSrc = typeof selectedImage === 'string' ? selectedImage : selectedImage.src;
                                const isVideo = mediaSrc?.endsWith('.mp4') || mediaSrc?.endsWith('.webm');

                                return isVideo ? (
                                    <video
                                        src={mediaSrc}
                                        className="max-w-full max-h-[80vh] object-contain"
                                        controls
                                        autoPlay
                                        loop
                                    />
                                ) : (
                                    <img
                                        src={mediaSrc}
                                        alt={typeof selectedImage === 'object' ? selectedImage.caption : ''}
                                        className="max-w-full max-h-[80vh] object-contain"
                                    />
                                );
                            })()}
                            {typeof selectedImage === 'object' && selectedImage.caption && (
                                <div className="mt-4 text-white text-center">
                                    <p className="text-lg font-inter">{selectedImage.caption}</p>
                                </div>
                            )}
                            <div className="mt-2 text-gray-400 text-sm">
                                {selectedIndex + 1} / {images.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Gallery;
