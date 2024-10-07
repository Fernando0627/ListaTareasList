import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

  export class HomePage {
  public propCategory: string = 'default';
  public propDisabled: boolean = true;
  public selectedCategory: string = 'default';
  public taskList: any[] = [];

  public categories: any = localStorage.getItem('category');
  public objectCategories: any = JSON.parse(this.categories) || [];

    constructor() {
    this.loadTasks();
  }

  save(formValues: any) {
    let existingLists = JSON.parse(localStorage.getItem('list') || '[]');
    existingLists.splice(0, 0, formValues);
    localStorage.setItem('list', JSON.stringify(existingLists));
    
    // Actualizar la lista de tareas después de guardar
    this.loadTasks();
    console.log('Tareas guardadas:', existingLists); // Debug
    
    // Limpiar el formulario
    this.resetForm();
  }

  loadTasks() {
    this.taskList = JSON.parse(localStorage.getItem('list') || '[]');
  }

  resetForm() {
  
    this.propCategory = 'default'; 
    this.propDisabled = true; 

    const titleInput = (document.getElementById('title') as HTMLTextAreaElement);
    if (titleInput) {
      titleInput.value = '';
    }
  }

  filterByCategory() {
    this.selectedCategory = this.propCategory;
  }

  check(textareaValue: any) {
    this.propDisabled = textareaValue === '' ? true : false;
  }
}





