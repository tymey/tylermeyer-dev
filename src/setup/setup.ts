import emailjs from "@emailjs/browser";

emailjs.init({
    publicKey: "Kx2aK846zj3pkO7_o",
    blockHeadless: true,
    blockList: {
        list: [], // Banned emails here
        watchVariable: "from_email"
    },
    limitRate: {
        throttle: 10000, // 1 Req per 10s
    }
})