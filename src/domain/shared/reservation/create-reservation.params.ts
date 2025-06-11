import { ReservationParams } from "./reservation.params";

export interface CreateReservationParams extends Omit<ReservationParams, 'createdAt'> { }