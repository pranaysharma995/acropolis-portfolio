import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public ngOnInit()
  {
    $(document).ready(function()
	{
//script for our services section 





        $(window).on("scroll",function(e)
        {
            if($(this).scrollTop() > 20)
            {
                $(".top-nav").addClass("fixed-nav-bar");
                $(".estimate-product").addClass("background-green");
            }
            else
            {
                 $(".top-nav").removeClass("fixed-nav-bar"); 
                  $(".estimate-product").removeClass("background-green");
            }
        })
		$(".dropdown").hover(function()
		{
$($(this).find(".dropdown-content-services")).show();
		},function()
		{
$($(this).find(".dropdown-content-services")).hide();
		});

        
        /* Add a focus event listener to the input type="email" */
    
    
 


	});
  }
}
