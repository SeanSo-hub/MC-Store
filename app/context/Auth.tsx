"use client";

import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../supabaseClient";
import { Session, User } from "@supabase/supabase-js";

interface AuthContextValue {
  session: Session | undefined;
  signUpNewUser: (
    email: string,
    password: string
  ) => Promise<{
    success: boolean;
    data?: { user: User | undefined; session: Session | undefined };
    error?: string;
  }>;
  signIn: (
    email: string,
    password: string
  ) => Promise<{
    success: boolean;
    data?: { user: User | undefined; session: Session | undefined };
    error?: string;
  }>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [session, setSession] = useState<Session | undefined>(undefined);

  // Signup
  const signUpNewUser = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        console.error("There is a problem signing up:", error);
        return { success: false, error: error.message };
      }

      return { success: true, data }; 
    } catch (error) {
      console.error("Unexpected error during signup:", error);
      return { success: false, error: "An unexpected error occurred" };
    }
  };

  // Signin
  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("There is a problem signing in:", error);
        return { success: false, error: error.message };
      }
      console.log("Sign in Success!");
      return { success: true, data }; 
    } catch (error) {
      console.error("An error occurred:", error);
      return { success: false, error: "An unexpected error occurred" };
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Signout
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("There is a problem signing out:", error);
      }
      setSession(undefined);
    } catch (error) {
      console.error("An error occurred during sign out:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ session, signUpNewUser, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context;
};


