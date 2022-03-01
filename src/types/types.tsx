export interface ItoDoItem {
  label?: string;
  important?: boolean;
  id?: number;
  onDeleted?:(e?: React.MouseEvent) => void
}

export interface ItodoData {
  todos: ItoDoItem[];
  onDeleted:( id?:number) => void
}

export interface Iheader {
  toDo: string;
  done: string;
}

export interface IAddItem {
  onAddItem:( text?:string,e?: React.MouseEvent) => void
}

// export interface EventHandlerProps {
//   onDeleted: 
// }