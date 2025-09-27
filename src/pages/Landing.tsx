import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Target, 
  Trophy, 
  Star, 
  Zap,
  Users,
  Award,
  TrendingUp,
  Brain,
  PlayCircle
} from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

const Landing = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Get personalized recommendations adapted to your learning style and progress."
    },
    {
      icon: Target,
      title: "Goal Setting & Tracking",
      description: "Set daily goals and track your progress with detailed analytics and insights."
    },
    {
      icon: Trophy,
      title: "Gamification Rewards",
      description: "Earn badges, maintain streaks, and climb leaderboards while you learn."
    },
    {
      icon: Users,
      title: "Peer Learning",
      description: "Connect with other students and compare progress to stay motivated."
    }
  ];

  const stats = [
    { label: "Active Students", value: "50K+", icon: Users },
    { label: "Courses Available", value: "500+", icon: BookOpen },
    { label: "Success Rate", value: "94%", icon: TrendingUp },
    { label: "Avg. Improvement", value: "85%", icon: Award }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/30 to-background">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="gradient-primary text-white border-0">
                  <Zap className="w-3 h-3 mr-1" />
                  AI-Powered Learning Platform
                </Badge>
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                  Your Personal
                  <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent"> Study Companion</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  EduMate adapts to your learning style, tracks your progress, and keeps you motivated with gamification. 
                  Start your personalized learning journey today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard">
                  <Button size="lg" className="gradient-primary text-white border-0 shadow-medium">
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Start Learning Now
                  </Button>
                </Link>
                <Link to="/learn">
                  <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Explore Courses
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center space-y-2">
                      <Icon className="w-6 h-6 mx-auto text-primary" />
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 animate-float">
                <img 
                  src={heroImage} 
                  alt="Students learning with EduMate" 
                  className="rounded-2xl shadow-strong gradient-card"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 animate-glow">
                <Card className="p-4 shadow-medium">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-warning" />
                    <span className="font-semibold">Level Up!</span>
                  </div>
                </Card>
              </div>
              <div className="absolute -bottom-6 -left-6">
                <Card className="p-4 shadow-medium gradient-success text-white">
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5" />
                    <span className="font-semibold">7 Day Streak!</span>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything You Need to
              <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent"> Succeed</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              EduMate combines the latest in AI technology with proven learning methodologies 
              to create the ultimate study experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="gradient-card border-0 shadow-soft hover:shadow-medium transition-all hover:-translate-y-2">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Learning?
            </h2>
            <p className="text-lg opacity-90">
              Join thousands of students who are already achieving their academic goals with EduMate. 
              Start your personalized learning journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Star className="w-5 h-5 mr-2" />
                  Get Started Free
                </Button>
              </Link>
              <Link to="/learn">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  View Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;