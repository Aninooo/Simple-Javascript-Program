let testScore = 85;
let letterGrade;

switch(true){
    case testScore >= 95:
        letterGrade = 'A';
        break;
    case testScore >= 90:
        letterGrade = 'B';
        break;
    case testScore >= 85:
        letterGrade = 'c';
        break;
    default: 
    console.log('Invalid');
}
console.log(letterGrade)