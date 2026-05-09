import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? process.env.clientId,
      clientSecret: process.env.GITHUB_SECRET ?? process.env.clientSecret,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
};