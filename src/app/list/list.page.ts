import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Curso } from '../curso';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  public cursos: Curso[];
  constructor(private apiService: ApiService) {}

  ngOnInit()
  {
    this.apiService.getCursos().subscribe(respuesta => {
      if(respuesta.status==200)
        this.cursos=respuesta.body;
    })
  }
}
