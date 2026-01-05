export interface ServiceCategory {
  category_name: string;
  description: string;
}

export interface Testimonial {
  type: string;
  content: string;
  source: string | null;
}

export interface ContactDetails {
  phone_number: string;
  address: string;
  email_address: string;
  opening_hours: string;
}

export interface USP {
  value: string;
}

export interface LandingData {
  service_categories: ServiceCategory[];
  treatment_benefits: any[]; // Kept generic as not strictly used in current view
  unique_selling_propositions: USP[];
  pricing_structures: any[]; // Pricing not needed on landing as per instructions
  contact_details: ContactDetails;
  trust_signals: Testimonial[];
}