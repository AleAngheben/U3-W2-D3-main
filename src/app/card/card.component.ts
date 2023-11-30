import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() post!: Post;

  constructor() {}

  ngOnInit(): void {}
}
