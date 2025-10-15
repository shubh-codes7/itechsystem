"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Toaster } from '@/components/ui/toaster';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeProvider } from "@/hooks/use-theme";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <SidebarProvider style={style}>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <div className="flex flex-col flex-1">
              <header className="flex items-center justify-between p-4 border-b bg-background">
                <div className="flex items-center gap-4">
                  <SidebarTrigger data-testid="button-sidebar-toggle" />
                  <h2 className="text-lg font-semibold">Admin Dashboard</h2>
                </div>
                <ThemeToggle />
              </header>
              <main className="flex-1 overflow-auto p-6">{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
