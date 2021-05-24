import { Component, OnInit } from '@angular/core';
import { Produto } from '../Produto';
import { WebService } from '../web.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listaProdutos: Produto[];

  constructor(private web : WebService) { }

  carregarProdutos() : void {
    this.web.getProdutos().subscribe(res => {
      this.listaProdutos = res;
    });
  }

  atualizar(produto: Produto) {
    this.produto.emit(JSON.parse(JSON.stringify(produto)));
  }

  ngOnInit(): void {
    this.carregarProdutos();
  }
 
  deletar(id: string) {
    this.web.deletarProduto(id).subscribe(
      () => {
        alert('Produto deletado com sucesso!');
        this.carregarProdutos();
      },
    );
  }

 

}
