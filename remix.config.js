/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverDependenciesToBundle: [
    'swiper',
    'swiper/react',
    'swiper/modules',
    'swiper/swiper-bundle.css',
    'remix-utils/client-only',
    'ssr-window',
    'marked',
    'react-leaflet',
    '@react-leaflet/core',
  ],
  ignoredRouteFiles: ['**/.*'],
  serverModuleFormat: 'cjs',
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
