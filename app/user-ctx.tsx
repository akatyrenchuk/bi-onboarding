import {createContext, type PropsWithChildren, useContext, useEffect, useMemo, useState} from "react";
import UserEntity from "@/typing/entities/user";

type UserStatus = "idle" | "ready";

type UserCtx = {
  user: UserEntity;
  status: UserStatus;
  setStatus: (status: UserStatus) => void;
};

const Ctx = createContext<UserCtx | null>(null);
export const useUser = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useUser must be inside <UserProvider />");
  return v;
};

export default function UserProvider({ children }: PropsWithChildren) {
  const [status, setStatus] = useState<UserStatus>("idle");
  const [user, setUser] = useState<UserEntity>({
    firstName: "Anton",
    lastName: "Katyrenchuk",
    campus: "Oslo",
    email: "anton.katyrenchuk@bi.no"
  });

  const value = useMemo<UserCtx>(
    () => ({
      user: user,
      status: status,
      setStatus: (status) => setStatus(status),
    }),
    [user, status]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
