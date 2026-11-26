import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink,
  Building2,
  Copy,
  Check
} from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';

interface ContactProps {
  initialService?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || 'Brand Development',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submissionState, setSubmissionState] = useState<'idle' | 'submitted'>('idle');
  const [copiedInfo, setCopiedInfo] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide details about your project.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Direct simulated submission with transparent local confirmation
    setSubmissionState('submitted');
  };

  const handleMailtoDirect = () => {
    const subject = encodeURIComponent(`Project Inquiry: ${formData.service} - ${formData.name || 'New Client'}`);
    const body = encodeURIComponent(
      `Hello Infinity Advertising,\n\n` +
      `I would like to inquire about your ${formData.service} services.\n\n` +
      `Client Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Service: ${formData.service}\n\n` +
      `Project Brief:\n${formData.message}\n\n` +
      `Looking forward to hearing from your team.\n`
    );
    window.location.href = `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedInfo(label);
    setTimeout(() => setCopiedInfo(null), 2500);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-brand-light/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-brand-blue mb-3">
            <span className="w-6 h-0.5 bg-brand-blue"></span>
            <span>Get In Touch</span>
            <span className="w-6 h-0.5 bg-brand-blue"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-charcoal tracking-tight">
            Let's Create Something Extraordinary.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-charcoal/70 leading-relaxed">
            Ready to move your brand forward? Reach out directly to discuss your branding, advertising campaigns, or event management requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Verified Agency Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Details Card */}
            <div className="p-8 rounded-3xl bg-white border border-brand-light-gray shadow-card space-y-6">
              <div className="flex items-center space-x-3 pb-4 border-b border-brand-light-gray">
                <div className="w-10 h-10 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-brand-charcoal">{COMPANY_INFO.name}</h3>
                  <p className="text-xs text-brand-charcoal/60">Creative Advertising Agency</p>
                </div>
              </div>

              {/* Clickable Items */}
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start justify-between group">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-brand-charcoal/60">Corporate Headquarters</div>
                      <div className="text-sm font-medium text-brand-charcoal mt-0.5">
                        {COMPANY_INFO.address}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(COMPANY_INFO.address, 'address')}
                    className="p-1.5 rounded-lg text-brand-charcoal/40 hover:text-brand-blue hover:bg-brand-light transition-colors"
                    title="Copy Address"
                  >
                    {copiedInfo === 'address' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Telephone */}
                <div className="flex items-start justify-between group">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-brand-charcoal/60">Telephone</div>
                      <a
                        href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-sm font-bold text-brand-blue hover:underline mt-0.5 block"
                      >
                        {COMPANY_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(COMPANY_INFO.phone, 'phone')}
                    className="p-1.5 rounded-lg text-brand-charcoal/40 hover:text-brand-blue hover:bg-brand-light transition-colors"
                    title="Copy Phone"
                  >
                    {copiedInfo === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Email */}
                <div className="flex items-start justify-between group">
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-brand-charcoal/60">Email Inquiries</div>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-sm font-bold text-brand-blue hover:underline mt-0.5 block"
                      >
                        {COMPANY_INFO.email}
                      </a>
                      <div className="text-[11px] text-brand-charcoal/50 mt-0.5">
                        Alt: {COMPANY_INFO.altEmail}
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(COMPANY_INFO.email, 'email')}
                    className="p-1.5 rounded-lg text-brand-charcoal/40 hover:text-brand-blue hover:bg-brand-light transition-colors"
                    title="Copy Email"
                  >
                    {copiedInfo === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-3 pt-2 border-t border-brand-light-gray/60">
                  <Clock className="w-5 h-5 text-brand-cyan shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-brand-charcoal/60">Agency Hours</div>
                    <div className="text-xs text-brand-charcoal/80 mt-0.5">
                      {COMPANY_INFO.workingHours}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Card */}
            <div className="rounded-3xl overflow-hidden bg-white border border-brand-light-gray shadow-card">
              <div className="p-4 bg-brand-light border-b border-brand-light-gray flex items-center justify-between text-xs font-bold text-brand-charcoal">
                <span>Tripureshwor, Kathmandu Location</span>
                <a
                  href="https://maps.app.goo.gl/cww8nFSZc7pE3bqFA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-blue hover:underline inline-flex items-center space-x-1"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="aspect-[16/9] w-full bg-brand-light-gray/30">
                <iframe
                  title="Infinity Advertising Office Location Map"
                  src={COMPANY_INFO.googleMapsEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form with Validation & Dual Submission */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-light-gray shadow-card">
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-brand-charcoal">
                  Start Your Project Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-brand-charcoal/70 mt-1">
                  Fill out the form below or open directly in your mail application.
                </p>
              </div>

              {submissionState === 'submitted' ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-brand-light border border-brand-blue/30 space-y-4 animate-fadeIn">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brand-charcoal">
                      Thank you, {formData.name}!
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-charcoal/80 mt-1.5 leading-relaxed">
                      Your inquiry regarding <strong>{formData.service}</strong> has been prepared. To ensure immediate transmission directly to our executive mailbox (<strong>{COMPANY_INFO.email}</strong>), please click below to send via your email client.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-brand-light-gray text-xs space-y-1">
                    <div><strong>Service:</strong> {formData.service}</div>
                    <div><strong>Contact:</strong> {formData.phone} • {formData.email}</div>
                    <div className="truncate"><strong>Brief:</strong> {formData.message}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="button"
                      onClick={handleMailtoDirect}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-xs font-bold shadow-brand flex items-center justify-center space-x-2"
                    >
                      <span>Send Now via Email Client</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmissionState('idle');
                        setFormData({ name: '', email: '', phone: '', service: 'Brand Development', message: '' });
                      }}
                      className="px-5 py-3 rounded-full bg-white border border-brand-light-gray text-brand-charcoal text-xs font-semibold hover:bg-brand-light"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  
                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1.5">
                      Your Name / Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Suman Shrestha (Nepal Telecom)"
                      className={`w-full px-4 py-3 rounded-xl bg-brand-light/50 border text-sm text-brand-charcoal placeholder:text-brand-charcoal/40 focus:outline-none focus:bg-white transition-all ${
                        errors.name ? 'border-red-400 focus:border-red-500' : 'border-brand-light-gray focus:border-brand-blue'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email & Phone Dual Column */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com.np"
                        className={`w-full px-4 py-3 rounded-xl bg-brand-light/50 border text-sm text-brand-charcoal placeholder:text-brand-charcoal/40 focus:outline-none focus:bg-white transition-all ${
                          errors.email ? 'border-red-400 focus:border-red-500' : 'border-brand-light-gray focus:border-brand-blue'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+977-98XXXXXXXX"
                        className={`w-full px-4 py-3 rounded-xl bg-brand-light/50 border text-sm text-brand-charcoal placeholder:text-brand-charcoal/40 focus:outline-none focus:bg-white transition-all ${
                          errors.phone ? 'border-red-400 focus:border-red-500' : 'border-brand-light-gray focus:border-brand-blue'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1.5">
                      Required Service
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-light/50 border border-brand-light-gray text-sm text-brand-charcoal focus:outline-none focus:bg-white focus:border-brand-blue transition-all"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="360 Integrated Campaign">360° Integrated Campaign (ATL + BTL + Digital)</option>
                      <option value="Audio Visual & TVC Production">Audio Visual & TVC Production</option>
                      <option value="Other Advertising Inquiry">Other Creative Inquiry</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-brand-charcoal/80 mb-1.5">
                      Project Details / Requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your brand, key objectives, timeline, or preferred advertising channels..."
                      className={`w-full px-4 py-3 rounded-xl bg-brand-light/50 border text-sm text-brand-charcoal placeholder:text-brand-charcoal/40 focus:outline-none focus:bg-white transition-all resize-y ${
                        errors.message ? 'border-red-400 focus:border-red-500' : 'border-brand-light-gray focus:border-brand-blue'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-500 flex items-center space-x-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto flex-1 px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-blue to-brand-cyan text-white text-sm font-bold shadow-brand hover:shadow-brand-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Project Brief</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleMailtoDirect}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-brand-light border border-brand-light-gray text-brand-charcoal text-xs font-semibold hover:bg-brand-light-gray transition-colors flex items-center justify-center space-x-2"
                      title="Open in your default email software"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-brand-blue" />
                      <span>Send via Email Client</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-brand-charcoal/50 text-center pt-2">
                    Direct communications guaranteed • Phone inquiries welcomed at +977-1-5347277
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
