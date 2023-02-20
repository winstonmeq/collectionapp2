/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

    env: {
    //dre eh butang ang domain.. dire lng mag change automatic na ma update ang mga domain

   
     //NEXTAUTH_URL: 'https://deltaph.vercel.app',
     NEXTAUTH_URL: 'http://192.168.0.8:3000',
     NEXTAUTH_SECRET: 'v7COYqKpEdnCbd5aISAw9BxjupOLKYCgBVZ2kwusMNs=',

 },

}



module.exports = nextConfig

