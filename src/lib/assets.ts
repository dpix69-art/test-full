// src/lib/assets.ts
export const withBase = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

// Умляуты → ASCII, пробелы/символы → дефисы
export const slug = (s: string) =>
  s
    .replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue')
    .replace(/Ä/g,'Ae').replace(/Ö/g,'Oe').replace(/Ü/g,'Ue')
    .replace(/ß/g,'ss')
    .normalize('NFKD').replace(/[\u0300-\u036f]/g,'')
    .toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');

// По умолчанию используем JPG
export const imagePath = (series: string, title: string, ext: string = 'jpg') =>
  `images/${slug(series)}/${slug(title)}.${ext}`;
