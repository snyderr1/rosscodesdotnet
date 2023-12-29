/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
		domains: ['i.imgur.com'],
	},
};

module.exports = nextConfig;
