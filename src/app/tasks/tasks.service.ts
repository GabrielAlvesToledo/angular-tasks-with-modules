import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";
@Injectable({providedIn: 'root'})
export class TasksService{

    private tasks = [
        {
            id: "t1",
            userId: "u1",
            title: "Primeira task",
            summary: "descrição da primeira task",
            dueDate: "2020-10-23"
        },
        {
            id: "t2",
            userId: "u2",
            title: "outra task",
            summary: "descrição da outra task",
            dueDate: "2024-02-23"
        },
        {
            id: "t3",
            userId: "u3",
            title: "3 ta arriscado",
            summary: "dominaram td",
            dueDate: "2025-01-14"
        },
        {
            id: "t4",
            userId: "u4",
            title: "da nad",
            summary: "se der é pouca coisa",
            dueDate: "2018-12-01"
        },
        {
            id: "t5",
            userId: "u5",
            title: "fodas",
            summary: "ctlg é o crime",
            dueDate: "2020-10-23"
        }
    ]


    constructor(){
        const tasks = localStorage.getItem("tasks");
        if (tasks){
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId:string){
        return this.tasks.filter((task) => userId === task.userId);
    } 

    addTask(taskData: NewTaskData, userId: string){
        this.tasks.push({
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        });
        this.saveTasks();
    }

    removeTask(userId:string){
        this.tasks = this.tasks.filter((task) => task.id !== userId);
        this.saveTasks();
    }

    private saveTasks(){
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }
}