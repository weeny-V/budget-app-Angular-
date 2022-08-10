import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BudgetItem } from '../../../../shared/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {

  @Input() item!: BudgetItem;
  @Output() XButtonClick: EventEmitter<void> = new EventEmitter<void>()
  @Output() cardClick: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  onXButtonClick() {
    this.XButtonClick.emit()
  }

  onCardClick() {
    this.cardClick.emit()
  }

}
