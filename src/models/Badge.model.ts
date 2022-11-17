import { v4 as uuid } from 'uuid';

class BadgeModel {
  id: string;
  title: string;
  image: string;
  available: boolean;
  created_at: Date;
  updated_at?: Date;

  constructor(props: Omit<BadgeModel, 'id' | 'created_at'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
      this.created_at = new Date();
    }
  }
}

export { BadgeModel };
