export interface ProjectStatItem {
  label: string;
  value: string;
}

export interface ProjectImages {
  hero: string;
  spot: string;
  banner: string;
  feature: string;
  gallery: string[];
}

export interface Project {
  name: string;
  slug: string;
  assetClass: string;
  subType: string;
  description: string;
  stats: ProjectStatItem[];
  longDescription: string;
  images: ProjectImages;
} 