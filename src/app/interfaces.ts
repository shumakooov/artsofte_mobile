export interface User{
  username: string;
  password: string;
}

export interface Device{
  name: string,
  os: string,
  diagonal: number,
  department: { id: number, name: string},
  image: string
}

export interface Profile{
  id: number,
  firstname: string,
  secondname: string,
  connectLink: string,
  // departmentId: number,
}
