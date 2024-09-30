"use client"
import { AuthContext } from "@/context/AuthContext";
import { UserRole } from "@/utils/schema";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import LandingPage from "../../components/forms/homePage";


export default function Dashboard() {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter()

  return (
    <>
      {user?.role === UserRole.customer ||
      user?.role === UserRole.restaurantManager ? (
        <LandingPage/>
      ) : (
        router.push("/login")
      )}
    </>
  );
}
