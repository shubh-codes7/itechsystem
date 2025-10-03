'use client';

import { StatsCard } from '@/components/StatsCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BookOpen, Briefcase, Target, TrendingUp } from 'lucide-react';

const mockStats = [
  {
    title: "Total Students",
    value: "1,234",
    icon: Users,
    description: "Active enrollments",
    trend: { value: 12, isPositive: true }
  },
  {
    title: "Active Courses",
    value: "24",
    icon: BookOpen,
    description: "Running this semester",
    trend: { value: 8, isPositive: true }
  },
  {
    title: "Job Placements",
    value: "156",
    icon: Briefcase,
    description: "This year",
    trend: { value: 23, isPositive: true }
  },
  {
    title: "Success Rate",
    value: "94%",
    icon: Target,
    description: "Student placement rate",
    trend: { value: 2, isPositive: true }
  }
];

const mockRecentActivities = [
  { activity: "New student enrolled in Full Stack Development", time: "2 hours ago" },
  { activity: "Course 'Data Science' updated", time: "4 hours ago" },
  { activity: "Student placed at TechCorp", time: "1 day ago" },
  { activity: "New service 'Career Counseling' added", time: "2 days ago" }
];

const mockTopCourses = [
  { title: "Full Stack Development", students: 45, revenue: "$12,000" },
  { title: "Data Science", students: 32, revenue: "$9,600" },
  { title: "Mobile App Development", students: 28, revenue: "$8,400" },
  { title: "UI/UX Design", students: 19, revenue: "$5,700" }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold" data-testid="text-dashboard-title">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening at your institute.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {mockStats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Recent Activities
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockRecentActivities.map((activity, index) => (
                <div key={index} className="flex justify-between items-start">
                  <p className="text-sm flex-1" data-testid={`text-activity-${index}`}>
                    {activity.activity}
                  </p>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                    {activity.time}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Performing Courses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockTopCourses.map((course, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium" data-testid={`text-course-${index}`}>
                      {course.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {course.students} students
                    </p>
                  </div>
                  <span className="font-bold text-primary">{course.revenue}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}