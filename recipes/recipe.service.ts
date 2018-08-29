import { Recipe } from './recipe.model';
import { EventEmitter,Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Subject } from 'rxjs';
@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
 // recipeSelected = new EventEmitter<Recipe>();
 private recipes: Recipe[] = [
   new Recipe(
     'CHICKEN MARINADE',
     'CHICKEN MARINADE',
     'https://thebestblogrecipes.com/wp-content/uploads/2017/05/07-THE-BEST-CHICKEN-MARINADE-RECIPE-min.jpg',
     [
       new Ingredient('chicken breast', 1),
       new Ingredient('oil', 1)

     ]),

    new Recipe(
     'CHICKEN BIRYANI',
     'CHICKEN BIRYANI',
      'https://www.ndtv.com/cooks/images/biryani.5.jpg?downsize=650:400&output-quality=70&output-format=webp',
      [
        new Ingredient('meat', 10),
        new Ingredient('rice', 20)
      ])

  ];
 constructor(private slService: ShoppingListService) { }

 setRecipes(recipes: Recipe[]) {
   this.recipes = recipes;
   this.recipesChanged.next(this.recipes.slice());
 }
 getRecipes() {
   return this.recipes.slice();
 }
 getRecipe(index: number) {
   return this.recipes[index];
 }
 addIngredientsToShoppingList(ingredients: Ingredient[]) {
   this.slService.addIngredients(ingredients);
 }
 addrecipe(recipe: Recipe) {
   this.recipes.push(recipe);
   this.recipesChanged.next(this.recipes.slice());
 }

 updateRecipe(index: number, newRecipe: Recipe) {
   this.recipes[index] = newRecipe;
   this.recipesChanged.next(this.recipes.slice());
 }
 deleteRecipe(index: number) {
   this.recipes.splice(index, 1);
   this.recipesChanged.next(this.recipes.slice());
 }

}
