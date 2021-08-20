module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["res.cloudinary.com", "via.placeholder.com"],
    },

    // async rewrites() {
    //     return [
    //         {
    //             source: "/api/:path*",
    //             destination: "http://localhost:5000/:path*", // Proxy to Backend
    //         },
    //     ];
    // },
};
