import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {

  transform(items:any[],caption: string):any{
    if(caption === null)
    {
      return items;
    }
    else{
    return items.filter(item => item.caption.toLowerCase().indexOf(caption.toLowerCase()) !== -1);
    }
  } 

}