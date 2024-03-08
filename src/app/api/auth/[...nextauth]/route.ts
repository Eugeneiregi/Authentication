import prisma from "@/src/lib/prisma";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";




export const authOptions: AuthOptions = {
    providers: [

        CredentialsProvider({
            name: "credentials",

            credentials: {
                username: {
                    label: "username",
                    type: "text",
                    placeholder: "Your username"
                },
                password: {
                    label: "password",
                    type: "password"
                },
            },
            async authorize(credentials) {
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials?.username

                    },
                });

                if (!user) throw new Error("Username or password is not correct");
                if (!credentials?.password) throw new Error("Please Provide Your Password");
                const isPassowrdCorrect = await bcrypt.compare(credentials.password, user.password);

                if (!isPassowrdCorrect) throw new Error("User name or password is not correct");

                // if (!user.emailVerified) throw new Error("Please verify your email first!");

                const { password, ...userWithoutPass } = user;
                return userWithoutPass;
            },
        }),
    ],
    };
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };