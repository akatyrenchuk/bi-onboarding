import InterestEntity from "@/typing/entities/interest";
import GroupEntity from "@/typing/entities/group";
import EventEntity from "@/typing/entities/event";

export default interface UserEntity {
  firstName: string;
  lastName: string;
  campus: string;
  email: string;
  interests: InterestEntity[];
  groups: GroupEntity[];
}