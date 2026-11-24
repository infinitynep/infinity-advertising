import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-brand-charcoal/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-brand-light-gray flex flex-col max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white border-b border-brand-light-gray p-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-brand-light text-brand-blue">
              {type === 'privacy' ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-charcoal">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <p className="text-xs text-brand-charcoal/60">{COMPANY_INFO.name} • Kathmandu, Nepal</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-brand-light text-brand-charcoal transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-sm text-brand-charcoal/80 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>1. Commitment to Privacy:</strong> {COMPANY_INFO.name} respects the confidentiality and data integrity of all prospective and existing clients.
              </p>
              <p>
                <strong>2. Information Collection:</strong> Information submitted through our inquiry forms (including name, corporate organization, telephone number, and email address) is used exclusively for evaluating advertising requirements and project correspondence.
              </p>
              <p>
                <strong>3. Non-Disclosure:</strong> We do not sell, rent, or trade client information to any third parties. Campaign briefings and creative assets remain strictly confidential under customary non-disclosure principles.
              </p>
              <p>
                <strong>4. Direct Inquiries:</strong> For any privacy-related queries, please contact our administrative desk at{' '}
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-blue underline font-medium">
                  {COMPANY_INFO.email}
                </a>.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Corporate Services:</strong> {COMPANY_INFO.name} provides commercial brand strategy, ATL & BTL advertising planning, production, and event management under formal written agreements and approved estimates.
              </p>
              <p>
                <strong>2. Creative Intellectual Property:</strong> All client deliverables, copyright ownership, and publication licenses are governed by individual client contracts upon full settlement of production and placement disbursements.
              </p>
              <p>
                <strong>3. Jurisdiction:</strong> Any legal relations and agreements are interpreted and administered in accordance with the laws of Nepal, with jurisdiction in Kathmandu.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-brand-light/80 border-t border-brand-light-gray flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-brand-charcoal bg-white border border-brand-light-gray rounded-full hover:bg-brand-light transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
