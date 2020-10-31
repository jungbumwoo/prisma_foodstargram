import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(__dirname, "../.env") });
import { adjectives, noun} from "./words";
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SG_API);

export const secretGenerator = () => {
    let randomNum = Math.floor(Math.random() * adjectives.length);
    return `${adjectives[randomNum]} ${noun[randomNum]}`
}

const sendMail = async(email) => {
    try {
        await sgMail.send(email);
        console.log("mail is sent!");
    } catch(error) {
        console.log(error);
        if (error.response) {
            console.error(error.response.body)
        }
    }
}

export const sendSecretMail = (address, secret) => {
    const email = {
        from: "bumbum@prismagramfood.co",
        to: address,
        subject: "🔒Login Secret for Prismagram🔒",
        text: "lala blah blah",
        html: `Hello! Your login secret is <b>${secret}</b>.<br/>Copy paste on the app/website to log in`
    };
    return sendMail(email);
}

/*
adjectives[random]
noun[random]
*/
