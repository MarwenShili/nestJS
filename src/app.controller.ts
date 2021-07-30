import { Body, Post } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Todo } from './entity/totdo.entity';

@Controller('todo')
export class AppController {
  constructor() {}
  
  todos :Todo[]

  @Get()
  getHello() {
    console.log("get the hello ")
    return this.todos ;
  }




  @Post('post')
  postHello(
    @Body() newtodo : Todo
  ){
    if (this.todos.length){
    newtodo.id = this.todos[this.todos.length - 1].id +1 ;
    }else {
    newtodo.id =1 ;
    }
    this.todos.push(newtodo);
    return newtodo
  }









  @Delete('delete')
  deletetodo(): string {
    console.log("delete todo")
    return "hello deleted ---->delete";
  }
  @Put('put')
  putHello(): string {
    console.log("modifior hello ")
    return 'hello 2 ----> put';
}
}