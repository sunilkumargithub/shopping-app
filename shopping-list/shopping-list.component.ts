import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
 // ingredients: Ingredient[] = [
   // new Ingredient('Apples', 5),
   // new Ingredient('Tomatoes',10),
 // ];
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private slService :ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
   this.subscription = this.slService.ingredientsChanged
      .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  onEditItem(index:number) {

    this.slService.startedEditing.next(index);
    console.log(index);

  }
}
