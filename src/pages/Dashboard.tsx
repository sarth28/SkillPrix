import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  TrendingUp, 
  Award, 
  BookOpen,
  Clock,
  Star,
  Flame,
  Trophy,
  CheckCircle,
  ArrowRight,
  Play,
  Calendar,
  Timer
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [todayGoal] = useState({ current: 3, target: 5 });
  const [weeklyProgress] = useState(78);
  const [streak] = useState(7);
  const [level] = useState({ current: 12, progress: 65 });

  const todayTasks = [
    { id: 1, title: "Complete Math Chapter 5", completed: true, points: 50 },
    { id: 2, title: "Science Quiz: Photosynthesis", completed: true, points: 30 },
    { id: 3, title: "History Timeline Assignment", completed: true, points: 40 },
    { id: 4, title: "English Reading Comprehension", completed: false, points: 35 },
    { id: 5, title: "Practice Algebra Problems", completed: false, points: 25 }
  ];

  const achievements = [
    { icon: Trophy, title: "Math Master", description: "Complete 10 math lessons", unlocked: true },
    { icon: Flame, title: "Week Warrior", description: "7-day learning streak", unlocked: true },
    { icon: Star, title: "Rising Star", description: "Top 10% this month", unlocked: false }
  ];

  const recommendedCourses = [
    { title: "Advanced Calculus", progress: 45, timeLeft: "2h 30m", category: "Mathematics" },
    { title: "Organic Chemistry", progress: 23, timeLeft: "4h 15m", category: "Science" },
    { title: "World War II", progress: 67, timeLeft: "1h 45m", category: "History" }
  ];

  const completedTasks = todayTasks.filter(task => task.completed).length;
  const totalPoints = todayTasks.filter(task => task.completed).reduce((sum, task) => sum + task.points, 0);

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Welcome Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Welcome back, Alex! 👋</h1>
        <p className="text-muted-foreground">Ready to continue your learning journey?</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="gradient-card border-0 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today's Goal</p>
                <p className="text-2xl font-bold">{completedTasks}/{todayGoal.target}</p>
              </div>
              <Target className="w-8 h-8 text-primary" />
            </div>
            <Progress value={(completedTasks / todayGoal.target) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="gradient-card border-0 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Weekly Progress</p>
                <p className="text-2xl font-bold">{weeklyProgress}%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-success" />
            </div>
            <Progress value={weeklyProgress} className="mt-2" />
          </CardContent>
        </Card>

        <Card className="gradient-card border-0 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Current Streak</p>
                <p className="text-2xl font-bold">{streak} days</p>
              </div>
              <Flame className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card border-0 shadow-soft">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Points Today</p>
                <p className="text-2xl font-bold">{totalPoints}</p>
              </div>
              <Star className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Today's Tasks */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="shadow-medium">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                Today's Tasks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {todayTasks.map((task) => (
                <div key={task.id} className={`flex items-center justify-between p-4 rounded-lg border ${
                  task.completed ? 'bg-success/5 border-success/20' : 'bg-card hover:bg-accent/50'
                } transition-colors`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      task.completed ? 'bg-success border-success' : 'border-muted-foreground'
                    }`}>
                      {task.completed && <CheckCircle className="w-4 h-4 text-white" />}
                    </div>
                    <span className={task.completed ? 'line-through text-muted-foreground' : ''}>{task.title}</span>
                  </div>
                  <Badge variant={task.completed ? "secondary" : "default"}>
                    +{task.points} pts
                  </Badge>
                </div>
              ))}
              <Link to="/todos">
                <Button variant="outline" className="w-full mt-4">
                  View All Tasks
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Recommended Courses */}
          <Card className="shadow-medium">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Suggested for You
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recommendedCourses.map((course, index) => (
                <div key={index} className="p-4 rounded-lg border bg-gradient-card hover:shadow-soft transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold">{course.title}</h4>
                      <Badge variant="secondary" className="mt-1">{course.category}</Badge>
                    </div>
                    <Button size="sm" className="gradient-primary text-white border-0">
                      <Play className="w-3 h-3 mr-1" />
                      Continue
                    </Button>
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                    <span>Progress: {course.progress}%</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.timeLeft}
                    </span>
                  </div>
                  <Progress value={course.progress} className="progress-animate" />
                </div>
              ))}
              <Link to="/learn">
                <Button variant="outline" className="w-full">
                  Explore All Courses
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Level Progress */}
          <Card className="shadow-medium gradient-primary text-white">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Level {level.current}</h3>
                  <p className="opacity-90">Knowledge Explorer</p>
                </div>
                <div className="space-y-2">
                  <Progress value={level.progress} className="bg-white/20" />
                  <p className="text-sm opacity-90">{level.progress}% to next level</p>
                </div>
                <Badge className="bg-white/20 text-white border-white/20">
                  <Star className="w-3 h-3 mr-1" />
                  2,450 XP
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Recent Achievements */}
          <Card className="shadow-medium">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-warning" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className={`p-3 rounded-lg border ${
                    achievement.unlocked ? 'gradient-warning text-white' : 'bg-muted/50 text-muted-foreground'
                  }`}>
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6" />
                      <div>
                        <h4 className="font-semibold text-sm">{achievement.title}</h4>
                        <p className="text-xs opacity-80">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              <Link to="/profile">
                <Button variant="outline" className="w-full mt-4">
                  View All Badges
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-medium">
            <CardHeader className="pb-4">
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/learn">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Browse Courses
                </Button>
              </Link>
              <Link to="/leaderboard">
                <Button variant="outline" className="w-full justify-start">
                  <Trophy className="w-4 h-4 mr-2" />
                  View Leaderboard
                </Button>
              </Link>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Study Time
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;