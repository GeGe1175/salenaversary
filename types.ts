
export interface Milestone {
  id: string;
  date: string;
  title: string;
  description: string;
  icon: string;
}

export interface Memory {
  id: string;
  url: string;
  caption: string;
}

export interface AnniversaryState {
  startDate: Date;
  partnerName: string;
  userName: string;
}
