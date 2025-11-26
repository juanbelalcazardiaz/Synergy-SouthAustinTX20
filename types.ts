export interface KPIMetric {
  label: string;
  value: string | number;
  subtext?: string;
  trend?: 'up' | 'down' | 'neutral';
  color?: string;
}

export interface ApplicationData {
  date: string;
  count: number;
}

export interface StatusData {
  status: string;
  count: number;
}

export interface RoleData {
  role: string;
  value: number;
}

export interface TableRow {
  role: string;
  newApps: number;
  interviews: number;
  offers: number;
}