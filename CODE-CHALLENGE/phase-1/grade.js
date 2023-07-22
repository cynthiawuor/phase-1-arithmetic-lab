//Write a program that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade as follows: 

//A > 79, B > 60 to 79, C > 49 to 59, D > 40 to 49, E > less 40.

function getGrade(score){
 if (score <100 && score >=79){
    return "Grade A"
}
else if (score >59 && score<=79){
    return "Grade B"
}
else if (score >49 && score <= 59){
    return "Grade C"
}
else if (score >40 && score <= 49){
    return "Grade D"
}
else if (score <= 40){
    return "Grade E"
}else{
    return"Invalid Score"
}
}

console.log(getGrade(60))