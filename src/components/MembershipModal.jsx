import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiX, 
  HiOutlineCheckCircle, 
  HiOutlineUpload, 
  HiOutlineArrowRight, 
  HiOutlineArrowLeft,
  HiOutlineClipboardCopy,
  HiOutlineClock,
  HiOutlinePhotograph,
  HiOutlineShieldCheck
} from 'react-icons/hi';
import { logo } from '../utils/images';

const MembershipModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1); // 1: Details, 2: Payment & Screenshot, 3: Submission Confirmation
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    fatherName: '',
    email: '',
    address: '',
    transactionId: ''
  });

  const [photoFile, setPhotoFile] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [screenshotFile, setScreenshotFile] = useState(null);
  const [screenshotPreview, setScreenshotPreview] = useState(null);
  const [memberDetails, setMemberDetails] = useState(null);

  // Reset modal on close
  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setFormData({
        name: '',
        phone: '',
        fatherName: '',
        email: '',
        address: '',
        transactionId: ''
      });
      setPhotoFile(null);
      setPhotoPreview(null);
      setScreenshotFile(null);
      setScreenshotPreview(null);
      setMemberDetails(null);
      setErrorMessage('');
      setCopied(false);
      setIsLoading(false);
    }
  }, [isOpen]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setErrorMessage('कृपया केवल इमेज फ़ाइल (JPG, PNG, WEBP) चुनें।');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage('फोटो का साइज़ 5MB से कम होना चाहिए।');
        return;
      }
      setPhotoFile(file);
      setErrorMessage('');
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        setErrorMessage('कृपया केवल इमेज फ़ाइल (JPG, PNG, WEBP) चुनें।');
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setErrorMessage('स्क्रीनशॉट फ़ाइल का साइज़ 10MB से कम होना चाहिए।');
        return;
      }
      setScreenshotFile(file);
      setErrorMessage('');
      const reader = new FileReader();
      reader.onloadend = () => {
        setScreenshotPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFile = () => {
    setScreenshotFile(null);
    setScreenshotPreview(null);
  };

  // Step 1 Validation
  const handleProceedToPayment = (e) => {
    e.preventDefault();
    if (!photoFile) {
      setErrorMessage('कृपया अपनी पासपोर्ट साइज प्रोफाइल फोटो अवश्य अपलोड करें।');
      return;
    }
    if (!formData.name.trim()) {
      setErrorMessage('कृपया अपना पूरा नाम दर्ज करें।');
      return;
    }
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('कृपया 10 अंकों का मान्य मोबाइल नंबर दर्ज करें।');
      return;
    }
    if (!formData.fatherName.trim()) {
      setErrorMessage('कृपया पिता का नाम दर्ज करें।');
      return;
    }
    if (!formData.address.trim()) {
      setErrorMessage('कृपया अपना पता या जिला दर्ज करें।');
      return;
    }

    setErrorMessage('');
    setStep(2);
  };

  // Step 2 Submission with Screenshot & Photo
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!screenshotFile) {
      setErrorMessage('कृपया सफल ₹20 भुगतान का स्क्रीनशॉट अवश्य अपलोड करें। यह अनिवार्य है।');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      const dataPayload = new FormData();
      dataPayload.append('name', formData.name.trim());
      dataPayload.append('phone', formData.phone.trim());
      dataPayload.append('fatherName', formData.fatherName.trim());
      dataPayload.append('email', formData.email.trim());
      dataPayload.append('address', formData.address.trim());
      dataPayload.append('transactionId', formData.transactionId.trim());
      if (photoFile) {
        dataPayload.append('photo', photoFile);
      }
      dataPayload.append('paymentScreenshot', screenshotFile);

      const response = await fetch(`${import.meta.env.VITE_API_URL}/membership`, {
        method: 'POST',
        body: dataPayload,
      });

      const data = await response.json();

      if (data.success && data.data) {
        setMemberDetails(data.data);
        setStep(3);
      } else {
        setErrorMessage(data.error || 'आवेदन जमा करने में समस्या आई। कृपया पुनः प्रयास करें।');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('सर्वर से संपर्क करने में असमर्थ। कृपया बाद में प्रयास करें।');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyId = () => {
    if (memberDetails?.memberId) {
      navigator.clipboard.writeText(memberDetails.memberId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm overflow-y-auto py-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white w-full max-w-4xl rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative my-auto border border-slate-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-400 hover:text-navy-flag transition-colors z-20 bg-white/70 backdrop-blur-md rounded-full p-1.5 shadow-sm"
            >
              <HiX size={26} />
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Left Side Banner */}
              <div className="hidden md:flex md:w-1/3 bg-gradient-to-br from-navy-flag via-slate-900 to-navy-flag p-8 text-white flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-36 h-36 bg-saffron/15 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <img src={logo} alt="Logo" className="w-16 h-16 rounded-full mb-6 border-2 border-white/30 shadow-lg" />
                  <h3 className="text-2xl font-black mb-3 font-hindi leading-snug">युवा न्याय दल</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    न्याय, समानता और युवाओं के सर्वांगीण विकास के लिए समर्पित। पार्टी की सदस्यता ग्रहण कर समाज में सकारात्मक परिवर्तन लाएं।
                  </p>
                </div>

                {/* Stepper Progress */}
                <div className="mt-8 space-y-4 relative z-10">
                  <div className={`flex items-center gap-3 text-xs font-bold ${step >= 1 ? 'text-saffron' : 'text-slate-400'}`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${step >= 1 ? 'bg-saffron text-white' : 'bg-slate-700 text-slate-400'}`}>
                      1
                    </div>
                    <span>सदस्यता विवरण भरें</span>
                  </div>

                  <div className={`flex items-center gap-3 text-xs font-bold ${step >= 2 ? 'text-saffron' : 'text-slate-400'}`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${step >= 2 ? 'bg-saffron text-white' : 'bg-slate-700 text-slate-400'}`}>
                      2
                    </div>
                    <span>QR शुल्क भुगतान व रसीद</span>
                  </div>

                  <div className={`flex items-center gap-3 text-xs font-bold ${step === 3 ? 'text-green-flag' : 'text-slate-400'}`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${step === 3 ? 'bg-green-flag text-white' : 'bg-slate-700 text-slate-400'}`}>
                      3
                    </div>
                    <span>आवेदन पुष्टि (Pending)</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 text-[11px] text-slate-400">
                  ✓ 100% सुरक्षित और पारदर्शी पंजीकरण
                </div>
              </div>

              {/* Right Side - Dynamic Content */}
              <div className="md:w-2/3 p-6 sm:p-8 lg:p-10 flex flex-col justify-center min-h-[440px]">
                {/* Error Banner */}
                {errorMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-5 p-3.5 bg-red-50 border-l-4 border-red-500 text-red-700 text-xs sm:text-sm font-medium rounded-r-xl flex items-center gap-3"
                  >
                    <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center text-red-500 shrink-0 font-bold">!</div>
                    <p>{errorMessage}</p>
                  </motion.div>
                )}

                {/* ================= STEP 1: PERSONAL DETAILS ================= */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                  >
                    <div className="mb-5 sm:mb-6">
                      <div className="flex items-center gap-2 text-xs font-bold text-saffron uppercase tracking-wider mb-1">
                        चरण 1 / 2
                      </div>
                      <h4 className="text-xl sm:text-2xl font-extrabold text-navy-flag">सदस्यता पंजीकरण फॉर्म</h4>
                      <p className="text-xs sm:text-sm text-slate-500">कृपया अपना सही व्यक्तिगत विवरण और पासपोर्ट साइज फोटो अपलोड करें</p>
                    </div>

                    <form className="space-y-3 sm:space-y-4" onSubmit={handleProceedToPayment}>
                      {/* Profile Photo Upload Box */}
                      <div className="flex items-center gap-4 p-3.5 bg-slate-50 border-2 border-dashed border-slate-300 hover:border-saffron rounded-2xl transition-all">
                        <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden bg-white border-2 border-saffron shadow-md shrink-0 flex items-center justify-center">
                          {photoPreview ? (
                            <img src={photoPreview} alt="Profile Preview" className="w-full h-full object-cover" />
                          ) : (
                            <HiOutlinePhotograph size={28} className="text-slate-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <label className="text-xs font-bold text-navy-flag block mb-1">
                            पासपोर्ट साइज फोटो (Profile Photo) <span className="text-red-500">* अनिवार्य</span>
                          </label>
                          <div className="flex items-center gap-2 flex-wrap">
                            <label className="cursor-pointer bg-navy-flag hover:bg-slate-800 text-white text-xs font-bold px-3.5 py-1.5 rounded-lg shadow-sm transition-all inline-block">
                              <span>{photoFile ? 'फोटो बदलें' : 'अपनी फोटो अपलोड करें'}</span>
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handlePhotoChange}
                              />
                            </label>
                            {photoFile && (
                              <span className="text-[11px] text-green-600 font-bold truncate max-w-[160px]">
                                ✓ {photoFile.name}
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] text-slate-400 mt-1">यह फोटो आपके डिजिटल पहचान पत्र (ID Card) पर लगाई जाएगी (Max 5MB)</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-1 sm:space-y-1.5">
                          <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider px-1">
                            पूरा नाम <span className="text-red-500">*</span>
                          </label>
                          <input
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            type="text"
                            placeholder="उदा: राहुल कुमार"
                            className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-saffron focus:bg-white transition-all text-sm font-medium"
                          />
                        </div>

                        <div className="space-y-1 sm:space-y-1.5">
                          <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider px-1">
                            मोबाइल नंबर <span className="text-red-500">*</span>
                          </label>
                          <input
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            type="tel"
                            maxLength={10}
                            placeholder="10 अंकों का मोबाइल नंबर"
                            className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-saffron focus:bg-white transition-all text-sm font-medium"
                          />
                        </div>
                      </div>

                      <div className="space-y-1 sm:space-y-1.5">
                        <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider px-1">
                          पिता का नाम <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          name="fatherName"
                          value={formData.fatherName}
                          onChange={handleInputChange}
                          type="text"
                          placeholder="पिता का नाम दर्ज करें"
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-saffron focus:bg-white transition-all text-sm font-medium"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-1.5">
                        <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider px-1">
                          ईमेल पता (वैकल्पिक)
                        </label>
                        <input
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          type="email"
                          placeholder="email@example.com"
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-saffron focus:bg-white transition-all text-sm font-medium"
                        />
                      </div>

                      <div className="space-y-1 sm:space-y-1.5">
                        <label className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider px-1">
                          स्थाई पता / जिला <span className="text-red-500">*</span>
                        </label>
                        <input
                          required
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          type="text"
                          placeholder="ग्राम/मोहल्ला, पोस्ट, जिला, पिनकोड"
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-saffron focus:bg-white transition-all text-sm font-medium"
                        />
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-navy-flag to-saffron text-white py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-saffron/20 transition-all mt-3 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>आगे बढ़ें (₹20 भुगतान हेतु)</span>
                        <HiOutlineArrowRight size={18} />
                      </motion.button>
                    </form>
                  </motion.div>
                )}

                {/* ================= STEP 2: QR PAYMENT & SCREENSHOT ================= */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div>
                        <div className="text-xs font-bold text-saffron uppercase tracking-wider">
                          चरण 2 / 2
                        </div>
                        <h4 className="text-lg sm:text-xl font-extrabold text-navy-flag">
                          सदस्यता शुल्क भुगतान (₹20)
                        </h4>
                      </div>
                      <button
                        type="button"
                        onClick={() => { setStep(1); setErrorMessage(''); }}
                        className="text-xs font-bold text-navy-flag hover:text-saffron flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                      >
                        <HiOutlineArrowLeft size={14} />
                        <span>विवरण बदलें</span>
                      </button>
                    </div>

                    {/* ₹20 Fee Highlight Banner */}
                    <div className="flex items-center justify-between p-3.5 bg-gradient-to-r from-amber-500 via-saffron to-amber-600 text-white rounded-2xl shadow-md">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider block text-white/90">
                          निर्धारित सदस्यता शुल्क
                        </span>
                        <h5 className="text-2xl font-black font-hindi flex items-baseline gap-1.5">
                          ₹20 <span className="text-xs font-medium text-white/90">(मात्र बीस रुपये)</span>
                        </h5>
                      </div>
                      <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black border border-white/30 tracking-wider">
                        ₹20 ONLY
                      </div>
                    </div>

                    {/* QR Code Section - Centered & Significantly Enlarged */}
                    <div className="bg-slate-50/80 border border-slate-200 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center shadow-inner space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="bg-navy-flag text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                          आधिकारिक UPI QR कोड
                        </span>
                        <span className="bg-green-100 text-green-800 text-[11px] font-bold px-3 py-1 rounded-full">
                          राशि: ₹20 मात्र
                        </span>
                      </div>

                      {/* Large QR Card */}
                      <div className="w-56 h-56 sm:w-64 sm:h-64 bg-white p-2.5 rounded-2xl shadow-xl border-2 border-saffron flex items-center justify-center relative my-1">
                        <img
                          src="/QR.png"
                          alt="Yuva Nyay Dal Payment QR"
                          className="w-full h-full object-contain rounded-xl"
                        />
                        <div className="absolute -bottom-3 bg-gradient-to-r from-navy-flag to-saffron text-white text-xs font-black px-4 py-1 rounded-full shadow-lg border border-white/40 tracking-wider">
                          ₹20 स्कैन एवं भुगतान करें
                        </div>
                      </div>

                      <div className="pt-2 max-w-sm space-y-1">
                        <p className="text-xs sm:text-sm font-bold text-navy-flag">
                          PhonePe, Google Pay, Paytm या BHIM UPI से स्कैन करें
                        </p>
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          कैमरे या UPI ऐप से ऊपर दिए गए बड़े QR कोड को आसानी से स्कैन करें और ₹20 का भुगतान करके स्क्रीनशॉट नीचे अपलोड करें।
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-3 pt-1">
                      {/* Screenshot Upload - Mandatory */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-800 flex items-center justify-between">
                          <span>₹20 भुगतान का स्क्रीनशॉट <span className="text-red-500">* अनिवार्य</span></span>
                          <span className="text-[10px] text-slate-400 font-normal">अधिकतम 10MB (JPG/PNG)</span>
                        </label>

                        {!screenshotPreview ? (
                          <label className="border-2 border-dashed border-slate-300 hover:border-saffron rounded-2xl p-4 flex flex-col items-center justify-center cursor-pointer bg-slate-50/60 hover:bg-amber-50/30 transition-all group">
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handleFileChange}
                            />
                            <div className="w-10 h-10 rounded-full bg-saffron/10 text-saffron flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                              <HiOutlineUpload size={22} />
                            </div>
                            <span className="text-xs font-bold text-navy-flag">
                              स्क्रीनशॉट अपलोड करने के लिए यहाँ क्लिक करें
                            </span>
                            <span className="text-[11px] text-slate-400 mt-0.5">
                              सफल भुगतान की रसीद की फोटो या स्क्रीनशॉट
                            </span>
                          </label>
                        ) : (
                          <div className="p-3 bg-slate-50 border-2 border-green-300 rounded-xl flex items-center justify-between">
                            <div className="flex items-center gap-3 overflow-hidden">
                              <img
                                src={screenshotPreview}
                                alt="Preview"
                                className="w-12 h-12 object-cover rounded-lg border border-slate-200 shrink-0"
                              />
                              <div className="overflow-hidden">
                                <p className="text-xs font-bold text-navy-flag truncate max-w-[180px] sm:max-w-xs">
                                  {screenshotFile?.name}
                                </p>
                                <p className="text-[10px] text-green-600 font-medium">
                                  ✓ स्क्रीनशॉट सफलतापूर्वक चुना गया
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={handleRemoveFile}
                              className="text-xs text-red-500 hover:text-red-700 font-bold px-2 py-1 bg-red-50 hover:bg-red-100 rounded-lg transition-colors shrink-0"
                            >
                              बदलें
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Optional Transaction ID */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                          UPI Ref No. / ट्रांजेक्शन ID (वैकल्पिक)
                        </label>
                        <input
                          name="transactionId"
                          value={formData.transactionId}
                          onChange={handleInputChange}
                          type="text"
                          placeholder="उदा: 412345678901 (यदि उपलब्ध हो)"
                          className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-3.5 py-2 outline-none focus:border-saffron focus:bg-white transition-all text-xs font-medium"
                        />
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => { setStep(1); setErrorMessage(''); }}
                          className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-xl font-bold text-sm transition-all"
                        >
                          ← पिछला
                        </button>
                        <motion.button
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                          type="submit"
                          disabled={isLoading}
                          className={`w-2/3 bg-gradient-to-r from-navy-flag to-saffron text-white py-3 rounded-xl font-bold text-sm shadow-lg hover:shadow-saffron/20 transition-all flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                          {isLoading ? (
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              <span>जमा हो रहा है...</span>
                            </div>
                          ) : (
                            <>
                              <HiOutlineShieldCheck size={18} />
                              <span>आवेदन जमा करें</span>
                            </>
                          )}
                        </motion.button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* ================= STEP 3: SUBMISSION CONFIRMED (PENDING STATUS) ================= */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-4 space-y-4"
                  >
                    <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto shadow-inner relative">
                      <HiOutlineClock size={36} />
                      <motion.div
                        className="absolute inset-0 rounded-full border-4 border-amber-400/40"
                        animate={{ scale: [1, 1.25, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2.2, repeat: Infinity }}
                      />
                    </div>

                    <div>
                      <div className="inline-block bg-amber-100 text-amber-900 font-extrabold text-xs px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
                        आवेदन स्थिति: विचाराधीन (Pending Approval)
                      </div>
                      <h4 className="text-2xl font-black text-navy-flag font-hindi">
                        आवेदन सफलतापूर्वक प्राप्त हुआ!
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto leading-relaxed">
                        नमस्ते <strong>{memberDetails?.name}</strong> जी, आपका सदस्यता आवेदन और भुगतान रसीद सफलतापूर्वक दर्ज कर ली गई है।
                      </p>
                    </div>

                    {/* Member ID Card Highlight */}
                    <div className="bg-gradient-to-br from-navy-flag/5 to-saffron/10 p-4 rounded-2xl border-2 border-dashed border-navy-flag/20 max-w-sm mx-auto">
                      <p className="text-[11px] text-slate-500 font-bold uppercase tracking-wider mb-1">
                        आपकी सदस्यता संख्या (Member ID)
                      </p>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-2xl font-black text-navy-flag font-mono tracking-wider">
                          {memberDetails?.memberId || 'पेंडिंग'}
                        </span>
                        <button
                          onClick={handleCopyId}
                          title="आईडी कॉपी करें"
                          className="p-1.5 rounded-lg bg-white shadow-sm border border-slate-200 text-navy-flag hover:text-saffron transition-colors"
                        >
                          <HiOutlineClipboardCopy size={18} />
                        </button>
                      </div>
                      {copied && (
                        <p className="text-[10px] text-green-600 font-bold mt-1">
                          ✓ सदस्यता आईडी कॉपी हो गई!
                        </p>
                      )}
                    </div>

                    {/* Verification Notice in Hindi */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-md mx-auto text-left text-xs text-slate-700 space-y-1.5 leading-relaxed">
                      <p className="font-bold text-navy-flag flex items-center gap-1.5">
                        <HiOutlineShieldCheck size={16} className="text-saffron" />
                        महत्वपूर्ण सूचना:
                      </p>
                      <p>
                        1. व्यवस्थापक (Admin) द्वारा आपके भुगतान स्क्रीनशॉट एवं विवरण का सत्यापन किया जाएगा।
                      </p>
                      <p>
                        2. <strong>व्यवस्थापक द्वारा अनुमोदन (Approval) के बाद ही आपका आधिकारिक पहचान पत्र (ID Card) सक्रिय होगा।</strong>
                      </p>
                      <p>
                        3. अनुमोदन के पश्चात आप वेबसाइट के मुख्य मेनू में दिए गए <strong>'पहचान पत्र (ID Card)'</strong> विकल्प से अपनी सदस्य आईडी या मोबाइल नंबर डालकर ID कार्ड डाउनलोड कर सकते हैं।
                      </p>
                    </div>

                    <button
                      onClick={() => { onClose(); setStep(1); }}
                      className="w-full max-w-xs mx-auto bg-navy-flag hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all"
                    >
                      समाप्त करें (Close)
                    </button>
                  </motion.div>
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
