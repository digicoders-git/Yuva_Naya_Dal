import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiOutlineShieldCheck, HiOutlineDownload } from 'react-icons/hi';
import { logo } from '../utils/images';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const MembershipModal = ({ isOpen, onClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        fatherName: '',
        email: '',
        address: ''
    });
    const [memberDetails, setMemberDetails] = useState(null);
    const [logoBase64, setLogoBase64] = useState('');
    const cardRef = useRef(null);

    // Convert logo to Base64 to bypass CORS issues on live servers
    useEffect(() => {
        const convertToBase64 = async () => {
            try {
                const img = new Image();
                img.crossOrigin = 'anonymous';
                img.src = logo;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    setLogoBase64(canvas.toDataURL('image/png'));
                };
            } catch (err) {
                console.error("Logo conversion failed", err);
                setLogoBase64(logo); // Fallback
            }
        };
        convertToBase64();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/membership`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                console.log('Submission successful, data:', data.data);
                setSubmitStatus('success');
                setMemberDetails(data.data);
                setFormData({
                    name: '',
                    phone: '',
                    fatherName: '',
                    email: '',
                    address: ''
                });
            } else {
                setSubmitStatus('error');
                setErrorMessage(data.error || 'कुछ गलत हुआ। कृपया पुनः प्रयास करें।');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
            setErrorMessage('सर्वर से संपर्क करने में असमर्थ। कृपया बाद में प्रयास करें।');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!isOpen) {
            setSubmitStatus('idle');
            setErrorMessage('');
            setMemberDetails(null);
        }
    }, [isOpen]);

    const handleDownload = async () => {
        if (cardRef.current) {
            try {
                // Determine dimensions for the PDF
                const width = cardRef.current.offsetWidth;
                const height = cardRef.current.offsetHeight;

                const canvas = await html2canvas(cardRef.current, { 
                    scale: 3, 
                    useCORS: true, 
                    backgroundColor: '#ffffff',
                    onclone: (clonedDoc) => {
                        // Safer way to handle oklch error without removing ALL styles
                        // We target the root variables or any style that might use oklch
                        const styles = clonedDoc.getElementsByTagName('style');
                        for (let style of styles) {
                            // Replace oklch/oklaba patterns with a safe fallback to prevent parser crash
                            style.innerHTML = style.innerHTML.replace(/oklch\([^)]+\)/g, '#000000');
                        }
                    }
                });
                
                const imgData = canvas.toDataURL('image/png');
                
                // Create PDF with EXACT dimensions of the card
                // Using 'px' units and passing the array [width, height] 
                const pdf = new jsPDF({
                    orientation: 'portrait',
                    unit: 'px',
                    format: [width, height]
                });

                pdf.addImage(imgData, 'PNG', 0, 0, width, height);
                pdf.save(`YND_ID_${memberDetails?.memberId || 'Card'}.pdf`);
            } catch (err) {
                console.error("Failed to generate ID card PDF", err);
                alert("कुछ तकनीकी समस्या आई है। कृपया दोबारा प्रयास करें।");
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto py-4 sm:py-10"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="bg-white w-full max-w-4xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative my-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 text-slate-400 hover:text-navy-flag transition-colors z-20 bg-white/50 backdrop-blur-md rounded-full p-1"
                        >
                            <HiX size={32} />
                        </button>

                        <div className="flex flex-col md:flex-row">
                            {/* Left Side - Info */}
                            <div className="hidden md:flex md:w-1/3 bg-gradient-to-br from-navy-flag to-slate-800 p-8 text-white flex-col justify-between relative overflow-hidden">
                                 <div className="absolute top-0 right-0 w-32 h-32 bg-saffron/10 rounded-full blur-3xl" />
                                 <div className="relative z-10">
                                    <img src={logo} alt="Logo" className="w-16 h-16 rounded-full mb-6 border-2 border-white/20" />
                                    <h3 className="text-2xl font-bold mb-4 font-hindi">जुड़ें हमारे साथ</h3>
                                    <p className="text-sm text-slate-300">युवा न्याय दल का हिस्सा बनकर समाज में सकारात्मक बदलाव लाएं।</p>
                                 </div>
                                 <div className="mt-8 space-y-4 relative z-10">
                                    <div className="flex items-center gap-3 text-sm">
                                        <div className="w-6 h-6 bg-saffron/20 rounded-full flex items-center justify-center text-saffron">✓</div>
                                        <span>24/7 सहायता</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <div className="w-6 h-6 bg-green-flag/20 rounded-full flex items-center justify-center text-green-flag">✓</div>
                                        <span>तुरंत जवाब</span>
                                    </div>
                                 </div>
                            </div>

                            {/* Right Side - Form or Status */}
                            <div className="md:w-2/3 p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-h-[400px]">
                                {submitStatus === 'success' && memberDetails ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full flex flex-col items-center justify-center w-full"
                                    >
                                        <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full">
                                            {/* Confirmation text */}
                                            <div className="flex-1 text-center space-y-4 w-full md:max-w-sm">
                                                <div className="w-16 h-16 bg-green-flag/10 rounded-full flex items-center justify-center text-green-flag mx-auto relative">
                                                    <HiOutlineShieldCheck size={32} />
                                                    <motion.div
                                                        className="absolute inset-0 rounded-full border-4 border-green-flag/30"
                                                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                                                        transition={{ duration: 2, repeat: Infinity }}
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="text-2xl font-bold text-navy-flag">बधाई हो!</h4>
                                                    <p className="text-slate-600 font-medium text-sm mt-1">आपका सदस्यता आवेदन सफलतापूर्वक जमा हो गया है।</p>
                                                </div>
                                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 inline-block w-full text-center shadow-inner">
                                                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">आपका सदस्यता नंबर (ID)</p>
                                                    <p className="text-2xl font-black text-navy-flag tracking-widest">{memberDetails?.memberId || 'पेंडिंग'}</p>
                                                </div>
                                                <div className="pt-2 space-y-3">
                                                    <button
                                                        onClick={handleDownload}
                                                        className="w-full bg-gradient-to-r from-navy-flag to-slate-800 text-white px-6 py-3.5 rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                                                    >
                                                        <HiOutlineDownload size={20} className="group-hover:-translate-y-1 transition-transform" />
                                                        ID कार्ड डाउनलोड करें
                                                    </button>
                                                    <button
                                                        onClick={() => { onClose(); setSubmitStatus('idle'); }}
                                                        className="w-full bg-slate-100 text-slate-700 px-6 py-3.5 rounded-xl font-bold hover:bg-slate-200 transition-all border border-slate-200"
                                                    >
                                                        बंद करें
                                                    </button>
                                                </div>
                                            </div>

                                            {/* ID Card Design */}
                                            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                                <div 
                                                    ref={cardRef} 
                                                    style={{ 
                                                        width: '320px', 
                                                        backgroundColor: '#ffffff', 
                                                        borderRadius: '16px', 
                                                        border: '1px solid #e2e8f0', 
                                                        boxShadow: '0 10px 40px rgba(0,0,0,0.15)', 
                                                        overflow: 'hidden', 
                                                        position: 'relative',
                                                        flexShrink: 0
                                                    }}
                                                >
                                                    {/* ID Card Header - Tricolor Strip */}
                                                    <div style={{ 
                                                        height: '5px', 
                                                        width: '100%', 
                                                        background: 'linear-gradient(to right, #ff9933, #ffffff, #138808)' 
                                                    }}></div>
                                                    
                                                    {/* ID Card Banner */}
                                                    <div style={{ 
                                                        background: 'linear-gradient(to bottom, #000080, #0f172a)', 
                                                        padding: '20px', 
                                                        textAlign: 'center', 
                                                        color: '#ffffff', 
                                                        position: 'relative', 
                                                        overflow: 'hidden' 
                                                    }}>
                                                        <div style={{ 
                                                            position: 'absolute', top: 0, right: 0, 
                                                            width: '100px', height: '100px', 
                                                            backgroundColor: 'rgba(255, 153, 51, 0.1)', 
                                                            borderRadius: '50%', filter: 'blur(30px)',
                                                            pointerEvents: 'none'
                                                        }} />
                                                        
                                                        <div style={{ 
                                                            width: '64px', height: '64px', 
                                                            backgroundColor: '#ffffff', 
                                                            borderRadius: '50%', margin: '0 auto 12px', 
                                                            padding: '4px', 
                                                            boxShadow: '0 0 15px rgba(255,255,255,0.3)', 
                                                            border: '2px solid #ff9933', 
                                                            zIndex: 10, position: 'relative' 
                                                        }}>
                                                            <img src={logoBase64 || logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                                                        </div>
                                                        <h2 style={{ fontSize: '20px', fontWeight: '900', letterSpacing: '0.05em', margin: 0, fontFamily: 'Mukta, sans-serif' }}>युवा न्याय दल</h2>
                                                        <p style={{ fontSize: '10px', letterSpacing: '0.1em', fontWeight: '600', textTransform: 'uppercase', opacity: 0.9, marginTop: '4px' }}>पहचान पत्र (Identity Card)</p>
                                                    </div>

                                                    {/* ID Card Body */}
                                                    <div style={{ padding: '20px 24px', backgroundColor: '#ffffff', position: 'relative' }}>
                                                        {/* Watermark Logo */}
                                                        <div style={{ 
                                                            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                                                            display: 'flex', alignItems: 'center', justifyContent: 'center', 
                                                            overflow: 'hidden', pointerEvents: 'none',
                                                            opacity: 0.05
                                                        }}>
                                                            <img src={logoBase64 || logo} alt="Watermark" style={{ width: '180px', height: '180px', filter: 'grayscale(100%)' }} />
                                                        </div>

                                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative', zIndex: 10 }}>
                                                            <div style={{ backgroundColor: '#f8fafc', border: '1px solid #f1f5f9', padding: '8px', borderRadius: '8px', textAlign: 'center' }}>
                                                                <p style={{ fontSize: '9px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px', padding: 0, margin: 0 }}>Member ID / सदस्यता संख्या</p>
                                                                <p style={{ fontSize: '16px', fontWeight: '900', color: '#000080', letterSpacing: '0.05em', margin: 0 }}>{memberDetails?.memberId || '...'}</p>
                                                            </div>

                                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '8px', rowGap: '16px' }}>
                                                                <div style={{ paddingBottom: '4px' }}>
                                                                    <p style={{ fontSize: '9px', color: '#ff9933', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', padding: 0, margin: 0, lineHeight: '1.2' }}>Name / नाम</p>
                                                                    <p style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', textTransform: 'capitalize', margin: 0, lineHeight: '1.4' }}>{memberDetails.name}</p>
                                                                </div>
                                                                <div style={{ paddingBottom: '4px' }}>
                                                                    <p style={{ fontSize: '9px', color: '#ff9933', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', padding: 0, margin: 0, lineHeight: '1.2' }}>Phone / फोन</p>
                                                                    <p style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', margin: 0, lineHeight: '1.4' }}>{memberDetails.phone}</p>
                                                                </div>
                                                                <div style={{ gridColumn: 'span 2', paddingBottom: '4px' }}>
                                                                    <p style={{ fontSize: '9px', color: '#ff9933', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', padding: 0, margin: 0, lineHeight: '1.2' }}>Father / पिता का नाम</p>
                                                                    <p style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', textTransform: 'capitalize', margin: 0, lineHeight: '1.4' }}>{memberDetails.fatherName}</p>
                                                                </div>
                                                                <div style={{ gridColumn: 'span 2', paddingBottom: '4px' }}>
                                                                    <p style={{ fontSize: '9px', color: '#ff9933', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', padding: 0, margin: 0, lineHeight: '1.2' }}>Address / पता</p>
                                                                    <p style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', textTransform: 'capitalize', margin: 0, lineHeight: '1.4', wordBreak: 'break-word' }}>{memberDetails.address}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* ID Card Footer */}
                                                    <div style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', padding: '12px 16px', textAlign: 'center' }}>
                                                        <p style={{ fontSize: '9px', color: '#475569', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', padding: 0, margin: 0 }}>Valid Across India • Non-Transferable</p>
                                                        <p style={{ fontSize: '9px', color: '#138808', fontWeight: '700', letterSpacing: '0.1em', margin: 0, padding: 0 }}>WWW.YUVANYAYDAL.COM</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <>
                                        <div className="mb-4 sm:mb-6">
                                            <h4 className="text-xl sm:text-2xl font-bold text-navy-flag mb-1">सदस्यता फॉर्म</h4>
                                            <p className="text-xs sm:text-sm text-slate-500 font-medium">अपनी जानकारी साझा करें</p>
                                        </div>

                                        {submitStatus === 'error' && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-medium rounded-r-xl flex items-center gap-3"
                                            >
                                                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-500 shrink-0">!</div>
                                                <p>{errorMessage}</p>
                                            </motion.div>
                                        )}

                                        <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                                <div className="space-y-1 sm:space-y-1.5">
                                                    <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider px-1">पूरा नाम</label>
                                                    <input
                                                        required
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        type="text"
                                                        placeholder="आपका नाम"
                                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 outline-none focus:border-saffron focus:bg-white transition-all text-sm"
                                                    />
                                                </div>
                                                <div className="space-y-1 sm:space-y-1.5 flex flex-col items-start w-full">
                                                    <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider px-1">मोबाइल नंबर</label>
                                                    <input
                                                        required
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        type="tel"
                                                        placeholder="91XXXXXXXX"
                                                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 outline-none focus:border-saffron focus:bg-white transition-all text-sm"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-1 sm:space-y-1.5 flex flex-col items-start w-full">
                                                <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider px-1">पिता का नाम</label>
                                                <input
                                                    required
                                                    name="fatherName"
                                                    value={formData.fatherName}
                                                    onChange={handleInputChange}
                                                    type="text"
                                                    placeholder="पिता का नाम लिखें"
                                                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 outline-none focus:border-saffron focus:bg-white transition-all text-sm"
                                                />
                                            </div>

                                            <div className="space-y-1 sm:space-y-1.5">
                                                <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider px-1">ईमेल (वैकल्पिक)</label>
                                                <input
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    type="email"
                                                    placeholder="email@example.com"
                                                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 outline-none focus:border-saffron focus:bg-white transition-all text-sm"
                                                />
                                            </div>

                                            <div className="space-y-1 sm:space-y-1.5">
                                                <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider px-1">पता / जिला</label>
                                                <input
                                                    required
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                    type="text"
                                                    placeholder="अपना पता लिखें"
                                                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-3 sm:px-4 py-2 sm:py-2.5 outline-none focus:border-saffron focus:bg-white transition-all text-sm"
                                                />
                                            </div>

                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                type="submit"
                                                disabled={isLoading}
                                                className={`w-full bg-gradient-to-r from-navy-flag to-saffron text-white py-2.5 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-saffron/20 transition-all mt-2 sm:mt-4 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                                            >
                                                {isLoading ? (
                                                    <div className="flex items-center justify-center gap-2">
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                        <span>जमा हो रहा है...</span>
                                                    </div>
                                                ) : 'अभी आवेदन करें'}
                                            </motion.button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MembershipModal;
