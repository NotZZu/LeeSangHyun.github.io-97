"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

interface EditableSectionProps {
  isEditing: boolean
  value: string
  onChange: (value: string) => void
  className?: string
  multiline?: boolean
}

export function EditableSection({ isEditing, value, onChange, className, multiline = false }: EditableSectionProps) {
  const [localValue, setLocalValue] = useState(value)

  const handleBlur = () => {
    onChange(localValue)
  }

  if (!isEditing) {
    if (multiline) {
      return <p className={cn("whitespace-pre-wrap", className)}>{value}</p>
    }
    return <span className={className}>{value}</span>
  }

  if (multiline) {
    return (
      <Textarea
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        onBlur={handleBlur}
        className={cn("min-h-[100px] resize-y", className)}
      />
    )
  }

  return (
    <Input
      value={localValue}
      onChange={(e) => setLocalValue(e.target.value)}
      onBlur={handleBlur}
      className={className}
    />
  )
}
