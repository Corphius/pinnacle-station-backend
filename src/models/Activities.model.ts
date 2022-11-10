import { v4 as uuid } from 'uuid';

class ActivityModel {
  id: string;
  tutorial_id?: string;
  description: string;
  title: string;
  image_title: string;
  image_url: string;
  badge: string;
  created_at: Date;
  updated_at?: Date;
  progress: number;

  constructor(props: Omit<ActivityModel, 'id' | 'created_at'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
      this.created_at = new Date();
    }
  }
}

export { ActivityModel };
