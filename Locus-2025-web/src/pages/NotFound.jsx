import {Link} from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  bg-black text-white py-2 bg-background">
      <h1 className="text-6xl text-primary font-bold">404</h1>
      <p className="text-xl text-primary">Page not found</p>
      <p className="my-4 text-muted-foreground text-center">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="mt-6 text-primary hover:underline">
        Go back home
      </Link>
    </div>
  )
}