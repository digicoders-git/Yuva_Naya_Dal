import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiX, 
  HiOutlineSearch, 
  HiOutlineDownload, 
  HiOutlineClock, 
  HiOutlineXCircle, 
  HiOutlineCheckCircle,
  HiOutlineIdentification
} from 'react-icons/hi';
import { logo } from '../utils/images';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const IdCardModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [memberData, setMemberData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [logoBase64, setLogoBase64] = useState('');
  const cardRef = useRef(null);

  // Convert logo to Base64 to bypass CORS issues on canvas generation
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
        setLogoBase64(logo);
      }
    };
    convertToBase64();
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('');
      setMemberData(null);
      setErrorMessage('');
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query) {
      setErrorMessage('कृपया सदस्यता आईडी या मोबाइल नंबर दर्ज करें।');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');
    setMemberData(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/membership/verify/${encodeURIComponent(query)}`);
      const resData = await response.json();

      if (resData.success && resData.data) {
        setMemberData(resData.data);
      } else {
        setErrorMessage(resData.error || 'इस सदस्यता संख्या या मोबाइल नंबर से कोई आवेदन नहीं मिला। कृपया सही विवरण दर्ज करें।');
      }
    } catch (error) {
      console.error('Error verifying membership:', error);
      setErrorMessage('सर्वर से संपर्क करने में असमर्थ। कृपया बाद में प्रयास करें।');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = async (type = 'pdf') => {
    if (cardRef.current && memberData) {
      try {
        const width = cardRef.current.offsetWidth;
        const height = cardRef.current.offsetHeight;

        const iframe = document.createElement('iframe');
        iframe.style.position = 'fixed';
        iframe.style.top = '-10000px';
        iframe.style.left = '-10000px';
        iframe.style.width = `${width}px`;
        iframe.style.height = `${height}px`;
        document.body.appendChild(iframe);

        const iframeDoc = iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(`
          <html>
            <head>
              <link rel="preconnect" href="https://fonts.googleapis.com">
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
              <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
              <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body { background: white; font-family: 'Mukta', sans-serif; }
              </style>
            </head>
            <body>
              ${cardRef.current.outerHTML}
            </body>
          </html>
        `);
        iframeDoc.close();

        await new Promise(resolve => {
          const checkImages = () => {
            const images = iframeDoc.getElementsByTagName('img');
            const allLoaded = Array.from(images).every(img => img.complete);
            if (allLoaded) resolve();
            else setTimeout(checkImages, 100);
          };
          iframe.onload = checkImages;
          setTimeout(resolve, 800);
        });

        const iframeBody = iframeDoc.body;
        const canvas = await html2canvas(iframeBody, {
          scale: 2.5,
          useCORS: true,
          backgroundColor: '#ffffff',
          logging: false
        });

        document.body.removeChild(iframe);

        const imgData = canvas.toDataURL('image/png');

        if (type === 'png') {
          const link = document.createElement('a');
          link.href = imgData;
          link.download = `YND_ID_${memberData.memberId || 'Card'}.png`;
          link.click();
        } else {
          const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'px',
            format: [width, height]
          });
          pdf.addImage(imgData, 'PNG', 0, 0, width, height);
          pdf.save(`YND_ID_${memberData.memberId || 'Card'}.pdf`);
        }
      } catch (err) {
        console.error('Failed to generate ID card', err);
        alert('ID कार्ड डाउनलोड करने में समस्या आई। कृपया पुनः प्रयास करें।');
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
          className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto py-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white w-full max-w-2xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative my-auto border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-navy-flag via-slate-900 to-navy-flag p-5 sm:p-6 text-white relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <HiOutlineIdentification size={24} className="text-saffron" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-hindi">पहचान पत्र डाउनलोड (ID Card)</h3>
                  <p className="text-xs text-slate-300">सदस्यता स्थिति जांचें एवं पहचान पत्र प्राप्त करें</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-slate-300 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-1.5"
              >
                <HiX size={22} />
              </button>
            </div>

            <div className="p-5 sm:p-8">
              {/* Search Box */}
              <form onSubmit={handleSearch} className="mb-6">
                <label className="block text-xs sm:text-sm font-bold text-slate-700 uppercase tracking-wider mb-2">
                  सदस्यता आईडी (Member ID) या पंजीकृत मोबाइल नंबर
                </label>
                <div className="flex gap-2 sm:gap-3">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="उदा: YND-2026-00015 या 9876543210"
                      className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-saffron focus:bg-white transition-all text-sm font-medium"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gradient-to-r from-navy-flag to-saffron text-white px-5 sm:px-7 py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 shrink-0 disabled:opacity-60"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <HiOutlineSearch size={18} />
                        <span className="hidden sm:inline">खोजें</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Error Notification */}
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm font-medium rounded-r-xl flex items-center gap-3"
                >
                  <HiOutlineXCircle size={22} className="shrink-0 text-red-500" />
                  <p>{errorMessage}</p>
                </motion.div>
              )}

              {/* Status Views */}
              {memberData && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* PENDING STATUS */}
                  {memberData.status === 'pending' && (
                    <div className="p-6 bg-amber-50/80 border-2 border-amber-200 rounded-2xl text-center space-y-3">
                      <div className="w-14 h-14 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                        <HiOutlineClock size={32} />
                      </div>
                      <div className="inline-block bg-amber-200/60 text-amber-900 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                        स्थिति: सत्यापन प्रक्रिया में (Pending)
                      </div>
                      <h4 className="text-xl font-bold text-navy-flag font-hindi">
                        नमस्ते {memberData.name} जी!
                      </h4>
                      <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                        आपका सदस्यता आवेदन (सदस्यता संख्या: <strong className="text-navy-flag font-mono">{memberData.memberId}</strong>) सफलतापूर्वक प्राप्त हुआ है और वर्तमान में <strong>व्यवस्थापक (Admin)</strong> द्वारा समीक्षाधीन है।
                      </p>
                      <div className="bg-white p-3.5 rounded-xl border border-amber-200 max-w-md mx-auto text-xs text-slate-600 text-left space-y-1">
                        <p>✓ आपके भुगतान स्क्रीनशॉट का सत्यापन किया जा रहा है।</p>
                        <p>✓ एडमिन द्वारा स्वीकृति के तुरंत बाद आपका पहचान पत्र यहाँ डाउनलोड हेतु उपलब्ध होगा।</p>
                      </div>
                    </div>
                  )}

                  {/* REJECTED STATUS */}
                  {memberData.status === 'rejected' && (
                    <div className="p-6 bg-red-50 border-2 border-red-200 rounded-2xl text-center space-y-3">
                      <div className="w-14 h-14 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                        <HiOutlineXCircle size={32} />
                      </div>
                      <div className="inline-block bg-red-200/60 text-red-900 font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                        स्थिति: आवेदन अस्वीकृत (Rejected)
                      </div>
                      <h4 className="text-xl font-bold text-navy-flag font-hindi">
                        आवेदन अस्वीकृत हुआ
                      </h4>
                      <p className="text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
                        नमस्ते {memberData.name} जी, आपकी सदस्यता आईडी (<strong className="font-mono">{memberData.memberId}</strong>) का आवेदन किसी त्रुटि या अमान्य भुगतान विवरण के कारण अस्वीकृत कर दिया गया है।
                      </p>
                      <p className="text-xs text-slate-500">
                        कृपया सहायता अथवा नए आवेदन हेतु संपर्क करें।
                      </p>
                    </div>
                  )}

                  {/* APPROVED STATUS - Render Full ID Card */}
                  {memberData.status === 'approved' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between p-3.5 bg-green-50 border border-green-200 rounded-xl">
                        <div className="flex items-center gap-2 text-green-700 font-bold text-sm">
                          <HiOutlineCheckCircle size={20} className="text-green-600" />
                          <span>सत्यापित सदस्य (Verified & Approved)</span>
                        </div>
                        <span className="font-mono text-xs font-bold text-navy-flag bg-white px-2.5 py-1 rounded-md border border-green-200">
                          {memberData.memberId}
                        </span>
                      </div>

                      {/* Official ID Card Component */}
                      <div className="flex justify-center items-center w-full py-2">
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
                          <div style={{ padding: '16px 20px', backgroundColor: '#ffffff', position: 'relative' }}>
                            {/* Watermark Logo */}
                            <div style={{
                              position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              overflow: 'hidden', pointerEvents: 'none',
                              opacity: 0.05
                            }}>
                              <img src={logoBase64 || logo} alt="Watermark" style={{ width: '180px', height: '180px', filter: 'grayscale(100%)' }} />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', position: 'relative', zIndex: 10 }}>
                              {/* Member Photo & ID Box */}
                              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '10px 12px', borderRadius: '12px' }}>
                                <div style={{ width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #ff9933', flexShrink: 0, backgroundColor: '#ffffff', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
                                  <img
                                    src={memberData.photo ? (memberData.photo.startsWith('http') ? memberData.photo : `${(import.meta.env.VITE_API_URL || 'http://localhost:5000/api').replace(/\/api\/?$/, '')}${memberData.photo.startsWith('/') ? '' : '/'}${memberData.photo}`) : `https://ui-avatars.com/api/?name=${encodeURIComponent(memberData.name)}&background=000080&color=fff`}
                                    alt={memberData.name}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                  />
                                </div>
                                <div style={{ flex: 1, minWidth: 0 }}>
                                  <p style={{ fontSize: '8px', color: '#64748b', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>Member ID / सदस्यता संख्या</p>
                                  <p style={{ fontSize: '15px', fontWeight: '900', color: '#000080', margin: '1px 0 0 0', letterSpacing: '0.02em' }}>{memberData.memberId}</p>
                                  <span style={{ display: 'inline-block', backgroundColor: '#dcfce7', color: '#15803d', fontSize: '9px', fontWeight: '800', padding: '2px 6px', borderRadius: '4px', marginTop: '2px' }}>
                                    ✓ अधिकृत सदस्य (Verified)
                                  </span>
                                </div>
                              </div>

                              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '8px', rowGap: '12px' }}>
                                <div style={{ paddingBottom: '4px' }}>
                                  <p style={{ fontSize: '9px', color: '#ff9933', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', padding: 0, margin: 0, lineHeight: '1.2' }}>Name / नाम</p>
                                  <p style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', textTransform: 'capitalize', margin: 0, lineHeight: '1.4' }}>{memberData.name}</p>
                                </div>
                                <div style={{ paddingBottom: '4px' }}>
                                  <p style={{ fontSize: '9px', color: '#ff9933', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', padding: 0, margin: 0, lineHeight: '1.2' }}>Phone / फोन</p>
                                  <p style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', margin: 0, lineHeight: '1.4' }}>{memberData.phone}</p>
                                </div>
                                <div style={{ gridColumn: 'span 2', paddingBottom: '4px' }}>
                                  <p style={{ fontSize: '9px', color: '#ff9933', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', padding: 0, margin: 0, lineHeight: '1.2' }}>Father / पिता का नाम</p>
                                  <p style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', textTransform: 'capitalize', margin: 0, lineHeight: '1.4' }}>{memberData.fatherName}</p>
                                </div>
                                <div style={{ gridColumn: 'span 2', paddingBottom: '4px' }}>
                                  <p style={{ fontSize: '9px', color: '#ff9933', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', padding: 0, margin: 0, lineHeight: '1.2' }}>Address / पता</p>
                                  <p style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', textTransform: 'capitalize', margin: 0, lineHeight: '1.4', wordBreak: 'break-word' }}>{memberData.address}</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* ID Card Footer */}
                          <div style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', padding: '12px 16px', textAlign: 'center' }}>
                            <p style={{ fontSize: '9px', color: '#475569', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', padding: 0, margin: 0 }}>Valid Across India • Non-Transferable</p>
                            <p style={{ fontSize: '9px', color: '#138808', fontWeight: '700', letterSpacing: '0.1em', margin: 0, padding: 0 }}>WWW.YUVANYAYDAL.ORG</p>
                          </div>
                        </div>
                      </div>

                      {/* Download Buttons */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <button
                          onClick={() => handleDownload('pdf')}
                          className="bg-navy-flag hover:bg-slate-800 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          <HiOutlineDownload size={18} />
                          ID कार्ड डाउनलोड करें (PDF)
                        </button>
                        <button
                          onClick={() => handleDownload('png')}
                          className="bg-saffron hover:bg-amber-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          <HiOutlineDownload size={18} />
                          इमेज डाउनलोड करें (PNG)
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IdCardModal;
