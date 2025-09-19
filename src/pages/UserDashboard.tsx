import { Link } from "react-router-dom";
import { User, Package, Heart, MapPin, Settings, CreditCard } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const UserDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">My Account</h1>
          <p className="text-text-secondary">Welcome back, John! Manage your account and orders.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Profile Overview */}
          <Card className="md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-text-secondary">Name</p>
                  <p className="font-medium">John Doe</p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Email</p>
                  <p className="font-medium">john@example.com</p>
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Member since</p>
                  <p className="font-medium">January 2024</p>
                </div>
                <Link to="/account-settings">
                  <Button variant="outline" className="w-full mt-4">
                    Edit Profile
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Recent Orders */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Recent Orders
                </div>
                <Link to="/orders">
                  <Button variant="ghost" size="sm">View All</Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">#ES2024-001234</p>
                    <p className="text-sm text-text-secondary">Premium Headphones + 1 more</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$1,415.97</p>
                    <p className="text-sm text-green-600">Delivered</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium">#ES2024-001233</p>
                    <p className="text-sm text-text-secondary">Smart Watch</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$399.99</p>
                    <p className="text-sm text-orange">Shipped</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/orders">
                  <Button variant="outline" className="w-full h-16 flex flex-col gap-1">
                    <Package className="h-4 w-4" />
                    <span className="text-xs">Orders</span>
                  </Button>
                </Link>
                <Link to="/wishlist">
                  <Button variant="outline" className="w-full h-16 flex flex-col gap-1">
                    <Heart className="h-4 w-4" />
                    <span className="text-xs">Wishlist</span>
                  </Button>
                </Link>
                <Link to="/address-book">
                  <Button variant="outline" className="w-full h-16 flex flex-col gap-1">
                    <MapPin className="h-4 w-4" />
                    <span className="text-xs">Addresses</span>
                  </Button>
                </Link>
                <Link to="/account-settings">
                  <Button variant="outline" className="w-full h-16 flex flex-col gap-1">
                    <Settings className="h-4 w-4" />
                    <span className="text-xs">Settings</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Wishlist Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Wishlist
                </div>
                <Link to="/wishlist">
                  <Button variant="ghost" size="sm">View All</Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-4">
                <p className="text-text-secondary">3 items saved</p>
                <Link to="/wishlist">
                  <Button variant="outline" className="mt-2">View Wishlist</Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Account Security */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Two-factor authentication</span>
                  <span className="text-xs text-red-500">Disabled</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Password strength</span>
                  <span className="text-xs text-green-500">Strong</span>
                </div>
                <Link to="/account-settings">
                  <Button variant="outline" className="w-full mt-4">
                    Security Settings
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Account Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-card rounded-lg p-6 text-center">
            <p className="text-2xl font-bold text-text-primary">12</p>
            <p className="text-sm text-text-secondary">Total Orders</p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center">
            <p className="text-2xl font-bold text-text-primary">$2,450</p>
            <p className="text-sm text-text-secondary">Total Spent</p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center">
            <p className="text-2xl font-bold text-text-primary">3</p>
            <p className="text-sm text-text-secondary">Wishlist Items</p>
          </div>
          <div className="bg-card rounded-lg p-6 text-center">
            <p className="text-2xl font-bold text-text-primary">Gold</p>
            <p className="text-sm text-text-secondary">Member Status</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default UserDashboard;