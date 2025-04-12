
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Festival from "./pages/Festival";
import Rituals from "./pages/Rituals";
import Dharma from "./pages/Dharma";
import Ask from "./pages/Ask";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppWithProviders = () => (
  <AuthProvider>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/festival" element={<Festival />} />
      <Route path="/rituals" element={<Rituals />} />
      <Route path="/dharma" element={<Dharma />} />
      <Route path="/ask" element={<Ask />} />
      <Route path="/community" element={<Community />} />
      <Route path="/auth" element={<Auth />} />
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } 
      />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </AuthProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppWithProviders />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
