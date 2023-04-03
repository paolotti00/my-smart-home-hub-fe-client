export interface RoomModel {
  id: string;
  usersOwnersIds: string[];
  name: string;
  humidity: number;
  temp: number;
  haveLights: boolean;
}
