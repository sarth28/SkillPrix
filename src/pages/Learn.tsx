import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Clock, 
  Star, 
  Users,
  TrendingUp,
  Zap,
  Play,
  CheckCircle,
  Timer,
  Award,
  Target,
  Flame
} from "lucide-react";
import mathImage from "@/assets/math-course.jpg";
import scienceImage from "@/assets/science-course.jpg";
import historyImage from "@/assets/history-course.jpg";

const Learn = () => {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);

  const suggestedCourses = [
    {
      id: 1,
      title: "Advanced Algebra",
      description: "Master algebraic equations and problem-solving techniques",
      image: mathImage,
      progress: 45,
      duration: "6 weeks",
      difficulty: "Intermediate",
      rating: 4.8,
      students: 1250,
      category: "Mathematics",
      instructor: "Dr. Sarah Chen"
    },
    {
      id: 2,
      title: "Organic Chemistry Basics",
      description: "Introduction to organic compounds and reactions",
      image: scienceImage,
      progress: 0,
      duration: "8 weeks",
      difficulty: "Beginner",
      rating: 4.9,
      students: 2100,
      category: "Science",
      instructor: "Prof. Michael Torres"
    },
    {
      id: 3,
      title: "World History: Renaissance",
      description: "Explore the cultural and artistic revolution of the Renaissance",
      image: historyImage,
      progress: 78,
      duration: "5 weeks",
      difficulty: "Intermediate",
      rating: 4.7,
      students: 890,
      category: "History",
      instructor: "Dr. Emma Rodriguez"
    }
  ];

  const trendingCourses = [
    {
      id: 4,
      title: "Physics: Motion & Forces",
      description: "Understand the fundamental laws of physics",
      image: scienceImage,
      progress: 0,
      duration: "7 weeks",
      difficulty: "Intermediate",
      rating: 4.8,
      students: 1850,
      category: "Physics",
      trending: true
    },
    {
      id: 5,
      title: "Statistics & Probability",
      description: "Learn data analysis and statistical methods",
      image: mathImage,
      progress: 23,
      duration: "6 weeks",
      difficulty: "Beginner",
      rating: 4.6,
      students: 1450,
      category: "Mathematics",
      trending: true
    }
  ];

  const shortCourses = [
    {
      id: 6,
      title: "Quick Math Facts",
      description: "5-minute daily math practice",
      duration: "5 min",
      difficulty: "All Levels",
      icon: Target,
      category: "Mathematics"
    },
    {
      id: 7,
      title: "Science in 60 Seconds",
      description: "Daily science facts and trivia",
      duration: "1 min",
      difficulty: "All Levels",
      icon: Zap,
      category: "Science"
    },
    {
      id: 8,
      title: "History Highlights",
      description: "Quick historical events recap",
      duration: "3 min",
      difficulty: "All Levels",
      icon: Clock,
      category: "History"
    }
  ];

  const ourPicks = [
    {
      id: 9,
      title: "Critical Thinking Skills",
      description: "Develop analytical and reasoning abilities",
      image: mathImage,
      progress: 12,
      duration: "4 weeks",
      difficulty: "All Levels",
      rating: 4.9,
      students: 3200,
      category: "Skills",
      featured: true
    }
  ];

  const CourseCard = ({ course, showProgress = true }: { course: any; showProgress?: boolean }) => (
    <Card 
      className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 cursor-pointer"
      onMouseEnter={() => setHoveredCourse(course.id)}
      onMouseLeave={() => setHoveredCourse(null)}
    >
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover"
        />
        {course.trending && (
          <Badge className="absolute top-3 right-3 gradient-warning text-white border-0">
            <TrendingUp className="w-3 h-3 mr-1" />
            Trending
          </Badge>
        )}
        {course.featured && (
          <Badge className="absolute top-3 right-3 gradient-primary text-white border-0">
            <Star className="w-3 h-3 mr-1" />
            Editor's Pick
          </Badge>
        )}
        <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
          <Button size="sm" className="bg-white text-primary hover:bg-white/90">
            <Play className="w-4 h-4 mr-2" />
            {course.progress > 0 ? 'Continue' : 'Start Course'}
          </Button>
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <div className="flex justify-between items-start mb-2">
            <Badge variant="secondary">{course.category}</Badge>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Star className="w-3 h-3 text-warning fill-current" />
              {course.rating}
            </div>
          </div>
          <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
          <p className="text-muted-foreground text-sm mb-3">{course.description}</p>
        </div>

        {showProgress && course.progress > 0 && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progress</span>
              <span>{course.progress}%</span>
            </div>
            <Progress value={course.progress} className="progress-animate" />
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {course.students?.toLocaleString()} students
          </span>
        </div>

        {hoveredCourse === course.id && (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center pt-2 border-t">
              <span className="text-sm text-muted-foreground">by {course.instructor}</span>
              <Badge variant="outline">{course.difficulty}</Badge>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );

  const ShortCourseCard = ({ course }: { course: any }) => {
    const Icon = course.icon;
    return (
      <Card className="gradient-card shadow-soft hover:shadow-medium transition-all hover:-translate-y-1 cursor-pointer">
        <CardContent className="p-6 text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full gradient-primary flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold mb-2">{course.title}</h3>
            <p className="text-sm text-muted-foreground">{course.description}</p>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Timer className="w-3 h-3" />
              {course.duration}
            </span>
            <Badge variant="secondary">{course.difficulty}</Badge>
          </div>
          <Button size="sm" className="w-full gradient-primary text-white border-0">
            <Play className="w-3 h-3 mr-2" />
            Quick Start
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Discover Your Next
          <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent"> Learning Adventure</span>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our curated collection of courses designed to help you achieve your academic goals.
        </p>
      </div>

      {/* Learning Sections */}
      <Tabs defaultValue="suggested" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="suggested">Suggested for You</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="picks">Our Picks</TabsTrigger>
          <TabsTrigger value="shorts">Short on Time</TabsTrigger>
        </TabsList>

        <TabsContent value="suggested" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              Suggested for You
            </h2>
            <Badge variant="secondary" className="gradient-primary text-white border-0">
              Based on your progress
            </Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestedCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="trending" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-success" />
              Trending This Week
            </h2>
            <Badge variant="secondary" className="gradient-success text-white border-0">
              <Flame className="w-3 h-3 mr-1" />
              Hot Topics
            </Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="picks" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Award className="w-6 h-6 text-warning" />
              Editor's Picks
            </h2>
            <Badge variant="secondary" className="gradient-warning text-white border-0">
              <Star className="w-3 h-3 mr-1" />
              Handpicked
            </Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ourPicks.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="shorts" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              Short on Time
            </h2>
            <Badge variant="secondary" className="gradient-primary text-white border-0">
              Quick learning sessions
            </Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shortCourses.map(course => (
              <ShortCourseCard key={course.id} course={course} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Motivational Quote */}
      <Card className="gradient-hero text-white text-center shadow-medium">
        <CardContent className="p-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl font-bold">"The beautiful thing about learning is that no one can take it away from you."</h3>
            <p className="opacity-90">- B.B. King</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Learn;