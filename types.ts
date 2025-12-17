export enum SpectrumType {
  GAMMA = 'GAMMA',
  XRAY = 'XRAY',
  UV = 'UV',
  VISIBLE = 'VISIBLE',
  INFRARED = 'INFRARED',
  MICROWAVE = 'MICROWAVE',
  RADIO = 'RADIO'
}

export interface SpectrumBand {
  id: SpectrumType;
  name: string;
  frequencyRange: string; // e.g., "10^20 - 10^24 Hz"
  wavelengthRange: string; // e.g., "< 10^-12 m"
  energy: string;
  description: string;
  applications: string[];
  dangers: string[];
  color: string; // Tailwind class or hex
  startWavelength: number; // Logarithmic scale representation for UI
  endWavelength: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}