"use client";

import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../supabaseClient";
import { Session, User } from "@supabase/supabase-js";

interface AuthContextValue {
  session: Session | null;
  signUpNewUser: (
    email: string,
    password: string
  ) => Promise<{
    success: boolean;
    data?: { user: User | null; session: Session | null };
    error?: string;
  }>;
  signIn: (
    email: string,
    password: string
  ) => Promise<{
    success: boolean;
    data?: { user: User | null; session: Session | null };
    error?: string;
  }>;
  signOut: () => Promise<{ success: boolean; error?: string }>;
  loading: boolean;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);

  // Signup
  const signUpNewUser = async (
    email: string,
    password: string
  ) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error("Signup error:", error.message);
        return { success: false, error: error.message };
      }

      return { success: true, data };
    } catch (error) {
      console.error("Unexpected error during signup:", error);
      return { success: false, error: "An unexpected error occurred" };
    } finally {
      setLoading(false);
    }
  };

  // Signin
  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Signin error:", error.message);
        return { success: false, error: error.message };
      }
      return { success: true, data };
    } catch (error) {
      console.error("Unexpected error during signin:", error);
      return { success: false, error: "An unexpected error occurred" };
    } finally {
      setLoading(false);
    }
  };

  // Signout
  const signOut = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Signout error:", error.message);
        return { success: false, error: error.message };
      }
      setSession(null);
      return { success: true };
    } catch (error) {
      console.error("Unexpected error during signout:", error);
      return { success: false, error: "An unexpected error occurred" };
    } finally {
      setLoading(false);
    }
  };

  // Fetch session on mount and subscribe to auth changes
  useEffect(() => {
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
    };

    fetchSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ session, signUpNewUser, signIn, signOut, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};
