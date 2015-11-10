   $(function($) {

                $("#1blue.knob").knob({
                          release : function (value) {
                          var richtung ="";
                          var farbe="B";
                          var kanal= "1";
                          
                                 if ($('input[name="oneblue"]').is(":checked")) { 
                                 if (value > null) {
                                 var richtung = "M";
                                 }
                                 } 
                                                    
                        
                         
                          if ($('input[name="oneblue"]').is(":checked")) { 
                           if (value < null){
                         var richtung = "";
                          value = value * -1;
                         }
                         } 
                                                    
                          if ($('input[name="oneblue"]').not(":checked")) { 
                           if (value < null){
                         var richtung = "M";
                          value = value * -1;
                         }
                         } 
                          socket.emit('fahren1', kanal, farbe, value, richtung);
                        
                    },
                    cancel : function () {
                        var richtung ="";
                        socket.emit('fahren1', 'BRAKE', richtung);
                        
                  },
                                     draw : function () {

                        // "tron" case
                        if(this.$.data('skin') == 'tron') {

                            this.cursorExt = 0.3;

                            var a = this.arc(this.cv)  // Arc
                                , pa                   // Previous arc
                                , r = 1;

                            this.g.lineWidth = this.lineWidth;

                            if (this.o.displayPrevious) {
                                pa = this.arc(this.v);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });

               
            });

  
            
  // =========================================================================          
            $(function($) {

                $("#1red.knob").knob({
                           release : function (value) {
                          var richtung ="";
                          var farbe="R";
                          var kanal= "1";
                          
                                 if ($('input[name="onered"]').is(":checked")) { 
                                 if (value > null) {
                                 var richtung = "M";
                                 }
                                 } 
                                                    
                        
                         
                          if ($('input[name="onered"]').is(":checked")) { 
                           if (value < null){
                         var richtung = "";
                          value = value * -1;
                         }
                         } 
                                                    
                          if ($('input[name="onered"]').not(":checked")) { 
                           if (value < null){
                         var richtung = "M";
                          value = value * -1;
                         }
                         } 
                          socket.emit('fahren1', kanal, farbe, value, richtung);
                        
                    },
                    cancel : function () {
                        var richtung ="";
                        socket.emit('fahren1', 'BRAKE', richtung);
                        
                  },
                  
                   draw : function () {

                        // "tron" case
                        if(this.$.data('skin') == 'tron') {

                            this.cursorExt = 0.3;

                            var a = this.arc(this.cv)  // Arc
                                , pa                   // Previous arc
                                , r = 1;

                            this.g.lineWidth = this.lineWidth;

                            if (this.o.displayPrevious) {
                                pa = this.arc(this.v);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });

               
            });
// =========================================================================                 
            



   $(function($) {

                $("#2blue.knob").knob({
                          release : function (value) {
                          var richtung ="";
                          var farbe="B";
                          var kanal= "2";
                          
                                 if ($('input[name="twoblue"]').is(":checked")) { 
                                 if (value > null) {
                                 var richtung = "M";
                                 }
                                 } 
                                                    
                        
                         
                          if ($('input[name="twoblue"]').is(":checked")) { 
                           if (value < null){
                         var richtung = "";
                          value = value * -1;
                         }
                         } 
                                                    
                          if ($('input[name="twoblue"]').not(":checked")) { 
                           if (value < null){
                         var richtung = "M";
                          value = value * -1;
                         }
                         } 
                          socket.emit('fahren1', kanal, farbe, value, richtung);
                        
                    },
                    cancel : function () {
                        var richtung ="";
                        socket.emit('fahren1', 'BRAKE', richtung);
                        
                  },
                                     draw : function () {

                        // "tron" case
                        if(this.$.data('skin') == 'tron') {

                            this.cursorExt = 0.3;

                            var a = this.arc(this.cv)  // Arc
                                , pa                   // Previous arc
                                , r = 1;

                            this.g.lineWidth = this.lineWidth;

                            if (this.o.displayPrevious) {
                                pa = this.arc(this.v);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });

               
            });

  
            
  // =========================================================================          
            $(function($) {

                $("#2red.knob").knob({
                          release : function (value) {
                          var richtung ="";
                          var farbe="R";
                          var kanal= "2";
                          
                                 if ($('input[name="twored"]').is(":checked")) { 
                                 if (value > null) {
                                 var richtung = "M";
                                 }
                                 } 
                                                    
                        
                         
                          if ($('input[name="twored"]').is(":checked")) { 
                           if (value < null){
                         var richtung = "";
                          value = value * -1;
                         }
                         } 
                                                    
                          if ($('input[name="twored"]').not(":checked")) { 
                           if (value < null){
                         var richtung = "M";
                          value = value * -1;
                         }
                         } 
                          socket.emit('fahren1', kanal, farbe, value, richtung);
                        
                    },
                    cancel : function () {
                        var richtung ="";
                        socket.emit('fahren1', 'BRAKE', richtung);
                        
                    },

                    draw : function () {

                        // "tron" case
                        if(this.$.data('skin') == 'tron') {

                            this.cursorExt = 0.3;

                            var a = this.arc(this.cv)  // Arc
                                , pa                   // Previous arc
                                , r = 1;

                            this.g.lineWidth = this.lineWidth;

                            if (this.o.displayPrevious) {
                                pa = this.arc(this.v);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });

               
            });
// =========================================================================                    
            
            // =========================================================================                 
            



   $(function($) {

                $("#3blue.knob").knob({
                          release : function (value) {
                           var richtung ="";
                          var farbe="B";
                          var kanal= "3";
                          
                                 if ($('input[name="threeblue"]').is(":checked")) { 
                                 if (value > null) {
                                 var richtung = "M";
                                 }
                                 } 
                                                    
                        
                         
                          if ($('input[name="threeblue"]').is(":checked")) { 
                           if (value < null){
                         var richtung = "";
                          value = value * -1;
                         }
                         } 
                                                    
                          if ($('input[name="threeblue"]').not(":checked")) { 
                           if (value < null){
                         var richtung = "M";
                          value = value * -1;
                         }
                         } 
                          socket.emit('fahren1', kanal, farbe, value, richtung);
                        
                    },
                    cancel : function () {
                        var richtung ="";
                        socket.emit('fahren1', 'BRAKE', richtung);
                        
                  },
                                     draw : function () {

                        // "tron" case
                        if(this.$.data('skin') == 'tron') {

                            this.cursorExt = 0.3;

                            var a = this.arc(this.cv)  // Arc
                                , pa                   // Previous arc
                                , r = 1;

                            this.g.lineWidth = this.lineWidth;

                            if (this.o.displayPrevious) {
                                pa = this.arc(this.v);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });

               
            });

  
            
  // =========================================================================          
            $(function($) {

                $("#3red.knob").knob({
                          release : function (value) {
                           var richtung ="";
                          var farbe="R";
                          var kanal= "3";
                          
                                 if ($('input[name="threered"]').is(":checked")) { 
                                 if (value > null) {
                                 var richtung = "M";
                                 }
                                 } 
                                                    
                        
                         
                          if ($('input[name="threered"]').is(":checked")) { 
                           if (value < null){
                         var richtung = "";
                          value = value * -1;
                         }
                         } 
                                                    
                          if ($('input[name="threered"]').not(":checked")) { 
                           if (value < null){
                         var richtung = "M";
                          value = value * -1;
                         }
                         } 
                          socket.emit('fahren1', kanal, farbe, value, richtung);
                        
                    },
                    cancel : function () {
                        var richtung ="";
                        socket.emit('fahren1', 'BRAKE', richtung);
                        
                    },

                    draw : function () {

                        // "tron" case
                        if(this.$.data('skin') == 'tron') {

                            this.cursorExt = 0.3;

                            var a = this.arc(this.cv)  // Arc
                                , pa                   // Previous arc
                                , r = 1;

                            this.g.lineWidth = this.lineWidth;

                            if (this.o.displayPrevious) {
                                pa = this.arc(this.v);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });

               
            });
// =========================================================================                    
            
            
            
            
            // =========================================================================                 
            



   $(function($) {

                $("#4blue.knob").knob({
                         release : function (value) {
                          var richtung ="";
                          var farbe="B";
                          var kanal= "4";
                          
                                 if ($('input[name="fourblue"]').is(":checked")) { 
                                 if (value > null) {
                                 var richtung = "M";
                                 }
                                 } 
                                                    
                        
                         
                          if ($('input[name="fourblue"]').is(":checked")) { 
                           if (value < null){
                         var richtung = "";
                          value = value * -1;
                         }
                         } 
                                                    
                          if ($('input[name="fourblue"]').not(":checked")) { 
                           if (value < null){
                         var richtung = "M";
                          value = value * -1;
                         }
                         } 
                          socket.emit('fahren1', kanal, farbe, value, richtung);
                        
                    },
                    cancel : function () {
                        var richtung ="";
                        socket.emit('fahren1', 'BRAKE', richtung);
                        
                  },
                                     draw : function () {

                        // "tron" case
                        if(this.$.data('skin') == 'tron') {

                            this.cursorExt = 0.3;

                            var a = this.arc(this.cv)  // Arc
                                , pa                   // Previous arc
                                , r = 1;

                            this.g.lineWidth = this.lineWidth;

                            if (this.o.displayPrevious) {
                                pa = this.arc(this.v);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });

               
            });

  
            
  // =========================================================================          
            $(function($) {

                $("#4red.knob").knob({
                          release : function (value) {
                          var richtung ="";
                          var farbe="B";
                          var kanal= "1";
                          
                                 if ($('input[name="fourred"]').is(":checked")) { 
                                 if (value > null) {
                                 var richtung = "M";
                                 }
                                 } 
                                                    
                        
                         
                          if ($('input[name="fourred"]').is(":checked")) { 
                           if (value < null){
                         var richtung = "";
                          value = value * -1;
                         }
                         } 
                                                    
                          if ($('input[name="fourred"]').not(":checked")) { 
                           if (value < null){
                         var richtung = "M";
                          value = value * -1;
                         }
                         } 
                          socket.emit('fahren1', kanal, farbe, value, richtung);
                        
                    },
                    cancel : function () {
                        var richtung ="";
                        socket.emit('fahren1', 'BRAKE', richtung);
                        
                    },

                    draw : function () {

                        // "tron" case
                        if(this.$.data('skin') == 'tron') {

                            this.cursorExt = 0.3;

                            var a = this.arc(this.cv)  // Arc
                                , pa                   // Previous arc
                                , r = 1;

                            this.g.lineWidth = this.lineWidth;

                            if (this.o.displayPrevious) {
                                pa = this.arc(this.v);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, pa.s, pa.e, pa.d);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, a.s, a.e, a.d);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc( this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;
                        }
                    }
                });

               
            });
// =========================================================================                    
            
            
            
            
            
            
            

              