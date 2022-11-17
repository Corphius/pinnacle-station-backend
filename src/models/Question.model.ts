import { v4 as uuid } from 'uuid';

class QuestionModel {
  id: string;
  activity_id: string;
  title: string;
  description: string;
  image_url: string;
  answer_options: string[];
  created_at?: Date;
  updated_at?: Date;
  correct_answer_id: number;

  constructor(props: Omit<QuestionModel, 'id' | 'created_at'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
      this.created_at = new Date();
    }
  }
}

export { QuestionModel };
