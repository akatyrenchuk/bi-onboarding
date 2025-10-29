import UserEntity from "@/typing/entities/user";
import GroupEntity from "@/typing/entities/group";

export default interface InterestEntity {
  name: string;
  description: string;
  imageUrl: string;
  users: UserEntity[];
}