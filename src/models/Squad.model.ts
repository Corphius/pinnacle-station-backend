import { v4 as uuid } from 'uuid';

class Squad {
  id: string;
  name: string;
  product_manager: string;
  tech_manager: string;
  initialTime: Date;
  description: string;
  members: string[];
  created_at: Date;
  updated_at?: Date;

  constructor(props: Omit<Squad, 'id' | 'created_at'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}

export { Squad };
