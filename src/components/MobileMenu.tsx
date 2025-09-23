import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Menu, 
  X, 
  Home, 
  ShoppingBag, 
  Heart, 
  User, 
  Search,
  ChevronRight,
  Truck,
  Phone,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      icon: Home,
      label: "Home",
      href: "/",
    },
    {
      icon: ShoppingBag,
      label: "Shop",
      href: "/shop",
    },
    {
      icon: Search,
      label: "Search",
      href: "/search",
    },
    {
      icon: Heart,
      label: "Wishlist",
      href: "/wishlist",
    },
    {
      icon: User,
      label: "Account",
      href: "/dashboard",
    },
    {
      icon: Truck,
      label: "Track Order",
      href: "/track-order",
    },
  ];

  const categories = [
    { name: "Electronics", href: "/category/electronics" },
    { name: "Fashion", href: "/category/fashion" },
    { name: "Home & Garden", href: "/category/home" },
    { name: "Sports", href: "/category/sports" },
    { name: "Books", href: "/category/books" },
    { name: "Beauty", href: "/category/beauty" },
  ];

  const supportLinks = [
    { name: "Help & FAQ", href: "/faq", icon: HelpCircle },
    { name: "Contact Us", href: "/contact", icon: Phone },
    { name: "About Us", href: "/about" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-white hover:text-orange">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      
      <SheetContent side="left" className="w-80 p-0 bg-white">
        <SheetHeader className="p-6 bg-navy text-white">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-white">
              <Link to="/" onClick={handleLinkClick} className="text-xl font-bold">
                E<span className="text-orange">Store</span>
              </Link>
            </SheetTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-orange"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto">
          {/* Main Navigation */}
          <div className="p-4">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 p-3 rounded-lg text-text-primary hover:bg-muted transition-colors"
                >
                  <item.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{item.label}</span>
                  <ChevronRight className="h-4 w-4 ml-auto text-text-secondary" />
                </Link>
              ))}
            </div>
          </div>

          <Separator />

          {/* Categories */}
          <div className="p-4">
            <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3">
              Categories
            </h3>
            <div className="space-y-1">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  to={category.href}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between p-2 rounded-lg text-text-primary hover:bg-muted transition-colors"
                >
                  <span>{category.name}</span>
                  <ChevronRight className="h-4 w-4 text-text-secondary" />
                </Link>
              ))}
            </div>
          </div>

          <Separator />

          {/* Support Links */}
          <div className="p-4">
            <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide mb-3">
              Support
            </h3>
            <div className="space-y-1">
              {supportLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 p-2 rounded-lg text-text-secondary hover:bg-muted transition-colors"
                >
                  {link.icon && <link.icon className="h-4 w-4" />}
                  <span className="text-sm">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <Separator />

          {/* Quick Actions */}
          <div className="p-4 space-y-3">
            <Link to="/login" onClick={handleLinkClick}>
              <Button variant="outline" className="w-full justify-start">
                <User className="h-4 w-4 mr-2" />
                Sign In / Register
              </Button>
            </Link>
            
            <Link to="/deals" onClick={handleLinkClick}>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Today's Deals
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="p-4 bg-muted/30 border-t">
          <div className="text-center text-xs text-text-secondary">
            <p className="mb-1">Free shipping on orders over $50</p>
            <p>Customer Service: 1-800-ESTORE</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;