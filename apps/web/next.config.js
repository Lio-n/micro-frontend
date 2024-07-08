/** @type {import('next').NextConfig} */

const cdn = process.env.MEDIALIT_SERVER
    ? process.env.MEDIALIT_CDN || process.env.MEDIALIT_SERVER
    : "medialit-prod.s3.ap-southeast-1.amazonaws.com";

const nextConfig = {
    env: {
        NEXT_PUBLIC_FORM_REQUEST_TOPICS:
            process.env.NEXT_PUBLIC_FORM_REQUEST_TOPICS,
        NEXT_PUBLIC_FORM_REQUEST_ASSISTANCE:
            process.env.NEXT_PUBLIC_FORM_REQUEST_ASSISTANCE,
        JITSI_APP_ID: process.env.JITSI_APP_ID,
        JITSI_API_SECRET: process.env.JITSI_API_SECRET,
        JITSI_DOMAIN: process.env.JITSI_DOMAIN,
        JITSI_API_KEY_ID: process.env.JITSI_API_KEY_ID,
        NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
            process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
        STRIPE_SECRET: process.env.STRIPE_SECRET,
        TAG_MANAGER: process.env.TAG_MANAGER,
        NEXT_PUBLIC_CALLBACK_URL: process.env.NEXT_PUBLIC_CALLBACK_URL,
        NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        NEXT_PUBLIC_GOOGLE_REDIRECT_URI:
            process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI,
        REACT_APP_HOST: process.env.REACT_APP_HOST,
        REACT_APP_HERMES_HOST: process.env.REACT_APP_HERMES_HOST,
        REACT_APP_HERMES_PORT: process.env.REACT_APP_HERMES_PORT,
        REACT_APP_API_HOST: process.env.REACT_APP_API_HOST,
        REACT_APP_API_PORT: process.env.REACT_APP_API_PORT,
        REACT_APP_UNICORN_HOST: process.env.REACT_APP_UNICORN_HOST,
        REACT_APP_UNICORN_PORT: process.env.REACT_APP_UNICORN_PORT,
        HTTP_PROTOCOL: process.env.HTTP_PROTOCOL,
    },
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: [
            cdn,
            "amador.edu.do",
            "lh3.googleusercontent.com",
            "via.placeholder.com",
            ".cloudfront.net",
        ],
    },
};

module.exports = nextConfig;
