import { useRoute } from "../lib/router";
import { useAuth } from "../hooks/useAuth";

export function UtilityPage() {
  const { route } = useRoute();
  const { user, loading, signOut } = useAuth();
  if (route.page === "profile") return <section className="mx-auto max-w-2xl px-6 py-12">
    <h1 className="text-2xl font-bold">Your profile</h1>
    {loading ? <p role="status" className="mt-4">Loading account...</p> : user ? <div className="mt-6 space-y-4"><p>{user.email}</p><button onClick={() => void signOut()} className="rounded-lg border p-3">Sign out</button></div> : <div className="mt-6 space-y-4"><p>Sign in to manage your account.</p><a href="#/signin" className="inline-block rounded-lg border p-3">Sign in</a></div>}
  </section>;
  if (route.page === "blog") return <section className="mx-auto max-w-2xl px-6 py-12">
    <h1 className="text-2xl font-bold">Guides and announcements</h1><p className="mt-4">Read the original product guides and announcements on 21st.</p><a href="https://21st.dev/blog" target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-lg border p-3">Open the 21st blog</a>
  </section>;
  return <section className="mx-auto max-w-2xl px-6 py-12"><h1 className="text-2xl font-bold">Page not found</h1><p className="mt-4">This address does not match a page in this project.</p><a href="#/components" className="mt-6 inline-block rounded-lg border p-3">Browse components</a></section>;
}
