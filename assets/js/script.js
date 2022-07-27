
// Global variables 
const url = 'https://fast-cliffs-48484.herokuapp.com/devs'


const usersDiv = document.getElementById('btnToggle').addEventListener('click', displayDiv)
function displayDiv(){
    if (userNames.style.display === 'none') {
        userNames.style.display = 'block';
        alert('Click on specific name to view user profile')
    } else {
        userNames.style.display = 'none';
    }
}

// Developer Names Section 
function getNames(){
    fetch(url)
    .then(res => res.json())
    .then(devs => {
        devs.forEach((dev) => {
            let ul = document.getElementById('users')
            let li = document.createElement('li')
            li.className = 'users-list'
            li.innerText = dev.login
            ul.appendChild(li)
            li.addEventListener('click', () => {
                let div = document.getElementById('devName')
                let div1 = document.getElementById('devExperience')
                let h4 = document.querySelector('.expertise')
                h4.innerText = (`Experience: ${dev.experience} years`)

                let div2 = document.getElementById('devFollowing')
                let h5 = document.querySelector('.follows')
                h5.innerText = (`Follows: ${dev.following}
                Followers: ${dev.followers}`)
                let h3 = document.querySelector('.firstName')
                h3.innerText = (`Name: ${dev.login}
                Specialization: ${dev.language_id}`)
                div.appendChild(h3)
                div1.appendChild(h4)
                div2.appendChild(h5)
            })
        })
    })
    .catch((err) => err)
}

// Function for the form section 
document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector("form")
    form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendComment(document.getElementById('comment').value)
    form.reset()
  })
})

function  sendComment(comment) {
    let li = document.createElement("li")
    li.textContent = `${comment} `
    let liBtn = document.createElement("button")
    liBtn.addEventListener('click', delBtn)
    // liBtn.textContent = "x"
    li.appendChild(liBtn)
    document.querySelector("#reviews").appendChild(li)
  }

  function delBtn(e){
    e.target.parentNode.remove()
  }

  let pageLoader = () => {
    getNames()
    displayDiv()
    getProfiles()
}
pageLoader();


