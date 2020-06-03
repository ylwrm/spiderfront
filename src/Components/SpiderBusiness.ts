
interface SpiderBusinessInstanceSetting extends Spider.ComponentInstanceSetting {
    name: string;
    type: string;
    config: {
        scripts: {
            js: string,
            name: string
        }[]
    };
}
class SpiderBusiness extends ComponentInstance {
    public Update = async () => {
        const scripts: {
            js: string,
            name: string
        }[] = this.setting.config.scripts!;
        for (let iS = 0; iS < scripts.length; iS++) {
            const spt = scripts[iS];
            await DomLoader.LoadScript(spt.js);
            window[spt.name](this);
        }
    }


    constructor(
        public div: HTMLDivElement,
        public setting: SpiderBusinessInstanceSetting,
        public name?: string,
        public parent?: SpiderCombination
    ) {
        super(div, setting, name, parent);
    }
    ///
    private setup = async () => {
    };
    ///
    static createInstance: (div: HTMLDivElement, setting: SpiderBusinessInstanceSetting) => Promise<ComponentInstance | undefined>
        =
        async (div: HTMLDivElement, setting: SpiderBusinessInstanceSetting) => {
            await SpiderBusiness.prepare();
            const obj = new SpiderBusiness(div, setting);
            await obj.setup();
            return obj;
        };
    ///
    static prepare: () => Promise<void>
        =
        async () => {
        };

    ///
    destroy = async () => {
        this.div.parentElement?.removeChild(this.div);
    }
}