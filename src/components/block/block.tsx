import React, { CSSProperties } from "react";
import { JsxElement } from "typescript";

export interface IBlockProps{
    children:JSX.Element | JSX.Element[]
}

export type BlockProps=IBlockProps & React.HTMLAttributes<HTMLDivElement>

const Block:React.FC<BlockProps>=({children}) => { 

    const styles:CSSProperties={
        padding:'1rem'
    }

    return <div style={styles}>
        {children}
    </div>
 }

 export default Block