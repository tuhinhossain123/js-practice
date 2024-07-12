// const allHeding = document.getElementsByTagName('h2');
//     for(const h2 of allHeding){
//         console.log(h2.innerHTML)
//     }

const allLi = document.getElementsByTagName("li");
for (let i = 0; i <= allLi.length; i++) {
  const index = allLi[i];
//   console.log(index);
}

const lists = document.getElementById("name-serial").style.fontSize ="20px"
// console.log(lists);

const liAdd = document.getElementById('li-list');
const li = document.createElement("li");
li.innerText="helo tuin";
liAdd.appendChild(li)


const mainContainer = document.getElementById('main-container');
const sections = document.createElement('section');
// sections.appendChild(mainContainer)
const h1 = document.createElement('h1');
h1.innerText='Furits Name';
sections.appendChild(h1);
const ul = document.createElement('ul');
sections.appendChild(ul);
const li1 = document.createElement('li');
li1.innerText='Orange';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText='Mango';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText='Apple';
ul.appendChild(li3);
const li4 = document.createElement('li');
li4.innerText='Watermelon';
ul.appendChild(li4);
mainContainer.appendChild(sections)
