import { askGemini } from "@/lib/ai";
import { TeacherPrompts } from "@/lib/teacher-prompts";

export class TeacherService {
  static async questionPaper(data: any) {
    return await askGemini(
      TeacherPrompts.questionPaper(
        data.subject,
        data.className,
        data.chapter,
        Number(data.marks)
      )
    );
  }

  static async worksheet(data: any) {
    return await askGemini(
      TeacherPrompts.worksheet(
        data.subject,
        data.className,
        data.chapter
      )
    );
  }

  static async answerKey(data: any) {
    return await askGemini(
      TeacherPrompts.answerKey(data.paper)
    );
  }

  static async lessonPlan(data: any) {
    return await askGemini(
      TeacherPrompts.lessonPlan(
        data.subject,
        data.className,
        data.chapter
      )
    );
  }

  static async homework(data: any) {
    return await askGemini(
      TeacherPrompts.homework(
        data.subject,
        data.className,
        data.chapter
      )
    );
  }
}