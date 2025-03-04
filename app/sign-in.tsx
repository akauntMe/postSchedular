import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Alert, TextInput, Image, ScrollView,
    Text, ActivityIndicator, TouchableOpacity,
    View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { Link, Redirect } from "expo-router";
import { useGlobalContext } from "@/lib/global-provider";
import icons from "@/constants/Icons";
import { useRouter } from "expo-router";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const { refetch } = useGlobalContext();
    const router = useRouter();

    const handleLogin = async () => {
        // setLoading(true);
        // try {
        //     await login(email, password);
        //     refetch();
        //     router.replace("/dashboard"); // Redirect after login
        // } catch (error) {
        //     Alert.alert("Login Failed", error);
        // } finally {
        //     setLoading(false);
        // }
    };

    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView
                contentContainerStyle={{
                    height: "100%",
                }}
            >
                <View className="px-10 h-full items-center justify-center">
                    <View className="flex items-center flex-row gap-x-2 mb-20">
                        <Image source={icons.logo} />
                        <Text className="text-center text-2xl  flex items-center font-rubik-semibold text-black-200">
                            PostScheduler
                        </Text>
                    </View>

                    <View className="flex w-full">
                        <Text className="text-2xl text-left font-rubik-medium mb-6">Login</Text>

                        <View

                            className="flex-row focus:border-gray-500 bg-red-600 items-center border border-gray-600 rounded-lg gap-x-2 px-4 py-3 mb-4">
                            <Image source={icons.email} />
                            <TextInput
                                className="flex-1 text-base outline-none border-none ring-0 text-gray-500 text-semibold"
                                placeholder="Email address"
                                keyboardType="email-address"
                            //   value={email}
                            //   onChangeText={setEmail}
                            />
                        </View>



                        <View className="flex-row mt-6 focus:border-gray-500 items-center border border-gray-600 rounded-lg gap-x-2 px-4 py-3 mb-4">
                            <Image source={icons.password} />
                            <TextInput
                                className="flex-1 text-base outline-none border-none ring-0 text-red-500 text-semibold"
                                placeholder="Password"
                                secureTextEntry={!showPassword}
                            // value={password}
                            // onChangeText={setPassword}
                            />
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                                <Feather name={showPassword ? "eye" : "eye-off"} size={20} color="gray" />
                            </TouchableOpacity>
                        </View>
                        <View className="text-right w-full mt-0">
                            <Link href="/auth/forget-password" className="text-primary text-right font-semibold">
                                Forget password?
                            </Link>
                        </View>


                        <View className="mt-4 w-full  justify-center items-center">

                            <TouchableOpacity style={{ backgroundColor: "#219BEE" }} className="p-4 w-10/12 rounded-lg hover:bg-red-700 shadow-md shadow-cyan-300 hover:shadow-cyan-400" onPress={handleLogin} disabled={loading}>
                                {/* {loading ? <ActivityIndicator color="white" /> :  */}
                                <Text className="text-white text-center font-semibold">Login</Text>
                                {/* } */}
                            </TouchableOpacity>
                        </View>

                        <View className="mt-4 w-full  justify-center items-center">
                            <View className="w-4/12 h-2 bg-red-700 justify-center items-center">

                            </View>


                            <Text className="uppercase font-semibold">or</Text>

                            <View className="w-4/12 h-2 bg-red-700 justify-center items-center">

                            </View>
                        </View>



                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Auth;