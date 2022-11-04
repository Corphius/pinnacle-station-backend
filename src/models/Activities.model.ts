import { v4 as uuid } from 'uuid';

class Activities {
  id: string;
  tutorial_id?: string;
  description: string;
  title: string;
  options: string[];
  answer: string;
  image_title: string;
  image_url: string;
  badge: string;
  created_at: Date;
  updated_at?: Date;

  constructor(props: Omit<Activities, 'id' | 'created_at'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}

export { Activities };
