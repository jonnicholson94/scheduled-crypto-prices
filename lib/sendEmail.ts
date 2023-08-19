
import { Resend } from "resend";
import dotenv from "dotenv"
import { EmailTemplate } from "../template/email-template";
import { ApiResponseData } from "../types/data";

dotenv.config()

const resend = new Resend(process.env.RESEND_API)

export const sendEmail = async (responseData: ApiResponseData[]) => {

    try {

        await resend.emails.send({
            from: `Jon <${process.env.DOMAIN}>`,
            to: [process.env.EMAIL_ADDRESS],
            subject: "The latest crypto prices",
            react: EmailTemplate({ data: responseData })
        })

    } catch (error) {

        throw new Error(error)

    }


}