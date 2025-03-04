import React, { createContext, useContext, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface GlobalContextType {
    isLogged: boolean;
    user: User | null;
    loading: boolean;
    refetch: () => void;
    logout: () => Promise<void>;
}

interface User {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    avatar: string;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
    children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchUser = async () => {
        setLoading(true);
        try {
            const token = await AsyncStorage.getItem("token"); // Get token from storage
            if (!token) throw new Error("No token found");

            const response = await axios.get("http://localhost:8080/api/user", {
                headers: { Authorization: `Bearer ${token}` },
            });

            setUser(response.data);
        } catch (error) {
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const logout = async () => {
        await AsyncStorage.removeItem("token"); // Remove token
        setUser(null);
    };

    const isLogged = !!user;

    return (
        <GlobalContext.Provider
            value={{
                isLogged,
                user,
                loading,
                refetch: fetchUser,
                logout,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = (): GlobalContextType => {
    const context = useContext(GlobalContext);
    if (!context) throw new Error("useGlobalContext must be used within a GlobalProvider");

    return context;
};

export default GlobalProvider;
