export interface ScreenRoute {
  /** URL path segment ('' = home / index) */
  path: string;
  /** Human title shown in <title> and nav */
  title: string;
  /** Short label for nav */
  nav: string;
  /** Material Symbols icon for mobile bottom nav */
  icon: string;
  /** Stitch screen file id — mobile variant */
  mobile: string;
  /** Stitch screen file id — desktop variant */
  desktop: string;
}

export const screens: ScreenRoute[] = [
  {
    path: '',
    title: 'Freshlance — Innovative Healthcare',
    nav: 'Home',
    icon: 'home',
    mobile: 'b9d87a26c23543fead4d5d070d50cd0e',
    desktop: '685587f3b3fd493aaf9bcd8e3289738e',
  },
  {
    path: 'specialized-care',
    title: 'Specialized Care Services — Freshlance',
    nav: 'Care',
    icon: 'medical_services',
    mobile: '8661ab3f5447470bafd6e4f693d18e87',
    desktop: '0922f5d4752c48ffa90554ce037c0d74',
  },
  {
    path: 'equipment-consulting',
    title: 'Equipment & Consulting — Freshlance',
    nav: 'Equipment',
    icon: 'precision_manufacturing',
    mobile: '128f5024b9b5471b8823060c11d3c8fb',
    desktop: 'c31c43cfb2664323b68408fe1cc4021a',
  },
  {
    path: 'consultation-contact',
    title: 'Consultation & Contact — Freshlance',
    nav: 'Contact',
    icon: 'contact_mail',
    mobile: '10229c97bcd24a37b653b127dd600902',
    desktop: '254dfd4ddf374ea0ad5158288065331f',
  },
];

export function getScreen(path: string): ScreenRoute | undefined {
  const p = path.replace(/^\/+|\/+$/g, '');
  return screens.find((s) => s.path === p);
}
