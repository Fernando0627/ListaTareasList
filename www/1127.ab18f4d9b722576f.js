"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1127],{1127:(b,d,r)=>{r.r(d),r.d(d,{HomePageModule:()=>j});var p=r(177),n=r(4742),c=r(4341),u=r(70),e=r(4438);function _(o,a){if(1&o){const s=e.RV6();e.j41(0,"ion-icon",5),e.bIt("click",function(){e.eBV(s);const i=e.XpG().$implicit,l=e.XpG();return e.Njj(l.toggleTaskCompletion(i))}),e.k0s()}}function f(o,a){if(1&o){const s=e.RV6();e.j41(0,"ion-icon",6),e.bIt("click",function(){e.eBV(s);const i=e.XpG().$implicit,l=e.XpG();return e.Njj(l.toggleTaskCompletion(i))}),e.k0s()}}function k(o,a){if(1&o){const s=e.RV6();e.j41(0,"ion-item")(1,"ion-label")(2,"h2"),e.EFF(3),e.k0s(),e.j41(4,"p"),e.EFF(5),e.k0s()(),e.DNE(6,_,1,0,"ion-icon",1)(7,f,1,0,"ion-icon",2),e.j41(8,"ion-icon",3),e.bIt("click",function(){const i=e.eBV(s).$implicit,l=e.XpG();return e.Njj(l.deleteTask(i))}),e.k0s(),e.j41(9,"ion-icon",4),e.bIt("click",function(){const i=e.eBV(s).$implicit,l=e.XpG();return e.Njj(l.updateTask(i))}),e.k0s()()}if(2&o){const s=a.$implicit;e.R7$(3),e.JRh(s.title),e.R7$(2),e.SpI("Categor\xeda: ",s.category,""),e.R7$(),e.Y8G("ngIf",s.completed),e.R7$(),e.Y8G("ngIf",!s.completed)}}let h=(()=>{var o;class a{constructor(){this.selectedCategory="default",this.tasks=[],this.filteredTasks=[],this.categories=["default","category1","category2"]}ngOnInit(){this.initializeTasks(),this.filterTasks()}ngOnChanges(t){(t.selectedCategory||t.tasks)&&this.filterTasks()}filterTasks(){this.filteredTasks="default"===this.selectedCategory?this.tasks:this.tasks.filter(t=>t.category===this.selectedCategory)}toggleTaskCompletion(t){t.completed=!t.completed,this.saveTasks()}deleteTask(t){const i=this.tasks.indexOf(t);i>-1&&(this.tasks.splice(i,1),this.saveTasks())}updateTask(t){const i=prompt("Actualizar t\xedtulo:",t.title);i&&(t.title=i,this.saveTasks())}saveTasks(){localStorage.setItem("tasks",JSON.stringify(this.tasks))}initializeTasks(){const t=localStorage.getItem("tasks");this.tasks=t?JSON.parse(t):[{title:"frgerter",category:'hola "hello"',completed:!1},{title:"hola mundo 450",category:"daniel felipe gutierrez",completed:!1},{title:"prueba cuatro",category:"daniel felipe pachon",completed:!1},{title:"cosa prueba 900",category:"prueba de actualizar",completed:!1},{title:"hola mundo",category:"por defecto",completed:!1}],this.filterTasks()}}return(o=a).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.VBU({type:o,selectors:[["app-list"]],inputs:{selectedCategory:"selectedCategory",tasks:"tasks"},features:[e.OA$],decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],["name","checkmark-circle","slot","end","color","success",3,"click",4,"ngIf"],["name","checkmark-circle-outline","slot","end","color","medium",3,"click",4,"ngIf"],["name","trash","slot","end","color","orquidea",2,"cursor","pointer","margin-left","10px",3,"click"],["name","create","slot","end","color","uva",2,"cursor","pointer","margin-left","10px",3,"click"],["name","checkmark-circle","slot","end","color","success",3,"click"],["name","checkmark-circle-outline","slot","end","color","medium",3,"click"]],template:function(t,i){1&t&&(e.j41(0,"ion-list"),e.DNE(1,k,10,4,"ion-item",0),e.k0s()),2&t&&(e.R7$(),e.Y8G("ngForOf",i.filteredTasks))},dependencies:[p.Sq,p.bT,n.iq,n.uz,n.he,n.nf],styles:[".close[_ngcontent-%COMP%]{position:absolute;top:0;right:6px;margin:10px}.ion-list[_ngcontent-%COMP%]{margin:0;padding:0}.completed[_ngcontent-%COMP%]{text-decoration:line-through;color:#9904be}"]}),a})();function C(o,a){if(1&o&&(e.j41(0,"ion-select-option",12),e.EFF(1),e.k0s()),2&o){const s=a.$implicit;e.Y8G("value",s.name),e.R7$(),e.SpI(" ",s.name," ")}}const y=[{path:"",component:(()=>{var o;class a{constructor(){this.propCategory="default",this.propDisabled=!0,this.selectedCategory="default",this.taskList=[],this.categories=localStorage.getItem("category"),this.objectCategories=JSON.parse(this.categories)||[],this.loadTasks()}save(t){let i=JSON.parse(localStorage.getItem("list")||"[]");i.splice(0,0,t),localStorage.setItem("list",JSON.stringify(i)),this.loadTasks(),console.log("Tareas guardadas:",i),this.resetForm()}loadTasks(){this.taskList=JSON.parse(localStorage.getItem("list")||"[]")}resetForm(){this.propCategory="default",this.propDisabled=!0;const t=document.getElementById("title");t&&(t.value="")}filterByCategory(){this.selectedCategory=this.propCategory}check(t){this.propDisabled=""===t}}return(o=a).\u0275fac=function(t){return new(t||o)},o.\u0275cmp=e.VBU({type:o,selectors:[["app-home"]],decls:37,vars:5,consts:[["todoForm","ngForm"],["title",""],["color","uva"],["slot","start"],[3,"ngSubmit"],["id","title","type","text","label","titulo","labelPlacement","floating","fill","outline","name","title","ngModel","","rows","5","maxlength","50",3,"keyup"],["label","categoria","labelPlacement","floating","fill","outline","name","category",3,"ngModelChange","ionChange","ngModel"],["value","default"],[3,"value",4,"ngFor","ngForOf"],["type","submit","color","uva","expand","block","size","large",3,"disabled"],["name","save","slot","end"],[3,"tasks","selectedCategory"],[3,"value"]],template:function(t,i){if(1&t){const l=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar",2)(2,"ion-buttons",3),e.nrm(3,"ion-menu-button"),e.j41(4,"ion-title"),e.EFF(5,"Tareas"),e.k0s()()()(),e.j41(6,"ion-content")(7,"ion-card")(8,"ion-card-header",2)(9,"ion-title"),e.EFF(10,"Agregar tarea"),e.k0s()(),e.j41(11,"ion-card-content")(12,"form",4,0),e.bIt("ngSubmit",function(){e.eBV(l);const m=e.sdS(13);return e.Njj(i.save(m.value))}),e.j41(14,"ion-grid")(15,"ion-row")(16,"ion-col")(17,"ion-textarea",5,1),e.bIt("keyup",function(){e.eBV(l);const m=e.sdS(18);return e.Njj(i.check(m.value))}),e.k0s()()(),e.j41(19,"ion-row")(20,"ion-col")(21,"ion-select",6),e.mxI("ngModelChange",function(m){return e.eBV(l),e.DH7(i.propCategory,m)||(i.propCategory=m),e.Njj(m)}),e.bIt("ionChange",function(){return e.eBV(l),e.Njj(i.filterByCategory())}),e.j41(22,"ion-select-option",7),e.EFF(23,"Por defecto"),e.k0s(),e.DNE(24,C,2,2,"ion-select-option",8),e.k0s()()(),e.j41(25,"ion-row")(26,"ion-col")(27,"ion-button",9),e.nrm(28,"ion-icon",10),e.EFF(29," Guardar "),e.k0s()()()()()()(),e.j41(30,"ion-card")(31,"ion-card-header")(32,"ion-toolbar",2)(33,"ion-title"),e.EFF(34,"Lista de Tareas"),e.k0s()()(),e.j41(35,"ion-card-content"),e.nrm(36,"app-list",11),e.k0s()()()}2&t&&(e.R7$(21),e.R50("ngModel",i.propCategory),e.R7$(3),e.Y8G("ngForOf",i.objectCategories),e.R7$(3),e.Y8G("disabled",i.propDisabled),e.R7$(9),e.Y8G("tasks",i.taskList)("selectedCategory",i.selectedCategory))},dependencies:[p.Sq,c.qT,c.BC,c.cb,c.tU,c.vS,c.cV,n.Jm,n.QW,n.b_,n.I9,n.ME,n.hU,n.W9,n.lO,n.eU,n.iq,n.MC,n.ln,n.Nm,n.Ip,n.nc,n.BC,n.ai,n.Je,n.Gw,h]}),a})()}];let T=(()=>{var o;class a{}return(o=a).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[u.iI.forChild(y),u.iI]}),a})(),j=(()=>{var o;class a{}return(o=a).\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.$C({type:o}),o.\u0275inj=e.G2t({imports:[p.MD,c.YN,n.bv,T]}),a})()}}]);