import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  BookOpen, 
  User, 
  Trophy, 
  ListTodo, 
  Bell,
  Star,
  Target,
  Flame
} from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [streak] = useState(7);
  const [points] = useState(2450);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/dashboard", label: "Dashboard", icon: Target },
    { path: "/learn", label: "Learn", icon: BookOpen },
    { path: "/leaderboard", label: "Leaderboard", icon: Trophy },
    { path: "/todos", label: "To-Do", icon: ListTodo },
    { path: "/profile", label: "Profile", icon: User },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="gradient-primary w-8 h-8 rounded-lg flex items-center justify-center">
              <Star className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">EduMate</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    isActive(item.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* User Stats & Actions */}
          <div className="flex items-center gap-4">
            {/* Streak Counter */}
            <div className="hidden sm:flex items-center gap-1 bg-warning/10 text-warning px-3 py-1 rounded-full">
              <Flame className="w-4 h-4" />
              <span className="text-sm font-medium">{streak} days</span>
            </div>

            {/* Points */}
            <div className="hidden sm:flex items-center gap-1">
              <Star className="w-4 h-4 text-warning" />
              <span className="text-sm font-medium">{points.toLocaleString()}</span>
            </div>

            {/* Notifications */}
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-4 h-4" />
              <Badge variant="destructive" className="absolute -top-1 -right-1 w-2 h-2 p-0" />
            </Button>

            {/* CTA Button */}
            <Button variant="default" className="gradient-primary border-0">
              Start Learning
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;