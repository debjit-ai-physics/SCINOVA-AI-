"use client";

import AppLayout from "@/components/layout/AppLayout";
import LessonPlanForm from "@/components/teacher/LessonPlanForm";
import HomeworkForm from "@/components/teacher/HomeworkForm";
import TeacherCard from "@/components/teacher/TeacherCard";
import QuestionPaperForm from "@/components/teacher/QuestionPaperForm";
import WorksheetForm from "@/components/teacher/WorksheetForm";
import AnswerKeyForm from "@/components/teacher/AnswerKeyForm";

export default function TeacherPage() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto py-10 space-y-10">
        <div>
          <h1 className="text-5xl font-bold">
            Teacher Workspace
          </h1>

          <p className="text-slate-400 mt-3 text-lg">
            Generate Question Papers, Worksheets and Answer Keys with AI.
          </p>
        </div>

        <div className="space-y-10">

          <TeacherCard
            title="AI Question Paper Generator"
            description="Generate professional examination papers instantly."
          >
            <QuestionPaperForm />
          </TeacherCard>

          <TeacherCard
            title="AI Worksheet Generator"
            description="Generate printable worksheets instantly."
          >
            <WorksheetForm />
          </TeacherCard>

          <TeacherCard
            title="AI Answer Key Generator"
            description="Generate complete answer keys instantly."
          >
            <AnswerKeyForm />
          </TeacherCard>
           <TeacherCard
title="AI Lesson Planner"
description="Generate complete lesson plans."
>
<LessonPlanForm/>
</TeacherCard>

<TeacherCard
title="AI Homework Generator"
description="Generate homework instantly."
>
<HomeworkForm/>
</TeacherCard>     
        </div>
      </div>
    </AppLayout>
  );
}