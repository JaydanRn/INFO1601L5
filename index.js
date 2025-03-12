//object literal

let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};

const students = [bob, sally, paul];

function getAverageGrade(student, course){

for(let trans of student.transcript)
  if(trans.course === course){
    let sum = 0;

    for(let grade of trans.grades){
      sum+=grade;
    }

    return sum/trans.grades.length;
  }

  return -1;
}

function getAssignmentMark(student, course, num){

  for(let trans of student.transcript){
     if(trans.course === course){

      for(let i = 0; i < trans.grades.length; i++)
        if(i+1 === num){
          return trans.grades[i];
        }

      }
    }
     return -1;
}

function averageAssessment(students, courseName, assignment){
  let sum = 0, num = 0;

  for(let student of students){

    for(let trans of student.transcript){
      if(trans.course === courseName){
        num++;

          for(let i = 0; i < trans.grades.length; i++){
            if(i+1 === assignment){
              sum+=trans.grades[i];
            }
          }
        }
      }
    }
    return sum/num;
  }

console.log(getAverageGrade(bob, 'INFO 1603'));

console.log(getAssignmentMark(bob, 'INFO 1603', 2));

console.log(averageAssessment(students, 'INFO 1601', 1));
