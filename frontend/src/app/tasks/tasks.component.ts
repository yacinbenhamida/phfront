import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { NgForm, FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskToAdd : Task = {} as Task
  selectedTask : Task
  addError:boolean = false
  tasks:Task[] = []
  showForm : boolean = false
  usersForm: FormGroup
  deleges : User [] = []
  constructor(private fb:FormBuilder,private userv:UserService, private taskserv:TaskService) { 
    this.usersForm = this.fb.group({
      users: this.fb.array([]) ,
    });
    this.addUser()
  }

  ngOnInit() {
    this.taskserv.getAll().subscribe((task:Task[])=>{
      this.userv.getAllDeleges().subscribe((d:User[])=>{
        this.deleges = d
        this.tasks = task
      })
    })
  }
  updateList(data,i){
    let id = Number(data.substring(data.indexOf(':')+1,data.length))
    let array : any  = this.usersForm.get("users").value as any
    let nbOcc : number = 0
    if(array.length > 1){
      array.forEach(x=>{
        if(x.delege === id){
          nbOcc++
        }
      })
      if(nbOcc > 1){
        this.deleteUser(i)
        alert('vous ne pouvez pas affecter le même utilisateur plusieurs fois à la même tâche.')
      } 
    }
    return true
  }

  filterTasks(content){
    if(content.length > 0){
      console.log(this.tasks)
      this.tasks = this.tasks.filter(x=>x.nom_tache.trim().toLowerCase().indexOf(content.toLowerCase()) != -1)
    }
    else this.ngOnInit()
  }
  showPanel(){
    this.showForm = true
  }
  hidePanel(){
    this.showForm = false
  }
  users() : FormArray {
    return this.usersForm.get("users") as FormArray
  }
   
  newUser(): FormGroup {
    return this.fb.group({
      delege : new FormControl('null',Validators.required),
    })
  }
   
  addUser() {
    this.users().push(this.newUser());
  }
  deleteUser(i){
    this.users().removeAt(i)
  }
  submit(f:NgForm){
    console.log(f.value)
    console.log(this.users().value)
    this.taskserv.add(this.taskToAdd,this.users().value).subscribe((done)=>{
      window.location.reload()
    },error=>this.addError = true)
  }
  deleteIncomingTask(event){
    if(event.op === 'del'){
      this.selectedTask = event.task
    }

  }
  deleteTask(){
    this.taskserv.delete(this.selectedTask.id).subscribe(res=>{
      window.location.reload()
    })
  }
}
