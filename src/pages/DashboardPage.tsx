import { useState, useEffect } from "react";
import { BookmarkIcon, HistoryIcon, UploadCloudIcon, SettingsIcon, UserIcon, LogOutIcon, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "../hooks/useAuth";
import { useRoute } from "../lib/router";
import { Button } from "../components/ui/Button";

const TABS = [
  { id: "saved", label: "Saved", icon: BookmarkIcon },
  { id: "copied", label: "Copied", icon: HistoryIcon },
  { id: "uploaded", label: "Uploaded", icon: UploadCloudIcon },
];

export function DashboardPage() {
  const { user, loading, signOut } = useAuth();
  const { navigate } = useRoute();
  const [activeTab, setActiveTab] = useState("saved");

  useEffect(() => {
    if (!loading && !user) {
      navigate("#/signin");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center bg-white dark:bg-ink-950">
        <Loader2 className="h-8 w-8 animate-spin text-ink-400" />
      </div>
    );
  }

  if (!user) return null;

  const displayName = user.user_metadata.full_name || user.email?.split('@')[0] || "User";
  const avatarUrl = user.user_metadata.avatar_url;

  return (
    <div className="flex flex-1 flex-col bg-white dark:bg-ink-950">
      <header className="border-b border-ink-100 px-8 py-12 dark:border-ink-800/80">
        <div className="flex items-center gap-6">
          <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-violet-500 to-rose-500 p-0.5 shadow-lg shadow-violet-500/10">
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[22px] bg-white text-3xl font-bold dark:bg-ink-900">
              {avatarUrl ? (
                <img src={avatarUrl} alt="" className="h-full w-full object-cover" />
              ) : (
                displayName.slice(0, 2).toUpperCase()
              )}
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-ink-900 dark:text-white">{displayName}</h1>
            <p className="mt-1 text-ink-500">
              {user.email} • Member since {new Date(user.created_at).toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}
            </p>
          </div>
          <div className="ml-auto flex gap-2">
            <button className="flex h-10 items-center gap-2 rounded-lg border border-ink-200 px-4 text-sm font-medium hover:bg-ink-50 dark:border-ink-800 dark:hover:bg-ink-900">
              <SettingsIcon className="h-4 w-4" />
              Settings
            </button>
            <button 
              onClick={signOut}
              className="flex h-10 items-center gap-2 rounded-lg border border-rose-200 px-4 text-sm font-medium text-rose-600 hover:bg-rose-50 dark:border-rose-900/30 dark:text-rose-400 dark:hover:bg-rose-900/20"
            >
              <LogOutIcon className="h-4 w-4" />
              Sign out
            </button>
          </div>
        </div>
      </header>

      <nav className="border-b border-ink-100 bg-white px-8 dark:border-ink-800/80 dark:bg-ink-950">
        <div className="flex gap-8">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 py-4 text-sm font-medium transition ${
                activeTab === tab.id ? "text-ink-900 dark:text-white" : "text-ink-500 hover:text-ink-900 dark:hover:text-white"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-ink-900 dark:bg-white"
                />
              )}
            </button>
          ))}
        </div>
      </nav>

      <main className="flex-1 p-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="col-span-full py-20 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-ink-50 text-ink-300 dark:bg-ink-900">
              <UserIcon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 font-medium text-ink-900 dark:text-white">No {activeTab} components yet</h3>
            <p className="mt-2 text-sm text-ink-500">Start exploring the community components to see them here.</p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => navigate("#/")}
            >
              Browse Components
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
