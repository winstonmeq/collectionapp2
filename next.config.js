/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

    env: {
    //dre eh butang ang domain.. dire lng mag change automatic na ma update ang mga domain

   
     //NEXTAUTH_URL: 'https://deltaph.vercel.app',
<<<<<<< HEAD
     NEXTAUTH_URL: 'http://192.168.102.18:3000',
=======
     NEXTAUTH_URL: 'http://192.168.0.8:3000',
>>>>>>> c1e7b09065cde66cdc51d7c05cb80e213850cafb
     NEXTAUTH_SECRET: 'v7COYqKpEdnCbd5aISAw9BxjupOLKYCgBVZ2kwusMNs=',

 },

}



module.exports = nextConfig

