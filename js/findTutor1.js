$(document).ready(function () {
    $('.hamburgerIcon').click(function () {
        $('#sidebar').toggle();
    })

    //hide nav on screen resize
    $(window).resize(function () {
        $('#sidebar').hide();
    })


})
$(document).ready(function () {


    $(".schedule").click(function () {           
          swal({
            title: "Your request has been replaced successfully." + "\r\n" + "The tutor will get back to you",
            icon: "success",
        }).then((value) => {
            location.reload();
        });
    });

    var tutors = [{
            name: "Mary Jackson",
            gender: "female",
            specialization: "Chemistry",
            description: "I am an excellent teacher with over 5 years of experience. To me, teaching is a calling and a lifestyle, rather than a profession..."
        },
        {
            name: "Bildad Geremy",
            gender: "male",
            specialization: "Chemistry",
            description: "With a well laid out teaching plan, I ensure students grasp every concept."
        },

        {
            name: "Rick Edwards",
            gender: "male",
            specialization: "Physics",
            description: "I implement prcatical sessions ensuring that no student is left out in understanding concepts"
        },
        {
            name: "Jackie Neema",
            gender: "female",
            specialization: "Biology",
            description: "Biology is a verse subject, I illustrate life processes through diagram representations for better understanding"
        },

        {
            name: "Pendo Augrey",
            gender: "female",
            specialization: "English",
            description: "I teach all levels of English ranging from beginner to intermediate and to advanced level. I customize and cover topics such as pronunciation, grammar, Travel English, speaking, kids course, business .."
        },

        {
            name: "Bragger Man",
            gender: "male",
            specialization: "Mathematics",
            description: "IMathematics has always been a huge problem among most kids. One thing I assure you,thestudent will greatly improve in their grades"

        },

        {
            name: "April Hope",
            gender: "female",
            specialization: "Mathematics",
            description: "Besides my studies, I have been tutoring my students different subjects (Computer Math, English, Statistics) for the last five years. I have gained experience to plan organize and implement an appro.."

        },

    ];



    $(".pick").change(function () {

        var selectedSubject = $("option:selected").text();
        if (selectedSubject == "Mathematics") {
            $("#tutorList").prepend("<div class='d-flex border p-1' id='tutor'> <img src='images/tutor9.jpeg' class='flex-shrink-0 me-3 mt-3 rounded-circle'>" +
                "<div> <h4> " + tutors[6].name + "</h4> <p>" + tutors[6].gender + "<br> <strong>" + "Specialization: " + "</strong>" + tutors[6].specialization +
                "</p> <p>" + tutors[6].description + "<p> <span class='fa fa-star checked'>" +
                "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" +
                "</span> <span class='fa fa-star checked'>" + "</span> <btn class='btn btn-warning schedule'>" + "SCHEDULE A SEESION" + "</btn>" +
                "</div>"
            );

            $("#tutorList").prepend("<div class='d-flex border p-1' id='tutor'> <img src='images/tutor10.jpeg' class='flex-shrink-0 me-3 mt-3 rounded-circle'>" +
                "<div> <h4> " + tutors[5].name + "</h4> <p>" + tutors[5].gender + "<br> <strong>" + "Specialization: " + "</strong>" + tutors[5].specialization +
                "</p> <p>" + tutors[5].description + "<p> <span class='fa fa-star checked'>" +
                "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" +
                "</span> <span class='fa fa-star checked'>" + "</span> <btn class='btn btn-warning schedule'>" + "SCHEDULE A SEESION" + "</btn>" +
                "</div>"
            );
        } else if (selectedSubject == "Chemistry") {
            $("#tutorList").prepend("<div class='d-flex border p-1' id='tutor'> <img src='images/tutor9.jpeg' class='flex-shrink-0 me-3 mt-3 rounded-circle'>" +
                "<div> <h4> " + tutors[0].name + "</h4> <p>" + tutors[0].gender + "<br> <strong>" + "Specialization: " + "</strong>" + tutors[0].specialization +
                "</p> <p>" + tutors[0].description + "<p> <span class='fa fa-star checked'>" +
                "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" +
                "</span> <span class='fa fa-star checked'>" + "</span> <btn class='btn btn-warning schedule'>" + "SCHEDULE A SEESION" + "</btn>" +
                "</div>"
            );

            $("#tutorList").prepend("<div class='d-flex border p-1' id='tutor'> <img src='images/tutor6.jpeg' class='flex-shrink-0 me-3 mt-3 rounded-circle'>" +
                "<div> <h4> " + tutors[1].name + "</h4> <p>" + tutors[1].gender + "<br> <strong>" + "Specialization: " + "</strong>" + tutors[1].specialization +
                "</p> <p>" + tutors[1].description + "<p> <span class='fa fa-star checked'>" +
                "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" +
                "</span> <span class='fa fa-star checked'>" + "</span> <btn class='btn btn-warning schedule'>" + "SCHEDULE A SEESION" + "</btn>" +
                "</div>"
            );
        } else if (selectedSubject == "English") {
            $("#tutorList").prepend("<div class='d-flex border p-1' id='tutor'> <img src='images/tutor6.jpeg' class='flex-shrink-0 me-3 mt-3 rounded-circle'>" +
                "<div> <h4> " + tutors[4].name + "</h4> <p>" + tutors[4].gender + "<br> <strong>" + "Specialization: " + "</strong>" + tutors[4].specialization +
                "</p> <p>" + tutors[4].description + "<p> <span class='fa fa-star checked'>" +
                "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" +
                "</span> <span class='fa fa-star checked'>" + "</span> <btn class='btn btn-warning schedule'>" + "SCHEDULE A SEESION" + "</btn>" +
                "</div>"
            );

        } else if (selectedSubject == "Biology") {
            $("#tutorList").prepend("<div class='d-flex border p-1' id='tutor'> <img src='images/tutor6.jpeg' class='flex-shrink-0 me-3 mt-3 rounded-circle'>" +
                "<div> <h4> " + tutors[3].name + "</h4> <p>" + tutors[3].gender + "<br> <strong>" + "Specialization: " + "</strong>" + tutors[3].specialization +
                "</p> <p>" + tutors[3].description + "<p> <span class='fa fa-star checked'>" +
                "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" +
                "</span> <span class='fa fa-star checked'>" + "</span> <btn class='btn btn-warning schedule'>" + "SCHEDULE A SEESION" + "</btn>" +
                "</div>"
            );

        } else {

            $("#tutorList").prepend("<div class='d-flex border p-1' id='tutor'> <img src='images/tutor6.jpeg' class='flex-shrink-0 me-3 mt-3 rounded-circle'>" +
                "<div> <h4> " + tutors[2].name + "</h4> <p>" + tutors[2].gender + "<br> <strong>" + "Specialization: " + "</strong>" + tutors[2].specialization +
                "</p> <p>" + tutors[2].description + "<p> <span class='fa fa-star checked'>" +
                "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" +
                "</span> <span class='fa fa-star checked'>" + "</span> <btn class='btn btn-warning schedule'>" + "SCHEDULE A SEESION" + "</btn>" +
                "</div>"
            );

        }

        $('.clear').click(function () {
            location.reload();
        })

        $(".schedule").click(function () {
            swal({
                title: "Your request has been replaced successfully." + "\r\n" + "The tutor will get back to you",
                icon: "success",
            }).then((value) => {
                location.reload();
            });
        });
    })


var tutors = [{
        name: "Mary Jackson",
        gender: "female",
        specialization: "Chemistry",
        description: "I am an excellent teacher with over 5 years of experience. To me, teaching is a calling and a lifestyle, rather than a profession..."
    },
    {
        name: "Bildad Geremy",
        gender: "male",
        specialization: "Chemistry",
        description: "With a well laid out teaching plan, I ensure students grasp every concept."
    },

    {
        name: "Rick Edwards",
        gender: "male",
        specialization: "Physics",
        description: "I implement prcatical sessions ensuring that no student is left out in understanding concepts"
    },
    {
        name: "Jackie Neema",
        gender: "female",
        specialization: "Biology",
        description: "Biology is a verse subject, I illustrate life processes through diagram representations for better understanding"
    },

    {
        name: "Pendo Augrey",
        gender: "female",
        specialization: "English",
        description: "I teach all levels of English ranging from beginner to intermediate and to advanced level. I customize and cover topics such as pronunciation, grammar, Travel English, speaking, kids course, business .."
    },

    {
        name: "Bragger Man",
        gender: "male",
        specialization: "Mathematics",
        description: "IMathematics has always been a huge problem among most kids. One thing I assure you,thestudent will greatly improve in their grades"

    },

    {
        name: "April Hope",
        gender: "female",
        specialization: "Mathematics",
        description: "Besides my studies, I have been tutoring my students different subjects (Computer Math, English, Statistics) for the last five years. I have gained experience to plan organize and implement an appro.."

    },

];



$(".pick").change(function () {

var selectedSubject = $("option:selected").text();
if (selectedSubject == "Mathematics") {
$("#tutorList").prepend("<div class='d-flex border p-1' id='tutor'> <img src='images/tutor9.jpeg' class='flex-shrink-0 me-3 mt-3 rounded-circle'>" +
    "<div> <h4> " + tutors[6].name + "</h4> <p>" + tutors[6].gender + "<br> <strong>" + "Specialization: " + "</strong>" + tutors[6].specialization +
    "</p> <p>" + tutors[6].description + "<p> <span class='fa fa-star checked'>" +
    "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" +
    "</span> <span class='fa fa-star checked'>" + "</span> <a href='' class='btn btn-warning'>" + "SCHEDULE A SEESION" + "</a>" +
    "</div>"
);

$("#tutorList").prepend("<div class='d-flex border p-1' id='tutor'> <img src='images/tutor10.jpeg' class='flex-shrink-0 me-3 mt-3 rounded-circle'>" +
    "<div> <h4> " + tutors[5].name + "</h4> <p>" + tutors[5].gender + "<br> <strong>" + "Specialization: " + "</strong>" + tutors[5].specialization +
    "</p> <p>" + tutors[5].description + "<p> <span class='fa fa-star checked'>" +
    "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" +
    "</span> <span class='fa fa-star checked'>" + "</span> <a href='' class='btn btn-warning'>" + "SCHEDULE A SEESION" + "</a>" +
    "</div>"
);
} else if (selectedSubject == "Chemistry") {
$("#tutorList").prepend("<div class='d-flex border p-1' id='tutor'> <img src='images/tutor6.jpeg' class='flex-shrink-0 me-3 mt-3 rounded-circle'>" +
    "<div> <h4> " + tutors[0].name + "</h4> <p>" + tutors[0].gender + "<br> <strong>" + "Specialization: " + "</strong>" + tutors[0].specialization +
    "</p> <p>" + tutors[0].description + "<p> <span class='fa fa-star checked'>" +
    "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" +
    "</span> <span class='fa fa-star checked'>" + "</span> <a href='' class='btn btn-warning'>" + "SCHEDULE A SEESION" + "</a>" +
    "</div>"
);

$("#tutorList").prepend("<div class='d-flex border p-1' id='tutor'> <img src='images/tutor9.jpeg' class='flex-shrink-0 me-3 mt-3 rounded-circle'>" +
    "<div> <h4> " + tutors[1].name + "</h4> <p>" + tutors[1].gender + "<br> <strong>" + "Specialization: " + "</strong>" + tutors[1].specialization +
    "</p> <p>" + tutors[1].description + "<p> <span class='fa fa-star checked'>" +
    "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" +
    "</span> <span class='fa fa-star checked'>" + "</span> <a href='' class='btn btn-warning'>" + "SCHEDULE A SEESION" + "</a>" +
    "</div>"
);
} else if (selectedSubject == "English") {
$("#tutorList").prepend("<div class='d-flex border p-1' id='tutor'> <img src='images/tutor6.jpeg' class='flex-shrink-0 me-3 mt-3 rounded-circle'>" +
    "<div> <h4> " + tutors[4].name + "</h4> <p>" + tutors[4].gender + "<br> <strong>" + "Specialization: " + "</strong>" + tutors[4].specialization +
    "</p> <p>" + tutors[4].description + "<p> <span class='fa fa-star checked'>" +
    "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" +
    "</span> <span class='fa fa-star checked'>" + "</span> <a href='' class='btn btn-warning'>" + "SCHEDULE A SEESION" + "</a>" +
    "</div>"
);

} else if (selectedSubject == "Biology") {
$("#tutorList").prepend("<div class='d-flex border p-1' id='tutor'> <img src='images/tutor6.jpeg' class='flex-shrink-0 me-3 mt-3 rounded-circle'>" +
    "<div> <h4> " + tutors[3].name + "</h4> <p>" + tutors[3].gender + "<br> <strong>" + "Specialization: " + "</strong>" + tutors[3].specialization +
    "</p> <p>" + tutors[3].description + "<p> <span class='fa fa-star checked'>" +
    "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" +
    "</span> <span class='fa fa-star checked'>" + "</span> <a href='' class='btn btn-warning'>" + "SCHEDULE A SEESION" + "</a>" +
    "</div>"
);

} else {

$("#tutorList").prepend("<div class='d-flex border p-1' id='tutor'> <img src='images/tutor6.jpeg' class='flex-shrink-0 me-3 mt-3 rounded-circle'>" +
    "<div> <h4> " + tutors[2].name + "</h4> <p>" + tutors[2].gender + "<br> <strong>" + "Specialization: " + "</strong>" + tutors[2].specialization +
    "</p> <p>" + tutors[2].description + "<p> <span class='fa fa-star checked'>" +
    "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" + "</span> <span class='fa fa-star checked'>" +
    "</span> <span class='fa fa-star checked'>" + "</span> <a href='' class='btn btn-warning'>" + "SCHEDULE A SEESION" + "</a>" +
    "</div>"
);

}

$('.clear').click(function () {
location.reload();
})
})

 })





// for (var i = 0; i < tutors.length; i++) {



//     console.log(tutors[i].name)
// } else if (tutors[i].specialization == "English") {
//     console.log(tutors[i])
// }