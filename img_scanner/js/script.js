function upload() {
    var imgcanvas = document.getElementById("canv1");
    var fileinput = document.getElementById("finput");
    var image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
    const get = confirm("Do You want Scan and Get A Rating");


    if (get == false) {
        alert("Thnks for visit : ");
    }
    else {
        document.getElementById("hr").style.display = "block";
        document.querySelector("#hr").classList.add("hr");
        setTimeout(() => {
            document.querySelector("#hr").classList.remove("hr");
            document.getElementById("main").style.display = "none";
            update();
        }, 10000);

        // random number genrator
        let random = Math.random() * 100;

        // for a progess bar
        function update() {
            document.getElementById("Progress_Status").style.display = "block";
            var element = document.getElementById("myprogressBar");
            var width = 1;
            var identity = setInterval(scene, 80);//calling a function it work like a loop
            function scene() {
                if (width >= random) {
                    doneEmoji();
                    clearInterval(identity);
                } else {
                    width++;
                    element.style.width = width + '%';
                    element.innerHTML = width * 1 + '%';
                }
            }
        }
        function doneEmoji() {
            document.getElementById("x").classList.add("emo");
            document.getElementById("x").style.display = "block";
            if (random >= 5 && random <= 10) {
                document.getElementById("x").src = "emoji/1.gif";
            }
            if (random >= 10 && random <= 20) {
                document.getElementById("x").src = "emoji/2.gif";
            }
            if (random >= 20 && random <= 30) {
                document.getElementById("x").src = "emoji/3.gif";
            }
            if (random >= 30 && random <= 40) {
                document.getElementById("x").src = "emoji/4.gif";
            }
            if (random >= 40 && random <= 50) {
                document.getElementById("x").src = "emoji/5.gif";
            }
            if (random >= 50 && random <= 60) {
                document.getElementById("x").src = "emoji/6.gif";
            }
            if (random >= 60 && random <= 70) {
                document.getElementById("x").src = "emoji/7.gif";
            }
            if (random >= 70 && random <= 80) {
                document.getElementById("x").src = "emoji/8.gif";
            }
            if (random >= 80 && random <= 90) {
                document.getElementById("x").src = "emoji/9.gif";
            }
            if (random >= 90 && random <= 93) {
                document.getElementById("x").src = "emoji/10.gif";
            }
            if (random >= 93 && random <= 97) {
                document.getElementById("x").src = "emoji/11.gif";
            }
            if (random >= 97 && random <= 100) {
                document.getElementById("x").src = "emoji/12.gif";
            }

            feedback();
        }
        function feedback() {
            setTimeout(() => {

                setTimeout(() => {
                    confirm("Plzzz give a FeedBack To Us");

                    document.getElementById("feed").style.display = "block";
                }, 100);
                document.getElementById("container").style.display = "none";
            }, 4000);
        }
        
    }

}