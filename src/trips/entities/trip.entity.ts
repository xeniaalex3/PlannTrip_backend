import { Activity } from 'src/activities/entities/activity.entity';
import { Link } from 'src/links/entities/link.entity';

export class Trip {
  id: number;
  destination: string;
  starts_at: Date;
  ends_at: Date;
  is_confirmed: boolean;
  created_at: Date;
  activities: Activity[];
  links: Link[];
}
