import { Activity } from 'src/activities/entities/activity.entity';

export class Trip {
  id: number;
  destination: string;
  starts_at: Date;
  ends_at: Date;
  is_confirmed: boolean;
  created_at: Date;
  activities: Activity[];
}
