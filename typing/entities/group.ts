import InterestEntity from "@/typing/entities/interest";
import EventEntity from "@/typing/entities/event";
import UserEntity from "@/typing/entities/user";

export default interface GroupEntity {
  name: string
  type: "academic" | 'social'
  mainInterest: InterestEntity
  events: EventEntity[];
  users: UserEntity[];
}