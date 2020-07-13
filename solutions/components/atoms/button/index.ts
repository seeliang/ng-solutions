import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-button-component',
  templateUrl: './button.html',
  styleUrls: ['./button.scss'],
})
export class Button {
  @Input()
  text = '';

  @Output()
  onClick = new EventEmitter<any>();
}