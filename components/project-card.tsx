'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink } from 'lucide-react'

interface Project {
  name: string
  period: string
  techStack: string[]
  githubUrl: string
  achievements: string[]
}

interface ProjectCardProps {
  project: Project
  isEditing: boolean
}

export function ProjectCard({ project, isEditing }: ProjectCardProps) {
  return (
    <Card className="p-6 print-break-inside-avoid">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="mb-2 flex items-center gap-3">
            <h3 className="text-xl font-semibold text-foreground">{project.name}</h3>
            <Button
              variant="ghost"
              size="sm"
              className="no-print h-8 gap-2 text-accent hover:text-accent"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                GitHub
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">{project.period}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, i) => (
            <Badge key={i} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
      
      <ul className="space-y-2">
        {project.achievements.map((achievement, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <span className="mt-1 text-accent">•</span>
            <span className="text-foreground/90">{achievement}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
