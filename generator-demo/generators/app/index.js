const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    // 测试模型数据
    // foo(){
    //     this.log("我第一个生成器,你好世界");
    // }

    // 重写父类的方法
    constructor(args, opts) {
        super(args, opts);
    }
    //询问，获取信息
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'appname',
                message: 'you project names:',
                default: this.appname
            }
            // ,
            // {
            //     type: 'input',
            //     name: 'username',
            //     message: '请输入你的名字:',
            //     default: "无名"
            // }
        ]).then(answers =>{
            // this.log(answers)
            this.answers = answers;
        })
    }
    // 生成预定义的项目结构
    writing() {
        // this.log(this.answers)
        let srcDir = this.sourceRoot();
        let destDir = this.destinationRoot()
        this.fs.copyTpl(srcDir,destDir,this.answers)
    }
    //安装依赖
    install() {
        this.env.options.nodePackageManager = 'npm'
    }
}