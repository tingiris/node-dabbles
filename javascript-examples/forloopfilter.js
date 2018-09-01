
const people = [
  {
    firstName: "Steve",
    lastName: "Tingiris",
    githubUsername: "tingiris"
  },
  {
    firstName: "Karthik",
    lastName: "Ragubathy",
    githubUsername: "pkarthikr"
  },
  {
    firstName: "Ashwin",
    lastName: "Sathawane",
    githubUsername: "ashusath"
  },
  {
    firstName: "Bru",
    lastName: "Wills",
    githubUsername: "KhronDon"
  }
];

const peopleToFind = [
  "tingiris","pkarthikr","ashusath","KhronDon","someotherdev","thatguy"
];

for (let i = 0; i < peopleToFind.length; i++) {
  findPerson(peopleToFind[i])
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err);
    });
}

function findPerson(githubUsername) {
  
  return new Promise(function (resolve, reject) {
    let obj = people.filter(obj => { return obj.githubUsername === githubUsername; });
    if (obj.length > 0) {
      resolve(`Found: ${obj[0].firstName} ${obj[0].firstName}`);

    } else {
      reject(`Did Not Find: ${githubUsername}`);
    }
  });
} 
