export interface UserDTO {
  id: string;
  name?: string;
  photo?: string | null,
  email: string
}

export interface User {
  user: UserDTO
}