import { client } from './client'
import { urlFor } from './image'
import { NewsItem } from '@/types/news'
import { Project } from '@/types/project'

// ---------- Articles ----------

const ARTICLES_QUERY = `*[_type == "article"] | order(date desc) {
  "id": slug.current,
  headline,
  date,
  author,
  preview,
  body,
  category,
  "image": image.asset->url
}`

const ARTICLE_BY_SLUG_QUERY = `*[_type == "article" && slug.current == $slug][0] {
  "id": slug.current,
  headline,
  date,
  author,
  preview,
  body,
  category,
  "image": image.asset->url
}`

const ARTICLE_SLUGS_QUERY = `*[_type == "article"] { "slug": slug.current, date }`

export async function getArticles(): Promise<NewsItem[]> {
  return client.fetch(ARTICLES_QUERY)
}

export async function getArticleBySlug(slug: string): Promise<NewsItem | null> {
  return client.fetch(ARTICLE_BY_SLUG_QUERY, { slug })
}

export async function getArticleSlugs(): Promise<{ slug: string; date: string }[]> {
  return client.fetch(ARTICLE_SLUGS_QUERY)
}

// ---------- Projects ----------

const PROJECTS_QUERY = `*[_type == "project"] {
  name,
  "slug": slug.current,
  assetClass,
  subType,
  description,
  longDescription,
  stats,
  "images": {
    "hero": heroImage.asset->url,
    "spot": spotImage.asset->url,
    "banner": bannerImage.asset->url,
    "feature": featureImage.asset->url,
    "gallery": gallery[].asset->url
  }
}`

const PROJECT_BY_SLUG_QUERY = `*[_type == "project" && slug.current == $slug][0] {
  name,
  "slug": slug.current,
  assetClass,
  subType,
  description,
  longDescription,
  stats,
  "images": {
    "hero": heroImage.asset->url,
    "spot": spotImage.asset->url,
    "banner": bannerImage.asset->url,
    "feature": featureImage.asset->url,
    "gallery": gallery[].asset->url
  }
}`

const PROJECT_SLUGS_QUERY = `*[_type == "project"] { "slug": slug.current }`

export async function getProjects(): Promise<Project[]> {
  return client.fetch(PROJECTS_QUERY)
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return client.fetch(PROJECT_BY_SLUG_QUERY, { slug })
}

export async function getProjectSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(PROJECT_SLUGS_QUERY)
}

// ---------- Team Members ----------

export interface SanityTeamMember {
  name: string
  slug: string
  position: string
  bio?: string
  image?: string
  linkedinId?: string
  isFounder?: boolean
  order?: number
}

const TEAM_MEMBERS_QUERY = `*[_type == "teamMember"] | order(order asc) {
  name,
  "slug": slug.current,
  position,
  bio,
  "image": image.asset->url,
  linkedinId,
  isFounder,
  order
}`

const TEAM_MEMBER_BY_SLUG_QUERY = `*[_type == "teamMember" && slug.current == $slug][0] {
  name,
  "slug": slug.current,
  position,
  bio,
  "image": image.asset->url,
  linkedinId,
  isFounder,
  order
}`

const FOUNDERS_QUERY = `*[_type == "teamMember" && isFounder == true] | order(order asc) {
  name,
  "slug": slug.current,
  position,
  "image": image.asset->url
}`

export async function getTeamMembers(): Promise<SanityTeamMember[]> {
  return client.fetch(TEAM_MEMBERS_QUERY)
}

export async function getTeamMemberBySlug(slug: string): Promise<SanityTeamMember | null> {
  return client.fetch(TEAM_MEMBER_BY_SLUG_QUERY, { slug })
}

export async function getFounders(): Promise<SanityTeamMember[]> {
  return client.fetch(FOUNDERS_QUERY)
}
