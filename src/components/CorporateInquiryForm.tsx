import React, { useState } from "react";
import { 
  Building2, 
  Calendar, 
  Users, 
  Phone, 
  Mail, 
  User, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  FileText,
  Briefcase
} from "lucide-react";
import { trackAdsConversion } from "../utils/analytics";

interface CorporateFormData {
  companyName: string;
  organizerName: string;
  workEmail: string;
  phone: string;
  preferredDate: string;
  delegateCount: string;
  requirements: string[];
  notes: string;
}

export default function CorporateInquiryForm() {
  const [formData, setFormData] = useState<CorporateFormData>({
    companyName: "",
    organizerName: "",
    workEmail: "",
    phone: "",
    preferredDate: "",
    delegateCount: "30-50",
    requirements: ["Conference Hall", "AV Equipment", "Lawn Setup"],
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const requirementOptions = [
    "Conference Hall",
    "Lawn Setup",
    "Team Building",
    "Station Transfers",
    "AV Equipment",
  ];

  const handleRequirementToggle = (req: string) => {
    setFormData((prev) => {
      const exists = prev.requirements.includes(req);
      const updated = exists
        ? prev.requirements.filter((r) => r !== req)
        : [...prev.requirements, req];
      return { ...prev, requirements: updated };
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const constructWhatsAppMessage = (data: CorporateFormData) => {
    return `Hello Casa De Bello Whispering Pines! I am inquiring about an Executive Corporate Offsite / MICE Retreat:
• Company Name: ${data.companyName || "Not provided"}
• Organizer: ${data.organizerName || "Not provided"}
• Work Email: ${data.workEmail || "Not provided"}
• Phone / WhatsApp: ${data.phone || "Not provided"}
• Preferred Dates: ${data.preferredDate || "Flexible"}
• Estimated Delegates: ${data.delegateCount}
• Requirements: ${data.requirements.length > 0 ? data.requirements.join(", ") : "Standard offsite package"}
• Additional Notes: ${data.notes || "Please share availability, estate buyout terms, and GST corporate quotation."}

Looking forward to receiving the customized corporate offsite proposal.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track conversion in Google Ads / GTM
    trackAdsConversion("generate_lead", "corporate", "corporate_offsite_proposal_submission", {
      method: "corporate_proposal_form",
      conversion_type: "whatsapp",
    });

    const waText = constructWhatsAppMessage(formData);
    const waUrl = `https://wa.me/917505029696?text=${encodeURIComponent(waText)}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Open WhatsApp in a new tab so organizer communicates directly with the corporate desk
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }
    }, 600);
  };

  return (
    <div id="corporate-inquiry" className="relative scroll-mt-24">
      {/* Editorial Container with Subtle Border & Shadow */}
      <div className="bg-white border border-[#E8E5DF] rounded-sm p-6 sm:p-10 lg:p-12 shadow-md relative overflow-hidden">
        {/* Decorative Golden Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0E2C21] via-[#B0966D] to-[#0E2C21]" />

        {submitted ? (
          <div className="py-10 text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 bg-[#0E2C21]/10 rounded-full flex items-center justify-center mx-auto text-[#0E2C21]">
              <CheckCircle2 className="w-9 h-9 text-[#0E2C21]" />
            </div>

            <div className="space-y-3 max-w-lg mx-auto">
              <span className="font-sans text-xs text-[#B0966D] uppercase tracking-[0.2em] font-semibold block">
                Corporate Inquiry Received · Dedicated Account Desk
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#0E2C21]">
                Thank You, {formData.organizerName || "Organizer"}
              </h3>
              <p className="text-sm text-[#2C3531]/80 leading-relaxed font-sans">
                Your offsite proposal request for <strong>{formData.companyName || "your team"}</strong> has been routed to our Senior Corporate Concierge. We will prepare customized buyout terms, AV provisions, and GST-compliant cost sheets.
              </p>
            </div>

            {/* Corporate Perks Guarantee Banner */}
            <div className="bg-[#FAF9F6] border border-[#8A6F4A]/30 rounded-sm p-5 max-w-md mx-auto text-left flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-[#7A6038] shrink-0 mt-0.5" />
              <div>
                <span className="font-sans text-[11px] uppercase tracking-wider text-[#0E2C21] font-bold block mb-1">
                  B2B Corporate Guarantees
                </span>
                <p className="text-sm text-[#2C3531]/75 leading-relaxed">
                  ✓ 100% Confidential estate buyout option<br />
                  ✓ Valid corporate GST input-credit invoicing<br />
                  ✓ Complimentary high-speed fiber Wi-Fi & AV setup checks
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/917505029696?text=${encodeURIComponent(constructWhatsAppMessage(formData))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm bg-[#0E2C21] hover:bg-[#193F30] text-white font-sans text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
              >
                <svg className="w-4 h-4 shrink-0 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.554 4.1 1.523 5.823L0 24l6.344-1.498A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.792 9.792 0 01-5.002-1.374l-.359-.213-3.765.889.953-3.676-.234-.376A9.794 9.794 0 012.182 12C2.182 6.574 6.574 2.182 12 2.182S21.818 6.574 21.818 12 17.426 21.818 12 21.818z"/></svg>
                <span>Continue on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#0E2C21]/20 hover:border-[#0E2C21] font-sans text-xs uppercase tracking-wider text-[#0E2C21] transition-colors"
              >
                Modify Proposal Request
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {/* Company Name */}
              <div className="space-y-2">
                <label htmlFor="cf-companyName" className="block text-xs font-sans uppercase tracking-wider text-[#0E2C21] font-semibold">
                  Company / Organization Name <span className="text-[#C27847]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2C3531]/40">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="cf-companyName" name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Acme Technologies Pvt Ltd"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-[#0E2C21]/15 rounded-sm text-sm text-[#0E2C21] placeholder:text-[#2C3531]/40 focus:outline-none focus:border-[#8A6F4A] focus:ring-1 focus:ring-[#7A6038] transition-all"
                  />
                </div>
              </div>

              {/* Organizer Full Name */}
              <div className="space-y-2">
                <label htmlFor="cf-organizerName" className="block text-xs font-sans uppercase tracking-wider text-[#0E2C21] font-semibold">
                  Organizer Full Name <span className="text-[#C27847]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2C3531]/40">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="cf-organizerName" name="organizerName"
                    required
                    value={formData.organizerName}
                    onChange={handleChange}
                    placeholder="e.g. Vikram Sharma (Head of People / EA)"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-[#0E2C21]/15 rounded-sm text-sm text-[#0E2C21] placeholder:text-[#2C3531]/40 focus:outline-none focus:border-[#8A6F4A] focus:ring-1 focus:ring-[#7A6038] transition-all"
                  />
                </div>
              </div>

              {/* Work Email */}
              <div className="space-y-2">
                <label htmlFor="cf-workEmail" className="block text-xs font-sans uppercase tracking-wider text-[#0E2C21] font-semibold">
                  Work Email <span className="text-[#C27847]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2C3531]/40">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    id="cf-workEmail" name="workEmail"
                    required
                    value={formData.workEmail}
                    onChange={handleChange}
                    placeholder="vikram@company.com"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-[#0E2C21]/15 rounded-sm text-sm text-[#0E2C21] placeholder:text-[#2C3531]/40 focus:outline-none focus:border-[#8A6F4A] focus:ring-1 focus:ring-[#7A6038] transition-all"
                  />
                </div>
              </div>

              {/* Mobile / WhatsApp Number */}
              <div className="space-y-2">
                <label htmlFor="cf-phone" className="block text-xs font-sans uppercase tracking-wider text-[#0E2C21] font-semibold">
                  Mobile / WhatsApp Number <span className="text-[#C27847]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2C3531]/40">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="cf-phone" name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-[#0E2C21]/15 rounded-sm text-sm text-[#0E2C21] placeholder:text-[#2C3531]/40 focus:outline-none focus:border-[#8A6F4A] focus:ring-1 focus:ring-[#7A6038] transition-all"
                  />
                </div>
              </div>

              {/* Preferred Dates */}
              <div className="space-y-2">
                <label htmlFor="cf-preferredDate" className="block text-xs font-sans uppercase tracking-wider text-[#0E2C21] font-semibold">
                  Preferred Dates (Tentative) <span className="text-[#C27847]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2C3531]/40">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    id="cf-preferredDate" name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-[#0E2C21]/15 rounded-sm text-sm text-[#0E2C21] focus:outline-none focus:border-[#8A6F4A] focus:ring-1 focus:ring-[#7A6038] transition-all"
                  />
                </div>
              </div>

              {/* Estimated Delegate Count */}
              <div className="space-y-2">
                <label htmlFor="cf-delegateCount" className="block text-xs font-sans uppercase tracking-wider text-[#0E2C21] font-semibold">
                  Estimated Delegate Count <span className="text-[#C27847]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2C3531]/40">
                    <Users className="w-4 h-4" />
                  </div>
                  <select
                    id="cf-delegateCount" name="delegateCount"
                    value={formData.delegateCount}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-[#0E2C21]/15 rounded-sm text-sm text-[#0E2C21] focus:outline-none focus:border-[#8A6F4A] focus:ring-1 focus:ring-[#7A6038] transition-all appearance-none cursor-pointer"
                  >
                    <option value="15-30">15 – 30 Delegates (Executive Sprints / CXO)</option>
                    <option value="30-50">30 – 50 Delegates (Mid-size Team Offsite)</option>
                    <option value="50-80">50 – 80 Delegates (Full Company / Estate Buyout)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Event Requirements (Checkboxes) */}
            <div className="space-y-3">
              <p className="block text-xs font-sans uppercase tracking-wider text-[#0E2C21] font-semibold">
                Event Requirements (Select all that apply)
              </p>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {requirementOptions.map((req) => {
                  const isChecked = formData.requirements.includes(req);
                  return (
                    <button
                      type="button"
                      key={req}
                      onClick={() => handleRequirementToggle(req)}
                      aria-pressed={isChecked}
                      className={`px-3.5 py-2 rounded-sm text-xs font-mono uppercase tracking-wider transition-all duration-200 border flex items-center gap-2 cursor-pointer ${
                        isChecked
                          ? "bg-[#0E2C21] text-[#FAF9F6] border-[#0E2C21] shadow-xs"
                          : "bg-[#FAF9F6] text-[#2C3531]/80 border-[#0E2C21]/15 hover:border-[#0E2C21]/30"
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center text-[10px] ${
                        isChecked ? "bg-[#B0966D] border-[#8A6F4A] text-[#0E2C21]" : "border-[#2C3531]/30"
                      }`}>
                        {isChecked && "✓"}
                      </span>
                      <span>{req}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Additional Notes */}
            <div className="space-y-2">
              <label htmlFor="cf-notes" className="block text-xs font-sans uppercase tracking-wider text-[#0E2C21] font-semibold">
                Specific Itinerary or AV Needs (Optional)
              </label>
              <textarea
                id="cf-notes" name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Share any special team-building activities, dietary restrictions, flight/train transfer requirements, or executive villa preferences..."
                className="w-full p-4 bg-[#FAF9F6] border border-[#0E2C21]/15 rounded-sm text-sm text-[#0E2C21] placeholder:text-[#2C3531]/40 focus:outline-none focus:border-[#8A6F4A] focus:ring-1 focus:ring-[#7A6038] transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit & Direct WhatsApp Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:flex-1 py-4 px-8 rounded-full bg-[#0E2C21] hover:bg-[#193F30] text-[#FAF9F6] font-sans text-xs uppercase tracking-[0.1em] font-semibold transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center gap-3 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Generating Proposal...</span>
                ) : (
                  <>
                    <span>Request Corporate Proposal</span>
                    <Send className="w-4 h-4 text-[#B0966D]" />
                  </>
                )}
              </button>

              <a
                href={`https://wa.me/917505029696?text=${encodeURIComponent(constructWhatsAppMessage(formData))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#FAF9F6] hover:bg-[#FAF9F6]/80 text-[#0E2C21] border border-[#0E2C21]/20 font-sans text-xs uppercase tracking-wider font-semibold transition-all"
              >
                <span>Instant WhatsApp Desk</span>
              </a>
            </div>

            {/* B2B Trust Notice */}
            <p className="text-[11px] text-[#2C3531]/60 text-center font-sans">
              🔒 Your corporate details are treated with strict confidentiality. Direct proposal with GST invoice delivered within 2 hours.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
