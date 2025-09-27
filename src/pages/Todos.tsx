import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  Circle, 
  Plus, 
  Edit3, 
  Trash2,
  Clock,
  Calendar,
  Target,
  Star,
  Brain,
  Zap,
  BookOpen,
  Timer
} from "lucide-react";

const Todos = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete Math Chapter 5: Quadratic Equations",
      description: "Finish reading and complete practice problems",
      subject: "Mathematics",
      priority: "high",
      dueDate: "Today",
      estimatedTime: "45 min",
      points: 50,
      completed: false,
      aiGenerated: true
    },
    {
      id: 2,
      title: "Science Quiz: Photosynthesis Process",
      description: "Review notes and take the online quiz",
      subject: "Science",
      priority: "medium",
      dueDate: "Tomorrow",
      estimatedTime: "30 min",
      points: 35,
      completed: true,
      aiGenerated: false
    },
    {
      id: 3,
      title: "History Essay: Industrial Revolution",
      description: "Write 500-word essay on causes and effects",
      subject: "History",
      priority: "high",
      dueDate: "Dec 28",
      estimatedTime: "2 hours",
      points: 80,
      completed: false,
      aiGenerated: true
    },
    {
      id: 4,
      title: "English Reading: Chapter 3-4",
      description: "Read assigned chapters and take notes",
      subject: "English",
      priority: "low",
      dueDate: "Dec 30",
      estimatedTime: "1 hour",
      points: 40,
      completed: false,
      aiGenerated: false
    },
    {
      id: 5,
      title: "Practice Algebra Word Problems",
      description: "Complete 10 word problems from workbook",
      subject: "Mathematics",
      priority: "medium",
      dueDate: "Dec 29",
      estimatedTime: "25 min",
      points: 30,
      completed: true,
      aiGenerated: true
    }
  ]);

  const [filter, setFilter] = useState("all");

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    if (filter === "ai-generated") return task.aiGenerated;
    return true;
  });

  const completedCount = tasks.filter(t => t.completed).length;
  const totalPoints = tasks.filter(t => t.completed).reduce((sum, t) => sum + t.points, 0);
  const progressPercentage = (completedCount / tasks.length) * 100;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

  const getSubjectIcon = (subject: string) => {
    switch (subject) {
      case "Mathematics": return Target;
      case "Science": return Zap;
      case "History": return BookOpen;
      case "English": return Edit3;
      default: return BookOpen;
    }
  };

  const aiSuggestions = [
    "Review weak areas from last quiz",
    "Practice problems similar to homework",
    "Prepare for upcoming test next week",
    "Complete unfinished assignments"
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">My To-Do List</h1>
          <p className="text-muted-foreground">Manage your tasks and stay on track with your learning goals</p>
        </div>
        <Button className="gradient-primary text-white border-0">
          <Plus className="w-4 h-4 mr-2" />
          Add New Task
        </Button>
      </div>

      {/* Progress Overview */}
      <Card className="gradient-card shadow-medium">
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{completedCount}/{tasks.length}</div>
              <div className="text-sm text-muted-foreground">Tasks Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">{totalPoints}</div>
              <div className="text-sm text-muted-foreground">Points Earned</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">{Math.round(progressPercentage)}%</div>
              <div className="text-sm text-muted-foreground">Progress</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{tasks.filter(t => t.aiGenerated && !t.completed).length}</div>
              <div className="text-sm text-muted-foreground">AI Suggested</div>
            </div>
          </div>
          <div className="mt-4">
            <Progress value={progressPercentage} className="progress-animate" />
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Tasks List */}
        <div className="lg:col-span-2 space-y-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            <Button
              variant={filter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("all")}
            >
              All Tasks ({tasks.length})
            </Button>
            <Button
              variant={filter === "pending" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("pending")}
            >
              Pending ({tasks.filter(t => !t.completed).length})
            </Button>
            <Button
              variant={filter === "completed" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("completed")}
            >
              Completed ({completedCount})
            </Button>
            <Button
              variant={filter === "ai-generated" ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter("ai-generated")}
            >
              <Brain className="w-3 h-3 mr-1" />
              AI Generated ({tasks.filter(t => t.aiGenerated).length})
            </Button>
          </div>

          {/* Tasks */}
          <div className="space-y-4">
            {filteredTasks.map((task) => {
              const SubjectIcon = getSubjectIcon(task.subject);
              return (
                <Card key={task.id} className={`shadow-soft transition-all hover:shadow-medium ${
                  task.completed ? 'bg-success/5 border-success/20' : 'hover:-translate-y-1'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <button 
                        onClick={() => toggleTask(task.id)}
                        className="mt-1 transition-colors"
                      >
                        {task.completed ? (
                          <CheckCircle className="w-6 h-6 text-success" />
                        ) : (
                          <Circle className="w-6 h-6 text-muted-foreground hover:text-primary" />
                        )}
                      </button>

                      <div className="flex-1 space-y-3">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className={`font-semibold ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                              {task.title}
                              {task.aiGenerated && (
                                <Badge variant="secondary" className="ml-2 text-xs">
                                  <Brain className="w-3 h-3 mr-1" />
                                  AI
                                </Badge>
                              )}
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">{task.description}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              <Edit3 className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          <Badge variant="outline" className="flex items-center gap-1">
                            <SubjectIcon className="w-3 h-3" />
                            {task.subject}
                          </Badge>
                          <Badge variant={getPriorityColor(task.priority)}>
                            {task.priority} priority
                          </Badge>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="w-3 h-3" />
                            {task.dueDate}
                          </span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Timer className="w-3 h-3" />
                            {task.estimatedTime}
                          </span>
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            {task.points} pts
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Today's Focus */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Today's Focus
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg gradient-primary text-white">
                <h4 className="font-semibold mb-2">Complete 3 tasks</h4>
                <p className="text-sm opacity-90">You're {completedCount}/3 tasks towards your daily goal!</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl font-bold">{tasks.filter(t => !t.completed && t.dueDate === "Today").length}</div>
                <div className="text-sm text-muted-foreground">Tasks due today</div>
              </div>
            </CardContent>
          </Card>

          {/* AI Suggestions */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                AI Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground mb-4">
                Based on your learning patterns, here are some recommended tasks:
              </p>
              {aiSuggestions.map((suggestion, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                  <Zap className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{suggestion}</span>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">
                <Plus className="w-4 h-4 mr-2" />
                Generate More Tasks
              </Button>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>This Week</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Tasks Completed</span>
                <span className="font-semibold">12/15</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Points Earned</span>
                <span className="font-semibold">450</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Avg. Completion Time</span>
                <span className="font-semibold">35 min</span>
              </div>
              <Progress value={80} className="mt-4" />
              <p className="text-xs text-muted-foreground">80% completion rate this week</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Todos;