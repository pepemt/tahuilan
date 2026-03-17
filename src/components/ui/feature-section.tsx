import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface Feature {
  step: string
  title?: string
  content: string
  image: string
}

interface FeatureStepsProps {
  features: Feature[]
  className?: string
  title?: string
  autoPlayInterval?: number
  imageHeight?: string
}

export function FeatureSteps({
  features,
  className,
  title = "How to get Started",
  autoPlayInterval = 3000,
  imageHeight = "h-[400px]",
}: FeatureStepsProps) {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (autoPlayInterval / 100))
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length)
        setProgress(0)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [progress, features.length, autoPlayInterval])

  return (
    <div className={cn("p-8 md:p-12", className)}>
      <div className="max-w-7xl mx-auto w-full">
        {title && (
          <h2 className="site-section-title mb-10 text-center text-white">
            {title}
          </h2>
        )}

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
          <div className="order-2 md:order-1 space-y-8">
            {features.map((feature, index) => {
              const isActive = index === currentFeature;

              return (
              <motion.div
                key={index}
                className={cn(
                  "relative flex items-center gap-6 md:gap-8 rounded-xl border border-transparent px-4 py-3 transition-all duration-500",
                  isActive
                    ? "bg-white/[0.035] border-cyan-200/30 shadow-[0_0_26px_rgba(56,189,248,0.28)]"
                    : "hover:border-zinc-700/50"
                )}
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: isActive ? 1 : 0.35,
                  scale: isActive ? 1.01 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={cn(
                    "w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2",
                    isActive
                      ? "bg-cyan-400/15 border-cyan-200 text-cyan-100 shadow-[0_0_18px_rgba(56,189,248,0.6)] scale-110"
                      : "bg-muted border-muted-foreground",
                  )}
                >
                  {index <= currentFeature ? (
                    <span className="text-lg font-bold">✓</span>
                  ) : (
                    <span className="text-lg font-semibold">{index + 1}</span>
                  )}
                </motion.div>

                <div className="flex-1">
                  <h3
                    className={cn(
                    "text-lg md:text-xl font-semibold transition-colors duration-300",
                      isActive ? "text-white" : "text-zinc-200",
                    )}
                  >
                    {feature.title || feature.step}
                  </h3>
                  <p
                    className={cn(
                      "site-card-text transition-colors duration-300",
                      isActive ? "text-zinc-100" : "text-muted-foreground",
                    )}
                  >
                    {feature.content}
                  </p>
                </div>
              </motion.div>
              );
            })}
          </div>

          <div
            className={cn(
              "order-1 md:order-2 relative overflow-hidden rounded-lg mx-auto w-full",
              "h-[200px] md:h-[300px] lg:h-[400px]",
              imageHeight,
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 rounded-lg overflow-hidden flex items-center justify-center bg-zinc-900"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.step}
                        className="w-full h-full object-cover object-center transition-transform transform"
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background via-background/50 to-transparent" />
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
