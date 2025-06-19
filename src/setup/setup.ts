import emailjs from "@emailjs/browser";

import { EMAILJS_PUBLIC_KEY } from "private";

emailjs.init({
    publicKey: EMAILJS_PUBLIC_KEY,
    blockHeadless: true,
    blockList: {
        list: [], // Banned emails here
        watchVariable: "from_email"
    },
    limitRate: {
        throttle: 10000, // 1 Req per 10s
    }
})