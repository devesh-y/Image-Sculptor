import {Rembg} from "rembg-node";
import sharp from 'sharp'

const func=async ()=>{
    let input =sharp("devesh.jpg")
    const rembg=new Rembg({
        logging:true
    })
    const ouptput=await rembg.remove(input)
    await ouptput.toFile("ouptput.png")
}
func();
 