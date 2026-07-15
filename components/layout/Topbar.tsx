"use client";

import { useEffect, useRef, useState } from "react";
import { Bell, Search } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";
import NotificationDropdown from "./NotificationDropdown";

export default function Topbar() {
  const { isLoaded } = useUser();
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  function handleClickOutside(event: MouseEvent) {
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target as Node)
    ) {
      setShowNotifications(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  return (
    <header className="ml-72 h-24 border-b border-white/10 flex items-center justify-between px-10">

     <div className="relative w-[420px]">
  <Search
    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
    size={20}
  />

  <input
    type="text"
    placeholder="Search anything..."
    className="w-full rounded-xl bg-slate-900 border border-white/10 pl-12 pr-4 py-3 outline-none focus:border-cyan-400"
  />
</div>



      <div className="flex items-center gap-6">

        <div className="relative">

  <div className="relative">

  <button
    onClick={() => setShowNotifications(!showNotifications)}
    className="transition hover:text-cyan-400"
  >
    <Bell size={24} />
  </button>

  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 animate-pulse" />

</div>

  {showNotifications && <NotificationDropdown />}

</div>

        {isLoaded && (
  <UserButton
    appearance={{
      elements: {
        avatarBox: "w-11 h-11",
      },
    }}
  />
)}
      </div>

    </header>
  );
}