import type { ChangeEvent } from "react";


const Events = () => {

function clickhandler(){
    console.log("button click");
    
}

function changehandler(e:ChangeEvent<HTMLInputElement>){
    const name = e.target.value
    console.log(name);
    


}

  return (
    <div>
      <button onClick={clickhandler} >nn</button>
      <input onChange={changehandler} type="text" placeholder="enetr tour name" ></input>
      {/* <p onMouseMove={()=>{
        console.log("DONT MOD Eenkfe");
        
      }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti dicta aliquam mollitia omnis quisquam asperiores accusamus temporibus quo, ipsam nesciunt dolores doloremque dignissimos praesentium, assumenda accusantium, exercitationem nobis iusto!
        

      </p> */}
      <p onCopy={()=>{
        console.log("dont steal my data");
        
      }} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos ut, nostrum quisquam est dolore beatae aut sit pariatur iure inventore quibusdam? Similique error reprehenderit qui nobis. Vero, quasi? Corporis, minima.</p>
    </div>
  )
}

export default Events
