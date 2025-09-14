const data = {
  interests: [
    {
      q: [
        "Build a physical prototype of a new product.",
        "Research and write a report on market trends for the new product.",
      ],
      a: ["Realistic", "Investigative"],
    },
    {
      q: [
        "Design the visual layout and user interface for a new mobile app.",
        "Develop the sales strategy and pitch to potential investors for the app.",
      ],
      a: ["Artistic", "Enterprising"],
    },
    {
      q: [
        "Organize a training workshop for new employees.",
        "Create a detailed financial budget and resource plan for the workshop.",
      ],
      a: ["Social", "Conventional"],
    },
    {
      q: [
        "Analyze a large dataset to find hidden patterns and insights.",
        "Present the findings of the analysis to a non-technical audience.",
      ],
      a: ["Investigative", "Social"],
    },
    {
      q: [
        "Operate and maintain complex machinery or technical equipment.",
        "Write a creative story or script for a short film.",
      ],
      a: ["Realistic", "Artistic"],
    },
    {
      q: [
        "Lead a team project, delegating tasks and motivating members.",
        "Follow a set of precise instructions to perform quality control checks.",
      ],
      a: ["Enterprising", "Conventional"],
    },
    {
      q: [
        "Counsel a friend who is facing a difficult personal problem.",
        "Figure out how a complex software program works by exploring it on your own.",
      ],
      a: ["Social", "Investigative"],
    },
    {
      q: [
        "Start your own small business or a new club on campus.",
        "Work outdoors on a conservation or environmental project.",
      ],
      a: ["Enterprising", "Realistic"],
    },
    {
      q: [
        "Perform on stage in a play or a musical group.",
        "Keep detailed, accurate records of a scientific experiment.",
      ],
      a: ["Artistic", "Conventional"],
    },
  ],
  values: [
    {
      q: [
        "A job where I can use my unique skills and see the direct results of my work.",
        "A job that offers a high degree of stability and job security.",
      ],
      a: ["Achievement", "Working Conditions"],
    },
    {
      q: [
        "Having a high degree of autonomy and the freedom to make my own decisions.",
        "Having a supportive manager who provides clear guidance and training.",
      ],
      a: ["Independence", "Support"],
    },
    {
      q: [
        "The opportunity for rapid promotion and public recognition for my work.",
        "Working with friendly, collaborative colleagues in a non-competitive atmosphere.",
      ],
      a: ["Recognition", "Relationships"],
    },
    {
      q: [
        "A job that allows me to help others or contribute to society.",
        "A job that pays a very high salary compared to others in the field.",
      ],
      a: ["Relationships", "Working Conditions"],
    },
    {
      q: [
        "A company that is known for being fair and ethical in all its practices.",
        "A job where I am constantly learning new things and facing new challenges.",
      ],
      a: ["Support", "Achievement"],
    },
    {
      q: [
        "Having a clear path for advancement and being seen as a leader.",
        "The ability to work on my own and not be closely supervised.",
      ],
      a: ["Recognition", "Independence"],
    },
  ],
  skills: [
    {
      scenario:
        "You realize you are going to miss an important deadline for your part of a team project. What is the most effective action?",
      options: [
        {
          text: "Say nothing and hope you can catch up without anyone noticing.",
          scores: { Initiative: -2, Collaboration: -1 },
        },
        {
          text: "Immediately inform your project lead, explain the situation, and ask for help in re-planning.",
          scores: { Initiative: 2, Communication: 2 },
        },
        {
          text: "Work silently through the night to try and meet the deadline, even if the quality suffers.",
          scores: { "Problem-Solving": -1, Adaptability: -1 },
        },
      ],
    },
    {
      scenario:
        "Your manager gives you a new task with unclear instructions. You are unsure how to begin. What is the most effective action?",
      options: [
        {
          text: "Start the task based on your best guess to show that you are proactive.",
          scores: { Initiative: 1, "Problem-Solving": -2 },
        },
        {
          text: "Ask a colleague what they think the manager meant.",
          scores: { Collaboration: 1, Communication: -1 },
        },
        {
          text: "Go back to your manager, state what you understand, and ask specific clarifying questions.",
          scores: { Communication: 2, Initiative: 1 },
        },
      ],
    },
    {
      scenario:
        "During a team meeting, two colleagues get into a heated disagreement about the project's direction. What is the most effective action?",
      options: [
        {
          text: "Interrupt them and tell them to resolve their issues outside of the meeting.",
          scores: { Communication: -2, Collaboration: -1 },
        },
        {
          text: "Stay silent and let them argue, as it is not your responsibility.",
          scores: { Initiative: -2 },
        },
        {
          text: "Wait for a pause, then calmly suggest focusing on points of agreement and scheduling a separate meeting to resolve the specific disagreement.",
          scores: { "Problem-Solving": 2, Communication: 2 },
        },
      ],
    },
    {
      scenario:
        "Halfway through a project, the client changes a major requirement, making much of your work obsolete. What is the most effective action?",
      options: [
        {
          text: "Complain to your team members about how unfair and disruptive the client is.",
          scores: { Adaptability: -2 },
        },
        {
          text: "Acknowledge the change, analyze the impact, and proactively propose a new plan to the team.",
          scores: { Adaptability: 2, "Problem-Solving": 2 },
        },
        {
          text: "Continue working on the old plan until your manager explicitly tells you to stop.",
          scores: { Initiative: -2, Adaptability: -2 },
        },
      ],
    },
  ],
  professions: [
    {
      title: "AI/ML Engineer",
      riasec: ["Investigative", "Realistic"],
      values: ["Achievement", "Independence"],
    },
    {
      title: "Data Scientist",
      riasec: ["Investigative", "Conventional"],
      values: ["Achievement", "Independence"],
    },
    {
      title: "Full Stack Developer",
      riasec: ["Realistic", "Investigative"],
      values: ["Achievement", "Working Conditions"],
    },
    {
      title: "Cloud Engineer / DevOps Engineer",
      riasec: ["Realistic", "Conventional"],
      values: ["Support", "Working Conditions"],
    },
    {
      title: "Cybersecurity Analyst",
      riasec: ["Investigative", "Conventional"],
      values: ["Support", "Achievement"],
    },
    {
      title: "Product Manager (Tech)",
      riasec: ["Enterprising", "Social"],
      values: ["Achievement", "Recognition"],
    },
    {
      title: "UI/UX Designer",
      riasec: ["Artistic", "Investigative"],
      values: ["Independence", "Achievement"],
    },
    {
      title: "Management Consultant",
      riasec: ["Enterprising", "Investigative"],
      values: ["Achievement", "Recognition"],
    },
    {
      title: "Blockchain Developer",
      riasec: ["Investigative", "Realistic"],
      values: ["Independence", "Achievement"],
    },

  ],
  // frameworks: {
  //   riasec: {
  //     title: "RIASEC Model (Holland Codes)",
  //     description:
  //       "This framework categorizes people and work environments into six types: Realistic (Doers), Investigative (Thinkers), Artistic (Creators), Social (Helpers), Enterprising (Persuaders), and Conventional (Organizers). The core idea is that career satisfaction is highest when your personality type matches the work environment.",
  //   },
  //   twa: {
  //     title: "Theory of Work Adjustment (TWA)",
  //     description:
  //       "This theory suggests that job satisfaction depends on the match between an individual's core work values and the rewards offered by the job. It identifies six key values: Achievement, Independence, Recognition, Relationships, Support, and Working Conditions. Understanding your values is crucial for long-term career fulfillment.",
  //   },
  //   sjt: {
  //     title: "Situational Judgment Tests (SJT)",
  //     description:
  //       "SJTs are a method for assessing soft skills by presenting realistic work-related scenarios. Instead of asking you to rate your own skills, they ask you to choose the most effective course of action from several options. This provides a more accurate, behavioral measure of skills like problem-solving, communication, and adaptability.",
  //   },
  // },
};

