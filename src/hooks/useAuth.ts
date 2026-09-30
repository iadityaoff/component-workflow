import { useEffect, useState } from 'react';
import { supabase, isBackendConfigured } from '../lib/supabase';
import type { User, Session } from '@supabase/supabase-js';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isBackendConfigured) { setLoading(false); return; }
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    }).catch(() => setLoading(false));

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return {
    user,
    session,
    loading,
    signInWithGithub: () => supabase.auth.signInWithOAuth({ provider: 'github' }),
    signOut: () => supabase.auth.signOut(),
  };
}
