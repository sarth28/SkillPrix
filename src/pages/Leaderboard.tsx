import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy, 
  Medal, 
  Crown, 
  Star, 
  TrendingUp,
  Calendar,
  Users,
  Target,
  Flame,
  Award
} from "lucide-react";

const Leaderboard = () => {
  const weeklyLeaders = [
    { rank: 1, name: "Emma Chen", points: 2890, level: 15, streak: 12, avatar: "EC", change: "up" },
    { rank: 2, name: "Marcus Rodriguez", points: 2745, level: 14, streak: 8, avatar: "MR", change: "up" },
    { rank: 3, name: "Sarah Johnson", points: 2680, level: 13, streak: 15, avatar: "SJ", change: "down" },
    { rank: 4, name: "Alex Thompson", points: 2590, level: 12, streak: 6, avatar: "AT", change: "same" },
    { rank: 5, name: "Maya Patel", points: 2485, level: 12, streak: 9, avatar: "MP", change: "up" },
    { rank: 6, name: "David Kim", points: 2420, level: 11, streak: 4, avatar: "DK", change: "down" },
    { rank: 7, name: "Lisa Wang", points: 2380, level: 11, streak: 11, avatar: "LW", change: "up" },
    { rank: 8, name: "James Wilson", points: 2340, level: 10, streak: 7, avatar: "JW", change: "same" },
    { rank: 9, name: "Anna Miller", points: 2295, level: 10, streak: 5, avatar: "AM", change: "down" },
    { rank: 10, name: "Carlos Garcia", points: 2250, level: 9, streak: 13, avatar: "CG", change: "up" }
  ];

  const monthlyLeaders = [
    { rank: 1, name: "Sarah Johnson", points: 12890, level: 18, courses: 15, avatar: "SJ" },
    { rank: 2, name: "Emma Chen", points: 12445, level: 17, courses: 13, avatar: "EC" },
    { rank: 3, name: "Marcus Rodriguez", points: 11980, level: 16, courses: 14, avatar: "MR" }
  ];

  const myPosition = {
    weekly: { rank: 47, points: 1850, percentile: 85 },
    monthly: { rank: 23, points: 8945, percentile: 92 }
  };

  const subjects = [
    { name: "Mathematics", leader: "Emma Chen", points: 1450, avatar: "EC" },
    { name: "Science", leader: "Marcus Rodriguez", points: 1380, avatar: "MR" },
    { name: "History", leader: "Sarah Johnson", points: 1290, avatar: "SJ" },
    { name: "English", leader: "Alex Thompson", points: 1220, avatar: "AT" }
  ];

  const achievements = [
    { title: "Top 5% This Week", description: "Rank in top 5% of weekly leaderboard", reward: "1:1 Tutoring Session" },
    { title: "Monthly Champion", description: "Finish #1 for the month", reward: "Premium Course Access" },
    { title: "Subject Master", description: "Lead any subject leaderboard", reward: "Expert Badge" },
    { title: "Consistent Climber", description: "Improve rank 3 weeks in a row", reward: "Bonus Points" }
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Crown className="w-5 h-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-amber-600" />;
    return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
  };

  const getChangeIcon = (change: string) => {
    if (change === "up") return <TrendingUp className="w-4 h-4 text-success" />;
    if (change === "down") return <TrendingUp className="w-4 h-4 text-destructive rotate-180" />;
    return <div className="w-4 h-4 bg-muted rounded-full" />;
  };

  const LeaderCard = ({ leader, showChange = false }: { leader: any; showChange?: boolean }) => (
    <div className={`flex items-center gap-4 p-4 rounded-lg border transition-all hover:shadow-soft ${
      leader.rank <= 3 ? 'gradient-card shadow-soft' : 'bg-card hover:bg-accent/50'
    }`}>
      <div className="flex-shrink-0">
        {getRankIcon(leader.rank)}
      </div>
      
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${
        leader.rank === 1 ? 'gradient-warning' : 
        leader.rank === 2 ? 'bg-gray-400' : 
        leader.rank === 3 ? 'bg-amber-600' : 'gradient-primary'
      }`}>
        {leader.avatar}
      </div>
      
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold truncate">{leader.name}</h4>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3" />
            {leader.points?.toLocaleString()} pts
          </span>
          <span>Level {leader.level}</span>
          {leader.streak && (
            <span className="flex items-center gap-1">
              <Flame className="w-3 h-3 text-warning" />
              {leader.streak}
            </span>
          )}
        </div>
      </div>
      
      {showChange && leader.change && (
        <div className="flex-shrink-0">
          {getChangeIcon(leader.change)}
        </div>
      )}
      
      {leader.rank <= 3 && (
        <Badge className={
          leader.rank === 1 ? 'gradient-warning text-white border-0' :
          leader.rank === 2 ? 'bg-gray-400 text-white border-0' :
          'bg-amber-600 text-white border-0'
        }>
          {leader.rank === 1 ? 'Gold' : leader.rank === 2 ? 'Silver' : 'Bronze'}
        </Badge>
      )}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
          <Trophy className="w-8 h-8 text-warning" />
          Leaderboards
          <Trophy className="w-8 h-8 text-warning" />
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          See how you rank among your peers and compete for the top spots to earn exclusive rewards.
        </p>
      </div>

      {/* My Position Card */}
      <Card className="gradient-primary text-white shadow-medium">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h2 className="text-xl font-bold">Your Current Position</h2>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold">#{myPosition.weekly.rank}</div>
                <div className="text-sm opacity-90">Weekly Ranking</div>
                <div className="text-xs opacity-75">Top {100 - myPosition.weekly.percentile}%</div>
              </div>
              <div>
                <div className="text-3xl font-bold">#{myPosition.monthly.rank}</div>
                <div className="text-sm opacity-90">Monthly Ranking</div>
                <div className="text-xs opacity-75">Top {100 - myPosition.monthly.percentile}%</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leaderboards */}
      <Tabs defaultValue="weekly" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="weekly">This Week</TabsTrigger>
          <TabsTrigger value="monthly">This Month</TabsTrigger>
          <TabsTrigger value="subjects">By Subject</TabsTrigger>
        </TabsList>

        <TabsContent value="weekly" className="space-y-6">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Weekly Rankings
                <Badge variant="secondary" className="ml-auto">Updates daily</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {weeklyLeaders.map(leader => (
                <LeaderCard key={leader.rank} leader={leader} showChange={true} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monthly" className="space-y-6">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-warning" />
                Monthly Champions
                <Badge variant="secondary" className="ml-auto">December 2024</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {monthlyLeaders.map(leader => (
                <LeaderCard key={leader.rank} leader={leader} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subjects" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {subjects.map((subject, index) => (
              <Card key={index} className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{subject.name}</span>
                    <Badge variant="secondary">#1</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full gradient-warning flex items-center justify-center text-white font-semibold">
                      {subject.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold">{subject.leader}</h4>
                      <p className="text-sm text-muted-foreground">{subject.points} points</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Rewards Section */}
      <Card className="shadow-medium">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="w-5 h-5 text-warning" />
            Leaderboard Rewards
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-4 rounded-lg border gradient-card">
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                <Badge className="gradient-success text-white border-0">
                  <Trophy className="w-3 h-3 mr-1" />
                  {achievement.reward}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA */}
      <Card className="gradient-hero text-white text-center shadow-medium">
        <CardContent className="p-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Ready to Climb the Rankings?</h3>
            <p className="opacity-90">Complete more courses and maintain your streak to earn more points!</p>
            <Button className="bg-white text-primary hover:bg-white/90">
              <Target className="w-4 h-4 mr-2" />
              Start Learning Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaderboard;