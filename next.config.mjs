import pkg from "./i18n/next-i18next.config.js";

const {i18n} = pkg;

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    i18n,
};

export default nextConfig;
