import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Check, Upload, FileText, X, MessageCircle, AlertTriangle, Loader2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import CTAButton from '@/components/CTAButton';
import SEO from '@/components/SEO';
import { useLanguage } from '@/context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const formRef = useRef<HTMLDivElement>(null);
  
  // ESTADOS DO FORMULÁRIO
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '', // Novo campo de morada
    subject: '',
    interest: [] as string[], 
    selectedJobs: [] as string[],
    message: '',
    cvFile: null as File | null,
    companyName: '',
    companyAddress: '',
    companyType: '',
    companyContact: '',
    projectImages: null as FileList | null,
  });

  // Handle URL Query Params for Pre-filling
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const subjectParam = params.get('subject');
    const interestParam = params.get('interest');
    const jobParam = params.get('job');

    if (subjectParam || interestParam || jobParam) {
      setFormData(prev => ({
        ...prev,
        subject: subjectParam || (jobParam ? 'recrutamento' : prev.subject),
        interest: interestParam && !prev.interest.includes(interestParam) 
          ? [...prev.interest, interestParam] 
          : prev.interest,
        selectedJobs: jobParam && !prev.selectedJobs.includes(jobParam)
          ? [...prev.selectedJobs, jobParam]
          : prev.selectedJobs
      }));

      setTimeout(() => {
        if (formRef.current) {
          formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [location]);

  // --- VALIDATION HANDLERS ---
  const handleInvalid = (e: React.InvalidEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    // Custom validation messages based on language
    if (language === 'pt') {
        if (e.target.validity.valueMissing) {
            e.target.setCustomValidity("Por favor, preencha este campo.");
        } else if (e.target.validity.typeMismatch && e.target.type === 'email') {
            e.target.setCustomValidity("Por favor, introduza um endereço de email válido.");
        }
    } else {
        // Enforce English messages if site is in EN (overriding browser default if needed)
        if (e.target.validity.valueMissing) {
            e.target.setCustomValidity("Please fill out this field.");
        } else if (e.target.validity.typeMismatch && e.target.type === 'email') {
            e.target.setCustomValidity("Please enter a valid email address.");
        } else {
            e.target.setCustomValidity("");
        }
    }
  };

  const handleInputValidation = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
     // Clear custom validity when user starts typing
     e.currentTarget.setCustomValidity("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (value: string) => {
    setFormData(prev => {
      const currentInterests = prev.interest;
      if (currentInterests.includes(value)) {
        return { ...prev, interest: currentInterests.filter(i => i !== value) };
      } else {
        return { ...prev, interest: [...currentInterests, value] };
      }
    });
  };

  const handleJobToggle = (value: string) => {
    setFormData(prev => {
      const currentJobs = prev.selectedJobs;
      if (currentJobs.includes(value)) {
        return { ...prev, selectedJobs: currentJobs.filter(j => j !== value) };
      } else {
        return { ...prev, selectedJobs: [...currentJobs, value] };
      }
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf') {
        if (file.size > 5 * 1024 * 1024) { // 5MB Limit check
            alert("O ficheiro é demasiado grande (Máx 5MB).");
            return;
        }
        setFormData(prev => ({ ...prev, cvFile: file }));
      } else {
        alert(t?.contact?.form?.fileError || "Erro no ficheiro");
      }
    }
  };

  const removeFile = () => {
    setFormData(prev => ({ ...prev, cvFile: null }));
  };

  const handleProjectImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      // Check total size or individual size if needed
      let totalSize = 0;
      for (let i = 0; i < files.length; i++) {
        totalSize += files[i].size;
      }
      
      if (totalSize > 10 * 1024 * 1024) { // 10MB Limit for images
          alert("O tamanho total das imagens é demasiado grande (Máx 10MB).");
          return;
      }
      setFormData(prev => ({ ...prev, projectImages: files }));
    }
  };

  const removeProjectImages = () => {
    setFormData(prev => ({ ...prev, projectImages: null }));
  };

  const closePopup = () => {
    if (submitStatus === 'success') {
      // Reset form only on success closing
      setFormData({ 
        name: '', email: '', phone: '', address: '', subject: '', 
        interest: [], selectedJobs: [], message: '', cvFile: null,
        companyName: '', companyAddress: '', companyType: '', companyContact: ''
      });
    }
    setSubmitStatus('idle');
  };

  // --- INTEGRATION: FORMSPREE SUBMISSION ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Double check subject is selected (HTML5 required handles this mostly, but good for safety)
    if (!formData.subject) {
      alert("Por favor, selecione um assunto.");
      return;
    }

    setIsSubmitting(true);
    
    // 1. Prepare FormData for the POST request
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('subject', formData.subject);
    data.append('message', formData.message);

    // Conditionally append specific fields based on subject
    if (formData.subject === 'orcamento') {
        data.append('morada_obra', formData.address); // Append Address
        data.append('areas_interesse', formData.interest.join(', '));
    }
    if (formData.subject === 'recrutamento') {
        data.append('vagas_selecionadas', formData.selectedJobs.join(', '));
    }
    if (formData.subject === 'parceria') {
        data.append('empresa_nome', formData.companyName);
        data.append('empresa_tipo', formData.companyType);
        data.append('empresa_contacto', formData.companyContact);
        data.append('empresa_morada', formData.companyAddress);
    }

    // Append File if exists
    if (formData.cvFile) {
        data.append('attachment', formData.cvFile);
    }

    // Append Project Images if exists
    if (formData.projectImages) {
        for (let i = 0; i < formData.projectImages.length; i++) {
            data.append('images[]', formData.projectImages[i]);
        }
    }

    try {
        // !!! IMPORTANTE: SUBSTITUA PELO SEU ID FORMSPREE !!!
        const FORMSPREE_ENDPOINT = "https://formspree.io/f/INSIRA_O_SEU_ID_FORMSPREE_AQUI"; 
        
        const response = await fetch(FORMSPREE_ENDPOINT, {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            setSubmitStatus('success');
        } else {
            const errorData = await response.json();
            console.error("Formspree Error:", errorData);
            setSubmitStatus('error');
        }
    } catch (error) {
        console.error("Network Error:", error);
        setSubmitStatus('error');
    } finally {
        setIsSubmitting(false);
    }
  };

  // Safe check if translation exists
  if (!t || !t.contact) {
    return null;
  }

  return (
    <div className="pt-24 pb-12 bg-white relative">
      <SEO 
        title={t.seo.contact.title} 
        description={t.seo.contact.description} 
        url="/contacto"
      />

      {/* MODAL POPUP (Success/Error) */}
      <AnimatePresence>
        {(submitStatus === 'success' || submitStatus === 'error') && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center px-4">
             {/* Backdrop */}
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="absolute inset-0 bg-corporate/80 backdrop-blur-sm"
               onClick={closePopup}
             ></motion.div>

             {/* Modal Content */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.9, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.9, y: 20 }}
               className="bg-white rounded-lg shadow-2xl w-full max-w-md relative z-10 overflow-hidden"
             >
                {/* Header Strip */}
                <div className={`h-2 w-full ${submitStatus === 'success' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                
                <div className="p-8 text-center">
                   {/* Icon */}
                   <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                      submitStatus === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                   }`}>
                      {submitStatus === 'success' ? <Check size={32} /> : <AlertTriangle size={32} />}
                   </div>

                   {/* Title */}
                   <h3 className="text-2xl font-normal font-heading text-corporate mb-4">
                      {submitStatus === 'success' ? 'Mensagem Enviada!' : 'Erro ao Enviar'}
                   </h3>

                   {/* Description */}
                   <p className="text-gray-600 mb-8 font-body text-sm leading-relaxed">
                      {submitStatus === 'success' 
                        ? t.contact.form.successMsg 
                        : "Ocorreu um problema técnico ao enviar a sua mensagem. Por favor, tente novamente ou contacte-nos telefonicamente."}
                   </p>

                   {/* Action Button */}
                   <button 
                     onClick={closePopup}
                     className={`w-full py-3 px-6 rounded font-bold uppercase tracking-widest text-sm transition-colors ${
                        submitStatus === 'success' 
                          ? 'bg-corporate text-white hover:bg-accent' 
                          : 'bg-red-500 text-white hover:bg-red-600'
                     }`}
                   >
                     {submitStatus === 'success' ? 'Fechar' : 'Tentar Novamente'}
                   </button>
                </div>
             </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="bg-corporate py-16 mb-16 text-center text-white">
        <div className="container mx-auto px-4 md:px-12">
          <h1 className="text-3xl md:text-4xl font-bold uppercase font-heading mb-4">{t.contact.heroTitle}</h1>
          <p className="text-gray-300 max-w-2xl mx-auto font-light text-base md:text-lg">
            {t.contact.heroDesc}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Contact Info Side */}
          <div className="w-full lg:w-1/3">
            <h2 className="text-2xl font-bold uppercase text-corporate mb-8 border-b-2 border-brand-light inline-block pb-2">
              {t.contact.infoTitle}
            </h2>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-detail p-3 rounded text-accent shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-corporate mb-1">{t.contact.labels.address}</h3>
                  <p className="text-gray-600 text-sm">
                    {t.common.address}<br />
                    {t.common.city}<br />
                    Portugal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-detail p-3 rounded text-accent shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-corporate mb-1">{t.contact.labels.phone}</h3>
                  <p className="text-gray-600 text-sm mb-1">+351 289 790 500</p>
                  <p className="text-gray-500 text-xs">{t.contact.labels.callCost}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-detail p-3 rounded text-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div className="overflow-hidden">
                  <h3 className="font-bold text-corporate mb-1">{t.contact.labels.email}</h3>
                  <p className="text-gray-600 text-sm break-words">mail@joaquimfernandes.pt</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-detail p-3 rounded text-accent shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-corporate mb-1">{t.contact.labels.schedule}</h3>
                  <p className="text-gray-600 text-sm">{t.contact.labels.weekdays}</p>
                  <p className="text-gray-600 text-sm">{t.contact.labels.weekend}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-[#25D366]/10 rounded border border-[#25D366]/30">
               <h4 className="font-bold uppercase text-corporate mb-4 text-lg">{t.contact.labels.whatsappBox.title}</h4>
               <a 
                 href="https://wa.me/351937700906" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded transition-colors uppercase tracking-widest text-sm w-full justify-center md:w-auto"
               >
                 <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                 </svg>
                 {t.contact.labels.whatsappBox.button}
               </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-2/3" ref={formRef}>
            <h2 className="text-2xl font-bold uppercase text-corporate mb-8 border-b-2 border-brand-light inline-block pb-2">
              {t.contact.formTitle}
            </h2>
            
            <div className="bg-white rounded shadow-sm border border-gray-100 p-6 md:p-8">
              
              {/* FORM START */}
              <form onSubmit={handleSubmit}>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1
                      }
                    }
                  }}
                >
                  <motion.div 
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                  >
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">{t.contact.form.name}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={handleChange}
                        onInvalid={handleInvalid}
                        onInput={handleInputValidation}
                        className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">{t.contact.form.email}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={handleChange}
                        onInvalid={handleInvalid}
                        onInput={handleInputValidation}
                        className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
                      />
                    </div>
                  </motion.div>

                  <motion.div 
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                  >
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">{t.contact.form.phone}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        disabled={isSubmitting}
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                        {t.contact.form.subject} <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        disabled={isSubmitting}
                        value={formData.subject}
                        onChange={handleChange}
                        onInvalid={handleInvalid}
                        onInput={handleInputValidation}
                        className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50 appearance-none"
                      >
                        <option value="">{t.contact.form.subjectPlaceholder}</option>
                        <option value="orcamento">{t.contact.form.optQuote}</option>
                        <option value="informacao">{t.contact.form.optInfo}</option>
                        <option value="recrutamento">{t.contact.form.optRecruitment}</option>
                        <option value="parceria">{t.contact.form.optPartnership}</option>
                        <option value="outros">{t.contact.form.optOther}</option>
                      </select>
                    </div>
                  </motion.div>

                {/* Conditional Field: Area of Interest (for 'orcamento') */}
                <AnimatePresence>
                  {formData.subject === 'orcamento' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 overflow-hidden"
                    >
                      {/* Address Field */}
                      <div className="mb-6">
                        <label htmlFor="address" className="block text-sm font-bold text-gray-700 mb-2">
                          {t.contact.labels.address}
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          disabled={isSubmitting}
                          value={formData.address}
                          onChange={handleChange}
                          className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
                        />
                      </div>

                      <label className="block text-sm font-bold text-gray-700 mb-3">
                        {t.contact.form.interest} <span className="text-gray-400 font-normal text-xs ml-1">{t.contact.form.interestHint}</span>
                      </label>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1 mb-6">
                        {Object.entries(t.contact.form.optsInterest).map(([key, label]) => {
                          const isSelected = formData.interest.includes(key);
                          return (
                            <div 
                                key={key} 
                                onClick={() => !isSubmitting && handleInterestToggle(key)}
                                className={`
                                  cursor-pointer rounded border p-3 flex items-center gap-3 transition-all duration-200 select-none
                                  ${isSelected 
                                    ? 'bg-brand-light/20 border-accent text-corporate shadow-sm' 
                                    : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'}
                                  ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}
                                `}
                            >
                              <div className={`
                                w-5 h-5 rounded border flex items-center justify-center transition-colors shrink-0
                                ${isSelected ? 'bg-accent border-accent' : 'bg-white border-gray-300'}
                              `}>
                                {isSelected && <Check size={14} className="text-white" />}
                              </div>
                              <span className="text-sm font-medium">{label as string}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* File Upload for Budget */}
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          Anexar projeto/croqui/documentação E-Redes
                        </label>
                        
                        {!formData.cvFile ? (
                          <div className={`relative border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg p-6 text-center group cursor-pointer ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}`}>
                            <input 
                              type="file" 
                              accept="application/pdf"
                              disabled={isSubmitting}
                              onChange={handleFileChange}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                            <div className="flex flex-col items-center justify-center pointer-events-none">
                                <Upload className="text-gray-400 group-hover:text-accent mb-2 transition-colors" size={24} />
                                <span className="text-sm font-semibold text-gray-600 group-hover:text-corporate transition-colors">
                                  {t.contact.form.uploadFile}
                                </span>
                                <span className="text-xs text-gray-400 mt-1">{t.contact.form.fileHint}</span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between bg-brand-light/10 border border-brand-light/50 rounded p-3">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className="bg-red-100 p-2 rounded text-red-500 shrink-0">
                                  <FileText size={20} />
                                </div>
                                <span className="text-sm font-medium text-gray-700 truncate max-w-[150px] sm:max-w-xs">
                                  {formData.cvFile.name}
                                </span>
                            </div>
                            <button 
                              type="button" 
                              onClick={removeFile}
                              disabled={isSubmitting}
                              className="p-1 hover:bg-red-100 rounded-full text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50"
                            >
                              <X size={18} />
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Image Upload for Budget */}
                      <div className="mt-6">
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          Anexar Imagens
                        </label>
                        
                        {!formData.projectImages ? (
                          <div className={`relative border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg p-6 text-center group cursor-pointer ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}`}>
                            <input 
                              type="file" 
                              accept="image/*"
                              multiple
                              disabled={isSubmitting}
                              onChange={handleProjectImagesChange}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                            <div className="flex flex-col items-center justify-center pointer-events-none">
                                <Upload className="text-gray-400 group-hover:text-accent mb-2 transition-colors" size={24} />
                                <span className="text-sm font-semibold text-gray-600 group-hover:text-corporate transition-colors">
                                  Carregar Imagens
                                </span>
                                <span className="text-xs text-gray-400 mt-1">Máx 10MB (Total)</span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between bg-brand-light/10 border border-brand-light/50 rounded p-3">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className="bg-blue-100 p-2 rounded text-blue-500 shrink-0">
                                  <FileText size={20} />
                                </div>
                                <span className="text-sm font-medium text-gray-700 truncate max-w-[150px] sm:max-w-xs">
                                  {formData.projectImages.length} imagem(ns) selecionada(s)
                                </span>
                            </div>
                            <button 
                              type="button" 
                              onClick={removeProjectImages}
                              disabled={isSubmitting}
                              className="p-1 hover:bg-red-100 rounded-full text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50"
                            >
                              <X size={18} />
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Conditional Fields: Partnership */}
                <AnimatePresence>
                  {formData.subject === 'parceria' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 overflow-hidden space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="companyName" className="block text-sm font-bold text-gray-700 mb-2">{t.contact.form.companyName}</label>
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            disabled={isSubmitting}
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
                          />
                        </div>
                        <div>
                          <label htmlFor="companyType" className="block text-sm font-bold text-gray-700 mb-2">{t.contact.form.companyType}</label>
                          <input
                            type="text"
                            id="companyType"
                            name="companyType"
                            disabled={isSubmitting}
                            value={formData.companyType}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="companyContact" className="block text-sm font-bold text-gray-700 mb-2">{t.contact.form.companyContact}</label>
                          <input
                            type="text"
                            id="companyContact"
                            name="companyContact"
                            disabled={isSubmitting}
                            value={formData.companyContact}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
                          />
                        </div>
                        <div>
                          <label htmlFor="companyAddress" className="block text-sm font-bold text-gray-700 mb-2">{t.contact.form.companyAddress}</label>
                          <input
                            type="text"
                            id="companyAddress"
                            name="companyAddress"
                            disabled={isSubmitting}
                            value={formData.companyAddress}
                            onChange={handleChange}
                            className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors disabled:opacity-50"
                          />
                        </div>
                      </div>

                      {/* Presentation Upload */}
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          {t.contact.form.presentation}
                        </label>
                        
                        {!formData.cvFile ? (
                          <div className={`relative border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg p-6 text-center group cursor-pointer ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}`}>
                            <input 
                              type="file" 
                              accept="application/pdf"
                              disabled={isSubmitting}
                              onChange={handleFileChange}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                            <div className="flex flex-col items-center justify-center pointer-events-none">
                                <Upload className="text-gray-400 group-hover:text-accent mb-2 transition-colors" size={24} />
                                <span className="text-sm font-semibold text-gray-600 group-hover:text-corporate transition-colors">
                                  {t.contact.form.uploadFile}
                                </span>
                                <span className="text-xs text-gray-400 mt-1">{t.contact.form.fileHint}</span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between bg-brand-light/10 border border-brand-light/50 rounded p-3">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className="bg-red-100 p-2 rounded text-red-500 shrink-0">
                                  <FileText size={20} />
                                </div>
                                <span className="text-sm font-medium text-gray-700 truncate max-w-[150px] sm:max-w-xs">
                                  {formData.cvFile.name}
                                </span>
                            </div>
                            <button 
                              type="button" 
                              onClick={removeFile}
                              disabled={isSubmitting}
                              className="p-1 hover:bg-red-100 rounded-full text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50"
                            >
                              <X size={18} />
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Conditional Fields: Recruitment */}
                <AnimatePresence>
                  {formData.subject === 'recrutamento' && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-6 overflow-hidden space-y-6"
                    >
                      {/* Job Selection */}
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          {t.contact.form.jobPosition}
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-1">
                          {t.careers.jobs.map((job: any) => {
                            const isSelected = formData.selectedJobs.includes(job.title);
                            return (
                              <div 
                                  key={job.id} 
                                  onClick={() => !isSubmitting && handleJobToggle(job.title)}
                                  className={`
                                    cursor-pointer rounded border p-3 flex items-center gap-3 transition-all duration-200 select-none
                                    ${isSelected 
                                      ? 'bg-brand-light/20 border-accent text-corporate shadow-sm' 
                                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100'}
                                    ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}
                                  `}
                              >
                                <div className={`
                                  w-5 h-5 rounded border flex items-center justify-center transition-colors shrink-0
                                  ${isSelected ? 'bg-accent border-accent' : 'bg-white border-gray-300'}
                                `}>
                                  {isSelected && <Check size={14} className="text-white" />}
                                </div>
                                <span className="text-sm font-medium leading-tight">{job.title}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* CV Upload */}
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">
                          {t.contact.form.cv}
                        </label>
                        
                        {!formData.cvFile ? (
                          <div className={`relative border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg p-6 text-center group cursor-pointer ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}`}>
                            <input 
                              type="file" 
                              accept="application/pdf"
                              disabled={isSubmitting}
                              onChange={handleFileChange}
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                            />
                            <div className="flex flex-col items-center justify-center pointer-events-none">
                                <Upload className="text-gray-400 group-hover:text-accent mb-2 transition-colors" size={24} />
                                <span className="text-sm font-semibold text-gray-600 group-hover:text-corporate transition-colors">
                                  {t.contact.form.uploadFile}
                                </span>
                                <span className="text-xs text-gray-400 mt-1">{t.contact.form.fileHint}</span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center justify-between bg-brand-light/10 border border-brand-light/50 rounded p-3">
                            <div className="flex items-center gap-3 overflow-hidden">
                                <div className="bg-red-100 p-2 rounded text-red-500 shrink-0">
                                  <FileText size={20} />
                                </div>
                                <span className="text-sm font-medium text-gray-700 truncate max-w-[150px] sm:max-w-xs">
                                  {formData.cvFile.name}
                                </span>
                            </div>
                            <button 
                              type="button" 
                              onClick={removeFile}
                              disabled={isSubmitting}
                              className="p-1 hover:bg-red-100 rounded-full text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50"
                            >
                              <X size={18} />
                            </button>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    {formData.subject === 'parceria' ? t.contact.form.proposalMessage : t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    disabled={isSubmitting}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-300 rounded p-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none disabled:opacity-50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full md:w-auto bg-accent hover:bg-[#2A3345] text-white font-bold py-3 px-8 rounded shadow-lg uppercase tracking-widest text-sm transition-all duration-300 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> A enviar...
                    </>
                  ) : (
                    <>
                      {t.contact.form.submit} <Send size={16} />
                    </>
                  )}
                </button>
                </motion.div>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 md:mt-20">
          <h2 className="text-2xl font-bold uppercase text-corporate mb-8">{t.contact.locationTitle}</h2>
          <div className="w-full h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden relative shadow-inner">
             {/* Iframe for Google Maps visualization (Pointing to Moncarapacho/Olhão) */}
             <iframe 
                src="https://maps.google.com/maps?q=Estrada+Nacional+125+Bias+Norte+Moncarapacho,+8700-066+Olhão&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de Localização"
             ></iframe>
             {/* Overlay to ensure scrolling page works unless interacting directly */}
             <div className="absolute inset-0 pointer-events-none border-4 border-white/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;