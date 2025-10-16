"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

export default function AdminLayout({ children }) {
  const style = {
    "--sidebar-width": "12rem",
    "--sidebar-width-icon": "4rem",
  };

  return (
    <div className="dark">
    <QueryClientProvider client={queryClient}>
        <SidebarProvider style={style}>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <div className="flex flex-col flex-1">
              <header className="flex text-white items-center justify-between p-4 border-b bg-background">
                <div className="flex items-center gap-4">
                  <SidebarTrigger />
                  <h2 className="text-lg font-semibold">Admin Dashboard</h2>
                </div>
              </header>
              <main className="flex-1 bg-background overflow-auto p-6">{children}</main>
            </div>
          </div>
        </SidebarProvider>
    </QueryClientProvider>
    </div>
  );
}
