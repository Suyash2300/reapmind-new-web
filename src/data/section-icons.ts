import type { LucideIcon } from "lucide-react";
import {
  Award,
  BarChart3,
  Bot,
  Box,
  Brain,
  Briefcase,
  Brush,
  Building2,
  Calculator,
  CalendarDays,
  Car,
  CircleDollarSign,
  Clock,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Database as DatabaseIcon,
  Factory,
  FileSpreadsheet,
  Fuel,
  GraduationCap,
  Hammer,
  HeartPulse,
  Home,
  Landmark,
  LayoutGrid,
  Map,
  Medal,
  MessageCircle,
  Package,
  Palette,
  PenTool,
  Plane,
  PlaneTakeoff,
  PlayCircle,
  Radio,
  RefreshCw,
  Rocket,
  Server,
  Share2,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Smile,
  Sparkles,
  Sprout,
  ThumbsUp,
  Timer,
  Truck,
  UserCheck,
  UserRound,
  Users,
  UsersRound,
  UtensilsCrossed,
  Zap,
  ClipboardList,
  Headphones,
  MapPin,
  Wifi,
  Globe2,
  Gem,
  BadgeDollarSign,
  Clapperboard,
} from "lucide-react";

export const GLOBAL_STAT_ICONS: LucideIcon[] = [
  UserRound,
  Users,
  Briefcase,
  CalendarDays,
];

export const INDUSTRY_ICONS: Record<string, LucideIcon> = {
  Healthcare: HeartPulse,
  Finance: Landmark,
  Restaurant: UtensilsCrossed,
  eCommerce: ShoppingBag,
  "Electric Vehicle (EV)": Zap,
  SaaS: Cloud,
  Travel: Plane,
  Entertainment: Clapperboard,
  "On-Demand": Clock,
  "Social Media": Share2,
  Logistics: Truck,
  Education: GraduationCap,
  "Real Estate": Home,
  Aviation: PlaneTakeoff,
  Agriculture: Sprout,
  Telecom: Radio,
  "Oil & Gas": Fuel,
  Automotive: Car,
  Insurance: Shield,
  Manufacturing: Factory,
};

export const WHY_CHOOSE_ICONS: LucideIcon[] = [
  BadgeDollarSign,
  Code2,
  BarChart3,
  Smartphone,
  Award,
  ShieldCheck,
  Gem,
  Palette,
];

export const PROCESS_STEP_ICONS: LucideIcon[] = [Compass, PenTool, Hammer, Rocket];

export const ENGAGEMENT_ICONS: LucideIcon[] = [CircleDollarSign, Timer, UsersRound];

export const HIRING_ICONS: LucideIcon[] = [
  FileSpreadsheet,
  RefreshCw,
  UserCheck,
  MapPin,
  Wifi,
  ClipboardList,
  Headphones,
];

export const VIFI_ICONS: LucideIcon[] = [LayoutGrid, Bot, Brush, Server];

export const CONVERSATION_ICONS: LucideIcon[] = [MessageCircle, PlayCircle, Calculator];

export const METRIC_ICONS: LucideIcon[] = [Package, ThumbsUp, Building2, Medal];

export const BUILT_ICONS: LucideIcon[] = [Globe2, MapPin];

export const TECH_STACK_ICONS: Record<string, LucideIcon> = {
  "Programming Languages": Cpu,
  "Frameworks & Libraries": Brain,
  "Cloud Platforms": Cloud,
  Database: DatabaseIcon,
  "DevOps Tools": Hammer,
};

export function getTechStackIcon(category: string): LucideIcon {
  return TECH_STACK_ICONS[category] ?? Box;
}
