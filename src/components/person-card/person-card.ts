import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PersonCard extends Vue {
  @Prop() person: any;

  get personId() {
    if (this.person && this.person.url && this.person.url.split("/")) {
      return this.person.url.split("/")[this.person.url.split("/").length - 2];
    }
    return "";
  }
}
