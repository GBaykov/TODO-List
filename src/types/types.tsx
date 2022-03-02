export interface ItoDoItem {
  label?: string;
  
  id?: number;
  onDeleted?:(e?: React.MouseEvent) => void;
  onToggleImportant?:( e?: React.MouseEvent) => void;
  onToggleDone?:( e?: React.MouseEvent) => void;
  done?:boolean;
  important?: boolean;

}

export interface ItodoData {
  todos: ItoDoItem[];
  onDeleted:( id?:number) => void,
  onToggleImportant:( id?:number) => void,
  onToggleDone:( id?:number) => void,
}

export interface Iheader {
  toDo: number;
  done: number;
}

export interface IAddItem {
  onAddItem:( text?:string,e?: React.FormEvent<HTMLInputElement>) => void
}

export interface IFilter {
  filter:string;
  onFilterchchange:( filter:string, e?: React.MouseEvent) => void;
}

export interface ISearchPanel {
  term:string;
  onSearchchange:( term:string,e?:React.ChangeEventHandler<HTMLInputElement>) => void
}