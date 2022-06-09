/* eslint-disable prettier/prettier */
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id)
    const userIsAdmin = user.admin

    if(!user) {
      throw new Error("access denied")
    }
    
    if(!userIsAdmin) {
      throw new Error("access denied")
    }
    
    const users = this.usersRepository.list()
    
    return users;
  }
}

export { ListAllUsersUseCase };
