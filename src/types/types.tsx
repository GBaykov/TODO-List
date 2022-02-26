export interface ItoDoItem {
    label?: string;
    important?:boolean;
    id?:number
  }

  export interface ItodoData {
      todos: ItoDoItem[]
  }