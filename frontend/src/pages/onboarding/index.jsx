import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
// import api from "@/services/api"; // Your API service

// Mock API for demonstration
const mockApi = {
  questions: [
    {
      id: "q1",
      text: "How often do you prefer to work remotely?",
      options: [
        { id: "opt1", label: "Daily" },
        { id: "opt2", label: "A few times a week" },
        { id: "opt3", label: "Rarely" },
      ],
    },
    {
      id: "q2",
      text: "What is your preferred team size?",
      options: [
        { id: "opt1", label: "Small (2-5 people)" },
        { id: "opt2", label: "Medium (6-15 people)" },
        { id: "opt3", label: "Large (15+ people)" },
      ],
    },
    {
      id: "q3",
      text: "Which best describes your work style?",
      options: [
        { id: "opt1", label: "Collaborative" },
        { id: "opt2", label: "Independent" },
        { id: "opt3", label: "A mix of both" },
      ],
    },
  ],
  currentQuestionIndex: 0,
  fetchNextQuestion() {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (this.currentQuestionIndex < this.questions.length) {
          resolve(this.questions[this.currentQuestionIndex]);
        } else {
          resolve(null); // No more questions
        }
      }, 500);
    });
  },
  submitAnswer(questionId, answerValue) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Submitting answer for ${questionId}: ${answerValue}`);
        this.currentQuestionIndex++;
        resolve({ success: true });
      }, 300);
    });
  },
};

export default function OnboardingPage({ className, ...props }) {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch the first question when the component mounts
  useEffect(() => {
    setIsLoading(true);
    mockApi.fetchNextQuestion().then((question) => {
      setCurrentQuestion(question);
      setIsLoading(false);
    });
  }, []);

  // Handle the logic for submitting an answer and getting the next question
  const handleAnswerSubmit = async (answerId) => {
    if (!currentQuestion) return;

    setIsLoading(true);
    toast.info("Submitting your answer...");

    // Submit the answer and fetch the next question
    await mockApi.submitAnswer(currentQuestion.id, answerId);
    const nextQuestion = await mockApi.fetchNextQuestion();

    if (nextQuestion) {
      setCurrentQuestion(nextQuestion);
      setIsLoading(false);
    } else {
      // All questions are answered
      setCurrentQuestion(null);
      setIsLoading(false);
      toast.success("Onboarding Complete!", {
        description: "Thank you for your responses. Redirecting you now...",
      });
      setTimeout(() => navigate("/dashboard/home"), 2000);
    }
  };

  const renderContent = () => {
    if (isLoading && !currentQuestion) {
      return <p>Loading questions...</p>; // Initial loading state
    }

    if (!currentQuestion) {
      return <p>Thank you for completing the questionnaire!</p>;
    }

    return (
      <div className="space-y-6">
        <CardTitle className="text-xl font-semibold">
          {currentQuestion.text}
        </CardTitle>
        <RadioGroup
          disabled={isLoading}
          onValueChange={handleAnswerSubmit} // Auto-submit on change
          className="flex flex-col space-y-2"
        >
          {currentQuestion.options.map((option) => (
            <div
              key={option.id}
              className="flex items-center space-x-3 rounded-md border p-4 transition-all hover:bg-accent"
            >
              <RadioGroupItem value={option.id} id={option.id} />
              <Label
                htmlFor={option.id}
                className="font-normal text-base flex-1 cursor-pointer"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
        {isLoading && (
          <p className="text-sm text-muted-foreground text-center">
            Fetching next question...
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gray-50 dark:bg-gray-900">
      <div className={cn("w-full max-w-lg", className)} {...props}>
        <Card className="shadow-lg">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-bold">
              Let's Analyze Your Taste!
            </CardTitle>
            <CardDescription className="text-base">
              Select the option that best describes you.
            </CardDescription>
          </CardHeader>
          <CardContent>{renderContent()}</CardContent>
        </Card>
      </div>
    </div>
  );
}
