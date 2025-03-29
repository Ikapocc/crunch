"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import {motion} from "motion/react"

import { cn } from "@/lib/functions"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-2 w-[5%] max-md:w-[8%] overflow-hidden rounded-full bg-gray-600",
      className
    )}
    {...props}
  >

  <motion.div
    initial={{ width: "0%" }}
    animate={{ width: `${value}%` }}
    transition={{ type: "spring", stiffness: 100, damping: 45 }}
    className="h-full bg-[#F47521]"
  />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
