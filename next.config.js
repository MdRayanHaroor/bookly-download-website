/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Set default Content Security Policy for all routes
        source: '/:path*',
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-src 'self'; object-src 'none';",
          },
        ],
      },
      {
        // Headers specific to the APK file
        source: '/app-release.apk',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/vnd.android.package-archive',
          },
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="app-release.apk"',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;