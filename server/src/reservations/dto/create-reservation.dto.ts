export class CreateReservationDto {
  persons_count: number;
  date: string;
  phone: string;
  firstname: string;
  lastname: string;
  details: string;
  status: 'active' | 'completed' | 'canceled';
  tour_id: number;
  guide_id: number;
}
