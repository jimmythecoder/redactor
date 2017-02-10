interface JQuery  {
    /**
     * Initialize redactor editor
     */
    redactor(options: IRedactorOptions): void;
    
    /**
     * Overloaded method to call an API method
     */
    redactor(cmd: string, value?: any): any;
}

interface IRedactorOptions {
    plugins?: string[];
    imageUpload: string;
    fileUpload: string;
    imageManagerJson?: string;
    imageUploadParam?: string;
    fileUploadParam?: string;
    definedLinks?: string;
}