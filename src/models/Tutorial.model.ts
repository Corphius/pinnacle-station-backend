import { v4 as uuid } from 'uuid';

class TutorialModel {
  id: string;
  squad_id?: string;
  title: string;
  urlVideo: string;
  progress: number;
  titleVideo: string;
  description: string;
  image_url: string;
  outside_url: string;
  image_title: string;
  created_at: Date;
  tutorial_type: number;
  updated_at?: Date;

  constructor(props: Omit<TutorialModel, 'id' | 'created_at'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
      this.created_at = new Date();
    }
  }
}

export { TutorialModel };
