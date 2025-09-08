// src/lib/assets.ts
export const withBase = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const slug = (s: string) =>
  s.normalize('NFKD').replace(/[\u0300-\u036f]/g,'')
   .toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');

export const imagePath = (series: string, title: string, ext = 'jpg') =>
  `images/${slug(series)}/${slug(title)}.${ext}`;
