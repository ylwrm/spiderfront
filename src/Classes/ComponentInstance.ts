
abstract class ComponentInstance {
    ///
    static createInstance: (div: HTMLDivElement, setting: Spider.ComponentInstanceSetting) => Promise<ComponentInstance|undefined>
    =
    async (div: HTMLDivElement, setting: Spider.ComponentInstanceSetting)=>{
        return undefined;
    };
    ///
    public abstract parent: SpiderCombination|undefined = undefined;
    ///
    public abstract name: string|undefined = undefined;
    ///
    abstract Update?: (option?: any) => Promise<void>;
    ///
    abstract destroy: (option?: any) => Promise<void>;
}