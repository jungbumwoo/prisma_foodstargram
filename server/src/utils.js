import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });
import { adjectives, noun} from "./words";
import nodemailer from "nodemailer";
import sgTransport from "nodemailer-sendgrid-transport";

export const secretGenerator = () => {
    let randomNum = Math.floor(Math.random() * adjectives.length);
    return `${adjectives[randomNum]} ${noun[randomNum]}`
}


const sendMail = email => {
    const options = {
        auth: {
            api_user: process.env.SGID,
            api_key: process.env.SGPASSWORD
        }
    };
    const client = nodemailer.createTransport(sgTransport(options));
    return client.sendMail(email);
}


export const sendSecretMail = (address, secret) => {
    const email = {
        from: "bumbum@prismagramfood.co",
        to: address,
        subject: "🔒Login Secret for Prismagram🔒",
        html: `Hello! Your login secret is ${secret}.<br/>Copy paste on the app/website to log in`
    };
    return sendMail(email);
}

/*
adjectives[random]
noun[random]
*/
