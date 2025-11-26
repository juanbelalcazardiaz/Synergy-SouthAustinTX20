import { ApplicationData, KPIMetric, RoleData, StatusData, TableRow } from './types';

// Palette matches "Soft Pastel": Soft Blue, Slate, Mint, Cool Purple
export const COLORS = {
  primary: '#60A5FA', // Blue-400
  secondary: '#94A3B8', // Slate-400
  success: '#34D399', // Emerald-400
  accent: '#A78BFA', // Violet-400
  warning: '#FBBF24', // Amber-400
  background: '#F4F4F5',
  card: '#FFFFFF',
  textMain: '#18181B',
  textMuted: '#71717A',
};

export const KPI_DATA: KPIMetric[] = [
  { label: 'Total Applicants', value: 45, trend: 'neutral' },
  { label: 'Interviews Conducted', value: 25, trend: 'up' },
  { label: 'Offers Extended', value: 24, subtext: 'High Conversion', trend: 'up', color: 'text-emerald-600' },
  { label: 'App → Interview', value: '55.6%', trend: 'neutral' },
  { label: 'Interview → Offer', value: '96%', subtext: 'Top Performance', trend: 'up', color: 'text-emerald-600' },
];

export const APPLICATION_VELOCITY: ApplicationData[] = [
  { date: 'Sep 28', count: 2 },
  { date: 'Oct 5', count: 10 },
  { date: 'Oct 12', count: 5 },
  { date: 'Oct 19', count: 7 },
  { date: 'Oct 26', count: 10 },
  { date: 'Nov 2', count: 6 },
  { date: 'Nov 9', count: 3 },
  { date: 'Nov 16', count: 1 },
  { date: 'Nov 23', count: 1 },
];

export const PIPELINE_STATUS: StatusData[] = [
  { status: 'Sent Documents', count: 12 },
  { status: 'In Communication', count: 7 },
  { status: 'Documents Signed', count: 7 },
  { status: 'Initial Contact', count: 6 },
  { status: 'New', count: 4 },
  { status: 'Interview Scheduled', count: 2 },
];

export const ROLE_DISTRIBUTION: RoleData[] = [
  { role: 'Caregiver', value: 35 },
  { role: 'Backup Childcare', value: 10 },
];

export const FUNNEL_TABLE_DATA: TableRow[] = [
  { role: 'Caregiver', newApps: 4, interviews: 25, offers: 24 },
  { role: 'Backup Childcare Provider', newApps: 2, interviews: 1, offers: 0 },
];

export const RECRUITER_NAME = "Mariana Marcela Arevalo";
export const DATE_RANGE = "Oct 1, 2025 – Nov 23, 2025";
