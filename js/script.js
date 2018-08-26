//slot droppable should be false once correct piece is dropped

//ready begins 
      var correctPieces = 0;
  	$(document).ready(function(){
         
  		$(".draggable").draggable({ 
            start: function(event, ui) {
                ui.helper.data('dropped', false);
            },
  			snap : true,
  			containment : ".outer",
            snapTolerance : 20,
  			zIndex : 100,
          //  stack: ".draggable",
            stop: function(event, ui)
            {
                if (ui.helper.data('dropped')) {
                    correctPieces = correctPieces + 1;
                }
                correctMsg();
            }
  		});
        
   /*     
        $('.slot').droppable({
            hoverClass : "ui-state-highlight",
            accept : '.draggable',
            drop : function (event, ui, draggable) {
                $('#droptext').remove();
                ui.draggable.position( { of: $(this), my: 'center', at: 'center' } ); 
            }
        });
   */     
        
        $('.pic1').droppable({
         hoverClass: "ui-state-highlight",
         accept : '.draggable',
        drop : function (event, ui) {
            $('#droptext').remove();
            ui.draggable.position( { of: $(this), my: 'center', at: 'center' } ); 
            if ($(ui.draggable).hasClass("pic1")) {
                $(this).droppable({
                  disabled : true
                });
                ui.helper.draggable({
                  disabled : true
                });
                 $(ui.draggable).children('img').removeClass("has-hover");
                  ui.helper.data('dropped', true);
              }
          }
      });
        
      $('.pic2').droppable({
         hoverClass: "ui-state-highlight",
         accept : '.draggable',
        drop : function (event, ui) {
            $('#droptext').remove();
            ui.draggable.position( { of: $(this), my: 'center', at: 'center' } ); 
            if ($(ui.draggable).hasClass("pic2")) {
                $(this).droppable({
                  disabled : true
                });
                ui.helper.draggable({
                  disabled : true
                });
                 $(ui.draggable).children('img').removeClass("has-hover");
                  ui.helper.data('dropped', true);
              }
          }
      });
        
         $('.pic3').droppable({
         hoverClass: "ui-state-highlight",
         accept : '.draggable',
        drop : function (event, ui) {
            $('#droptext').remove();
            ui.draggable.position( { of: $(this), my: 'center', at: 'center' } ); 
            if ($(ui.draggable).hasClass("pic3")) {
                $(this).droppable({
                  disabled : true
                });
                ui.helper.draggable({
                  disabled : true
                });
                 $(ui.draggable).children('img').removeClass("has-hover");
                  ui.helper.data('dropped', true);
              }
          }
      });
        
     $('.pic4').droppable({
         hoverClass: "ui-state-highlight",
         accept : '.draggable',
        drop : function (event, ui) {
            $('#droptext').remove();
            ui.draggable.position( { of: $(this), my: 'center', at: 'center' } ); 
            if ($(ui.draggable).hasClass("pic4")) {
                $(this).droppable({
                  disabled : true
                });
                ui.helper.draggable({
                  disabled : true
                });
                 $(ui.draggable).children('img').removeClass("has-hover");
                  ui.helper.data('dropped', true);
              }
          }
      });
        
    $('.pic5').droppable({
         hoverClass: "ui-state-highlight",
         accept : '.draggable',
        drop : function (event, ui) {
            $('#droptext').remove();
            ui.draggable.position( { of: $(this), my: 'center', at: 'center' } ); 
            if ($(ui.draggable).hasClass("pic5")) {
                $(this).droppable({
                  disabled : true
                });
                ui.helper.draggable({
                  disabled : true
                });
                 $(ui.draggable).children('img').removeClass("has-hover");
                  ui.helper.data('dropped', true);
              }
          }
      });
        
     $('.pic6').droppable({
         hoverClass: "ui-state-highlight",
         accept : '.draggable',
        drop : function (event, ui) {
            $('#droptext').remove();
            ui.draggable.position( { of: $(this), my: 'center', at: 'center' } ); 
            if ($(ui.draggable).hasClass("pic6")) {
                $(this).droppable({
                  disabled : true
                });
                ui.helper.draggable({
                  disabled : true
                });
                 $(ui.draggable).children('img').removeClass("has-hover");
                  ui.helper.data('dropped', true);
              }
          }
      });
        
     $('.pic7').droppable({
         hoverClass: "ui-state-highlight",
         accept : '.draggable',
        drop : function (event, ui) {
            $('#droptext').remove();
            ui.draggable.position( { of: $(this), my: 'center', at: 'center' } ); 
            if ($(ui.draggable).hasClass("pic7")) {
                $(this).droppable({
                  disabled : true
                });
                ui.helper.draggable({
                  disabled : true
                });
                 $(ui.draggable).children('img').removeClass("has-hover");
                  ui.helper.data('dropped', true);
              }
          }
      });
        
     $('.pic8').droppable({
         hoverClass: "ui-state-highlight",
         accept : '.draggable',
        drop : function (event, ui) {
            $('#droptext').remove();
            ui.draggable.position( { of: $(this), my: 'center', at: 'center' } ); 
            if ($(ui.draggable).hasClass("pic8")) {
                $(this).droppable({
                  disabled : true
                });
                ui.helper.draggable({
                  disabled : true
                });
                 $(ui.draggable).children('img').removeClass("has-hover");
                  ui.helper.data('dropped', true);
              }
          }
      });
        
     $('.pic9').droppable({
         hoverClass: "ui-state-highlight",
         accept : '.draggable',
        drop : function (event, ui) {
            $('#droptext').remove();
            ui.draggable.position( { of: $(this), my: 'center', at: 'center' } ); 
            if ($(ui.draggable).hasClass("pic9")) {
                $(this).droppable({
                  disabled : true
                });
                ui.helper.draggable({
                  disabled : true
                });
                 $(ui.draggable).children('img').removeClass("has-hover");
                  ui.helper.data('dropped', true);
              }
          }
      });   
        
      $('.pic10').droppable({
         hoverClass: "ui-state-highlight",
         accept : '.draggable',
        drop : function (event, ui) {
            $('#droptext').remove();
            ui.draggable.position( { of: $(this), my: 'center', at: 'center' } ); 
            if ($(ui.draggable).hasClass("pic10")) {
                $(this).droppable({
                  disabled : true
                });
                ui.helper.draggable({
                  disabled : true
                });
                 $(ui.draggable).children('img').removeClass("has-hover");
                  ui.helper.data('dropped', true);
              }
          }
      });   
        
     $('.pic11').droppable({
         hoverClass: "ui-state-highlight",
         accept : '.draggable',
        drop : function (event, ui) {
            $('#droptext').remove();
            ui.draggable.position( { of: $(this), my: 'center', at: 'center' } ); 
            if ($(ui.draggable).hasClass("pic11")) {
                $(this).droppable({
                  disabled : true
                });
                ui.helper.draggable({
                  disabled : true
                });
                 $(ui.draggable).children('img').removeClass("has-hover");
                  ui.helper.data('dropped', true);
              }
          }
      });
        
     $('.pic12').droppable({
         hoverClass: "ui-state-highlight",
         accept : '.draggable',
        drop : function (event, ui) {
            $('#droptext').remove();
            ui.draggable.position( { of: $(this), my: 'center', at: 'center' } ); 
            if ($(ui.draggable).hasClass("pic12")) {
                $(this).droppable({
                  disabled : true
                });
                ui.helper.draggable({
                  disabled : true
                });
                 $(ui.draggable).children('img').removeClass("has-hover");
                  ui.helper.data('dropped', true);
              }
          }
      });
        
    
    $('.hint1').click(function() {
        $('div').find('.box').toggleClass('box-hint1');
    });
        
    
    $('.hint2').click(function() {
        $('div').find('.box').toggleClass('box-hint2');
    });
        
    
    $('.hint3').click(function() {
        $('div').find('.box').toggleClass('box-hint3');
    });

                      
    function correctMsg () {
       if (correctPieces == 12) {
       //    alert('Congratulations, you won!');
           $('#hello').dialog({
            modal: true,
       //     zIndex: 6000,
           });
       }
    }
          
       
 }); //ready ends