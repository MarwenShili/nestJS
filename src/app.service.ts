import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! ----> get';
  }
  postHello():string {
    return "hello world and tech wall ... post ";
  }
  deletetodo():string{
    return "hello deleted ---->delete";
  }
  putHello():string{
    return 'hello 2 ----> put';
  }
}
