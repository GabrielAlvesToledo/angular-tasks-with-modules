import { Component, Input } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import {TasksService} from "./tasks.service"

@Component({
    selector: 'app-tasks',
    standalone: true,
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css',
    imports: [TaskComponent, NewTaskComponent]

})

export class TasksComponent{
    constructor(private tasksService: TasksService){
       this.tasksService = tasksService; 
    }
    
    @Input({required: true}) userId!:string;
    @Input({required: true}) name!:string;
    isAddingTask = false;


    get selectedUserTasks() {
        return this.tasksService.getUserTasks(this.userId);
    }

    

    onStartAddTask(){
        this.isAddingTask = true;
    }

    closeScreenNewTask(){
        this.isAddingTask = false;  
    }

    
}

