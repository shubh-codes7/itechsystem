import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Clock, Users, Award, Target, Briefcase } from "lucide-react"


export default function CourseOverview({title, why, jobScope}) {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4" data-testid="badge-overview-status">Course Overview</Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-[Poppins] mb-6" data-testid="text-overview-title">
            Why Choose Our <span className="text-primary">{title}</span> Course?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {why}
          </p>
        </div>


        {/* Job Scope & Outcomes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Job Scope */}
          <div>
            <h3 className="text-2xl font-bold mb-6" data-testid="text-job-scope-title">
              Job Scope & Opportunities
            </h3>
            <div className="space-y-4">

              {
                jobScope.map((job) => {
                  return(
                    <Card className="p-4 hover-elevate">
                      <h4 className="font-semibold mb-2">{job.role}</h4>
                      <p className="text-sm text-muted-foreground">{job.jd}</p>
                    </Card>
                  )
                })
              }
              
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}