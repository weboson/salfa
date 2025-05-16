import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // distDir: 'build', //this line will tell the build to create a file with this name
  /* генерация статистического сайта (для деплоя в GitHub Pages) */
  output: 'export',
  // базовый URL (домен)
  basePath: "/salfa",
  images: {
    // не оптимизировать изображения
    unoptimized: true,
  },
};

export default nextConfig;
