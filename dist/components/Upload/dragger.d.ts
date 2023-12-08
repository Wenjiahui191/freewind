import { FC, ReactNode } from "react";
export interface DraggerProps {
    children: ReactNode;
    onFile: (files: FileList) => void;
}
declare const Dragger: FC<DraggerProps>;
export default Dragger;
