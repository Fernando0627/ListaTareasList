# LISTAR TAREAS
* crear un nuevo proyecto IONIC

version de node v20.17.0

version de npm 10.8.2

se ejcuta el comando y se selciona el framework y luego se seleciona el nombre del proyecto 
```
ionic start
```
para abrir el proyecto en visual code 

```
code ./
```
despues de creado el proyecto ingresas el comando, para ejecutar el proyecto 

```
ionic serve
```
luego para la instalacion de cordova se agraga los siguientes comandos
```
npm install cordova-plugin-inappbrowser
```
```
npm install @awesome-cordova-plugins/in-app-browser
```
y por ultimo ionic utiliza capacitor para gestionar el folder de la aplicaciones 

```
ionic cap sync
```

--codigo para añadir el proyecto al android studio y generar la apk 

```
ionic cap add android 
```
para copiar el codigo de nuestra aplicacion a nivel de angular 
```
ionic cap copy
```


* modificar el codigo para poder desplega 
```
ionic serve
```
esto abre un navegador para poder hacer pruebas

* Compilar el proyecto para generar el APK
```
ionic cap build
```

Una vez teniendo el APK se puede instalar en un dispositivo Android para validar el funcionamiento 
