import { Module, VuexModule } from "vuex-module-decorators";

const config = { namespaced: true, name: "app" };

@Module(config)
export default class App extends VuexModule {
  private appName = "Vuex Module Decorators";

  get getAppName() {
    return this.appName;
  }
}
