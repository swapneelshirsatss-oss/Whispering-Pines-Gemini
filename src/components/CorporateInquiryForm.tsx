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
      phone_number: formData.phone,
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
      <div className="bg-white border border-[#E8E5DF] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-luxury-md relative overflow-hidden">
        {/* Decorative Golden Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1B3322] via-[#C9A832] to-[#1B3322]" />

        {submitted ? (
          <div className="py-10 text-center space-y-6 animate-fade-in">
            <div className="w-16 h-16 bg-[#1B3322]/10 rounded-full flex items-center justify-center mx-auto text-[#1B3322]">
              <CheckCircle2 className="w-9 h-9 text-[#1B3322]" />
            </div>

            <div className="space-y-3 max-w-lg mx-auto">
              <span className="font-mono text-xs text-[#C9A832] uppercase tracking-[0.2em] font-semibold block">
                Corporate Inquiry Received · Dedicated Account Desk
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-medium text-[#1B3322]">
                Thank You, {formData.organizerName || "Organizer"}
              </h3>
              <p className="text-sm text-[#2C3531]/80 leading-relaxed font-sans">
                Your offsite proposal request for <strong>{formData.companyName || "your team"}</strong> has been routed to our Senior Corporate Concierge. We will prepare customized buyout terms, AV provisions, and GST-compliant cost sheets.
              </p>
            </div>

            {/* Corporate Perks Guarantee Banner */}
            <div className="bg-[#FAF9F6] border border-[#C9A832]/30 rounded-xl p-5 max-w-md mx-auto text-left flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-[#C9A832] shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#1B3322] font-bold block mb-1">
                  B2B Corporate Guarantees
                </span>
                <p className="text-xs text-[#2C3531]/75 leading-relaxed">
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
              >
                <span>Continue on WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#1B3322]/20 hover:border-[#1B3322] font-mono text-xs uppercase tracking-wider text-[#1B3322] transition-colors"
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
                <label className="block text-xs font-mono uppercase tracking-wider text-[#1B3322] font-semibold">
                  Company / Organization Name <span className="text-[#C27847]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2C3531]/40">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="e.g. Acme Technologies Pvt Ltd"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-[#1B3322]/15 rounded-xl text-sm text-[#1B3322] placeholder:text-[#2C3531]/40 focus:outline-none focus:border-[#C9A832] focus:ring-1 focus:ring-[#C9A832] transition-all"
                  />
                </div>
              </div>

              {/* Organizer Full Name */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#1B3322] font-semibold">
                  Organizer Full Name <span className="text-[#C27847]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2C3531]/40">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="organizerName"
                    required
                    value={formData.organizerName}
                    onChange={handleChange}
                    placeholder="e.g. Vikram Sharma (Head of People / EA)"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-[#1B3322]/15 rounded-xl text-sm text-[#1B3322] placeholder:text-[#2C3531]/40 focus:outline-none focus:border-[#C9A832] focus:ring-1 focus:ring-[#C9A832] transition-all"
                  />
                </div>
              </div>

              {/* Work Email */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#1B3322] font-semibold">
                  Work Email <span className="text-[#C27847]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2C3531]/40">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    name="workEmail"
                    required
                    value={formData.workEmail}
                    onChange={handleChange}
                    placeholder="vikram@company.com"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-[#1B3322]/15 rounded-xl text-sm text-[#1B3322] placeholder:text-[#2C3531]/40 focus:outline-none focus:border-[#C9A832] focus:ring-1 focus:ring-[#C9A832] transition-all"
                  />
                </div>
              </div>

              {/* Mobile / WhatsApp Number */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#1B3322] font-semibold">
                  Mobile / WhatsApp Number <span className="text-[#C27847]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2C3531]/40">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-[#1B3322]/15 rounded-xl text-sm text-[#1B3322] placeholder:text-[#2C3531]/40 focus:outline-none focus:border-[#C9A832] focus:ring-1 focus:ring-[#C9A832] transition-all"
                  />
                </div>
              </div>

              {/* Preferred Dates */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#1B3322] font-semibold">
                  Preferred Dates (Tentative) <span className="text-[#C27847]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2C3531]/40">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <input
                    type="date"
                    name="preferredDate"
                    required
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-[#1B3322]/15 rounded-xl text-sm text-[#1B3322] focus:outline-none focus:border-[#C9A832] focus:ring-1 focus:ring-[#C9A832] transition-all"
                  />
                </div>
              </div>

              {/* Estimated Delegate Count */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#1B3322] font-semibold">
                  Estimated Delegate Count <span className="text-[#C27847]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2C3531]/40">
                    <Users className="w-4 h-4" />
                  </div>
                  <select
                    name="delegateCount"
                    value={formData.delegateCount}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 bg-[#FAF9F6] border border-[#1B3322]/15 rounded-xl text-sm text-[#1B3322] focus:outline-none focus:border-[#C9A832] focus:ring-1 focus:ring-[#C9A832] transition-all appearance-none cursor-pointer"
                  >
                    <option value="15-30">15 – 30 Delegates (Executive Sprints / CXO)</option>
                    <option value="30-50">30 – 50 Delegates (Mid-size Team Offsite)</option>
                    <option value="50-70">50 – 70 Delegates (Full Company / Estate Buyout)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Event Requirements (Checkboxes) */}
            <div className="space-y-3">
              <label className="block text-xs font-mono uppercase tracking-wider text-[#1B3322] font-semibold">
                Event Requirements (Select all that apply)
              </label>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {requirementOptions.map((req) => {
                  const isChecked = formData.requirements.includes(req);
                  return (
                    <button
                      type="button"
                      key={req}
                      onClick={() => handleRequirementToggle(req)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 border flex items-center gap-2 cursor-pointer ${
                        isChecked
                          ? "bg-[#1B3322] text-[#FAF9F6] border-[#1B3322] shadow-xs"
                          : "bg-[#FAF9F6] text-[#2C3531]/80 border-[#1B3322]/15 hover:border-[#1B3322]/30"
                      }`}
                    >
                      <span className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center text-[10px] ${
                        isChecked ? "bg-[#C9A832] border-[#C9A832] text-[#1B3322]" : "border-[#2C3531]/30"
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
              <label className="block text-xs font-mono uppercase tracking-wider text-[#1B3322] font-semibold">
                Specific Itinerary or AV Needs (Optional)
              </label>
              <textarea
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                placeholder="Share any special team-building activities, dietary restrictions, flight/train transfer requirements, or executive villa preferences..."
                className="w-full p-4 bg-[#FAF9F6] border border-[#1B3322]/15 rounded-xl text-sm text-[#1B3322] placeholder:text-[#2C3531]/40 focus:outline-none focus:border-[#C9A832] focus:ring-1 focus:ring-[#C9A832] transition-all resize-none"
              ></textarea>
            </div>

            {/* Submit & Direct WhatsApp Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:flex-1 btn-shimmer py-4 px-8 rounded-full bg-[#1B3322] hover:bg-[#2A4832] text-[#FAF9F6] font-mono text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 shadow-luxury-sm hover:shadow-luxury-md flex items-center justify-center gap-3 cursor-pointer disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span>Generating Proposal...</span>
                ) : (
                  <>
                    <span>Request Corporate Proposal</span>
                    <Send className="w-4 h-4 text-[#C9A832]" />
                  </>
                )}
              </button>

              <a
                href={`https://wa.me/917505029696?text=${encodeURIComponent(constructWhatsAppMessage(formData))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#FAF9F6] hover:bg-[#FAF9F6]/80 text-[#1B3322] border border-[#1B3322]/20 font-mono text-xs uppercase tracking-wider font-semibold transition-all"
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
