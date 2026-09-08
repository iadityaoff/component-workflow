import { useState } from "react";
import { supabase } from "../lib/supabase";
import { Mail, ArrowRight, Loader2, Code2 } from "lucide-react";
import { useRoute } from "../lib/router";
import { Button } from "../components/ui/Button";

export function SignInPage() {
  const { } = useRoute();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGithubSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: window.location.origin,
        },
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: window.location.origin,
        },
      });
      if (error) throw error;
      setSent(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center bg-surface-2 p-4 dark:bg-ink-950">
      <div className="w-full max-w-md">
        {/* Brand/Logo */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-xl bg-ink-900 text-lg font-bold text-white shadow-xl dark:bg-white dark:text-ink-900">
            21
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-ink-900 dark:text-white">
            Welcome to 21st Clone
          </h1>
          <p className="mt-2 text-ink-500">
            Build, share, and remix premium UI components.
          </p>
        </div>

        <div className="rounded-2xl border border-ink-100 bg-white p-8 shadow-xl dark:border-ink-800 dark:bg-ink-900">
          {sent ? (
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400">
                <Mail className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold text-ink-900 dark:text-white">Check your email</h2>
              <p className="mt-2 text-ink-500">
                We've sent a magic link to <span className="font-medium text-ink-900 dark:text-white">{email}</span>.
              </p>
              <Button
                variant="ghost"
                className="mt-6 w-full"
                onClick={() => setSent(false)}
              >
                Try a different email
              </Button>
            </div>
          ) : (
            <>
              <Button
                variant="outline"
                className="w-full h-11 gap-3 font-semibold"
                onClick={handleGithubSignIn}
              >
                <Code2 className="h-5 w-5" />
                Continue with GitHub
              </Button>

              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-ink-100 dark:border-ink-800"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-ink-400 dark:bg-ink-900">Or continue with email</span>
                </div>
              </div>

              <form onSubmit={handleMagicLink} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink-700 dark:text-ink-300">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="mt-1 block h-11 w-full rounded-lg border border-ink-200 bg-ink-50 px-4 text-sm focus:border-violet-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-violet-500/20 dark:border-ink-800 dark:bg-ink-950 dark:text-white"
                  />
                </div>

                {error && (
                  <div className="rounded-lg bg-rose-50 p-3 text-xs text-rose-600 dark:bg-rose-900/20 dark:text-rose-400">
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-11 font-semibold bg-ink-900 dark:bg-white dark:text-ink-900"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      Send Magic Link
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </>
          )}
        </div>

        <p className="mt-8 text-center text-xs text-ink-400">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
}
