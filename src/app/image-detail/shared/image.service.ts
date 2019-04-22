import { Injectable } from '@angular/core';

@Injectable()

export class ImageService
{
    imagesContainerFirst = [];
    imagesContainerSecond = [];
    imagesContainerThird = [];
    imagesContainerFourth = [];
visibleImages = [];
visibelImagesInFirst= [];
visibleImagesInSecond = [];
visibleImagesInThird = [];
visibleImagesInFourth = [];
getImages()
{
return this.visibleImages = IMAGES.slice(0);
}
getImagesInFirst()
{
this.imagesContainerFirst = IMAGES.slice(0);
for(let i=0;i<this.imagesContainerFirst.length;i++)
{

    if(this.imagesContainerFirst[i].id === 1)
    {
        this.visibelImagesInFirst.push(this.imagesContainerFirst[i]);
    }
}
return this.visibelImagesInFirst;

}
getImagesInSecond()
{
    this.imagesContainerSecond = IMAGES.slice(0);
    for(let i=0;i<this.imagesContainerSecond.length;i++)
    {
    
        if(this.imagesContainerSecond[i].id === 2)
        {
            this.visibleImagesInSecond.push(this.imagesContainerSecond[i]);
        }
    }
    return this.visibleImagesInSecond;
}
getImagesInThird()
{
    this.imagesContainerThird = IMAGES.slice(0);
    for(let i=0;i<this.imagesContainerThird.length;i++)
    {
    
        if(this.imagesContainerThird[i].id === 3)
        {
            this.visibleImagesInThird.push(this.imagesContainerThird[i]);
        }
    }
    return this.visibleImagesInThird;
}
getImagesInFourth()
{
    this.imagesContainerFourth = IMAGES.slice(0);
    for(let i=0;i<this.imagesContainerFourth.length;i++)
    {
    
        if(this.imagesContainerFourth[i].id === 4)
        {
            this.visibleImagesInFourth.push(this.imagesContainerFourth[i]);
        }
    }
    return this.visibleImagesInFourth;
}

getImage( id:number)
{
 return IMAGES.slice(0).find(image => image.id ==id)
}
setViews(element:any)
{
    element.views++;
}
	
}
const IMAGES = [

{"id":1,"category":"all","caption":"Car","views":100,"technology":['php','android'],"keywords":['car-guide','app'],"url":"assets/img/car-guide.jpg","industry":"assets/icons/education.svg","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
{"id":2,"category":"all","caption":"Cat","views":10,"technology":['php','android'],"keywords":['cat'],"url":"assets/img/cat-walk.jpg","industry":"assets/icons/education.svg","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
{"id":3,"category":"web","caption":"Connect","views":10,"technology":['php','android'],"keywords":['connect-easy'],"url":"assets/img/connect-easy.jpg","industry":"assets/icons/education.svg","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
{"id":4,"category":"all","caption":"Demo App","views":100,"technology":['php','android'],"keywords":['ebs'],"url":"assets/img/ebs.jpg","industry":"assets/icons/education.svg","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
{"id":1,"category":"mobile","caption":"Financial","views":50,"technology":['php','android'],"keywords":['financial'],"url":"assets/img/financial.jpg","industry":"assets/icons/education.svg","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
{"id":2,"category":"all","caption":"Demo App","views":0,"technology":['php','android'],"keywords":['movie'],"url":"assets/img/indian-movie.jpg","industry":"assets/icons/education.svg","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
{"id":3,"category":"mobile","caption":"Demo App","views":3,"technology":['php','android'],"keywords":['car-guide'],"url":"assets/img/car-guide.jpg","industry":"assets/icons/education.svg","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
{"id":4,"category":"all","caption":"Radio App","views":100,"technology":['php','android'],"keywords":['cat'],"url":"assets/img/cat-walk.jpg","industry":"assets/icons/education.svg","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
{"id":4,"category":"all","caption":"Radio App","views":100,"technology":['php','android'],"keywords":['connect-easy'],"url":"assets/img/connect-easy.jpg","industry":"assets/icons/education.svg","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
{"id":1,"category":"mobile","caption":"Connect","views":100,"technology":['php','android'],"keywords":['car-guide'],"url":"assets/img/connect-easy.jpg","industry":"assets/icons/education.svg","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
{"id":2,"category":"web","caption":"Acropolis Website","views":100,"technology":['php','android'],"keywords":['ebs'],"url":"assets/img/ebs.jpg","industry":"assets/icons/education.svg","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
{"id":3,"category":"web","caption":"Diseny Website","views":100,"technology":['php','android'],"keywords":['car-guide'],"url":"assets/img/car-guide.jpg","industry":"assets/icons/education.svg","description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}

];