module.exports = {
    purge: ['./pages/**/*.js', './components/**/*.js', './layout/**/*.js'],
    darkMode: false,
    theme: {

        container: {
            screens: {
                sm: "100%",
                md: "100%",
                lg: "1024px",
                xl: "1024px",
            }
        },

        extend: {
            colors: {
                'searchgreen': '#008b45',
                'footerbg': '#dcdcdc',
                'footercolor': '#908f8f',
                'topbarbg': '#006400',
                'bggray': '#EBEBEB',
                'pricered': "#b22222",
                'loginred': "#a52a2a",
                'logincreate': "#cd3333",
                'notfocus': '#ee8262',
            },
        },
    },
    plugins: [],
}