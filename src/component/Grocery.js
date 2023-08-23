import { useRef, useState } from "react"
import Showmodel from "./Showmodel"

const Grocery=()=>{

    const inputRef = useRef(null)
    const[image , setImage]=useState([])


    const selectfile=(e)=>{
const select = e.target.files;
const newselect = Array.from(select)


const Imagearray = newselect.map((file)=>{
    return URL.createObjectURL(file)

})

setImage((previmage)=>previmage.concat(Imagearray))
    }


    
 /**  {
                image.length>0 && image.length>10 ? <p>you can not upload more than 10 image</p>
            } */






    return (
        <div>
            <h1>hello grocery </h1>
<div >
<h1>+</h1>

            <input type="file" ref={inputRef} onChange={selectfile} name="images"  multiple accept="image/png , image/jpeg , image/"      />

         
</div>



         { image &&
            image.map((img)=>{
                return(
                    <div key={img}>
                       <div style={{width:"200px" , height:"200px"}}> <img style={{width:"200px" , height:"200px"}} src={img} alt="" />
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, modi deserunt obcaecati cumque qui? Porro, possimus. Rerum amet quis voluptas, hic quo magnam porro ab.</p></div>
                       <button onClick={()=>setImage(image.filter((e)=>e!==img))}>delete</button>
                    </div>
                )
            })
         } 


<div><Showmodel/></div>
        </div>
    )
}
export default Grocery