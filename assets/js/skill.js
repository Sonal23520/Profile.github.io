let count=0;
let skillposition=($("#resume").position().top)-150;
window.onscroll=function () {
    if (window.pageYOffset>skillposition && count==0){
        count++;
        console.log($("html").scrollTop())
        $("svg circle:nth-child(2)").addClass("skillanimaion")
        $(".skillicon h6").addClass("textskillanimaion")
    }
    console.log(skillposition)
}

