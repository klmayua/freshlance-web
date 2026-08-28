export interface ScreenSection {
  /** Anchor target id, e.g. 'home' -> #home */
  id: string;
  /** Short label for nav */
  nav: string;
  /** Material Symbols icon for mobile bottom nav */
  icon: string;
  /** Lucide icon name for shell nav (Astro-native) */
  lucide: string;
  /** Stitch screen file id — mobile variant */
  mobile: string;
  /** Stitch screen file id — desktop variant */
  desktop: string;
}

// The 4 Stitch designs, rendered as anchored sections on ONE page.
export const screens: ScreenSection[] = [
  {
    id: 'home',
    nav: 'Home',
    icon: 'home',
    lucide: 'home',
    mobile: 'b9d87a26c23543fead4d5d070d50cd0e',
    desktop: '685587f3b3fd493aaf9bcd8e3289738e',
  },
  {
    id: 'care',
    nav: 'Care',
    icon: 'medical_services',
    lucide: 'stethoscope',
    mobile: '8661ab3f5447470bafd6e4f693d18e87',
    desktop: '0922f5d4752c48ffa90554ce037c0d74',
  },
  {
    id: 'equipment',
    nav: 'Equipment',
    icon: 'precision_manufacturing',
    lucide: 'factory',
    mobile: '128f5024b9b5471b8823060c11d3c8fb',
    desktop: 'c31c43cfb2664323b68408fe1cc4021a',
  },
  {
    id: 'contact',
    nav: 'Contact',
    icon: 'contact_mail',
    lucide: 'mailOpen',
    mobile: '10229c97bcd24a37b653b127dd600902',
    desktop: '254dfd4ddf374ea0ad5158288065331f',
  },
];
