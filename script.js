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
