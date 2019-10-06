import { Component, OnInit } from '@angular/core';
import { RouterModule , Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { ConfigService } from '../../../../services/config.service';
declare var $:any;
@Component({
  selector: 'diamond-jewel',
  templateUrl: './diamond-jewel.component.html',
  styleUrls: ['./diamond-jewel.component.css']
})
export class DiamondJewelComponent implements OnInit {

  constructor( private routes: Router,private config: ConfigService,private http: HttpClient) { }
  planDefault = 1;
  falseDi=false;
  plotSelected;
  selectPlan1(e){
    $('.selectedPlan').addClass('basic');
    $(e.target).addClass('selectedPlan');
    $(e.target).removeClass('basic');
    this.planDefault =1;
    this.plotNumber=null;
    let list = this.plotsList;
    setTimeout(function(){ 
        list.map((plot)=>{
        if(plot.available_status==0){
          $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", 'rgba(255,0,0,0.8)' );
          $('text').css('fill','black');
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css('pointer-events','none');
        }
        if(plot.available_status==1){
          $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", '#2fce7e');
          $('text').css('fill','black');
        }
        if(plot.available_status==2){
          $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", 'rgba(0,0,255,0.8)' );
          $('text').css('fill','black');
        }
      });
    }, 0);
   
  }
  selectPlan2(e){
    $('.selectedPlan').addClass('basic');
    $(e.target).addClass('selectedPlan');
    $(e.target).removeClass('basic');
    this.planDefault =2;
    this.plotNumber=null;
    let list = this.plotsList;
    setTimeout(function(){ 
        list.map((plot)=>{
        if(plot.available_status==0){
          $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", 'rgba(255,0,0,0.8)' );
          $('text').css('fill','black');
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css('pointer-events','none');
        }
        if(plot.available_status==1){
          $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", '#2fce7e');
          $('text').css('fill','black');
        }
        if(plot.available_status==2){
          $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", 'rgba(0,0,255,0.8)' );
          $('text').css('fill','black');
        }
      });
    }, 0);
  }
  selectPlan3(e){
    $('.selectedPlan').addClass('basic');
    $(e.target).addClass('selectedPlan');
    $(e.target).removeClass('basic');
    this.planDefault =3;
    this.plotNumber=null;
    let list = this.plotsList;
    setTimeout(function(){ 
        list.map((plot)=>{
        if(plot.available_status==0){
          $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", 'rgba(255,0,0,0.8)' );
          $('text').css('fill','black');
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css('pointer-events','none');
        }
        if(plot.available_status==1){
          $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", '#2fce7e');
          $('text').css('fill','black');
        }
        if(plot.available_status==2){
          $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", 'rgba(0,0,255,0.8)' );
          $('text').css('fill','black');
        }
      });
    }, 0);
  }
  selectPlan4(e){
    $('.selectedPlan').addClass('basic');
    $(e.target).addClass('selectedPlan');
    $(e.target).removeClass('basic');
    this.planDefault =4;
    let list = this.plotsList;
    this.plotNumber=null;
    setTimeout(function(){ 
        list.map((plot)=>{
        if(plot.available_status==0){
          $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", 'rgba(255,0,0,0.8)' );
          $('text').css('fill','black');
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css('pointer-events','none');
        }
        if(plot.available_status==1){
          $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", '#2fce7e');
          $('text').css('fill','black');
        }
        if(plot.available_status==2){
          $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", 'rgba(0,0,255,0.8)' );
          $('text').css('fill','black');
        }
      });
    }, 0);
  }
  plotNumber:number;
  modelChange(newObj){
    if(newObj==null){
      $('.cls-13').css('fill','#2fce72');
      $('.cls-10').css('fill','#2fce72');
      $('.cls-11').css('fill','#2fce72');
      $( "text").css( "fill", "black" );
    }
    if($( "text:contains("+newObj+")").length){
      $('.cls-13').css('fill','none');
      $('.cls-10').css('fill','none');
      $('.cls-11').css('fill','none');
      $( "text").css( "fill", "none" );

      this.plotsList.map((plot)=>{
        if(plot.plot_no==newObj){
          if(plot.available_status==0){
              $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
              $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", 'rgba(255,0,0,0.8)' );
              $( "text").css( "fill", "black" );
          }
          if(plot.available_status==1){
              $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
              $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", 'rgba(0,255,0,0.8)' );
              $( "text").css( "fill", "black" );
          }
          if(plot.available_status==2){
              $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
              $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", 'rgba(0,0,255,0.8)' );
              $( "text").css( "fill", "black" );
          }
        }

       
      });


      var elHeight =  $( "text:contains("+newObj+")").offset().top;
      var windowHeight = $(window).height();
      var offset;
      if (elHeight+200 < windowHeight) {
        offset = elHeight - ((windowHeight / 2) - (elHeight / 2));
      }
      else {
        offset = elHeight-200;
      }

      $('html, body').animate(
        {
          scrollTop: offset,
        },
        100,
        'linear'
      );


    } else {
      $('.cls-13').css('fill','#2fce72');
      $('.cls-10').css('fill','#2fce72');
      $('.cls-16').css('fill','#2fce72');
      $('.cls-11').css('fill','#2fce72');
      $('text').css('fill','black');
      this.plotsList.map((plot)=>{
        if(plot.available_status==0){
          $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", 'rgba(255,0,0,0.8)' );
          $('text').css('fill','black');
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css('pointer-events','none');
        }
        if(plot.available_status==1){
          $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", '#2fce7e');
          $('text').css('fill','black');
        }
        if(plot.available_status==2){
          $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
          $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", 'rgba(0,0,255,0.8)' );
          $('text').css('fill','black');
        }
      });
    }
 
  }
  searchPlot(e){
    this.plotSelected = e.target.value;
    localStorage.setItem('plotSelected',this.plotSelected);
    this.plotSelectedAttr=this.plotsList.filter((plot)=>{
      return plot.plot_no==this.plotSelected;
    });
    if(this.plotSelectedAttr[0]){
      this.plotSelectedProps=this.plotSelectedAttr[0];
      
      if(this.plotSelectedProps.available_status==0){
        this.plotColor='#db2828';
        this.availStatus="Not Available";
      } else if(this.plotSelectedProps.available_status==1){
        this.availStatus="Available";
        this.plotColor='#2fce72';
      } else {
        this.availStatus="Partially Available";
        this.plotColor='#0066ff';
      }
      sessionStorage.setItem('plotSelectedAttr',JSON.stringify(this.plotSelectedAttr));
      this.plotSelectedPassbookCount=JSON.parse(this.plotSelectedAttr[0].passbook_no).length;
      this.plotSelectedAttributes=JSON.parse(this.plotSelectedAttr[0].project_attributes);

      $('.ui.modal.plotInfo').modal('show');
    }
  }
  openAttr(e){
    console.log(e)
    this.plotSelected = $(e.target).next().html();
    localStorage.setItem('plotSelected',this.plotSelected);
    this.plotSelectedAttr=this.plotsList.filter((plot)=>{
      return plot.plot_no==this.plotSelected;
    });
    if(this.plotSelectedAttr[0]){
      this.plotSelectedProps=this.plotSelectedAttr[0];
      
      if(this.plotSelectedProps.available_status==0){
        this.availStatus="Not Available";
        this.plotColor='#db2828';
      } else if(this.plotSelectedProps.available_status==1){
        this.availStatus="Available";
        this.plotColor='#2fce72';
      } else {
        this.availStatus="Partially Available";
        this.plotColor='#0066ff';
      }
      sessionStorage.setItem('plotSelectedAttr',JSON.stringify(this.plotSelectedAttr));
      this.plotSelectedPassbookCount=JSON.parse(this.plotSelectedAttr[0].passbook_no).length;
      this.plotSelectedAttributes=JSON.parse(this.plotSelectedAttr[0].project_attributes);
      $('.ui.modal.plotInfo').modal('show');
    }
  }
  addPlot(){
    $('.ui.modal.plotInfo').modal('hide');
    // this.routes.navigate(['/payPlans']);

  }
  plotSearch(id){
    this.plotSelected = id;
    localStorage.setItem('plotSelected',this.plotSelected);
    this.plotSelectedAttr=this.plotsList.filter((plot)=>{
      return plot.plot_no==this.plotSelected;
    });
    if(this.plotSelectedAttr[0]){
      this.plotSelectedProps=this.plotSelectedAttr[0];
      
      if(this.plotSelectedProps.available_status==0){
        this.availStatus="Not Available";
        this.plotColor='#db2828';
      } else if(this.plotSelectedProps.available_status==1){
        this.availStatus="Available";
        this.plotColor='#2fce72';
      } else {
        this.availStatus="Partially Available";
        this.plotColor='#0066ff';
      }
      sessionStorage.setItem('plotSelectedAttr',JSON.stringify(this.plotSelectedAttr));
      this.plotSelectedPassbookCount=JSON.parse(this.plotSelectedAttr[0].passbook_no).length;
      this.plotSelectedAttributes=JSON.parse(this.plotSelectedAttr[0].project_attributes);
      $('.ui.modal.plotInfo').modal('show');
  }
}
plotsList;
plotSelectedPassbookCount;
plotSelectedAttributes;
plotColor;
projectSelected;
plotSelectedAttr;
plotSelectedProps={
  available_status:0,
  plot_sqyards: 1,
  plot_view:'',
  extra_cost: 0
};
availStatus;
availableCount=0;
soldCount=0;
partialCount=0;
  ngOnInit() {
    this.projectSelected=JSON.parse(localStorage.getItem('projectSelected'));

    this.plotsList=JSON.parse(localStorage.getItem('plotsData'));
    this.plotsList.map( (plot)=>{
      let parseTrue=typeof(JSON.parse(plot.project_attributes));
      if(parseTrue==='string'){
        plot.project_attributes=JSON.parse(plot.project_attributes);
      }
    });
    this.plotsList.map((plot)=>{
      if(plot.available_status==0){
        this.soldCount++;
      }
      if(plot.available_status==1){
        this.availableCount++;
      }
      if(plot.available_status==2){
        this.partialCount++;
      }
    });
    
  }

  ngAfterViewInit() {
    this.plotsList.map((plot)=>{
      if(plot.available_status==0){
        $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
        $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", 'rgba(255,0,0,0.8)' );
        $('text').css('fill','black');
        $( "text:contains("+plot.plot_no+")").prev( "rect" ).css('pointer-events','none');
      }
      if(plot.available_status==1){
        $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
        $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", '#2fce7e');
        $('text').css('fill','black');
      }
      if(plot.available_status==2){
        $( "text:contains("+plot.plot_no+")").css( "fill", "white" );
        $( "text:contains("+plot.plot_no+")").prev( "rect" ).css( "fill", 'rgba(0,0,255,0.8)' );
        $('text').css('fill','black');
      }
    });
  }

}
