
const cron = require("node-cron")

import { fetchWebsiteData } from "../lib/fetchWebsiteData";
import { sendEmail } from "../lib/sendEmail";

cron.schedule("0 4 * * *", async () => {
    try {
        const apiData = await fetchWebsiteData()
        sendEmail(apiData)
    } catch (error) {
        throw new Error(error)
    }
}, {
    timezone: "Europe/London"
})

