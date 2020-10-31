import { prisma } from "../../../../generated/prisma-client";
import { secretGenerator } from "../../../utils";

export default {
    Mutation: {
        requestSecret: async(_, args) => {
            const { email } = args;
            let loginSecret = secretGenerator();            
            try {
                await prisma.updateUser({ data: { loginSecret }, where: {email}});
                return true;
            } catch(error) {
                console.log(error);
                return false;
            }
        }
    }
}