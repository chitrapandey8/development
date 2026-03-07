import { create } from "zustand";

interface IRecipes{
    id:number,
    name:string
}

type Iupdate = Record<string,string>

interface IRecipe {
    Recipes:IRecipes[]
    add:(item:string)=>void
    remove:(id:number)=>void
    update:(id:number,updateitem:Iupdate)=>void
}

export const Recipe = create<IRecipe>((set)=>({
    Recipes:[],
    add:(item)=>{
        set((state)=>({Recipes:[...state.Recipes,{id:state.Recipes.length+1,name:item}]}))
    },
    remove:(id)=>{
        set((state)=>({Recipes:state.Recipes.filter((i)=>i.id !== id)}))
    },
    update:(id,updateitem)=>{
         set((state)=>({Recipes:state.Recipes.map((i)=>i.id ? {...i,updateitem} :i)}))
    }
}))