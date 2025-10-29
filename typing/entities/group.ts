import InterestEntity from "@/typing/entities/interest";
import EventEntity from "@/typing/entities/event";
import UserEntity from "@/typing/entities/user";

export default interface GroupEntity {
  name: string
  description: string,
  imageUrl: string,
  groupType: "Academic" | 'Social'
  interest: InterestEntity
  events?: EventEntity[];
  users?: UserEntity[];
}