it("double done", function(done) {
    // Calling `done()` twice is an error
    setImmediate(done);
    setImmediate(done);
});

import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import AlertBanner from "@/components/AlertBanner.vue";

describe("HelloWorld.vue", () => {
    it("testing props", () => {
        const msg = "new message";
        const wrapper = shallowMount(AlertBanner, {
            props: { msg },
        });
        expect(wrapper.text()).to.include(msg);
    });
});