
import React, { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "@/hooks/use-toast";
import { Loader2, Camera, User } from "lucide-react";

interface Profile {
  username: string;
  full_name: string;
  avatar_url: string;
}

const Profile = () => {
  const { user, signOut } = useAuth();
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [profile, setProfile] = useState<Profile>({
    username: "",
    full_name: "",
    avatar_url: "",
  });

  useEffect(() => {
    if (user) {
      fetchProfile();
    } else {
      setLoading(false);
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      if (!user) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("username, full_name, avatar_url")
        .eq("id", user.id)
        .single();

      if (error) {
        throw error;
      }

      if (data) {
        setProfile({
          username: data.username || "",
          full_name: data.full_name || "",
          avatar_url: data.avatar_url || "",
        });
      }
    } catch (error: any) {
      console.error("Error fetching profile:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async () => {
    try {
      setUpdating(true);
      if (!user) return;

      const updates = {
        id: user.id,
        username: profile.username,
        full_name: profile.full_name,
        avatar_url: profile.avatar_url,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from("profiles")
        .upsert(updates, { onConflict: "id" });

      if (error) {
        throw error;
      }

      toast({
        title: "Profile updated",
        description: "Your profile has been updated successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Update failed",
        description: error.message,
        variant: "destructive",
      });
      console.error("Error updating profile:", error.message);
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[50vh]">
          <Loader2 className="h-8 w-8 animate-spin text-madhwa-500" />
        </div>
      </Layout>
    );
  }

  if (!user) {
    return (
      <Layout>
        <div className="container mx-auto py-12">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Authentication Required</CardTitle>
              <CardDescription>
                Please sign in to view your profile.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button
                onClick={() => window.location.href = "/auth"}
                className="w-full"
              >
                Go to Login
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center text-madhwa-700 dark:text-madhwa-300">
            Your Profile
          </h1>

          <div className="flex flex-col md:flex-row gap-8">
            <Card className="w-full md:w-1/3">
              <CardHeader>
                <CardTitle className="text-center">Profile Picture</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <Avatar className="h-32 w-32 mb-4">
                  {profile.avatar_url ? (
                    <AvatarImage src={profile.avatar_url} alt={profile.full_name} />
                  ) : (
                    <AvatarFallback className="bg-madhwa-100 text-madhwa-600 text-2xl">
                      <User className="h-12 w-12" />
                    </AvatarFallback>
                  )}
                </Avatar>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Profile photo upload feature coming soon
                </p>
                <Button
                  variant="outline"
                  className="w-full flex items-center gap-2"
                  disabled
                >
                  <Camera className="h-4 w-4" />
                  Upload Photo
                </Button>
              </CardContent>
            </Card>

            <Card className="w-full md:w-2/3">
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>
                  Update your account information here
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    value={user.email || ""}
                    disabled
                    className="bg-muted"
                  />
                  <p className="text-xs text-muted-foreground">
                    Your email address cannot be changed
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    value={profile.username}
                    onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                    placeholder="Choose a username"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    value={profile.full_name}
                    onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
                    placeholder="Your full name"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-4 sm:justify-between">
                <Button
                  onClick={updateProfile}
                  disabled={updating}
                  className="w-full sm:w-auto bg-madhwa-600 hover:bg-madhwa-700"
                >
                  {updating ? "Saving..." : "Save Changes"}
                </Button>
                <Button
                  variant="outline"
                  onClick={signOut}
                  className="w-full sm:w-auto text-destructive border-destructive hover:bg-destructive/10"
                >
                  Sign Out
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
