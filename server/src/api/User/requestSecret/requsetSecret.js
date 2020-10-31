import { prisma } from "../../../../generated/prisma-client";
import { secretGenerator, sendSecretMail } from "../../../utils";

export default {
    Mutation: {
        requestSecret: async(_, args) => {
            const { email } = args;
            let loginSecret = secretGenerator();            
            try {
                await prisma.updateUser({ data: { loginSecret }, where: {email}});
                sendSecretMail(email, loginSecret);
                return true;
            } catch(error) {
                console.log(error);
                return false;
            }
        }
    }
}