import { Component, OnInit, OnChanges,Input } from '@angular/core';
import { ImageService } from '../image-detail/shared/image.service';
import { FilterdataPipe } from '../filterdata.pipe';


@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnChanges {

@Input() filterBy?: string ='all'

visibleImages: any[] =[];
searchString :string=null;
getSearchString(){
  return this.searchString;
}
setSearchString(value:string){
  this.searchString=value;
  this.visibleImages=this.filterImages(value);
}

setViews(element:any)
{
    element.views++;
}
filterImages(value:string)
{
return this.visibleImages.filter(item => item.caption.toLowerCase().indexOf(value.toLowerCase()) !== -1);
}



  constructor(private imageService:ImageService) {
   this.visibleImages= this.imageService.getImages();
   }

  ngOnInit() {
  }
  ngOnChanges() {
  this.visibleImages= this.imageService.getImages();
   this.setSearchString(null);
  }

}
