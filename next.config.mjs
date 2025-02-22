/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"api.microlink.io",
		],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'framerusercontent.com',
			},
		],
	},
};

export default nextConfig;
