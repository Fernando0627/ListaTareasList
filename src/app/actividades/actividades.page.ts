import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
})
export class ActividadesPage implements OnInit {
  
  public propId: any = 1;
  public propDisabled: boolean = true;
  public propButtonDelete: any = [
    {
      text: 'Cancelado',
      role: 'cancelado'
    },
    {
      text: 'Confirmado',
      role: 'confirmado'
    }
  ];

  public categories: any = localStorage.getItem('category');
  public objectCategories: any = JSON.parse(this.categories);
  public lists: any = localStorage.getItem('list');
  public objectLists: any = JSON.parse(this.lists);

  constructor() {
    if (this.categories !== null) {
      this.propId = this.objectCategories.length + 1;
    }
  }

  ngOnInit() {
    console.log('Componente ActividadesPage inicializado');
  }

  add(formValues: any) {
    if (this.categories === null) {
      let formValuesToString: any = JSON.stringify([formValues]);
      localStorage.setItem('category', formValuesToString);
    } else {
      let existingCategory = JSON.parse(this.categories);
      existingCategory.splice(0, 0, formValues);
      existingCategory = JSON.stringify(existingCategory);
      localStorage.setItem('category', existingCategory);
    }
    location.reload();
  }

  check(inputValue: any) {
    this.propDisabled = inputValue === '' ? true : false;
  }

  setResult(event: any, categoryId: any, categoryName: any) {
    if (event.detail.role === 'confirmado') {
      this.delete(categoryId, categoryName);
    }
  }

  delete(categoryId: any, categoryName: any) {
    let newListOfCategory: any = this.objectCategories;
    newListOfCategory.splice(categoryId, 1);
    localStorage.setItem('category', JSON.stringify(newListOfCategory));

    let newLists: any = this.objectLists;
    newLists = newLists.filter((item: any) => {
      return item.category !== categoryName;
    });
    localStorage.setItem('list', JSON.stringify(newLists));
    location.reload();
  }

  edit(categoryId: number) {
    let newListOfCategory: any = this.objectCategories;

    if (newListOfCategory && newListOfCategory.length > categoryId) {
      const newCategoryName = prompt("Ingrese el nuevo nombre de la categoría:", newListOfCategory[categoryId].name);
      
      if (newCategoryName) {
        newListOfCategory[categoryId].name = newCategoryName;
        localStorage.setItem('category', JSON.stringify(newListOfCategory));

        let newLists: any = this.objectLists;

        newLists = newLists.map((item: any) => {
          if (item.category === newListOfCategory[categoryId].name) {
            item.category = newCategoryName;
          }
          return item;
        });

        localStorage.setItem('list', JSON.stringify(newLists));
        location.reload();
      }
    } else {
      console.error("Category ID does not exist.");
    }
  }
}






