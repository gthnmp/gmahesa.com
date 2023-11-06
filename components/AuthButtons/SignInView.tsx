import { GoogleAuthentication, GithubAuthentication, DiscordAuthentication } from "."

export const SignInView = () => {
  return(
    <div className="w-full grid grid-rows-3 sm:grid-rows-none sm:grid-cols-3 gap-5">
      <GoogleAuthentication>
        Sign in with Google
      </GoogleAuthentication>
      <GithubAuthentication>
        Sign in with Github 
      </GithubAuthentication>
      <DiscordAuthentication>
        Sign in with Discord
      </DiscordAuthentication>
    </div>
  )
}
