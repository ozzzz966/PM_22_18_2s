export interface Skill {
  name: string;
  percentage: number;
}

export interface Job{
  position: string;
  date: string;
  company: string;
  description: string;
}

export interface Education {
  major: string;
  years: string;
  university: string;
}

export interface Reference {
  name: string;
  position: string;
  phone: string;
}

export interface Contacts {
  icon: string;
  iconName: string;
  title: string;
  text: string;
}

export interface Interest {
  iconName: string;
  name: string;
  img: string;
}

export interface HeaderInfo {
  img: string;
  photoName: string;
  name: string;
  surname: string;
  job: string;
  profile: string;
  description: string;
}
