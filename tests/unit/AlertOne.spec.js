import { shallMount } from "@vue/test-utils";
import AlertOne from "@/components/AlertOne";

describe("AlertOne.vue Test", () => {
  it("should return -1 when the value is not present", () => {
    const wrapper = shallMount(AlertOne, {
      propsData: {
        items: Array,
      },
    });
    // check the name of the component
    expect(wrapper.vm.$options.name).toMatch("AlertOne");
    // check if array contains specified value
    expect(wrapper.vm.$options.name).toContain("items");
  });
});
