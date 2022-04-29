let words = ["Danilo","a Developer Student","a Technology Addict","a A.I. Lover"];
let cit = [ 
    'The happiness of your life depends upon the quality of your thoughts.',
    'It always seems impossible until it is done.',
    'Creativity is intelligence having fun.',
    "...I've failed over and over and over again in my life. And that is why I succeed.", 
    'Failure is an option here. If things are not failing, you are not innovating enough.',
    'Your time is limited, so don’t waste it living someone else’s life.',
    'All of old. Nothing else ever. Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.',
    'If you want something you’ve never had you must be willing to do something you’ve never done.'
]; 
let author = ["Marcus Aurelius","Nelson Mandela","Albert Einstein","Michael Jordan","Elon Musk","Steve Jobs","Samuel Beckett","Thomas Jefferson"];
let cit_id = Math.floor(Math.random() * cit.length);
let app = document.getElementById('text');
let btn_contact = document.getElementsByClassName("btn")


window.addEventListener("load", function(){
            
            
        
            document.getElementById('q_text').innerHTML = cit[cit_id];
            document.getElementById('author').innerHTML = author[cit_id];

            var typewriter = new Typewriter(text, {
                loop: true
            });

            typewriter.pauseFor(400)
                .typeString(words[1])
                .pauseFor(1000)
                .deleteAll()
                .typeString(words[2])
                .pauseFor(1000)
                .deleteAll()
                .typeString(words[3])
                .pauseFor(1000)
                .deleteAll()
                .typeString(words[4])
                .pauseFor(1000)
                .deleteAll()
                .start();
            
            for (let i = 0; i < btn_contact.length; i++) {
                btn_contact[i].addEventListener("click", function(){ sendEmail(); });
            }
            
            function sendEmail() 
            {
                window.location = "mailto:danilo806@icloud.com";
            }

            })



