
export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
  color: string;
  description: string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
}
