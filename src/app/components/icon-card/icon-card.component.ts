import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss']
})
export class IconCardComponent {
  @Input() title:string = '';
  @Input() iconImgSrc:string ='';
  @Input() bgIconImgSrc:string ='';
}
