import Login from '../components/Login';
import SideBar from "../components/SideBar";
import "../styles/globals.css";
import {SessionProvider} from "../components/SessionProvider";
import { getServerSession } from "next-auth"; 
import { authOptions } from "../pages/api/auth/[...nextauth]";
import React from "react";
import ClientProvider from '@/components/ClientProvider';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  const session = await getServerSession(authOptions)

  console.log(session)
  return (
    <html lang="en">
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
              <Login />
          ): (
                <div className="flex">
                  {/* Sidebar */}
                  <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:win-w-[20rem]">
                  <SideBar />
                  </div>

                  {/*Client provider */}
                  <ClientProvider />
                  <div className="bg-[#343541] flex-1">{children}</div>
                </div>
        )}
        </SessionProvider>
      </body>
    </html>
  );
}
