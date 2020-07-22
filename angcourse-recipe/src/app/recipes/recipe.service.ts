import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   //   new Recipe(
  //   //     'Pizza Carbonara',
  //   //     'tHe bEst PizZa EvEr cHanGe my MiNd',
  //   //     'https://cloud.terrapizza.by/cat/ELB1950X73063.jpg',
  //   //     [
  //   //       new Ingredient('Flour', 200),
  //   //       new Ingredient('Eggs', 5),
  //   //       new Ingredient('Bacon', 200),
  //   //       new Ingredient('Tomato Sauce', 30),
  //   //     ]
  //   //   ),
  //   //   new Recipe(
  //   //     'Borschtsch',
  //   //     'tHe bEst SouP EvEr cHanGe my MiNd',
  //   //     'https://s1.1zoom.ru/prev2/494/493720.jpg',
  //   //     [
  //   //       new Ingredient('Beet', 1),
  //   //       new Ingredient('Carrot', 1),
  //   //       new Ingredient('Onion', 1),
  //   //       new Ingredient('Ketchup', 30),
  //   //     ]
  //   //   ),
  //   // ];
  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

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

  addRecipe(recipe: Recipe) {
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
