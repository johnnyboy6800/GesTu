import Image from "next/image";
import Login from "./components/auth/Login/page";

import NavBar from "./components/navbar/page";

export default function Home() {
  return (
  <>
  <div className="grid grid-rows-1 items-center justify-items-center min-h-screen   sm:p-20 font-[family-name:var(--font-geist-sans)]">
  <Login />
  </div>
  </>
  );
}
