import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const MetricSchema = z.object({
  value: z.string(),
  label: z.string(),
  icon: z.string().optional(),
});

const ImplementationGroupSchema = z.object({
  title: z.string(),
  items: z.array(z.string()),
});

const SeoSchema = z.object({
  title: z.string(),
  description: z.string(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/caseStudies' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    dateRange: z.string(),
    role: z.string().optional(),
    badge: z.string().default('Case Study'),
    accent: z.string().default('#7c3aed'),
    techStack: z.array(z.string()),
    metrics: z.array(MetricSchema),
    implementation: z.array(ImplementationGroupSchema),
    seo: SeoSchema,
  }),
});

const ServiceBadgeGroupSchema = z.object({
  title: z.string(),
  description: z.string(),
  emoji: z.string().optional(),
  badges: z.array(z.string()).optional(),
  features: z.array(z.string()),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    badge: z.string(),
    hero: z.object({
      title: z.string(),
      titleHighlight: z.string(),
      description: z.string(),
      ctaConsultation: z.string().default('Schedule Consultation'),
      ctaExpertise: z.string().default('View Expertise'),
    }),
    sectionTitle: z.string(),
    serviceItems: z.array(ServiceBadgeGroupSchema),
    cta: z.object({
      title: z.string(),
      description: z.string(),
      btnConsultation: z.string().default('Schedule Consultation'),
      btnAllServices: z.string().default('View All Services'),
    }),
    seo: SeoSchema,
  }),
});

export const collections = { caseStudies, services };
