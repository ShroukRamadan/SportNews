             var i = 0 ;
            var images =[];
            var time =2000;
            images[0] = "..images/sport today.jpg";
            images[1] = "..images/c1.jpg";
            images[2] = "..images/c1.jpg";
            images[3] = "..images/c4.png";

            function pImage()
            {
               document.slide.src = images[i];
               if(i < images.length-1)
               {
                  i++;
               }
              else
              {
                  i= 0 ;
              }
              
              setTimeout(pImage(),time);
            }
               window.onload=pImage;
               
               
                function myFunction() {
                    alert("done");
                 }