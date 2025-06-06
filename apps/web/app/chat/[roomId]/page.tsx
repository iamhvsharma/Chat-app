import { TextInput } from "@repo/ui/text-input";

export default function (){
    return (
        <div>
           <div>
             Chat Room
           </div>
           <div>
            <TextInput placeholder="Type here"/>
            <button>Send</button>
           </div>
        </div>
    )
}