import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnChanges {
  @Input() selectedCategory: string = 'default'; 
  @Input() tasks: { title: string; category: string; completed: boolean }[] = []; 
  
  public filteredTasks: { title: string; category: string; completed: boolean }[] = []; 
  public categories: string[] = ['default', 'category1', 'category2']; 

  ngOnInit() {
    this.initializeTasks(); // Inicializa las tareas al cargar el componente
    this.filterTasks(); 
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedCategory'] || changes['tasks']) {
      this.filterTasks(); 
    }
  }

  filterTasks() {
    this.filteredTasks = this.selectedCategory === 'default'
      ? this.tasks 
      : this.tasks.filter((task) => task.category === this.selectedCategory); 
  }

  toggleTaskCompletion(task: { title: string; category: string; completed: boolean }) {
    task.completed = !task.completed; // Cambia el estado de completado
    this.saveTasks(); // Llama a saveTasks para guardar el estado actualizado
  }

  deleteTask(task: { title: string; category: string; completed: boolean }) {
    const index = this.tasks.indexOf(task);
    if (index > -1) {
      this.tasks.splice(index, 1); // Elimina la tarea
      this.saveTasks(); // Guarda el estado actualizado
    }
  }

  updateTask(task: { title: string; category: string; completed: boolean }) {
    const newTitle = prompt('Actualizar título:', task.title);
    if (newTitle) {
      task.title = newTitle; // Actualiza el título de la tarea
      this.saveTasks(); // Guarda el estado actualizado
    }
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks)); // Guarda las tareas en localStorage
  }

  initializeTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks); // Carga las tareas del localStorage
    } else {
      this.tasks = [ // Ejemplo de tareas iniciales
        { title: 'frgerter', category: 'hola "hello"', completed: false },
        { title: 'hola mundo 450', category: 'daniel felipe gutierrez', completed: false },
        { title: 'prueba cuatro', category: 'daniel felipe pachon', completed: false },
        { title: 'cosa prueba 900', category: 'prueba de actualizar', completed: false },
        { title: 'hola mundo', category: 'por defecto', completed: false },
      ];
    }
    this.filterTasks(); // Filtra las tareas después de inicializarlas
  }
}






















