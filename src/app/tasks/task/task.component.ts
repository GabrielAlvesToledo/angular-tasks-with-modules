import { Component, inject, Input } from "@angular/core";

import {type Task} from "./task.model";

import { TasksService } from "../tasks.service";

@Component({
    selector: 'app-task',
    templateUrl: './task.component.html',
    styleUrl: './task.component.css',

})



export class TaskComponent{
    private tasksService = inject(TasksService);
    @Input({required: true}) task!: Task; 

    onCompleteTask(){
        this.tasksService.removeTask(this.task.id); 
    }

}