/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
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