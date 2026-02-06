/**
 * Social media icon mapping
 * Used to render social links for team members
 * Will be utilized in the "/sobre" page (currently under development)
 */
import {
  FileText,
  Github,
  Globe,
  Instagram,
  Linkedin,
  type LucideIcon,
  Mail,
} from "lucide-react";
import type { SocialIconType } from "./constants";

// Mapping FontAwesome icons to Lucide React icons
export const iconMap: Record<SocialIconType, LucideIcon> = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  globe: Globe,
  envelope: Mail,
  lattes: FileText, // "sheet-plastic" from FA mapped to FileText
};

// Helper function to get icon component
export function getIcon(iconName: SocialIconType): LucideIcon {
  return iconMap[iconName] || Globe;
}
