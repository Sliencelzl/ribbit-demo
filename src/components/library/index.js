//扩展vue原有的功能：全局组件，自定义组件（挂载全局的）
export default {
    install(app){
        app.component(Xtxskeketon.name,Xtxskeketon)
    }
}
