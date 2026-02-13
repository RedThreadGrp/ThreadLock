// file: src/components/FeedbackWidget.tsx
// Simple feedback widget for resources
// Privacy-preserving: stores feedback locally only

import React, { useState, useEffect } from "react";

interface FeedbackWidgetProps {
  resourceId: string;
  compact?: boolean;
}

const FEEDBACK_KEY = "threadlock_resource_feedback";

interface FeedbackEntry {
  resourceId: string;
  helpful: boolean;
  timestamp: string;
}

export default function FeedbackWidget({ resourceId, compact = false }: FeedbackWidgetProps) {
  const [feedback, setFeedback] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Load existing feedback on mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem(FEEDBACK_KEY);
      if (stored) {
        const feedbackList: FeedbackEntry[] = JSON.parse(stored);
        const existingFeedback = feedbackList.find((f) => f.resourceId === resourceId);
        if (existingFeedback) {
          setFeedback(existingFeedback.helpful);
          setSubmitted(true);
        }
      }
    } catch (error) {
      console.warn("Failed to load feedback:", error);
    }
  }, [resourceId]);

  const handleFeedback = (helpful: boolean) => {
    if (typeof window === "undefined") return;

    try {
      const stored = localStorage.getItem(FEEDBACK_KEY);
      const feedbackList: FeedbackEntry[] = stored ? JSON.parse(stored) : [];

      // Remove any existing feedback for this resource
      const filtered = feedbackList.filter((f) => f.resourceId !== resourceId);

      // Add new feedback
      filtered.push({
        resourceId,
        helpful,
        timestamp: new Date().toISOString(),
      });

      // Keep only recent 500 entries
      const recent = filtered.slice(-500);

      localStorage.setItem(FEEDBACK_KEY, JSON.stringify(recent));

      setFeedback(helpful);
      setSubmitted(true);
    } catch (error) {
      console.warn("Failed to save feedback:", error);
    }
  };

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        {!submitted ? (
          <>
            <span className="text-xs text-muted-dark">Helpful?</span>
            <button
              onClick={() => handleFeedback(true)}
              className="text-green-400 hover:text-green-300 transition text-sm"
              aria-label="Yes, this was helpful"
            >
              👍
            </button>
            <button
              onClick={() => handleFeedback(false)}
              className="text-red-400 hover:text-red-300 transition text-sm"
              aria-label="No, this was not helpful"
            >
              👎
            </button>
          </>
        ) : (
          <span className="text-xs text-muted-dark">
            Thanks for your feedback! {feedback ? "👍" : "👎"}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border-dark bg-surface-dark-panel p-4">
      {!submitted ? (
        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground-dark">Was this resource helpful?</p>
          <div className="flex gap-2">
            <button
              onClick={() => handleFeedback(true)}
              className="flex-1 rounded-full border border-border-dark bg-surface-dark px-4 py-2 text-sm font-semibold text-foreground-dark hover:bg-green-500/10 hover:border-green-500/30 hover:text-green-400 transition"
            >
              👍 Yes
            </button>
            <button
              onClick={() => handleFeedback(false)}
              className="flex-1 rounded-full border border-border-dark bg-surface-dark px-4 py-2 text-sm font-semibold text-foreground-dark hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-400 transition"
            >
              👎 No
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-sm font-medium text-foreground-dark mb-2">
            {feedback ? "Great! Glad this helped." : "Thanks for letting us know."}
          </p>
          <p className="text-xs text-muted-dark">
            Your feedback helps us improve our resources.
          </p>
        </div>
      )}
    </div>
  );
}

/**
 * Get feedback statistics for a resource
 * @param resourceId - The resource ID to check
 * @returns Object with helpful and not helpful counts
 */
export function getFeedbackStats(resourceId: string): {
  helpful: number;
  notHelpful: number;
  total: number;
} {
  if (typeof window === "undefined") {
    return { helpful: 0, notHelpful: 0, total: 0 };
  }

  try {
    const stored = localStorage.getItem(FEEDBACK_KEY);
    if (!stored) return { helpful: 0, notHelpful: 0, total: 0 };

    const feedbackList: FeedbackEntry[] = JSON.parse(stored);
    const resourceFeedback = feedbackList.filter((f) => f.resourceId === resourceId);

    const helpful = resourceFeedback.filter((f) => f.helpful).length;
    const notHelpful = resourceFeedback.filter((f) => !f.helpful).length;

    return {
      helpful,
      notHelpful,
      total: resourceFeedback.length,
    };
  } catch (error) {
    return { helpful: 0, notHelpful: 0, total: 0 };
  }
}
