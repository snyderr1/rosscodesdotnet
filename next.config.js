/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
		domains: ['i.imgur.com', 'imgur.com', 'https://imgur.com', 'https://i.imgur.com'],
	},
};

module.exports = nextConfig;
