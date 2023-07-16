const title = document.querySelector("#title");
const description = document.querySelector("#description");
const Add = document.querySelector("#Add");
const form = document.querySelector("form");
const container = document.querySelector(".container");
 const tasks =localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
 showAllTasks();

function showAllTasks() {
  tasks.forEach((value, index) => {
     const div = document.createElement("div");
     div.setAttribute("class", "task");
    
    const innerdiv = document.createElement("div");
    div.append(innerdiv);

    const p = document.createElement("p");
    p.innerText=value.title;
    innerdiv.append(p);

    const span = document.createElement("span");
    span.innerText=value.description;
    innerdiv.append(span);
      
    const btn=document.createElement("button");
     btn.setAttribute("class","delb");
     btn.innerText="-";
     btn.title="mark as Done";
      btn.addEventListener("click",()=>{
              removeallTasks();
              tasks.splice(index,1);
              localStorage.setItem("tasks",JSON.stringify(tasks));
              showAllTasks();
     })
     div.append(btn); 
     container.append(div);

  });
}
  function removeallTasks(){
    tasks.forEach((val,index)=>{
          const ele=document.querySelector(".task")
         if(ele) ele.remove();
    })
  }
form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeallTasks();
  tasks.push({ title: title.value, description: description.value });
     localStorage.setItem("tasks",JSON.stringify(tasks));
     title.value="";
     description.value="";

   showAllTasks();
});
