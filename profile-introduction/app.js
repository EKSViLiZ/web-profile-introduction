const content1 = document.getElementById("profileOverview")

const content2 = document.getElementById("nav-hobbies");

const content3 = document.getElementById("goals");

function callbackFunction1(enteries) {
    enteries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target.id)
            document.getElementById("nav1").classList.add("selected");
        } else { 
        document.getElementById("nav1").classList.remove("selected");
        }
    })
};

function callbackFunction2(enteries) {
    enteries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target.id)
            document.getElementById("nav2").classList.add("selected");
        } else { 
        document.getElementById("nav2").classList.remove("selected");
        }
    })
};

function callbackFunction3(enteries) {
    enteries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log(entry.target.id)
            document.getElementById("nav3").classList.add("selected");
        } else { 
        document.getElementById("nav3").classList.remove("selected");
        }
    })
};

const options = {};

const observer1 = new IntersectionObserver(
    callbackFunction1,
    options
);

const observer2 = new IntersectionObserver(
    callbackFunction2,
    options
);

const observer3 = new IntersectionObserver(
    callbackFunction3,
    options
);


observer1.observe(content1);

observer2.observe(content2);

observer3.observe(content3);