const onboardingQuestion = {
  1: {
    questionName: "Which activity or statement appeals to you more?",
    questionOptions: [
      "Build a physical prototype of a new product.",
      "Research and write a report on market trends for the new product.",
    ],
  },
  2: {
    questionName: "Which activity or statement appeals to you more?",
    questionOptions: [
      "Design the visual layout and user interface for a new mobile app.",
      "Develop the sales strategy and pitch to potential investors for the app.",
    ],
  },
  3: {
    questionName: "Which activity or statement appeals to you more?",
    questionOptions: [
      "Organize a training workshop for new employees.",
      "Organize a training workshop for new employees.",
    ],
  },
  4: {
    questionName: "Which activity or statement appeals to you more?",
    questionOptions: [
      "Analyze a large dataset to find hidden patterns and insights.",
      "Analyze a large dataset to find hidden patterns and insights.",
    ],
  },
  5: {
    questionName: "Which activity or statement appeals to you more?",
    questionOptions: [
      "Operate and maintain complex machinery or technical equipment.",
      "Write a creative story or script for a short film.",
    ],
  },
  6: {
    questionName: "Which activity or statement appeals to you more?",
    questionOptions: [
      "Lead a team project, delegating tasks and motivating members.",
      "Lead a team project, delegating tasks and motivating members.",
    ],
  },
  7: {
    questionName: "Which activity or statement appeals to you more?",
    questionOptions: [
      "Counsel a friend who is facing a difficult personal problem.",
      "Figure out how a complex software program works by exploring it on your own.",
    ],
  },
  8: {
    questionName: "",
    questionOptions: [
      "Start your own small business or a new club on campus.",
      "Work outdoors on a conservation or environmental project.",
    ],
  },
  9: {
    questionName: "",
    questionOptions: [
      "Perform on stage in a play or a musical group.",
      "Keep detailed, accurate records of a scientific experiment.",
    ],
  },
  10: {
    questionName: "",
    questionOptions: [
      "A job where I can use my unique skills and see the direct results of my work.",
      "A job where I can use my unique skills and see the direct results of my work.",
    ],
  },
  11: {
    questionName: "",
    questionOptions: [
      "Having a high degree of autonomy and the freedom to make my own decisions.",
      "Having a high degree of autonomy and the freedom to make my own decisions.",
    ],
  },
  12: {
    questionName: "",
    questionOptions: [
      "The opportunity for rapid promotion and public recognition for my work.",
      "Working with friendly, collaborative colleagues in a non-competitive atmosphere.",
    ],
  },

  13: {
    questionName: "",
    questionOptions: [
      "A job that allows me to help others or contribute to society.",
      "A job that pays a very high salary compared to others in the field.",
    ],
  },
  14: {
    questionName: "",
    questionOptions: [
      "A company that is known for being fair and ethical in all its practices.",
      "A company that is known for being fair and ethical in all its practices.",
    ],
  },
  15: {
    questionName: "",
    questionOptions: [
      "Having a clear path for advancement and being seen as a leader.",
      "The ability to work on my own and not be closely supervised.",
    ],
  },
  16: {
    questionName:
      "You realize you are going to miss an important deadline for your part of a team project. What is the most effective action?",
    questionOptions: [
      "Say nothing and hope you can catch up without anyone noticing.",
      "Immediately inform your project lead, explain the situation, and ask for help in re-planning.",
      "Work silently through the night to try and meet the deadline, even if the quality suffers.",
    ],
  },
  17: {
    questionName:
      "Your manager gives you a new task with unclear instructions. You are unsure how to begin. What is the most effective action?",
    questionOptions: [
      "Start the task based on your best guess to show that you are proactive.",
      "Ask a colleague what they think the manager meant.",
      "Go back to your manager, state what you understand, and ask specific clarifying questions.",
    ],
  },
  18: {
    questionName:
      "During a team meeting, two colleagues get into a heated disagreement about the project's direction. What is the most effective action?",
    questionOptions: [
      "Interrupt them and tell them to resolve their issues outside of the meeting.",
      "Stay silent and let them argue, as it is not your responsibility.",
      "Wait for a pause, then calmly suggest focusing on points of agreement and scheduling a separate meeting to resolve the specific disagreement.",
    ],
  },
  19: {
    questionName:
      "Halfway through a project, the client changes a major requirement, making much of your work obsolete. What is the most effective action?",
    questionOptions: [
      "Complain to your team members about how unfair and disruptive the client is.",
      "Acknowledge the change, analyze the impact, and proactively propose a new plan to the team.",
      "Continue working on the old plan until your manager explicitly tells you to stop.",
    ],
  },
  // 20: {
  //   questionName: "",
  //   questionOptions: [""],
  // },
};

const assessmentQuestions = async (req, res) => {
  try {
    const questionNumber = parseInt(req.query.questionNumber);
    if (questionNumber > 19) {
      throw new Error("This onboarding question number doesn't exist!");
    }
    const questionInfo = onboardingQuestion[questionNumber];

    res.status(200).send(questionInfo);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const assessmentSubmit = async (req, res) => {
  try {
    const data = req.body;
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

export { assessmentQuestions, assessmentSubmit };
