import React, { useContext, createContext, useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'
import { Session } from '@supabase/supabase-js'

const SupabaseContext = createContext<{ supabase: typeof supabase, session: Session | null }>({
	supabase,
	session: null,
})

export const SupabaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [session, setSession] = useState<Session | null>(null)

	useEffect(() => {
		// Check active session
		const getSession = async () => {
			const { data: { session } } = await supabase.auth.getSession()
			setSession(session)
		}

		getSession()

		// Listen for auth changes and update session
		const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
			setSession(session)
		})

		return () => {
			authListener?.subscription.unsubscribe()
		}
	}, [])

	return (
		<SupabaseContext.Provider value={{ supabase, session }}>
			{children}
		</SupabaseContext.Provider>
	)
}

export const useSupabase = () => useContext(SupabaseContext)
