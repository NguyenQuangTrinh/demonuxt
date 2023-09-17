const title = 'NuxtJS - Skeleton'
const htmlAttrs = {
    lang: 'en'
}
const meta = [
    {charset: 'utf-8'},
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
    {hid: 'description', name: 'description', content: ''},
    {name: 'format-detection', content: 'telephone=no'}
]
const link = [
    {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/images/favicon.ico'
    },
    {
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap",
        rel: "stylesheet"
    },
    {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    }
]
const head = {
    title,
    htmlAttrs,
    meta,
    link
}

export default head