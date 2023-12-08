import { FC, ReactNode } from "react";
export type UploadFileStatus = "ready" | "uploading" | "success" | "error";
export interface UploadFile {
    uid: string;
    name: string;
    size: number;
    percentage: number;
    status: UploadFileStatus;
    raw: File;
    response?: any;
    error?: any;
}
export interface UploadProps {
    /** 上传地址 */
    action: string;
    /** 已上传的文件列表 */
    defaultUploadedList?: UploadFile[];
    /** 文件上传前置操作 */
    beforeUpload?: (file: UploadFile) => UploadFile | Promise<UploadFile>;
    /** 文件上传成功回调 */
    onSuccess?: (data: any, file: UploadFile) => void;
    /** 文件上传进度 */
    onProgress?: (percent: number, file: UploadFile) => void;
    /** 文件变化回调 */
    onChange?: (file: UploadFile) => void;
    /** 文件上传失败回调 */
    onError?: (err: any, file: UploadFile) => void;
    /** 移除文件的回调 */
    onRemove?: (file: UploadFile) => void;
    /** 额外的请求头 */
    headers?: {
        [key: string]: any;
    };
    /** 额外的formData */
    data?: {
        [key: string]: any;
    };
    /** 允许携带cookie */
    withCredentials?: boolean;
    /** 自定义formData文件名 */
    name?: string;
    /** 限制文件上传类型 */
    accept?: string;
    /** 是否开启多选 */
    multiple?: boolean;
    /** 是否开启拖拽 */
    drag?: boolean;
    children?: ReactNode;
}
/**
 * 上传文件组件
 * */
export declare const Upload: FC<UploadProps>;
export default Upload;
