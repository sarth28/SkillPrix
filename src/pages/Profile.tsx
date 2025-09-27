import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  User, 
  Award, 
  Trophy, 
  Star, 
  Target,
  BookOpen,
  Calendar,
  Flame,
  Settings,
  Edit,
  TrendingUp,
  Clock
} from "lucide-react";

const Profile = () => {
  const user = {
    name: "Alex Johnson",
    grade: "10th Grade",
    joinDate: "September 2023",
    totalPoints: 12450,
    currentLevel: 12,
    levelProgress: 65,
    streak: 7,
    completedCourses: 8,
    hoursStudied: 142
  };

  const badges = [
    { icon: Trophy, title: "Math Champion", description: "Complete 5 math courses", earned: true, date: "Dec 2024" },
    { icon: Flame, title: "Streak Master", description: "Maintain 7-day streak", earned: true, date: "Dec 2024" },
    { icon: Star, title: "Top Performer", description: "Top 5% this month", earned: true, date: "Nov 2024" },
    { icon: Target, title: "Goal Crusher", description: "Complete 10 daily goals", earned: true, date: "Nov 2024" },
    { icon: BookOpen, title: "Knowledge Seeker", description: "Complete 10 courses", earned: false, progress: 80 },
    { icon: Award, title: "Perfect Score", description: "Score 100% on 5 quizzes", earned: false, progress: 60 }
  ];

  const subjects = [
    { name: "Mathematics", level: 15, progress: 78, courses: 3 },
    { name: "Science", level: 12, progress: 65, courses: 2 },
    { name: "History", level: 9, progress: 45, courses: 2 },
    { name: "English", level: 11, progress: 58, courses: 1 }
  ];

  const recentActivity = [
    { action: "Completed", item: "Advanced Algebra Quiz", points: 50, time: "2 hours ago" },
    { action: "Started", item: "Organic Chemistry Course", points: 0, time: "1 day ago" },
    { action: "Achieved", item: "Math Champion Badge", points: 100, time: "2 days ago" },
    { action: "Completed", item: "History Timeline Assignment", points: 40, time: "3 days ago" }
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Profile Header */}
      <Card className="gradient-primary text-white shadow-medium">
        <CardContent className="p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-12 h-12" />
            </div>
            <div className="text-center md:text-left space-y-4 flex-1">
              <div>
                <h1 className="text-3xl font-bold">{user.name}</h1>
                <p className="opacity-90">{user.grade} • Joined {user.joinDate}</p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{user.totalPoints.toLocaleString()}</div>
                  <div className="text-sm opacity-80">Total Points</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Level {user.currentLevel}</div>
                  <div className="text-sm opacity-80">Current Level</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{user.streak}</div>
                  <div className="text-sm opacity-80">Day Streak</div>
                </div>
              </div>
            </div>
            <Button variant="secondary" className="bg-white/20 text-white border-white/20 hover:bg-white/30">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Level Progress */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-success" />
                Level Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Level {user.currentLevel}</span>
                <span className="text-sm text-muted-foreground">{user.levelProgress}% to Level {user.currentLevel + 1}</span>
              </div>
              <Progress value={user.levelProgress} className="h-3 progress-animate" />
              <p className="text-sm text-muted-foreground">
                Keep up the great work! You need {Math.round((100 - user.levelProgress) * 20)} more points to reach the next level.
              </p>
            </CardContent>
          </Card>

          {/* Subject Progress */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Subject Mastery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {subjects.map((subject, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold">{subject.name}</h4>
                      <p className="text-sm text-muted-foreground">Level {subject.level} • {subject.courses} courses completed</p>
                    </div>
                    <Badge variant="secondary">{subject.progress}%</Badge>
                  </div>
                  <Progress value={subject.progress} className="progress-animate" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Badges & Achievements */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-warning" />
                Badges & Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {badges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border text-center space-y-3 ${
                        badge.earned 
                          ? 'gradient-warning text-white shadow-soft' 
                          : 'bg-muted/50 text-muted-foreground'
                      }`}
                    >
                      <Icon className="w-8 h-8 mx-auto" />
                      <div>
                        <h4 className="font-semibold text-sm">{badge.title}</h4>
                        <p className="text-xs opacity-80">{badge.description}</p>
                        {badge.earned ? (
                          <Badge variant="secondary" className="mt-2 bg-white/20 text-white border-white/20">
                            {badge.date}
                          </Badge>
                        ) : (
                          <div className="mt-2">
                            <Progress value={badge.progress} className="h-1" />
                            <span className="text-xs">{badge.progress}%</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Quick Stats */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="w-4 h-4" />
                  Completed Courses
                </span>
                <span className="font-semibold">{user.completedCourses}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  Hours Studied
                </span>
                <span className="font-semibold">{user.hoursStudied}h</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Flame className="w-4 h-4" />
                  Longest Streak
                </span>
                <span className="font-semibold">21 days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Trophy className="w-4 h-4" />
                  Rank This Month
                </span>
                <Badge className="gradient-success text-white border-0">#47</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.action === 'Completed' ? 'bg-success' : 
                    activity.action === 'Achieved' ? 'bg-warning' : 'bg-primary'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm">
                      <span className="font-medium">{activity.action}</span> {activity.item}
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                      {activity.points > 0 && (
                        <Badge variant="secondary" className="text-xs">
                          +{activity.points} pts
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Settings */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-muted-foreground" />
                Account Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <User className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Target className="w-4 h-4 mr-2" />
                Learning Goals
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="w-4 h-4 mr-2" />
                Preferences
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;