/** @type {import('@remix-run/dev').AppConfig} */
export default {
  serverDependenciesToBundle: [
    'swiper',
    'swiper/react',
    'swiper/swiper-bundle.css',
    'ssr-window',
    'marked',
    'react-leaflet',
    '@react-leaflet/core',
  ],
  ignoredRouteFiles: ['**/.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
