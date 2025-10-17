export interface User {
  id: string;
  email: string;
  tenantId: string;
  role: "ADMIN" | "USER";
}
