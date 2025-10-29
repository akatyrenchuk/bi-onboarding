import InterestEntity from "@/typing/entities/interest";
import GroupEntity from "@/typing/entities/group";

export default interface EventEntity {
  name: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  group: GroupEntity;
}