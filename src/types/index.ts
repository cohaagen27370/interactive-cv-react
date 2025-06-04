export type Presentation = {
  title: string;
  description: string;
  profil: string;
  address: {
    name: string;
    street: string;
    city: string;
    telephone: string;
    email: string;
  };
};

export type Experience = {
  society: {
    name: string;
    url: string;
  };
  job: string;
  startYear: number;
  endYear?: number;
  description: string;
  tags: Array<Tag>;
};

export type Tag = {
  label: string;
  tag: string;
};

export type Skill = {
  title: string;
  content: Array<SkillContent>;
};

export type SkillContent = {
  name: string;
  level: number;
  label: string;
};

export type Training = {
  title: string;
  period: string;
  spec: string;
};

export type HowTo = {
  qualities: Array<string>;
  defaults: Array<string>;
};

export type Version = {
  id: number;
  version: number;
  date: string;
};

export type IpifyResponse = {
  ip: string;
};
