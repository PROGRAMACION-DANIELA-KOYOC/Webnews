import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category, New } from 'src/app/interfaces/interfaces';
import { CategroyService } from 'src/app/services/category.service';
import { NewService } from 'src/app/services/new.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  //Declaracion de propiedades
  newsByCategory: New[] = []
  category: Category = {
    nombre: '',
    activo: true,
    descripcion: '',
    UserAlta: '',
    FechaAlta: '',
    UserBaja: '',
    FechaBaja: '',
    FechaMod: '',
    UserMod: ''
  }
  id: number = 0

  //Inyeccion de dependencias
  constructor(
    private categoryService: CategroyService,
    private newService: NewService,
    private activatedRoute: ActivatedRoute
  ) {

  }

  //Funcion al momento de inicializar el componente
  ngOnInit() {
    //Buscar los parametros que se enviaron a traves de la ruta
    this.activatedRoute.params.subscribe(params => {
      //Asignar la propiedad id al valor que se mando en el parametro id de la ruta
      this.id = params['id']
      //Buscar una categoria por el id 
      this.categoryService.getCategory(this.id).subscribe(response => {
        //Asignar category a la respuesta de la solicitud
        this.category = response
        //Obtener todas las noticias
        this.newService.getNews().subscribe(response_news => {
          //Asignar newsByCategory a la respuesta de la solicitud pero filtrabndo por el id de la categoria
          this.newsByCategory = response_news.filter(noticia => noticia.categoria_id == this.id)
        })
      })
    })


  }

}
