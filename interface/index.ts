export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: 'x' | 'linkedin' | 'github';
}

export interface Cta {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  url: string;
  title: string;
  description: string;
  email: string;
  careersEmail: string;
  accent: string;
  cta: { primary: Cta };
  socials: SocialLink[];
}

export type LogoShape = 'orbit' | 'stack' | 'prism' | 'grid' | 'wave' | 'split' | 'spark' | 'loop' | 'frame';

export interface PartnerLogo {
  name: string;
  shape: LogoShape;
}

export interface Integration {
  label: string;
  icon: import('@/components/shared/icons/icons').IconName;
}
