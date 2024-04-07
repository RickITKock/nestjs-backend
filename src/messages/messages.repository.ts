import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    return "one"
  }

  async findAll() {
    return ["all", "one"]
  }

  async create(message: string) {
    console.log(message);
    
    return { content: message }
  }
}
