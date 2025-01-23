import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import {type NewTaskData } from "../task/task.model";
import { TasksService } from "../tasks.service";


@Component({
    selector: 'app-new-task',
    templateUrl: './new-task.component.html',
    styleUrl: './new-task.component.css'

})

export class NewTaskComponent{
    private tasksService = inject(TasksService);
    @Input({required: true}) userId!:string;
    @Output() close = new EventEmitter<void>();
    @Output() add = new EventEmitter<NewTaskData>();
    enteredTitle = "";
    enteredSummary = "";
    enteredDate = "";
    onClose(){
        this.close.emit();
    }

    onSubmit(){
        this.tasksService.addTask({
            title: this.enteredTitle,
            summary: this.enteredSummary,
            date: this.enteredDate
        }, this.userId);
        this.close.emit();
    }
}

