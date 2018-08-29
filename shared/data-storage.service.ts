import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { RecipeService } from "src/app/recipes/recipe.service";

import { Response } from '@angular/http';
import { Recipe } from "src/app/recipes/recipe.model";
import 'rxjs/Rx';
import { AuthService } from "src/app/auth/auth.service";
@Injectable()
export class DataStorageService {
  constructor(private http: Http,
    private recipeService: RecipeService,
  private authService:AuthService) { }

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://ng-recipe-book-6d620.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
  }
  getRecipes() {
    const token = this.authService.getToken();

    this.http.get('https://ng-recipe-book-6d620.firebaseio.com/recipes.json?auth=' + token)
      .map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      })
      .subscribe(
      (recipes: Recipe[]) => {
        
        this.recipeService.setRecipes(recipes);
      });

  }
}
