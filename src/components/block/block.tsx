import React, { CSSProperties } from "react";

export type BlockProps= React.HTMLAttributes<HTMLDivElement>

const Block:React.FC<BlockProps>=({children}) => { 

    const styles:CSSProperties={
        padding:'1rem'
    }

    return <div style={styles}>
        {children}
    </div>
 }

 export default Block