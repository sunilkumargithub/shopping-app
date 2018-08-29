import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
//  @Output() recipeWasSelected = new EventEmitter<Recipe>();
 // recipes: Recipe[] = [
  //  new Recipe('CHICKEN MARINADE', 'CHICKEN MARINADE', 'https://thebestblogrecipes.com/wp-content/uploads/2017/05/07-THE-BEST-CHICKEN-MARINADE-RECIPE-min.jpg')
   // , new Recipe('CHICKEN BIRYANI', 'CHICKEN BIRYANI', 'https://www.ndtv.com/cooks/images/biryani.5.jpg?downsize=650:400&output-quality=70&output-format=webp')

 // ];
  recipes: Recipe[];
  subscription: Subscription;


  constructor(private recipeService: RecipeService,
    private router: Router,
  private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription= this.recipeService.recipesChanged
      .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      });
    this.recipes = this.recipeService.getRecipes();
  }
//  onRecipeSelected(recipe: Recipe) {
   /// this.recipeWasSelected.emit(recipe);
 // }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
